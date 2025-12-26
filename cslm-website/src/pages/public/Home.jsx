const Home = () => {
  return (
    <div>
      <div className="bg-primary-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Welcome to Christ Successful Life Ministries
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            CSLM Church is glad and honored to host your visit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary-700 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Plan Your Visit
            </button>
            <button className="px-8 py-3 bg-primary-600 text-white rounded-md font-semibold hover:bg-primary-800 transition-colors border border-white">
              Prayer Request
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Service Times
          </h2>
          <p className="text-xl text-gray-600">
            Sunday Worship: 10:00 AM - 12:00 PM
          </p>
          <p className="text-lg text-gray-500 mt-2">
            23655 Northwestern Highway, Southfield, MI 48075
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
