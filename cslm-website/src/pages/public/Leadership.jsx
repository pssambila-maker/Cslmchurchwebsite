import { FaUser, FaPray, FaMusic, FaUsers, FaDollarSign, FaChild } from 'react-icons/fa';

const Leadership = () => {
  const leaders = [
    {
      name: 'Pr. Sambila Tamon',
      title: 'Senior Pastor',
      icon: FaUser,
      description: 'Engineer and visionary leader, father of five children, leading the church with passion and dedication to spreading the Gospel.',
      color: 'primary'
    },
    {
      name: 'Dr. Regina Tamon',
      title: 'First Lady',
      icon: FaPray,
      description: 'Pharmacist, prayer warrior, and leader of the Intercessory Prayer Ministry. Oversees prayer request submissions and spiritual intercession.',
      color: 'primary'
    },
    {
      name: 'Br. Charles Vumomse',
      title: 'Music Ministry Director',
      icon: FaMusic,
      description: 'Registered Nurse (RN) and gospel recording artist. Has been with the church since day one, leading worship and praise.',
      color: 'blue'
    },
    {
      name: 'Sr. Peace Vumomse',
      title: 'Women\'s Ministry Leader',
      icon: FaUsers,
      description: 'Registered Nurse (RN), church announcer and MC. Has been with the church since day one, empowering women in faith.',
      color: 'pink'
    },
    {
      name: 'Mr. Wilson Ndakwa',
      title: 'Men\'s Ministry Leader',
      icon: FaUsers,
      description: 'Behind-the-scenes organizer focused on young men\'s leadership development and spiritual accountability.',
      color: 'indigo'
    },
    {
      name: 'Dr. Ernestine Ndakwa',
      title: 'Minister of Finance',
      icon: FaDollarSign,
      description: 'Professor and Registered Nurse (RN), managing church finances and stewardship with integrity and accountability.',
      color: 'green'
    },
    {
      name: 'Sr. Antoinette',
      title: 'Children\'s Ministry Leader',
      icon: FaChild,
      description: 'Registered Nurse (RN) and children\'s mentor, nurturing the spiritual growth of young believers.',
      color: 'yellow'
    },
    {
      name: 'Aunt Vivian',
      title: 'Choir & Support',
      icon: FaMusic,
      description: 'Registered Nurse (RN) and versatile volunteer, supporting multiple ministries with dedication and service.',
      color: 'purple'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our Leadership
          </h1>
          <p className="text-xl text-blue-100">
            Dedicated servants committed to shepherding God's people
          </p>
        </div>
      </div>

      {/* Leadership Grid */}
      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together diverse gifts, experiences, and callings to serve the
              body of Christ with excellence and love.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg border-2 border-gray-100 hover:border-primary-300 transition-all p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">
                        {leader.name}
                      </h3>
                      <p className="text-primary-600 font-semibold mb-3">{leader.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {leader.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Ministry Philosophy */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center text-gray-900 mb-8">
            Our Leadership Philosophy
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Servant Leadership</h3>
              <p className="text-gray-600">
                Following Christ's example, our leaders serve with humility, putting the needs of the
                congregation and community first. We believe that true leadership is found in service.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Biblical Foundation</h3>
              <p className="text-gray-600">
                All ministry is grounded in scripture, particularly Joshua 1:8, which calls us to meditate
                on God's Word day and night for prosperity and success.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diverse Gifts</h3>
              <p className="text-gray-600">
                Our team includes professionals from various fields - healthcare, education, engineering,
                and ministry - each bringing unique perspectives and skills to serve the body of Christ.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commitment to Prayer</h3>
              <p className="text-gray-600">
                Prayer is the foundation of all we do. Our leadership maintains multiple weekly prayer
                sessions, seeking God's guidance in all decisions and ministry activities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Join Our Ministry</h2>
          <p className="text-lg text-blue-100 mb-8">
            God has given each of us unique gifts to serve His kingdom. Whether you're called to teach,
            serve, worship, or lead, there's a place for you in our ministries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ministries"
              className="px-8 py-3 bg-white text-primary-700 rounded-md font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Ministries
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-primary-600 text-white rounded-md font-semibold hover:bg-primary-800 transition-colors border-2 border-white shadow-lg"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
