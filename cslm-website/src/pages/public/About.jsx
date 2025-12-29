import { FaBook, FaHeart, FaPray, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollReveal from '../../components/common/ScrollReveal';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <div
        className="relative bg-cover bg-center text-white py-20 md:py-32 px-4"
        style={{ backgroundImage: "url('/images/banners/AboutUs.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            About Christ Successful Life Ministries
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Empowering lives through the love and teachings of Jesus Christ
          </motion.p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  Christ Successful Life Ministries exists to glorify God by making disciples of Jesus Christ
                  through worship, fellowship, and service. We are committed to helping individuals encounter
                  God's love and truth through authentic relationships and biblical teaching.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We invite you to fellowship with us to fully understand the truth of God best known via
                  an encounter with Jesus Christ.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-primary-50 p-8 rounded-lg border-2 border-primary-200">
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                  Our Foundation
                </h3>
                <blockquote className="text-gray-700 italic text-lg leading-relaxed">
                  "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein
                  day and night, that thou mayest observe to do according to all that is written therein:
                  for then thou shalt make thy way prosperous, and then thou shalt have good success."
                </blockquote>
                <p className="mt-4 text-primary-700 font-semibold text-right">- Joshua 1:8</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FaPray, title: "Prayer", text: "We believe in the power of prayer and maintain a strong prayer ministry with multiple weekly prayer sessions." },
              { icon: FaBook, title: "Scripture", text: "We are grounded in God's Word, meditating on scripture day and night for wisdom and guidance." },
              { icon: FaUsers, title: "Fellowship", text: "We foster genuine relationships and community through worship, service, and shared experiences." },
              { icon: FaHeart, title: "Service", text: "We are called to serve one another in love, using our gifts to build up the body of Christ." }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0A95C9] text-white rounded-full mb-4 shadow-lg">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
              What to Expect When You Visit
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {[
              { num: 1, title: "Warm Welcome", text: "You'll be greeted with genuine warmth and hospitality. CSLM Church is glad and honored to host your visit." },
              { num: 2, title: "Vibrant Worship", text: "Experience powerful worship led by our gifted music ministry, featuring praise songs, hymns, and uplifting music." },
              { num: 3, title: "Biblical Teaching", text: "Hear messages rooted in scripture that are relevant to daily life, delivered with clarity and passion." },
              { num: 4, title: "Genuine Community", text: "Connect with a diverse, welcoming community of believers who are committed to growing together in faith." }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="left">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#0A95C9] text-white rounded-full flex items-center justify-center font-bold">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">
                      {item.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Global Reach */}
      <ScrollReveal>
        <div className="bg-[#0072bc] text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">Our Reach</h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              While our home is in Southfield, Michigan, Christ Successful Life Ministries extends beyond
              borders. We have established multiple branches in Cameroon, spreading the Gospel and building
              communities of faith across nations.
            </p>
            <p className="text-xl font-semibold">
              One Church, Multiple Locations, One Mission
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Call to Action */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Join Us This Sunday
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We would love to meet you and worship together. Come experience the love of Christ and
              the warmth of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="px-8 py-3 bg-[#00aeef] text-white rounded-md font-semibold hover:bg-[#009bd5] transition-colors shadow-lg"
              >
                Service Times
              </a>
              <a
                href="/contact"
                className="px-8 py-3 bg-gray-100 text-gray-900 rounded-md font-semibold hover:bg-gray-200 transition-colors shadow-lg"
              >
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default About;
