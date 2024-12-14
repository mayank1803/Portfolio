import React from "react";
import ReactParallaxTilt from "react-parallax-tilt";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const isMobile = window.innerWidth <= 768; // Detect mobile device

  return (
    <div
      className={`animate-fadeIn bg-tertiary p-5 rounded-2xl w-full sm:w-[calc(50%-16px)] lg:w-[360px]`}
    >
      <ReactParallaxTilt
        options={
          isMobile
            ? { max: 10, scale: 1.02, speed: 250 } // Simplified options for mobile
            : { max: 35, scale: 1.05, speed: 400 }
        }
      >
        <div className="relative w-full h-[200px] sm:h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[18px] sm:text-[20px] lg:text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[12px] sm:text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[10px] sm:text-[12px] lg:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </ReactParallaxTilt>
    </div>
  );
};

const Works = () => {
  return (
    <div>
      <div>
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>
          Featured Projects
        </p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>
          Demonstrating Expertise and Innovation.
        </h2>
      </div>

      <p className="mt-3 text-secondary text-[14px] sm:text-[16px] max-w-3xl leading-[24px] sm:leading-[30px] mx-auto sm:mx-0 text-center sm:text-left">
        The following projects showcase my technical expertise and
        problem-solving skills. Each project includes links to code
        repositories and live demos.
      </p>

      <div className="mt-10 sm:mt-20 flex flex-wrap gap-6 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
