import { useState, useEffect } from 'react';
import { FaImages, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { storage } from '../../firebase/config';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import ScrollReveal from '../../components/common/ScrollReveal';

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

          if (result.items.length > 0) {
            const urlPromises = result.items.map(async (imageRef) => {
              try {
                const url = await getDownloadURL(imageRef);
                return {
                  url,
                  name: imageRef.name,
                  path: imageRef.fullPath
                };
              } catch (e) {
                console.warn('Failed to get URL for', imageRef.name, e);
                return null;
              }
            });
            const validImages = (await Promise.all(urlPromises)).filter(img => img !== null);
            allImages = [...allImages, ...validImages];
          }
        } catch (err) {
          console.log('Error reading gallery/', err);
        }

        // Also try gallery/gallery subfolder (for backward compatibility if needed)
        try {
          const subGalleryRef = ref(storage, 'gallery/gallery');
          const subResult = await listAll(subGalleryRef);

          if (subResult.items.length > 0) {
            const subUrlPromises = subResult.items.map(async (imageRef) => {
              try {
                const url = await getDownloadURL(imageRef);
                return {
                  url,
                  name: imageRef.name,
                  path: imageRef.fullPath
                };
              } catch (e) {
                console.warn('Failed to get URL for sub-gallery item', imageRef.name, e);
                return null;
              }
            });
            const subImages = (await Promise.all(subUrlPromises)).filter(img => img !== null);
            allImages = [...allImages, ...subImages];
          }
        } catch (err) {
          // Ignore error if subfolder doesn't exist
        }

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
      <div
        className="relative bg-cover bg-center text-white py-20 md:py-32 px-4"
        style={{ backgroundImage: "url('/images/banners/Ministries.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaImages className="text-6xl mx-auto mb-4 text-[#e0f7ff]" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
              Photo Gallery
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#e0f7ff]"
          >
            Moments of worship, fellowship, and community
          </motion.p>
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
                  Check your internet connection and ensure Firebase Storage rules allow access.
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
                Our photo gallery is being prepared. Check back soon to see photos from our worship services.
              </p>
            </div>
          )}

          {!loading && !error && images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <ScrollReveal key={index} delay={index * 0.1} direction="up">
                  <div
                    className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer group bg-gray-100"
                    onClick={() => openLightbox(image)}
                  >
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.target.onerror = null; // Prevent infinite loop
                        e.target.src = '/images/banners/Events.jpg'; // Fallback image
                        e.target.alt = 'Image unavailable';
                      }}
                    />
                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <FaImages className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#26c9ff] transition-colors"
              onClick={closeLightbox}
            >
              <FaTimes className="text-4xl" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage.url}
              alt={selectedImage.name}
              className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/images/banners/Events.jpg';
              }}
            />
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              <p className="text-lg font-semibold">{selectedImage.name}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
