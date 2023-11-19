import React from 'react';
import Image from 'next/image';

const skills = [
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'React' },
  { skill: 'React Native' },
  { skill: 'Node.js' },
  { skill: 'Next.js' },
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'Docker' },
  { skill: 'PostgreSQL' },
  { skill: 'Oracle' },
  { skill: 'MySQL' },
  { skill: 'MongoDB' },
  { skill: 'Redis' },
  { skill: 'AWS' },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              What can I do to help your business?
            </h1>
            <p>
              Hi, my name is Darlan, and I am a{' '}
              <span className="font-bold">versatile</span>,{' '}
              <span className="font-bold">innovative</span>, and a real{' '}
              <span className="font-bold">team player</span> software developer
              located in Franca, São Paulo.
            </p>
            <br />
            <p>
              I hold a bachelor{`'`}s degree in Information Systems from the
              Unifran University of Franca.
            </p>
            <br />
            <p>
              I am passionate about continuous learning, and throughout my
              professional journey, I have taken several courses, including
              development training provided by IBM.
            </p>
            <br />
            <p>
              I have fourteen years of
              <span className="font-bold text-sky-500"> experience</span> that
              has provided me with a mastery of software fundamentals such as
              algorithms, data structures, databases, tests and development
              patterns as a whole.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
