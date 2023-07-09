import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Accuracy Mobile',
    description:
      'Mobile software developed with React Native to perform stock inventories.',
    image: '/inventory-mobile.png',
    github: 'https://github.com/DarlanCosta/accuracy-mobile/',
    link: '',
  },
  {
    name: 'Accuracy Desktop',
    description:
      'Desktop software that has the objective of controlling the generation of operational reports and inventory management.',
    image: '/inventory-desktop.png',
    github: '',
    link: '',
  },
  {
    name: 'Helpvip OS',
    description:
      'Service order management software with reporting includes a summary of calls and technical notes.',
    image: '/helpvip.png',
    github: '',
    link: '',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col justify-center animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="self-center">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={200}
                        height={200}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4 justify-center md:justify-start">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
