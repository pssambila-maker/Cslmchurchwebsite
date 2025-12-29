import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaPhone, FaPray, FaBook, FaHeart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/banners/AboutUs.jpg',
      title: 'Welcome!',
      subtitle: 'Bienvenue!',
      text: "CSLM Church is glad and honored to host your visit. While you are browsing, you'll get a glimpse of who we are and the God we purposefully serve."
    },
    {
      image: '/images/banners/Ministries.jpg',
      title: 'Worship With Us',
      subtitle: 'Join the Fellowship',
      text: "Experience vibrant worship, powerful messages, and genuine fellowship. Come fully understand the truth of God known via an encounter with Jesus."
    },
    {
      image: '/images/banners/Events.jpg',
      title: 'Grow Together',
      subtitle: 'Discipleship & Service',
      text: "We are committed to specialized ministry that meets the needs of every age group. Join a ministry today and start serving."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center">
        {/* Background Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <AnimatePresence mode="wait">
            <div key={currentSlide} className="max-w-2xl text-white">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-2xl md:text-3xl font-semibold mb-6 text-[#4dd3ff]"
              >
                {slides[currentSlide].subtitle}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-base md:text-lg mb-8 leading-relaxed text-gray-100"
              >
                {slides[currentSlide].text}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/about"
                  className="px-8 py-3 bg-[#0A95C9] text-white rounded-md font-semibold hover:bg-[#0072bc] transition-colors shadow-lg inline-block text-center"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-all shadow-lg inline-block text-center"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </AnimatePresence>

          {/* Slider Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#00aeef] w-8' : 'bg-white/50 hover:bg-white'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Service Times Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Join Us for Worship
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience vibrant worship, powerful messages, and genuine fellowship
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sunday Service */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-[#e0f7ff] rounded-lg p-8 shadow-md border-2 border-[#80dfff] h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-white rounded-full shadow-sm">
                    <FaClock className="text-[#0A95C9] text-4xl" />
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-center text-gray-900 mb-4">
                  Sunday Worship Service
                </h3>
                <p className="text-center text-gray-700 mb-4">
                  <span className="text-xl font-semibold text-[#0072bc]">10:00 AM - 12:00 PM</span>
                </p>
                <p className="text-center text-gray-600 text-sm">
                  Includes: Intercessory prayers, praise & worship, scripture reading, hymns, offering, messages, and benediction
                </p>
              </div>
            </ScrollReveal>

            {/* Location */}
            <ScrollReveal direction="right" delay={0.4}>
              <div className="bg-gray-50 rounded-lg p-8 shadow-md border-2 border-gray-200 h-full hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 bg-white rounded-full shadow-sm">
                    <FaMapMarkerAlt className="text-[#0A95C9] text-4xl" />
                  </div>
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
                    className="inline-flex items-center justify-center px-6 py-2 border border-[#0A95C9] text-[#0A95C9] rounded-md hover:bg-[#0A95C9] hover:text-white transition-colors duration-300 font-medium"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
              Weekly Activities
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaPray, title: "Morning Glory Prayers", time: "Mon, Tues, Wed, Thurs, Fri", sub: "5:45 AM ET", extra: "Call: +1-866-337-4509" },
              { icon: FaBook, title: "Choir Rehearsal", time: "Saturdays", sub: "10:00 AM" },
              { icon: FaHeart, title: "All Night Prayer", time: "Last Friday", sub: "Monthly" },
              { icon: FaPray, title: "Fasting & Prayer", time: "Every Friday", sub: "All Day" }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="bg-white p-6 rounded-lg shadow-md text-center hover:transform hover:-translate-y-2 transition-transform duration-300 h-full">
                  <item.icon className="text-[#0A95C9] text-3xl mx-auto mb-3" />
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.time}</p>
                  <p className="text-sm text-gray-600">{item.sub}</p>
                  {item.extra && <p className="text-xs text-gray-500 mt-2">{item.extra}</p>}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Scripture Section */}
      <ScrollReveal>
        <div className="bg-[#0072bc] text-white py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Our Foundation</h2>
            <blockquote className="text-lg md:text-xl italic leading-relaxed">
              "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night,
              that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous,
              and then thou shalt have good success."
            </blockquote>
            <p className="mt-4 text-blue-200 font-semibold text-xl">- Joshua 1:8</p>
          </div>
        </div>
      </ScrollReveal>

      {/* Quick Links Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
              Get Connected
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { to: "/about", title: "About Us", desc: "Learn about our mission, vision, and the God we serve" },
              { to: "/ministries", title: "Ministries", desc: "Discover how you can serve and grow in your faith" },
              { to: "/contact", title: "Contact Us", desc: "Have questions? We'd love to hear from you" }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.2} direction="up">
                <Link
                  to={item.to}
                  className="block bg-gradient-to-br from-[#e0f7ff] to-[#b3ebff] p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-2 border-[#80dfff] hover:border-[#26c9ff] group h-full"
                >
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-[#0072bc] transition-colors">{item.title}</h3>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <FaPhone className="text-[#26c9ff]" />
              <a href="tel:+12488285305" className="hover:text-[#26c9ff] transition-colors">
                +1 248-828-5305
              </a>
            </motion.div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#26c9ff]" />
              <span>23655 Northwestern Hwy, Southfield, MI 48075</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
