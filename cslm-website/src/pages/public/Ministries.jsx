import { FaMusic, FaPray, FaUsers, FaChild, FaDollarSign, FaHandsHelping } from 'react-icons/fa';

const Ministries = () => {
  const ministries = [
    {
      name: 'Worship & Music Ministry',
      leader: 'Br. Charles Vumomse',
      icon: FaMusic,
      description: 'Leading the congregation in praise and worship through music, hymns, and spiritual songs.',
      activities: [
        'Sunday worship services',
        'Choir rehearsal every Saturday at 10:00 AM',
        'Gospel music recording',
        'Special worship events'
      ],
      color: 'primary'
    },
    {
      name: 'Intercessory Prayer Ministry',
      leader: 'Dr. Regina Tamon',
      icon: FaPray,
      description: 'Dedicated prayer warriors interceding for the church, community, and individual needs.',
      activities: [
        'Morning Glory Prayers (Mon, Wed, Fri at 5:45 AM ET)',
        'All Night Prayer (Last Friday monthly)',
        'Fasting and Prayer (Every Friday)',
        'Prayer request fulfillment'
      ],
      color: 'blue'
    },
    {
      name: 'Women\'s Ministry',
      leader: 'Sr. Peace Vumomse',
      icon: FaUsers,
      description: 'Empowering women in faith, fellowship, and service to build strong spiritual foundations.',
      activities: [
        'Women\'s fellowship meetings',
        'Spiritual growth workshops',
        'Community outreach programs',
        'Mentorship and support'
      ],
      color: 'pink'
    },
    {
      name: 'Men\'s Ministry',
      leader: 'Mr. Wilson Ndakwa',
      icon: FaUsers,
      description: 'Building strong men of faith and developing young men\'s leadership through biblical principles.',
      activities: [
        'Men\'s fellowship and accountability',
        'Leadership development programs',
        'Community service projects',
        'Spiritual mentorship'
      ],
      color: 'indigo'
    },
    {
      name: 'Children\'s Ministry',
      leader: 'Sr. Antoinette',
      icon: FaChild,
      description: 'Nurturing the spiritual growth of children through age-appropriate teaching and activities.',
      activities: [
        'Sunday School programs',
        'Youth spiritual training',
        'Character development classes',
        'Fun and engaging activities'
      ],
      color: 'yellow'
    },
    {
      name: 'Finance Ministry',
      leader: 'Dr. Ernestine Ndakwa',
      icon: FaDollarSign,
      description: 'Managing church resources with integrity and stewardship, ensuring financial accountability.',
      activities: [
        'Budget management',
        'Financial accountability',
        'Donation oversight',
        'Stewardship education'
      ],
      color: 'green'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Ministries
          </h1>
          <p className="text-xl text-blue-100">
            Serving God and building His kingdom through diverse ministries
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Discover Your Place to Serve
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            At Christ Successful Life Ministries, we believe that every member is called to use their
            God-given gifts to serve the body of Christ. Our ministries provide opportunities for
            spiritual growth, fellowship, and service.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you're called to worship, pray, teach, or serve, there's a place for you in our
            church family.
          </p>
        </div>
      </div>

      {/* Ministries Grid */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => {
              const Icon = ministry.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-8 border-2 border-gray-100 hover:border-primary-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6 mx-auto">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 text-center">
                    {ministry.name}
                  </h3>
                  <p className="text-primary-600 font-semibold text-center mb-4">
                    Led by {ministry.leader}
                  </p>
                  <p className="text-gray-600 mb-6 text-center">
                    {ministry.description}
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Activities:</h4>
                    <ul className="space-y-2">
                      {ministry.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-primary-600 mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-8">
            How to Get Involved
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Attend a Service</h3>
              <p className="text-gray-600">
                Join us on Sunday at 10:00 AM to experience our vibrant worship and community.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Connect with Leaders</h3>
              <p className="text-gray-600">
                Speak with ministry leaders to learn more about how you can contribute your gifts.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Start Serving</h3>
              <p className="text-gray-600">
                Begin using your talents to serve God and build up the body of Christ.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FaHandsHelping className="text-6xl mx-auto mb-6 text-blue-100" />
          <h2 className="text-3xl font-heading font-bold mb-6">
            Your Gifts Are Needed
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            God has uniquely equipped you to make a difference in His kingdom. Don't wait to discover
            how you can serve and grow in your faith through our ministries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-primary-700 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="px-8 py-3 bg-primary-600 text-white rounded-md font-semibold hover:bg-primary-800 transition-colors border-2 border-white shadow-lg"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ministries;
