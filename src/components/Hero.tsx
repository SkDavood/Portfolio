import React, { useState, useEffect } from "react";
import { ArrowRight, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const startDate = new Date("2023-02-08");
  const [experience, setExperience] = useState("");
  const [imageSrc, setImageSrc] = useState(
    "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600"
  );

  const hoverImage = 
  "https://raw.githubusercontent.com/SkDavood/Portfolio/main/src/Images/DavoodImage.jpeg";

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
    const interval = setInterval(updateExperience, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12">
            <p className="text-indigo-600 font-semibold mb-2">
              Frontend Developer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm{" "}
              <span className="text-indigo-600">Shaik Khaja Davood</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the
              web. Focused on creating intuitive and responsive interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors flex items-center justify-center"
              >
                Contact Me
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-khaja-davood-67476b210/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                <img
                  src={imageSrc}
                  alt="Davood"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                  onMouseEnter={() => setImageSrc(hoverImage)}
                  onMouseLeave={() => setImageSrc(
                    "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600"
                  )}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-100 rounded-lg p-4 shadow-md">
                <p className="text-indigo-600 font-medium">{experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




















// import React, { useState, useEffect } from "react";
// import { ArrowRight, Github, Linkedin } from "lucide-react";

// const Hero = () => {
//   const startDate = new Date("2023-02-08"); // Replace with actual start date
//   const [experience, setExperience] = useState("");

//   useEffect(() => {
//     const updateExperience = () => {
//       const now = new Date();
//       const diffInMonths =
//         (now.getFullYear() - startDate.getFullYear()) * 12 +
//         (now.getMonth() - startDate.getMonth());

//       const years = Math.floor(diffInMonths / 12);
//       const months = diffInMonths % 12;

//       setExperience(`${years}.${months} Years Experience`);
//     };

//     updateExperience();
//     const interval = setInterval(updateExperience, 1000 * 60 * 60 * 24); // Update daily

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 md:pr-12">
//             <p className="text-indigo-600 font-semibold mb-2">
//               Frontend Developer
//             </p>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
//               Hi, I'm{" "}
//               <span className="text-indigo-600">Shaik Khaja Davood</span>
//             </h1>
//             <p className="text-lg text-gray-700 mb-8 max-w-lg">
//               I build exceptional and accessible digital experiences for the
//               web. Focused on creating intuitive and responsive interfaces.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 mb-8">
//               <a
//                 href="#projects"
//                 className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
//               >
//                 View Projects
//                 <ArrowRight className="h-4 w-4" />
//               </a>
//               <a
//                 href="#contact"
//                 className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-colors flex items-center justify-center"
//               >
//                 Contact Me
//               </a>
//             </div>

//             <div className="flex space-x-4">
//               <a
//                 href="https://github.com/dashboard"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-700 hover:text-indigo-600 transition-colors"
//               >
//                 <Github className="h-6 w-6" />
//               </a>
//               <a
//                 href="www.linkedin.com/in/shaik-khaja-davood-67476b210"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-700 hover:text-indigo-600 transition-colors"
//               >
//                 <Linkedin className="h-6 w-6" />
//               </a>
//               {/* <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-700 hover:text-indigo-600 transition-colors"
//               >
//                 <Twitter className="h-6 w-6" />
//               </a> */}
//             </div>
//           </div>

//           <div className="md:w-1/2 mt-12 md:mt-0">
//             <div className="relative">
//               <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
//                 <img
//                   src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="Davood"
//                   className="w-full h-full object-cover"
//                 />
                
//               </div>
//               <div className="absolute -bottom-4 -right-4 bg-indigo-100 rounded-lg p-4 shadow-md">
//                 <p className="text-indigo-600 font-medium">{experience}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
