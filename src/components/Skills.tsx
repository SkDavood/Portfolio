import React from 'react';
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3/SCSS', level: 90 },
    { name: 'JavaScript (ES6+)', level: 92 },
    { name: 'React.js', level: 90 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Redux', level: 50 },
  ];

  const softSkills = [
    'Problem Solving',
    'Communication',
    'Team Collaboration',
    'Time Management',
    'Adaptability',
    'Attention to Detail',
    'User Experience Focus',
    'Continuous Learning',
  ];

  const tools = [
    'Git',
    'VS Code',
    'Webpack',
    'npm',
    'Chrome DevTools',
    'Vercel/Netlify',
    'Figma',
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Soft Skills</h3>
            <ul className="space-y-3">
              {softSkills.map((skill) => (
                <li key={skill} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tools & Technologies */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Tools & Technologies</h3>
            <ul className="space-y-3">
              {tools.map((tool) => (
                <li key={tool} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tool}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;