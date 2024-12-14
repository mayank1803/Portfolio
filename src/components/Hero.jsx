import { motion } from "framer-motion";

import { styles } from "../styles";
import profileImage from "../assets/Passport_photo_2.png";
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Intro Section */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse sm:flex-row items-center gap-10`}
      >
        {/* Text Section */}
        <div className="flex flex-col justify-center items-start z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Mayank Agarwal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I develop user interfaces and efficient web applications with <br />
            a strong foundation in <br />
            data structures.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full sm:w-1/2 h-auto flex justify-center  items-center">
          {/* Large screen layout */}
          <div className="hidden sm:block w-full h-auto ">
            <img
              src={profileImage}
              alt="Mayank Agarwal"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              
            />
          </div>

          {/* Small screen circular layout */}
          <div className="block sm:hidden w-40 h-41 rounded-full overflow-hidden border-4 border-[#915EFF] shadow-lg">
            <img
              src={profileImage}
              alt="Mayank Agarwal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
