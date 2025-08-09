export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-slate-200 relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-xl z-50 border-b border-red-500/20 shadow-lg shadow-red-500/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent animate-pulse">
              Panida Rumriankit
            </h1>
            <div className="flex space-x-6">
              <a href="#about" className="hover:text-red-400 transition-all duration-300 hover:scale-110 hover:glow">About</a>
              <a href="#experience" className="hover:text-red-400 transition-all duration-300 hover:scale-110">Experience</a>
              <a href="#projects" className="hover:text-red-400 transition-all duration-300 hover:scale-110">Projects</a>
              <a href="#skills" className="hover:text-red-400 transition-all duration-300 hover:scale-110">Skills</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-2 h-2 bg-red-400 rounded-full animate-bounce delay-100"></div>
              <div className="absolute top-40 right-20 w-1 h-1 bg-red-300 rounded-full animate-bounce delay-300"></div>
              <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce delay-500"></div>
              <div className="absolute top-32 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-bounce delay-700"></div>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
              <span className="text-white drop-shadow-2xl">Software</span>{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-600 to-red-500 bg-clip-text text-transparent animate-pulse">
                Engineer
              </span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full animate-pulse"></div>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up">
              Full-Stack Developer passionate about creating{" "}
              <span className="text-red-400 font-semibold">innovative solutions</span> with{" "}
              <span className="text-red-500 font-semibold">modern technologies</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up delay-300">
              <a
                href="https://github.com/PanidaRumriankit"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-red-500/50 hover:border-red-400 text-slate-200 hover:text-red-400 px-10 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 hover:bg-red-500/10"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-slate-900/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent mb-4">
              About Me
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed transform hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-slate-800/30">
                I'm a passionate Software Engineering student at <span className="text-red-400 font-semibold">Kasetsart University</span>, currently pursuing a Bachelor's degree 
                in Software and Knowledge Engineering. With hands-on experience in full-stack development, I specialize in 
                building scalable web applications using modern technologies.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed transform hover:scale-105 transition-transform duration-300 p-4 rounded-lg hover:bg-slate-800/30">
                My journey in software development has led me through various internships and projects, where I've worked 
                with technologies like <span className="text-red-500 font-semibold">Next.js</span>, <span className="text-green-400 font-semibold">Express.js</span>, <span className="text-yellow-400 font-semibold">Elysia.js</span>, and cloud services like <span className="text-orange-400 font-semibold">AWS</span>. I'm particularly interested 
                in creating user-friendly interfaces and robust backend systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center mt-8">
                <div className="flex items-center space-x-4 group">
                  <div className="w-2 h-2 bg-red-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-red-400 font-medium">Email:</span>
                  <a href="mailto:panida.r.work@gmail.com" className="text-slate-300 hover:text-red-400 transition-colors hover:underline">
                    panida.r.work@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-red-500 font-medium">Phone:</span>
                  <span className="text-slate-300">(+66) 90 273 1813</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-4">
              Experience
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-8">
            {/* Curia Lab */}
            <div className="group bg-gradient-to-r from-slate-900/80 to-slate-800/80 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">Software Engineer Intern</h4>
                  <p className="text-blue-400 font-medium text-lg">Curia Lab</p>
                  <p className="text-slate-400">Bangkok, Thailand</p>
                </div>
                <span className="text-slate-400 mt-2 md:mt-0 px-4 py-2 bg-blue-500/20 rounded-full text-sm">August 2025 - Now</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Collaborated in implementing the "Forum Contributing" Feature using technologies like 
                <span className="text-purple-400 font-semibold"> Elysia.js</span>, 
                <span className="text-blue-400 font-semibold"> Next.js</span>, 
                <span className="text-green-400 font-semibold"> PostgreSQL</span>, and 
                <span className="text-yellow-400 font-semibold"> Prisma ORM</span>
              </p>
            </div>

            {/* CPF Group */}
            <div className="group bg-gradient-to-r from-slate-900/80 to-slate-800/80 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors">Frontend Developer Trainee</h4>
                  <p className="text-purple-400 font-medium text-lg">CPF Group</p>
                  <p className="text-slate-400">Bangkok, Thailand</p>
                </div>
                <span className="text-slate-400 mt-2 md:mt-0 px-4 py-2 bg-purple-500/20 rounded-full text-sm">July 2025</span>
              </div>
              <ul className="text-slate-300 space-y-3 leading-relaxed">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Executed manual and automated test cases to verify software functionality, usability, and performance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Used <span className="text-cyan-400 font-semibold">Playwright</span> for E2E testing</span>
                </li>
              </ul>
            </div>

            {/* Vulcorn X */}
            <div className="group bg-gradient-to-r from-slate-900/80 to-slate-800/80 p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors">Full Stack Developer Intern</h4>
                  <p className="text-cyan-400 font-medium text-lg">Vulcorn X</p>
                  <p className="text-slate-400">Bangkok, Thailand</p>
                </div>
                <span className="text-slate-400 mt-2 md:mt-0 px-4 py-2 bg-cyan-500/20 rounded-full text-sm">May 2025 - June 2025</span>
              </div>
              <ul className="text-slate-300 space-y-3 leading-relaxed">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed code following common practices and development design patterns using 
                    <span className="text-yellow-400 font-semibold"> Express</span>, 
                    <span className="text-blue-400 font-semibold"> Next.js</span>, 
                    <span className="text-green-400 font-semibold"> MongoDB</span>, and 
                    <span className="text-purple-400 font-semibold"> GraphQL</span>
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Migrated file storage from the machine server to <span className="text-orange-400 font-semibold">AWS S3</span> storage</span>
                </li>
              </ul>
            </div>

            {/* SCB Academy */}
            <div className="group bg-gradient-to-r from-slate-900/80 to-slate-800/80 p-8 rounded-2xl border border-green-500/30 hover:border-green-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-white group-hover:text-green-300 transition-colors">Front-end Developer</h4>
                  <p className="text-green-400 font-medium text-lg">SCB Academy (Alternative Workforce Project)</p>
                  <p className="text-slate-400">Bangkok, Thailand</p>
                </div>
                <span className="text-slate-400 mt-2 md:mt-0 px-4 py-2 bg-green-500/20 rounded-full text-sm">April 2025 - May 2025</span>
              </div>
              <h5 className="text-xl font-medium text-green-300 mb-3">Retiree Consultants' Marketplace</h5>
              <ul className="text-slate-300 space-y-3 leading-relaxed mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built a platform with more than <span className="text-green-400 font-semibold">100 users</span>, connecting SMEs with experienced consultants</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Contributed to front-end development using <span className="text-blue-400 font-semibold">Next.js</span>, including dynamic calendar booking system, admin dashboard, notification system, and automated PDF report generator</span>
                </li>
              </ul>
              <a href="https://thaismartretiree.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors font-medium group-hover:underline">
                <span>View Website</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>

            {/* KU Tech */}
            <div className="group bg-gradient-to-r from-slate-900/80 to-slate-800/80 p-8 rounded-2xl border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-white group-hover:text-yellow-300 transition-colors">UX/UI Designer & Project Manager</h4>
                  <p className="text-yellow-400 font-medium text-lg">KU Tech</p>
                  <p className="text-slate-400">Bangkok, Thailand</p>
                </div>
                <span className="text-slate-400 mt-2 md:mt-0 px-4 py-2 bg-yellow-500/20 rounded-full text-sm">September 2024 - April 2025 & June 2025 - Now</span>
              </div>
              <ul className="text-slate-300 space-y-3 leading-relaxed">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed and delivered interfaces, enhancing usability and visual appeal for web applications</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Utilized <span className="text-pink-400 font-semibold">Figma</span> for design and deliverables</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Led cross-functional teams of <span className="text-yellow-400 font-semibold">6 members</span> to successfully deliver multiple projects on time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gradient-to-r from-slate-900/60 via-slate-800/40 to-slate-900/60 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* KU Vein */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-8 rounded-2xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 backdrop-blur-sm">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">KU Vein</h4>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-blue-400 font-medium mb-2 text-lg">Product Owner & Front-end Developer</p>
                <p className="text-slate-400 mb-4 px-3 py-1 bg-slate-700/50 rounded-full inline-block text-sm">October - December 2024</p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  A platform where students at Kasetsart University can review, Q&A, and share their notes about subjects. 
                  Features include file uploading, bookmarking system, and activity history.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-600/30 transition-colors">Next.js</span>
                  <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30 hover:bg-green-600/30 transition-colors">Django</span>
                  <span className="bg-cyan-600/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-cyan-600/30 transition-colors">TailwindCSS</span>
                </div>
                <a href="https://github.com/PanidaRumriankit/ku-vein" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium group-hover:underline">
                  <span>View Repository</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* KU Job Fair */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-slate-900/90 to-slate-800/90 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 backdrop-blur-sm">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors">KU Job Fair 2025</h4>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                    </svg>
                  </div>
                </div>
                <p className="text-purple-400 font-medium mb-2 text-lg">UX/UI Designer & Full-stack Developer</p>
                <p className="text-slate-400 mb-4 px-3 py-1 bg-slate-700/50 rounded-full inline-block text-sm">January 2025 - March 2025</p>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  A web application for the KU Job Fair & Education 2025, enabling more than 50 booths and more than 600 participating students to collect data on participating 
                  students by scanning their unique QR codes when they visit.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30 hover:bg-blue-600/30 transition-colors">Next.js</span>
                  <span className="bg-red-600/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium border border-red-500/30 hover:bg-red-600/30 transition-colors">NestJS</span>
                  <span className="bg-cyan-600/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium border border-cyan-500/30 hover:bg-cyan-600/30 transition-colors">TailwindCSS</span>
                </div>
                <a href="#" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors font-medium group-hover:underline">
                  <span>View Live Site</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent mb-4">
              Skills & Technologies
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="group">
              <h4 className="text-2xl font-semibold text-white mb-6 text-center group-hover:text-red-400 transition-colors">Languages</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 p-4 rounded-xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">Python</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-900/50 to-yellow-800/50 p-4 rounded-xl border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">JavaScript</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-900/50 to-indigo-800/50 p-4 rounded-xl border border-indigo-500/30 hover:border-indigo-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-indigo-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">TypeScript</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-4 rounded-xl border border-gray-500/30 hover:border-gray-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">C/C++</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <h4 className="text-2xl font-semibold text-white mb-6 text-center group-hover:text-red-400 transition-colors">Frontend</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 p-4 rounded-xl border border-slate-500/30 hover:border-slate-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-slate-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-slate-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">Next.js</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-900/50 to-cyan-800/50 p-4 rounded-xl border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">React</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-teal-900/50 to-teal-800/50 p-4 rounded-xl border border-teal-500/30 hover:border-teal-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">TailwindCSS</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-900/50 to-orange-800/50 p-4 rounded-xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">HTML/CSS</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <h4 className="text-2xl font-semibold text-white mb-6 text-center group-hover:text-green-400 transition-colors">Backend</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 p-4 rounded-xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">Django</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-red-900/50 to-red-800/50 p-4 rounded-xl border border-red-500/30 hover:border-red-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">NestJS</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-yellow-900/50 to-yellow-800/50 p-4 rounded-xl border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">Express</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-pink-900/50 to-pink-800/50 p-4 rounded-xl border border-pink-500/30 hover:border-pink-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pink-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">GraphQL</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group">
              <h4 className="text-2xl font-semibold text-white mb-6 text-center group-hover:text-cyan-400 transition-colors">Database & Tools</h4>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 p-4 rounded-xl border border-blue-500/30 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">PostgreSQL</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 p-4 rounded-xl border border-green-500/30 hover:border-green-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">MongoDB</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-orange-900/50 to-orange-800/50 p-4 rounded-xl border border-orange-500/30 hover:border-orange-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">MySQL</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 p-4 rounded-xl border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 backdrop-blur-sm group">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full group-hover:animate-pulse"></div>
                    <span className="font-medium">Prisma ORM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-red-400">Education</h3>
          <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h4 className="text-xl font-semibold text-white">Bachelor of Engineering</h4>
                <p className="text-blue-400 font-medium">Software and Knowledge Engineering</p>
                <p className="text-slate-400">Kasetsart University, Bangkok, Thailand</p>
              </div>
              <span className="text-slate-400 mt-2 md:mt-0">Anticipated graduation in 2027</span>
            </div>
            <div>
              <h5 className="text-lg font-medium text-blue-300 mb-2">Relevant Courses</h5>
              <p className="text-slate-300">
                Individual Software Development Process, Database, Data Structure and Algorithm, 
                Software Testing, Principles of Software Design
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Panida Rumriankit. Built with Next.js and TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
