import React, { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';

const About = () => {
  const startDate = new Date(2023, 1, 8); // February 8, 2023
  const [experience, setExperience] = useState('');

  useEffect(() => {
    const updateExperience = () => {
      const now = new Date();
      const diffInMonths =
        (now.getFullYear() - startDate.getFullYear()) * 12 +
        (now.getMonth() - startDate.getMonth());

      const years = Math.floor(diffInMonths / 12);
      const months = diffInMonths % 12;

      setExperience(`${years}.${months} Years Experience`);
    };

    updateExperience();
    const interval = setInterval(updateExperience, 1000 * 60 * 60 * 24); // Updates every day

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate frontend developer with {experience} of experience creating modern and responsive web applications. 
              I specialize in React, JavaScript, and modern CSS frameworks like Tailwind.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My journey in web development started during college when I built my first portfolio website. Since then, 
              I've worked with startups and established companies to deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new web technologies. 
              I'm always eager to learn and grow as a developer.
            </p>
          </div>

          <div>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Work Experience</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">Frontend Developer</p>
                  <p className="text-gray-600">Unis Technosoft Pvt Ltd • 2023 - Present</p>
                </li>
                {/* <li>
                  <p className="font-medium">Frontend Developer</p>
                  <p className="text-gray-600">WebSolutions • 2019 - 2021</p>
                </li>
                <li>
                  <p className="font-medium">Junior Developer</p>
                  <p className="text-gray-600">StartupXYZ • 2018 - 2019</p>
                </li> */}
              </ul>
            </div>
            {/* Education components */}
            
            {/* <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-indigo-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">BSc in Computer Science</p>
                  <p className="text-gray-600">University of Technology • 2014 - 2018</p>
                </li>
                <li>
                  <p className="font-medium">Web Development Bootcamp</p>
                  <p className="text-gray-600">CodeAcademy • 2017</p>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;