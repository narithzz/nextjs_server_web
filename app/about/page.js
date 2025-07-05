export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Team Members', value: '50+' }
  ];

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      bio: 'With over 15 years of experience in technology and business leadership.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      bio: 'Expert in cloud architecture and digital transformation strategies.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      bio: 'Passionate about creating beautiful and intuitive user experiences.'
    }
  ];

  return (
    <div className="container mx-auto px-6 pb-12">
      {/* About Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're a team of passionate individuals dedicated to delivering innovative technology solutions.
        </p>
      </section>

      {/* Company Story */}
      <section className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-8">
            Founded in 2013, we've grown from a small startup to a leading technology solutions provider.
            Our journey has been driven by a simple mission: to help businesses thrive in the digital age
            through innovative technology solutions and exceptional service.
          </p>
          <p className="text-gray-600 mb-8">
            Today, we work with clients across the globe, from startups to enterprise organizations,
            helping them transform their ideas into reality and achieve their business goals through
            technology.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Our Leadership Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}