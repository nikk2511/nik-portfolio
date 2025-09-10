'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import TypingAnimation from '@/components/TypingAnimation';
import GitHubStats from '@/components/GitHubStats';
import { Github, Linkedin, Mail, ExternalLink, Download, FileText } from 'lucide-react';

export default function Home() {
  const typingTexts = [
    'Full-Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
    'Building Scalable Solutions',
  ];

  const skills = {
    languages: ['C', 'C++', 'JavaScript', 'TypeScript'],
    frontend: ['HTML5', 'CSS3', 'React', 'Next.js', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'FastAPI'],
    database: ['MongoDB', 'Vercel'],
    devops: ['Git', 'GitHub', 'Terraform'],
  };

  const projects = [
    {
      title: 'Anon Chat - Anonymous Messaging Platform',
      description: 'A secure anonymous messaging web application enabling users to share and receive feedback without revealing their identity.',
      techStack: ['Next.js', 'TypeScript', 'NextAuth.js', 'shadcn/ui', 'Tailwind CSS', 'MongoDB'],
      features: [
        '100% Secure Authentication with NextAuth.js',
        'Responsive Design with a 30% reduction in bounce rate',
        'Scalable Database handling 500+ feedback entries',
        '100+ Active Users',
      ],
      github: 'https://github.com/nikk2511',
      live: 'https://anon-chat.vercel.app',
    },
    {
      title: 'AI Chatbot for Pooja - RAG-Powered Assistant',
      description: 'An intelligent chatbot providing personalized pooja assistance using Retrieval-Augmented Generation (RAG) technology.',
      techStack: ['FastAPI', 'Next.js', 'LangChain', 'OpenAI API', 'Chroma VectorDB', 'MongoDB'],
      features: [
        'RAG Pipeline for context-aware responses from 1,000+ documents',
        '30% Improved Accuracy with embeddings and domain retrieval',
        'FastAPI Backend with robust request handling and authentication',
        'Validated with 50+ Users',
      ],
      github: 'https://github.com/nikk2511',
      live: 'https://pooja-chatbot.vercel.app',
    },
    {
      title: 'Whispr - Portfolio Project',
      description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and interactive elements.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Modern responsive design',
        'Smooth animations and transitions',
        'Interactive elements',
        'SEO optimized',
      ],
      github: 'https://github.com/nikk2511',
      live: 'https://whispr-self.vercel.app',
    },
  ];

  const certifications = [
    {
      name: 'IBM Full-Stack Software Developer',
      issuer: 'IBM',
      link: '#',
    },
    {
      name: 'Postman API Fundamentals',
      issuer: 'Postman',
      link: '#',
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      link: '#',
    },
    {
      name: 'IBM Full-Stack JavaScript Developer',
      issuer: 'IBM',
      link: '#',
    },
    {
      name: 'Computer Science Fundamentals',
      issuer: 'Coursera',
      link: '#',
    },
    {
      name: 'IBM DevOps & Software Engineering',
      issuer: 'IBM',
      link: '#',
    },
  ];

  const achievements = [
    'Over 200 hours of intensive DSA training (Algorithmic Thinking Workshop)',
    'Participant in LIET Code-A-Thon (24-hour coding marathon)',
    'Participant in LIET Code-Farming (24-hour coding competition)',
    'Active Problem Solver on LeetCode with consistent practice',
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/nikk2511',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nikhil-singh-sde/',
      icon: Linkedin,
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/nikkqwe/',
      icon: ExternalLink,
    },
    {
      name: 'Vercel Projects',
      href: 'https://vercel.com/nikk2511s-projects',
      icon: ExternalLink,
    },
    {
      name: 'Email',
      href: 'mailto:imnik2511@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
              >
                Hi there, I&apos;m{' '}
                <span className="text-blue-600 dark:text-blue-400">Nikhil Singh</span>{' '}
                👋
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 h-10 sm:h-12 flex items-center justify-center lg:justify-start"
              >
                <TypingAnimation
                  texts={typingTexts}
                  speed={100}
                  deleteSpeed={50}
                  pauseTime={2000}
                  className="font-medium"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Computer Science undergraduate passionate about building innovative web applications 
                and solving complex problems with modern technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                >
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  download="Nikhil_Singh_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base justify-center"
                >
                  <Download size={18} />
                  Resume
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center p-2">
                  <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
        <Image
                      src="/images/profile.jpg"
                      alt="Nikhil Singh - Full-Stack Developer"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover rounded-full"
                      style={{ objectPosition: 'center 30%' }}
          priority
        />
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-transparent border-t-blue-500 border-r-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              🚀 Passionate Full-Stack Developer
              </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                I&apos;m a Computer Science graduate with a strong passion for building web applications
                and solving technical problems through code. I enjoy learning new technologies
                and experimenting with projects that challenge me to grow.
                My current interests include exploring AI-powered applications,
                microservices architecture, and contributing to open-source projects,
                as I work towards developing scalable solutions that make a positive impact.
                </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
              I&apos;m always eager to learn and take on new challenges that help me improve my skills.
              I believe in continuous growth and enjoy collaborating with others to build meaningful projects.
              Let&apos;s connect and create something amazing together! 🚀
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-slate-800 p-8 rounded-lg"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 dark:text-white">Bachelor of Technology in Computer Science</h5>
                  <p className="text-gray-600 dark:text-gray-300">Lloyd Institute of Engineering and Technology, Greater Noida, UP</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Aug 2021 – July 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Download my resume to learn more about my experience, skills, and achievements
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <FileText className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Nikhil Singh - Resume
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Computer Science Undergraduate & Full-Stack Developer
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <motion.a
                      href="/resume.pdf"
                      download="Nikhil_Singh_Resume.pdf"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                    >
                      <Download size={20} />
                      Download PDF
                    </motion.a>
                    <motion.a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                      View Online
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs sm:text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-50 dark:bg-slate-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Key Features:</h4>
                  <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {feature}
          </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Profile Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16"
          >
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-slate-600">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                🚀 Visit GitHub to see more amazing projects!
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Explore my complete portfolio of projects, contributions, and open-source work. 
                From web applications to AI-powered solutions, discover the full scope of my development journey.
              </p>
              <motion.a
                href="https://github.com/nikk2511"
            target="_blank"
            rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Github size={20} />
                View GitHub Profile
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">🏆 Certifications</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications that validate my expertise in modern technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-base sm:text-lg">🏅</span>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 sm:px-3 py-1 rounded-full">
                    Verified
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm">
                  {cert.issuer}
                </p>
                
                <motion.a
                  href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium text-sm"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </motion.a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Continuously learning and expanding my skill set
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>🎓</span>
              More Certifications Coming Soon
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-slate-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <p className="text-gray-900 dark:text-white font-medium">
                    {achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Statistics Section */}
      <section id="github-stats" className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">GitHub Statistics</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <GitHubStats username="nikk2511" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-lg shadow-lg">
                <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">imnik2511@gmail.com</p>
                <motion.a
                  href="mailto:imnik2511@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                >
                  Send Email
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-lg shadow-lg">
                <Linkedin className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">Connect with me professionally</p>
                <motion.a
                  href="https://www.linkedin.com/in/nikhil-singh-sde/"
          target="_blank"
          rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                >
                  Connect
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:col-span-2 lg:col-span-1"
            >
              <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-lg shadow-lg">
                <Github className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">GitHub</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4">Check out my code</p>
                <motion.a
                  href="https://github.com/nikk2511"
          target="_blank"
          rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base"
                >
                  View Profile
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Follow Me</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
          target="_blank"
          rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  <link.icon size={32} />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
