import { FaImages } from 'react-icons/fa';

const Gallery = () => {
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our photo gallery is being prepared. Soon you'll be able to see photos from our worship services,
            special events, community outreach, and more.
          </p>
          <p className="text-lg text-gray-600">
            In the meantime, visit us on Sunday to experience our vibrant community in person!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
