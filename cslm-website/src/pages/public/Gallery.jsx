import { useState, useEffect } from 'react';
import { FaImages, FaTimes } from 'react-icons/fa';
import { storage } from '../../firebase/config';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      if (!storage) {
        setError('Firebase Storage is not configured. Please add your Firebase credentials to the .env file.');
        setLoading(false);
        return;
      }

      try {
        // Try both 'gallery' and 'gallery/gallery' paths
        let allImages = [];

        // Try the main gallery folder
        try {
          const galleryRef = ref(storage, 'gallery');
          const result = await listAll(galleryRef);

          console.log('Found items in gallery/', result.items.length);
          console.log('Found prefixes in gallery/', result.prefixes.length);

          const urlPromises = result.items.map(async (imageRef) => {
            const url = await getDownloadURL(imageRef);
            return {
              url,
              name: imageRef.name,
              path: imageRef.fullPath
            };
          });

          allImages = await Promise.all(urlPromises);
        } catch (err) {
          console.log('Error reading gallery/', err);
        }

        // Also try gallery/gallery subfolder
        try {
          const subGalleryRef = ref(storage, 'gallery/gallery');
          const subResult = await listAll(subGalleryRef);

          console.log('Found items in gallery/gallery/', subResult.items.length);

          const subUrlPromises = subResult.items.map(async (imageRef) => {
            const url = await getDownloadURL(imageRef);
            return {
              url,
              name: imageRef.name,
              path: imageRef.fullPath
            };
          });

          const subImages = await Promise.all(subUrlPromises);
          allImages = [...allImages, ...subImages];
        } catch (err) {
          console.log('Error reading gallery/gallery/', err);
        }

        console.log('Total images found:', allImages.length);
        setImages(allImages);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setError(`Unable to load gallery images. Error: ${err.message}`);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FaImages className="text-6xl mx-auto mb-4 text-blue-100" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-blue-100">
            Moments of worship, fellowship, and community
          </p>
        </div>
      </div>

      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              <p className="mt-4 text-gray-600">Loading gallery...</p>
            </div>
          )}

          {error && (
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <p className="text-yellow-800 mb-4">{error}</p>
                <p className="text-sm text-gray-600">
                  To add photos, upload images to the 'gallery' folder in Firebase Storage.
                </p>
              </div>
            </div>
          )}

          {!loading && !error && images.length === 0 && (
            <div className="max-w-2xl mx-auto text-center py-12">
              <FaImages className="text-6xl mx-auto mb-4 text-gray-300" />
              <h2 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                No Photos Yet
              </h2>
              <p className="text-gray-600">
                Our photo gallery is being prepared. Check back soon to see photos from our worship services,
                special events, community outreach, and more.
              </p>
            </div>
          )}

          {!loading && !error && images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.url}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                    <FaImages className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <FaTimes className="text-4xl" />
          </button>
          <img
            src={selectedImage.url}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
