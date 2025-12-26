import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { useFirestore } from '../../hooks/useFirestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { addDocument, loading, error, success } = useFirestore('contacts');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Submit to Firebase
    const result = await addDocument(formData);

    if (result.success) {
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 2000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100">
            We'd love to hear from you. Reach out anytime!
          </p>
        </div>
      </div>

      {/* Contact Information & Form */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you have questions, need prayer, or want to learn more about our church,
                we're here to help. Feel free to reach out through any of the methods below.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                    <p className="text-gray-600">23655 Northwestern Highway</p>
                    <p className="text-gray-600">Southfield, MI 48075</p>
                    <a
                      href="https://maps.google.com/?q=23655+Northwestern+Highway+Southfield+MI+48075"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 font-medium mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <a
                      href="tel:+12488285305"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      +1 248-828-5305
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Prayer Line: +1-866-337-4509</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:cslmchurch@gmail.com"
                      className="text-gray-600 hover:text-primary-600 transition-colors"
                    >
                      cslmchurch@gmail.com
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-600">Sunday: 9:30 AM - 1:00 PM</p>
                    <p className="text-gray-600">Or by appointment</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={24} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                    aria-label="YouTube"
                  >
                    <FaYoutube size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 rounded-lg p-8 border-2 border-gray-200">
                <h2 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>

                {success && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    Error: {error}. Please try again.
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
                      placeholder="John Doe"
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
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="visit">Planning a Visit</option>
                      <option value="ministry">Ministry Information</option>
                      <option value="prayer">Prayer Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-8 py-4 bg-primary-600 text-white rounded-md font-semibold hover:bg-primary-700 transition-colors shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-8">
            Find Us
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.8!2d-83.2!3d42.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI4JzQ4LjAiTiA4M8KwMTInMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Church Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
