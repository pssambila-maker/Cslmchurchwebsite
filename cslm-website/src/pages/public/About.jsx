import { FaBook, FaHeart, FaPray, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About Christ Successful Life Ministries
          </h1>
          <p className="text-xl text-blue-100">
            Empowering lives through the love and teachings of Jesus Christ
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4">
                <FaPray size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Prayer</h3>
              <p className="text-gray-600">
                We believe in the power of prayer and maintain a strong prayer ministry with multiple
                weekly prayer sessions.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4">
                <FaBook size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Scripture</h3>
              <p className="text-gray-600">
                We are grounded in God's Word, meditating on scripture day and night for wisdom and guidance.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4">
                <FaUsers size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Fellowship</h3>
              <p className="text-gray-600">
                We foster genuine relationships and community through worship, service, and shared experiences.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full mb-4">
                <FaHeart size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">Service</h3>
              <p className="text-gray-600">
                We are called to serve one another in love, using our gifts to build up the body of Christ.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-12">
            What to Expect When You Visit
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Warm Welcome</h3>
                <p className="text-gray-600">
                  You'll be greeted with genuine warmth and hospitality. CSLM Church is glad and honored
                  to host your visit.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vibrant Worship</h3>
                <p className="text-gray-600">
                  Experience powerful worship led by our gifted music ministry, featuring praise songs,
                  hymns, and uplifting music.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Biblical Teaching</h3>
                <p className="text-gray-600">
                  Hear messages rooted in scripture that are relevant to daily life, delivered with
                  clarity and passion.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Genuine Community</h3>
                <p className="text-gray-600">
                  Connect with a diverse, welcoming community of believers who are committed to growing
                  together in faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Reach */}
      <div className="bg-primary-700 text-white py-16 px-4">
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

      {/* Call to Action */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
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
              className="px-8 py-3 bg-primary-600 text-white rounded-md font-semibold hover:bg-primary-700 transition-colors shadow-lg"
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
        </div>
      </div>
    </div>
  );
};

export default About;
