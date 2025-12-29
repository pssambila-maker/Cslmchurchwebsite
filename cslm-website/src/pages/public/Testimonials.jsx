import { useState } from 'react';
import { FaHeart, FaQuoteLeft, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useFirestore } from '../../hooks/useFirestore';
import ScrollReveal from '../../components/common/ScrollReveal';

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    testimony: ''
  });

  const { addDocument, loading, error, success } = useFirestore('testimonials');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for Firebase
    const testimonialData = {
      name: formData.name,
      email: formData.email,
      testimony: formData.testimony,
      isApproved: false, // Testimonials need admin approval before showing publicly
    };

    // Submit to Firebase
    const result = await addDocument(testimonialData);

    if (result.success) {
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', testimony: '' });
      }, 2000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <div
        className="relative bg-cover bg-center text-white py-20 md:py-32 px-4"
        style={{ backgroundImage: "url('/images/banners/Events.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaHeart className="text-6xl mx-auto mb-4 text-blue-100" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Testimonials
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Stories of God's faithfulness and grace
          </motion.p>
        </div>
      </div>

      <div className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Testimonies of Faith
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear how God is working in the lives of our church family. These testimonies remind us
                that God is faithful, powerful, and deeply involved in our lives.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="bg-[#f0f9ff] p-8 rounded-lg shadow-md border-2 border-[#b3ebff] hover:shadow-xl transition-shadow duration-300 h-full">
                  <FaQuoteLeft className="text-3xl text-[#0A95C9] mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg italic">
                    "{testimonial.testimony}"
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.date}</p>
                    </div>
                    <div className="px-3 py-1 bg-white text-[#0072bc] border border-[#0072bc] rounded-full text-sm font-semibold">
                      {testimonial.category}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up">
            <div className="bg-[#e0f7ff] rounded-lg p-8 border-2 border-[#80dfff] max-w-2xl mx-auto shadow-lg">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-center text-[#0072bc] font-serif text-xl italic font-medium">
                "Great is His faithfulness; His mercies begin afresh each morning."
              </p>
              <p className="text-center text-gray-600 mt-2 font-semibold">- Lamentations 3:23</p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up">
            <div className="bg-white rounded-lg p-8 md:p-12 border-2 border-gray-200 shadow-xl">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6 text-center">
                Share Your Testimony
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
                Has God done something amazing in your life? Share your story to encourage others!
              </p>

              {success && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md animate-fade-in">
                  <p className="font-semibold">Thank you for sharing your testimony!</p>
                  <p className="text-sm mt-1">It will be reviewed before publishing.</p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md animate-fade-in">
                  <p className="font-semibold">Error submitting testimony</p>
                  <p className="text-sm mt-1">{error}. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A95C9] focus:border-[#0A95C9] outline-none transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A95C9] focus:border-[#0A95C9] outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
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
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0A95C9] focus:border-[#0A95C9] outline-none resize-none transition-all"
                    placeholder="Share how God has worked in your life..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-[#0A95C9] text-white rounded-md font-semibold hover:bg-[#0072bc] transition-all shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed transform hover:-translate-y-1"
                >
                  {loading ? 'Submitting...' : 'Submit Testimony'}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
