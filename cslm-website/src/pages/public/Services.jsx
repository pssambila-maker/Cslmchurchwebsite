import { FaClock, FaMapMarkerAlt, FaPray, FaMusic, FaBook, FaHeart, FaPhone } from 'react-icons/fa';

// ... (imports)
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal';

const Services = () => {
  return (
    <div>
      {/* Page Header */}
      <div
        className="relative bg-cover bg-center text-white py-20 md:py-32 px-4"
        style={{ backgroundImage: "url('/images/banners/Prayers.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
              Service Times & Schedule
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#e0f7ff]"
          >
            Join us for worship, fellowship, and spiritual growth
          </motion.p>
        </div>
      </div>

      {/* Sunday Worship */}
      <div className="bg-white py-16 px-4">
        <ScrollReveal>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
                Sunday Worship Service
              </h2>
              <p className="text-lg text-gray-600">
                Our main weekly gathering for worship and the Word
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#e0f7ff] to-white rounded-lg p-8 md:p-12 border-2 border-[#80dfff] shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <FaClock className="text-[#0A95C9] text-3xl" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Time</h3>
                      <p className="text-2xl font-semibold text-[#0072bc]">10:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-[#0A95C9] text-3xl" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Location</h3>
                      <p className="text-gray-700">23655 Northwestern Highway</p>
                      <p className="text-gray-700">Southfield, MI 48075</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Service Includes:</h3>
                  <ul className="space-y-2">
                    {[
                      "Intercessory prayers",
                      "Praise & worship",
                      "Scripture reading",
                      "Hymns and worship songs",
                      "Offering",
                      "Powerful messages",
                      "Benediction"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#0A95C9] mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://maps.google.com/?q=23655+Northwestern+Highway+Southfield+MI+48075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-[#0A95C9] text-white rounded-md font-semibold hover:bg-[#0072bc] transition-colors shadow-lg"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Weekly Schedule */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
              Weekly Schedule
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Morning Glory Prayers */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-100 h-full hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-14 h-14 bg-[#e0f7ff] text-[#0072bc] rounded-full mb-4 mx-auto">
                  <FaPray size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Morning Glory Prayers
                </h3>
                <div className="text-center">
                  <p className="text-gray-700 font-semibold">Mon, Tues, Wed, Thurs, Fri</p>
                  <p className="text-[#0A95C9] font-bold text-lg">5:45 AM ET</p>
                  <p className="text-sm text-gray-600 mt-3">Conference Line:</p>
                  <p className="text-sm font-semibold text-gray-700">+1-866-337-4509</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Choir Rehearsal */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-100 h-full hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-600 rounded-full mb-4 mx-auto">
                  <FaMusic size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Choir Rehearsal
                </h3>
                <div className="text-center">
                  <p className="text-gray-700 font-semibold">Saturdays</p>
                  <p className="text-[#0A95C9] font-bold text-lg">10:00 AM</p>
                  <p className="text-sm text-gray-600 mt-3">
                    Join our music ministry for worship preparation
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* All Night Prayer */}
            <ScrollReveal direction="up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-100 h-full hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full mb-4 mx-auto">
                  <FaHeart size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  All Night Prayer
                </h3>
                <div className="text-center">
                  <p className="text-gray-700 font-semibold">Last Friday of Month</p>
                  <p className="text-[#0A95C9] font-bold text-lg">Evening</p>
                  <p className="text-sm text-gray-600 mt-3">
                    Powerful intercession and spiritual warfare
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Fasting & Prayer */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-gray-100 h-full hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-14 h-14 bg-green-100 text-green-600 rounded-full mb-4 mx-auto">
                  <FaBook size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  Fasting & Prayer
                </h3>
                <div className="text-center">
                  <p className="text-gray-700 font-semibold">Every Friday</p>
                  <p className="text-[#0A95C9] font-bold text-lg">All Day</p>
                  <p className="text-sm text-gray-600 mt-3">
                    Seeking God through fasting and prayer
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
              What to Expect
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              { title: "Come As You Are", text: "We welcome everyone regardless of background or dress. Whether you wear a suit or jeans, you'll feel at home. Our focus is on worshiping God, not on appearances." },
              { title: "Warm Welcome", text: "Our greeters and members will make you feel welcome from the moment you arrive. Don't hesitate to ask questions or let us know if this is your first visit." },
              { title: "Engaging Worship", text: "Our worship is vibrant and spirit-filled, combining contemporary praise songs with traditional hymns. Expect to encounter God through powerful worship and prayer." },
              { title: "Biblical Messages", text: "Pastor Sambila Tamon delivers messages rooted in scripture that are practical, encouraging, and relevant to everyday life. Expect to be challenged and inspired." },
              { title: "Children's Programs", text: "We provide age-appropriate programs for children during the service, so parents can worship while kids learn about Jesus in a fun, engaging environment." }
            ].map((item, index) => (
              <ScrollReveal key={index} direction="left" delay={index * 0.1}>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#0A95C9]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#0072bc] text-white py-16 px-4">
        <ScrollReveal direction="up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Questions?</h2>
            <p className="text-lg text-blue-100 mb-8">
              If you have any questions about our services or need directions, feel free to reach out.
              We're here to help make your visit comfortable and meaningful.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center gap-3">
                <FaPhone className="text-2xl" />
                <a href="tel:+12488285305" className="text-xl hover:text-blue-200 transition-colors">
                  +1 248-828-5305
                </a>
              </div>
              <div>
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 bg-white text-[#0072bc] rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div >
  );
};


export default Services;
