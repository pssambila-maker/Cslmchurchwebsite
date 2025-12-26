import { FaHeart, FaPaypal, FaCreditCard, FaHandHoldingHeart } from 'react-icons/fa';

const Donate = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FaHeart className="text-6xl mx-auto mb-4 text-blue-100" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Give & Support
          </h1>
          <p className="text-xl text-blue-100">Partner with us in spreading the Gospel</p>
        </div>
      </div>

      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Why Give?</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Your generous giving helps us fulfill our mission to spread the Gospel, support our ministries, maintain our facilities, and serve our community.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-primary-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <FaPaypal size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">PayPal</h3>
                <p className="text-gray-600">Quick & Secure</p>
              </div>
            </div>
            <a href="https://paypal.com" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">
              Give via PayPal
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-primary-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <FaCreditCard size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Givelify</h3>
                <p className="text-gray-600">Mobile-Friendly</p>
              </div>
            </div>
            <a href="https://givelify.com" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700">
              Give via Givelify
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mail a Check</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-semibold text-gray-900">Christ Successful Life Ministries</p>
              <p className="text-gray-700">23655 Northwestern Highway</p>
              <p className="text-gray-700">Southfield, MI 48075</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Give in Person</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-semibold text-gray-900">Sunday Service</p>
              <p className="text-gray-700">10:00 AM - 12:00 PM</p>
              <p className="text-gray-700">Every Sunday</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Thank You!</h2>
          <p className="text-lg text-blue-100">
            Your generosity makes a difference in countless lives. Thank you for partnering with us in ministry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
