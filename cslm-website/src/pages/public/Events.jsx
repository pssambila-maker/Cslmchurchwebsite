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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Check back soon for upcoming events, special services, and church activities.
            In the meantime, join us every Sunday at 10:00 AM for worship!
          </p>
          <div className="bg-primary-50 p-8 rounded-lg border-2 border-primary-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaClock className="text-primary-600 text-2xl" />
              <h3 className="text-2xl font-bold text-gray-900">Regular Services</h3>
            </div>
            <p className="text-lg text-gray-700 mb-2">Sunday Worship</p>
            <p className="text-primary-600 font-bold text-xl mb-4">10:00 AM - 12:00 PM</p>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <FaMapMarkerAlt />
              <span>23655 Northwestern Highway, Southfield, MI 48075</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
