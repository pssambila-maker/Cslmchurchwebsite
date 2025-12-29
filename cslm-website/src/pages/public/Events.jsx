import { FaCalendar, FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Events = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center text-white py-20 md:py-32 px-4"
        style={{ backgroundImage: "url('/images/banners/Events.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
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
        <div className="max-w-7xl mx-auto">

          {/* Featured Event: Crossover Night */}
          <div className="mb-20">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center border-b-2 border-primary-200 pb-2 inline-block left-1/2 relative -translate-x-1/2">
              Featured Event
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col lg:flex-row">
              {/* Flyer Image */}
              <div className="lg:w-1/2 bg-gray-50 p-4 flex items-center justify-center">
                <img
                  src="/images/crossover-night-2025.png"
                  alt="Crossover Night Service Flyer"
                  className="w-full h-auto max-h-[700px] object-contain rounded-lg shadow-sm"
                />
              </div>

              {/* Event Details */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
                <div className="mb-8">
                  <div className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-bold tracking-wide mb-4">
                    NEW YEAR'S EVE
                  </div>
                  <h3 className="text-4xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                    Crossover Night Service
                  </h3>
                  <p className="text-xl text-gray-600">
                    Entering the New Year in God's Presence
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                      <FaCalendar className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Date</h4>
                      <p className="text-gray-600">Wednesday, December 31st, 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                      <FaClock className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Time</h4>
                      <p className="text-gray-600">7:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Location</h4>
                      <p className="text-gray-600">Church, 23655 Northwestern Hwy, Southfield</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Call</h4>
                      <p className="text-gray-600">248-828-5305</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-gray-800 italic text-lg">
                    "Join us for a powerful night of prayer and thanksgiving as we cross over into the new year. Come expectant for God's blessings and breakthroughs in 2026!"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* More Events Grid */}
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-8 text-center">
            More Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 justify-center">
            {/* Fast and Prayers Event */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow w-full">
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
                  <FaPhone className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Prayer Line</p>
                    <p className="text-gray-600 text-sm">(866) 337-4509</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-primary-600 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Location</p>
                    <p className="text-gray-600 text-sm">23655 Northwestern Hwy, Southfield</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-700 mb-3">
                    Start the new year right with 27 days of consecration, fasting, and prayer.
                    Seek God's face for direction, breakthrough, and spiritual renewal for 2026.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Note: No weekly Bible studies during this fasting period.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Services Section */}
          <div className="max-w-4xl mx-auto border-t border-gray-200 pt-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
              Regular Services
            </h2>
            <div className="bg-white p-8 rounded-2xl border-2 border-primary-100 shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="inline-block p-4 bg-primary-50 rounded-full text-primary-600 mb-4">
                <FaClock className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunday Worship</h3>
              <p className="text-lg text-gray-700 mb-4">Every Sunday</p>
              <p className="text-primary-600 font-bold text-3xl mb-4">10:00 AM - 12:00 PM</p>
              <div className="flex items-center justify-center gap-2 text-gray-600 bg-gray-50 py-2 rounded-lg inline-block px-4">
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
