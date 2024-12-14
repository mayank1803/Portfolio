import React from "react";
import ReactParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  // Detect mobile device
  const isMobile = window.innerWidth <= 768;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, isMobile ? 0.5 : 0.75)}
    >
      <ReactParallaxTilt
        options={
          !isMobile
            ? {
                max: 45,
                scale: 1,
                speed: 450,
              }
            : {}
        }
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]"
      >
        <div className="relative w-full h-[230px]">
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
          <h3 className="text-white font-bold text-[20px] md:text-[24px]">
            {name}
          </h3>
          <p className="mt-2 text-secondary text-[12px] md:text-[14px]">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] md:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </ReactParallaxTilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center sm:text-left`}>
          Featured Projects
        </p>
        <h2 className={`${styles.sectionHeadText} text-center sm:text-left`}>
          Demonstrating Expertise and Innovation.
        </h2>
      </motion.div>

      <div className="w-full flex justify-center sm:justify-start">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
        >
          The following projects demonstrate my technical expertise and
          real-world application of skills. Each project includes links to code
          repositories and live demos, showcasing my ability to solve complex
          problems, work with various technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="w-full flex justify-center sm:justify-start">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
        >
          These projects span web development, full-stack development, and
          AI-driven solutions, highlighting my proficiency with technologies
          such as React, Next.js, Node.js, and MongoDB.
        </motion.p>
      </div>

      <div className="mt-10 sm:mt-20 flex flex-wrap gap-4 sm:gap-7 justify-center sm:justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
