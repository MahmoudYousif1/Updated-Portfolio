import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {

  const projects = [
    {
      name: 'Project One',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies tincidunt.',
      imageUrl: 'src/assets/flower2.jpg',
      githubUrl: 'https://github.com/yourusername/project-one',
      liveUrl: 'https://projectone.com'
    },
    {
      name: 'Project Two',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies tincidunt.',
      imageUrl: 'src/assets/flower1.jpg',
      githubUrl: 'https://github.com/yourusername/project-two',
      liveUrl: 'https://projecttwo.com'
    },
    {
      name: 'Project Three',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies tincidunt.',
      imageUrl: 'src/assets/w2.jpg',
      githubUrl: 'https://github.com/yourusername/project-three',
      liveUrl: 'https://projectthree.com'
    },
    {
      name: 'Project Four',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec nunc ultricies tincidunt.',
      imageUrl: 'src/assets/w1.jpg',
      githubUrl: 'https://github.com/yourusername/project-four',
      liveUrl: 'https://projectfour.com'
    },
  ];

  return (
    <div className="bg-black text-white p-8" id='project'>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4">
              <img src={project.imageUrl} alt={project.name} className="rounded-md mb-4 w-full max-w-xs h-48 object-cover mx-auto"/>
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex justify-around">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaGithub size="1.5em" />
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                  <FaExternalLinkAlt size="1.5em" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
