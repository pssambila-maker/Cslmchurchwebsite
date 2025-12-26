import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaPhone, FaPray, FaBook, FaHeart } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
            Welcome to Christ Successful Life Ministries
          </h1>
          <p className="text-xl md:text-2xl mb-4">
            CSLM Church is glad and honored to host your visit
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            While you are browsing, you'll get a glimpse of who we are and the God we purposefully serve.
            We invite you to fellowship with us to fully understand the truth of God best known via an encounter with Jesus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-3 bg-white text-primary-700 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/prayers"
              className="px-8 py-3 bg-primary-600 text-white rounded-md font-semibold hover:bg-primary-800 transition-colors border-2 border-white shadow-lg"
            >
              Prayer Request
            </Link>
          </div>
        </div>
      </div>

      {/* Service Times Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Join Us for Worship
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience vibrant worship, powerful messages, and genuine fellowship
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sunday Service */}
            <div className="bg-primary-50 rounded-lg p-8 shadow-md border-2 border-primary-200">
              <div className="flex items-center justify-center mb-4">
                <FaClock className="text-primary-600 text-4xl" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-4">
                Sunday Worship Service
              </h3>
              <p className="text-center text-gray-700 mb-4">
                <span className="text-xl font-semibold text-primary-700">10:00 AM - 12:00 PM</span>
              </p>
              <p className="text-center text-gray-600 text-sm">
                Includes: Intercessory prayers, praise & worship, scripture reading, hymns, offering, messages, and benediction
              </p>
            </div>

            {/* Location */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md border-2 border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <FaMapMarkerAlt className="text-primary-600 text-4xl" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-4">
                Our Location
              </h3>
              <p className="text-center text-gray-700 mb-2">
                <span className="font-semibold">23655 Northwestern Highway</span>
              </p>
              <p className="text-center text-gray-700 mb-4">
                Southfield, MI 48075
              </p>
              <div className="text-center">
                <a
                  href="https://maps.google.com/?q=23655+Northwestern+Highway+Southfield+MI+48075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-medium underline"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Weekly Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaPray className="text-primary-600 text-3xl mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Morning Glory Prayers</h3>
              <p className="text-sm text-gray-600">Mon, Wed, Fri</p>
              <p className="text-sm text-gray-600">5:45 AM ET</p>
              <p className="text-xs text-gray-500 mt-2">Call: +1-866-337-4509</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaBook className="text-primary-600 text-3xl mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Choir Rehearsal</h3>
              <p className="text-sm text-gray-600">Saturdays</p>
              <p className="text-sm text-gray-600">10:00 AM</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHeart className="text-primary-600 text-3xl mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">All Night Prayer</h3>
              <p className="text-sm text-gray-600">Last Friday</p>
              <p className="text-sm text-gray-600">Monthly</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaPray className="text-primary-600 text-3xl mx-auto mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Fasting & Prayer</h3>
              <p className="text-sm text-gray-600">Every Friday</p>
              <p className="text-sm text-gray-600">All Day</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scripture Section */}
      <div className="bg-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Our Foundation</h2>
          <blockquote className="text-lg md:text-xl italic leading-relaxed">
            "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night,
            that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous,
            and then thou shalt have good success."
          </blockquote>
          <p className="mt-4 text-blue-200 font-semibold">- Joshua 1:8</p>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Get Connected
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link
              to="/about"
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-primary-200 hover:border-primary-400"
            >
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">About Us</h3>
              <p className="text-gray-600">
                Learn about our mission, vision, and the God we serve
              </p>
            </Link>

            <Link
              to="/ministries"
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-primary-200 hover:border-primary-400"
            >
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Ministries</h3>
              <p className="text-gray-600">
                Discover how you can serve and grow in your faith
              </p>
            </Link>

            <Link
              to="/contact"
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-lg shadow-md hover:shadow-xl transition-all border-2 border-primary-200 hover:border-primary-400"
            >
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600">
                Have questions? We'd love to hear from you
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <FaPhone className="text-primary-400" />
              <a href="tel:+12488285305" className="hover:text-primary-400 transition-colors">
                +1 248-828-5305
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary-400" />
              <span>23655 Northwestern Hwy, Southfield, MI 48075</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
