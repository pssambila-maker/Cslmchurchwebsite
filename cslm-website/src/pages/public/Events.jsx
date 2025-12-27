import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Events = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FaCalendar className="text-6xl mx-auto mb-4 text-blue-100" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Upcoming Events
          </h1>
          <p className="text-xl text-blue-100">
            Join us for special services and activities
          </p>
        </div>
      </div>

      <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Crossover Night Prayers Event */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Crossover Night Prayers
                </h3>
                <p className="text-primary-100">Join us as we pray into the New Year</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <FaCalendar className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Wednesday, December 31st, 2025</p>
                    <p className="text-gray-600 text-sm">New Year's Eve Service</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">7:00 PM EST</p>
                    <p className="text-gray-600 text-sm">Evening Prayer Service</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Christ Successful Life Ministry</p>
                    <p className="text-gray-600 text-sm">23655 Northwestern Highway, Southfield, MI 48075</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-700">
                    Join us for a powerful night of prayer and thanksgiving as we cross over into the new year.
                    Come expectant for God's blessings and breakthroughs in 2026!
                  </p>
                </div>
              </div>
            </div>

            {/* Fast and Prayers Event */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  Fast and Prayers
                </h3>
                <p className="text-primary-100">27 Days of Fasting and Prayer</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <FaCalendar className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">January 5th - 31st, 2026</p>
                    <p className="text-gray-600 text-sm">Corporate Fasting Period</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Daily Prayer Times</p>
                    <p className="text-gray-600 text-sm">5:45 AM - 6:45 AM & 6:00 PM - 7:00 PM</p>
                    <p className="text-gray-600 text-sm">(Monday - Saturday)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Christ Successful Life Ministry</p>
                    <p className="text-gray-600 text-sm">23655 Northwestern Highway, Southfield, MI 48075</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-700">
                    Start the new year right with 27 days of consecration, fasting, and prayer.
                    Seek God's face for direction, breakthrough, and spiritual renewal for 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Services Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
              Regular Services
            </h2>
            <div className="bg-primary-50 p-8 rounded-lg border-2 border-primary-200">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FaClock className="text-primary-600 text-2xl" />
                <h3 className="text-2xl font-bold text-gray-900">Sunday Worship</h3>
              </div>
              <p className="text-lg text-gray-700 mb-2 text-center">Every Sunday</p>
              <p className="text-primary-600 font-bold text-xl mb-4 text-center">10:00 AM - 12:00 PM</p>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                <FaMapMarkerAlt />
                <span>23655 Northwestern Highway, Southfield, MI 48075</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
