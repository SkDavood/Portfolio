import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A responsive admin dashboard for an e-commerce platform with analytics, inventory management, and order processing.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['ReactJS', 'Tailwind CSS'],
      category: 'web',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },

    // {
    //   id: 2,
    //   title: 'Weather App',
    //   description: 'A weather application that provides real-time weather data and forecasts for any location using a weather API.',
    //   image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    //   technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
    //   category: 'app',
    //   liveLink: 'https://example.com',
    //   githubLink: 'https://github.com',
    // },

    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and experience with a clean and modern design.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80',
      technologies: ['React', 'TypeScript',  'Tailwind CSS', 'Framer Motion', ],
      category: 'web',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/SkDavood/Portfolio',
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'A task management application with features like task creation, categorization, due dates, and progress tracking.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
      technologies: ['React', 'JavaScript', 'Material UI', 'HTML', 'CSS'],
      category: 'app',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/Unis-223344/task-management-front-end-',
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'A web application that allows users to search for recipes based on ingredients, dietary restrictions, and cuisine types.',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Recipe API'],
      category: 'web',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'A mobile-responsive fitness tracking application that allows users to log workouts, track progress, and set goals.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      category: 'app',
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my skills and experience in frontend development.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === 'all' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveFilter('web')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === 'web' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Web
            </button>
            <button 
              onClick={() => setActiveFilter('app')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeFilter === 'app' 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-700 hover:text-indigo-600'
              }`}
            >
              Applications
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                  >
                    {/* Live Demo
                    <ExternalLink className="h-4 w-4 ml-1" /> */}
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-indigo-600 font-medium flex items-center"
                  >
                    Code
                    <Github className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/dashboard" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View More on GitHub
            <ArrowRight className="h-4 w-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;