import Image from "next/image"; // Dodany import

const teamMembers = [
  {
    name: 'Patryk Zdziabek',
    role: 'Co-Founder',
    image: '/images/patryk.jpg',
    bio: 'Doświadczony ekspert z pasją do innowacji w branży sportowej.',
    linkedin: '#',
    specialization: 'Zarządzanie strategiczne, Rozwój biznesu'
  },
  {
    name: 'Daniel Semerjyan',
    role: 'Co-Founder',
    image: '/images/daniel.jpg',
    bio: 'Ekspert w tworzeniu skalowalnych rozwiązań technologicznych.',
    linkedin: '#',
    specialization: 'Architektura systemów, Cloud Computing'
  },
  {
    name: 'Michał Nawrocki',
    role: 'Co-Founder',
    image: '/images/michal.jpg',
    bio: 'Strateg marketingowy budujący silną markę FitWise.',
    linkedin: '#',
    specialization: 'Marketing cyfrowy, Analityka'
  }
];

const Team = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Poznaj nasz zespół</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zespół FitWise to grupa pasjonatów technologii i sportu, którzy każdego dnia pracują nad rozwojem najlepszych rozwiązań dla branży fitness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative w-full pt-[100%]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill" // Użycie layout="fill" dla pełnego wypełnienia
                    objectFit="cover" // Obiekt dopasowany do rozmiaru
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
                  <p className="text-xs text-gray-600 mb-2">{member.specialization}</p>
                  <p className="text-xs text-gray-700 mb-3">{member.bio}</p>
                  <a 
                    href={member.linkedin}
                    className="inline-flex items-center text-primary hover:text-cta-hover transition-colors text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="mr-2">LinkedIn</span>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;