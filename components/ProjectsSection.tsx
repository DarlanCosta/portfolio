import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Accuracy Mobile",
    description:
      "Implemented an in-house application integrated with the existing system to reduce high equipment rental costs. It involved many business rules and required total accuracy in information, which was very challenging. Ultimately, the application led to a 28% reduction in inventory costs destined for equipment rentals, resulting in significant savings for the company.",
    image: "/inventory-mobile.png",
  },
  {
    name: "Cattle Life Cycle",
    description:
      "Foods industry: formulated a complex system for comprehensive tracking of the cattle life cycle, which involved creating a mobile app using React Native, a web panel with React.js, and an API with Node.js to access real-time data, including weather forecasts, transportation, and file downloads. As a result, the app garnered over 1,000 downloads on the Play Store, delivering real-time information to users.",
    image: "/cattle.png",
  },
  {
    name: "Complet ERP for Advertising Ecosystem",
    description:
      "Advertising Industry: redesigned a system based on jQuery in order to migrate to React.js, with a focus on preserving critical business rules and ensuring the continued smooth operation of the core application. The implementation of robust testing strategies enabled a seamless transition to the new platform while maintaining flawless functionality in the existing system. The outcome was a remarkable 50% reduction in payment processing time and supplier release.",
    image: "/ads.png",
  },
  {
    name: "Credit Card Manager",
    description:
      "Engineered a credit card conciliator software based on Delphi, automating the reconciliation process and providing real-time tracking to the customer, which reduced 40% of the processing time.",
    image: "/creditcard.png",
  },
  {
    name: "Fast Food Service to Customers",
    description:
      "Fast Food Industry: successfully integrated a mobile sales system using React Native and a Node.js API, serving as a point of sale and payment processing, offering a dynamic and effective solution while enhancing overall mobility in the fast food industry.",
    image: "/fast-food.png",
  },
  {
    name: "Federal Invoice",
    description:
      "Created a software solution designed to facilitate tax invoice calculations. This project entailed the meticulous development of software in strict adherence to the provided federal layout specifications, integrated with Delphi components, and specialized skills. As a result of this concerted effort, we not only successfully met the government's deadline but also achieved the seamless generation of an average of 900 invoices per month, effectively fulfilling our compliance obligation.",
    image: "/invoice.png",
  },
  {
    name: "Helpvip OS",
    description:
      "Built a software controller meticulously engineered to manage the entire service order cycle. This undertaking entailed the utilization of Delphi, encompassing a wide array of technologies, responsibilities, and skill sets. The resultant achievement was a streamlined service control system, concurrently optimizing the overall maintenance workflow within the company.",
    image: "/helpvip.png",
  },
  {
    name: "Social Media Aimed to Female Audience",
    description:
      "Marketing Industry: designed a female-oriented social network where users could form groups and engage through comments and services, which included an API utilizing AWS Lambda, a web interface based on React.js, and a mobile application with React Native. Despite a tight six-month deadline, we successfully delivered a fully functional social network capable of supporting up to 10,000 users.",
    image: "/social-media.png",
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
                    <Image
                      src={project.image}
                      alt=""
                      width={200}
                      height={200}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400 text-center md:text-left">
                      {project.description}
                    </p>
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
