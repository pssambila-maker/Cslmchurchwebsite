import { useState } from 'react';
import { FaPray, FaHeart, FaCheckCircle } from 'react-icons/fa';
import { useFirestore } from '../../hooks/useFirestore';

const PrayerRequests = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: '',
    anonymous: false
  });

  const { addDocument, loading, error, success } = useFirestore('prayers');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for Firebase
    const prayerData = {
      name: formData.anonymous ? 'Anonymous' : formData.name,
      email: formData.email,
      request: formData.request,
      anonymous: formData.anonymous,
      isAnswered: false, // Default to not answered
    };

    // Submit to Firebase
    const result = await addDocument(prayerData);

    if (result.success) {
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', request: '', anonymous: false });
      }, 2000);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FaPray className="text-6xl mx-auto mb-4 text-blue-100" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Prayer Requests
          </h1>
          <p className="text-xl text-blue-100">
            We believe in the power of prayer. Let us pray with you.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            How We Pray for You
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Our dedicated intercessory prayer team, led by Dr. Regina Tamon, prays faithfully for every
            request submitted. Your prayers are kept confidential and brought before God during our
            regular prayer times.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            "The prayer of a righteous person is powerful and effective." - James 5:16
          </p>
        </div>
      </div>

      {/* Prayer Times */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            When We Pray
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center border-2 border-gray-100">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPray size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Morning Glory</h3>
              <p className="text-gray-600 font-semibold">Mon, Wed, Fri</p>
              <p className="text-primary-600 font-bold">5:45 AM ET</p>
              <p className="text-sm text-gray-500 mt-2">Join us: +1-866-337-4509</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center border-2 border-gray-100">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">All Night Prayer</h3>
              <p className="text-gray-600 font-semibold">Last Friday Monthly</p>
              <p className="text-primary-600 font-bold">Evening</p>
              <p className="text-sm text-gray-500 mt-2">Powerful intercession</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center border-2 border-gray-100">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sunday Service</h3>
              <p className="text-gray-600 font-semibold">Every Sunday</p>
              <p className="text-primary-600 font-bold">10:00 AM</p>
              <p className="text-sm text-gray-500 mt-2">Corporate prayer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Prayer Request Form */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 border-2 border-gray-200">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
              Submit Your Prayer Request
            </h2>

            {success && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                <p className="font-semibold">Prayer request received!</p>
                <p className="text-sm mt-1">Our prayer team will lift your request to God. Be encouraged!</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                <p className="font-semibold">Error submitting prayer request</p>
                <p className="text-sm mt-1">{error}. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="Enter your name"
                  disabled={formData.anonymous}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="your@email.com"
                />
                <p className="text-sm text-gray-500 mt-1">
                  We'll never share your email. Used only to follow up on answered prayers.
                </p>
              </div>

              <div>
                <label htmlFor="request" className="block text-sm font-semibold text-gray-700 mb-2">
                  Prayer Request *
                </label>
                <textarea
                  id="request"
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                  placeholder="How can we pray for you?"
                ></textarea>
                <p className="text-sm text-gray-500 mt-1">
                  Share your heart with us. All prayer requests are confidential.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="anonymous"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                  className="w-5 h-5 text-primary-600 border-gray-300 rounded focus:ring-2 focus:ring-primary-500"
                />
                <label htmlFor="anonymous" className="text-sm text-gray-700">
                  Submit this prayer request anonymously
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-8 py-4 bg-primary-600 text-white rounded-md font-semibold hover:bg-primary-700 transition-colors shadow-lg flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                <FaPray />
                <span>{loading ? 'Submitting...' : 'Submit Prayer Request'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Answered Prayers Teaser */}
      <div className="bg-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FaCheckCircle className="text-6xl mx-auto mb-6 text-green-300" />
          <h2 className="text-3xl font-heading font-bold mb-6">
            Celebrating Answered Prayers
          </h2>
          <p className="text-lg text-blue-100 mb-4">
            God is faithful! We've witnessed miraculous healings, restored relationships, financial
            breakthroughs, and countless answered prayers.
          </p>
          <p className="text-lg text-blue-100 mb-8">
            Among them, the healing of Aunty Tacey and Dr. Elna from cancer stands as a powerful
            testimony of God's grace and healing power.
          </p>
          <a
            href="/testimonials"
            className="inline-block px-8 py-3 bg-white text-primary-700 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Read Testimonies
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrayerRequests;
