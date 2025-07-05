export default function Home() {
  const features = [
    {
      title: 'Modern Technology',
      description: 'Built with the latest and most reliable technologies to ensure scalability and performance.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'User Experience',
      description: 'Intuitive interfaces and responsive designs that work seamlessly across all devices.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security measures to protect your data and ensure privacy.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <div className="container mx-auto px-6 pb-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Business with Technology
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          We help businesses leverage cutting-edge technology to drive growth and innovation.
          Our solutions are tailored to meet your unique needs and challenges.
        </p>
        <button className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-primary p-3 bg-blue-50 rounded-lg inline-block mb-4">
              {feature.icon}
            </div>
            <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}