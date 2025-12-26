import { useState } from 'react';
import { FaHeart, FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    testimony: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const testimonials = [
    {
      name: 'Member Testimony',
      date: '2024',
      testimony: 'God has been faithful in the lives of our young adults. We have witnessed remarkable spiritual growth and transformation in our youth ministry.',
      category: 'Spiritual Growth'
    },
    {
      name: 'Aunty Tacey & Dr. Elna',
      date: '2024',
      testimony: 'Miraculous healing from cancer! God demonstrated His healing power through the prayers of the church. Both were diagnosed with cancer and through fervent prayer and faith, experienced complete healing.',
      category: 'Healing'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Testimony submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', testimony: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-primary-700 to-primary-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <FaHeart className="text-6xl mx-auto mb-4 text-blue-100" />
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Testimonials
          </h1>
          <p className="text-xl text-blue-100">
            Stories of God's faithfulness and grace
          </p>
        </div>
      </div>

      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Testimonies of Faith
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear how God is working in the lives of our church family. These testimonies remind us
              that God is faithful, powerful, and deeply involved in our lives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md border-2 border-gray-100">
                <FaQuoteLeft className="text-3xl text-primary-600 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {testimonial.testimony}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.date}</p>
                  </div>
                  <div className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    {testimonial.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-50 rounded-lg p-8 border-2 border-primary-200 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
            <p className="text-center text-gray-700 italic">
              "Great is His faithfulness; His mercies begin afresh each morning." - Lamentations 3:23
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 md:p-12 border-2 border-gray-200">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
              Share Your Testimony
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Has God done something amazing in your life? Share your story to encourage others!
            </p>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                <p className="font-semibold">Thank you for sharing your testimony!</p>
                <p className="text-sm mt-1">It will be reviewed before publishing.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="testimony" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Testimony *
                </label>
                <textarea
                  id="testimony"
                  name="testimony"
                  value={formData.testimony}
                  onChange={handleChange}
                  required
                  rows="8"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                  placeholder="Share how God has worked in your life..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 text-white rounded-md font-semibold hover:bg-primary-700 transition-colors shadow-lg"
              >
                Submit Testimony
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
