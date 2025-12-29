import { FaHeart, FaPaypal, FaCreditCard, FaHandHoldingHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal';

const Donate = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center text-white py-20 md:py-32 px-4"
        style={{ backgroundImage: "url('/images/banners/Donations.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaHeart className="text-6xl mx-auto mb-4 text-blue-100" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Give & Support
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Partner with us in spreading the Gospel
          </motion.p>
        </div>
      </div>

      <div className="bg-white py-16 px-4">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Why Give?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Your generous giving helps us fulfill our mission to spread the Gospel, support our ministries, maintain our facilities, and serve our community.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#80dfff] hover:border-[#00aeef] transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#e0f7ff] text-[#0072bc] rounded-full flex items-center justify-center">
                  <FaPaypal size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">PayPal</h3>
                  <p className="text-gray-600">Quick & Secure</p>
                </div>
              </div>
              <a href="https://paypal.com" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-[#003087] text-white rounded-md font-semibold hover:bg-[#001c64] transition-colors duration-200">
                Give via PayPal
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#80dfff] hover:border-[#00aeef] transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#e0f7ff] text-[#00aeef] rounded-full flex items-center justify-center">
                  <FaCreditCard size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Givelify</h3>
                  <p className="text-gray-600">Mobile-Friendly</p>
                </div>
              </div>
              <a href="https://givelify.com" target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-[#00aeef] text-white rounded-md font-semibold hover:bg-[#009bd5] transition-colors duration-200">
                Give via Givelify
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:border-[#80dfff] transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mail a Check</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-semibold text-gray-900">Christ Successful Life Ministries</p>
                <p className="text-gray-700">23655 Northwestern Highway</p>
                <p className="text-gray-700">Southfield, MI 48075</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200 hover:border-[#80dfff] transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Give in Person</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="font-semibold text-gray-900">Sunday Service</p>
                <p className="text-gray-700">10:00 AM - 12:00 PM</p>
                <p className="text-gray-700">Every Sunday</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="bg-[#0072bc] text-white py-16 px-4">
        <ScrollReveal direction="up">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-white/10 rounded-full mb-6">
              <FaHandHoldingHeart className="text-5xl text-blue-100" />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-6">Thank You!</h2>
            <p className="text-lg text-blue-100">
              Your generosity makes a difference in countless lives. Thank you for partnering with us in ministry.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Donate;
