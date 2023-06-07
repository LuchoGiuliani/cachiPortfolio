import React from "react";
import { projects } from "../constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

function Projects() {

  
  const customPrevArrow = <div className="prev-arrow" style={{ color: 'red' }}>Prev</div>;
  const customNextArrow = <div className="next-arrow" style={{ color: 'red' }}>Next</div>;



  return (
    <div id="projects" className="bg_projects  ">
      <div></div>
      <Carousel
        prevArrow={customPrevArrow}
        nextArrow={customNextArrow}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={false}
        dynamicHeight={true}
    
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className="dot active"
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className="dot"
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            className={`${project.className} pb-8 relative justify-center items-center gap-2`}
            key={index}
          >
            <div className=" w-[356px]  rounded-xl pt-1 p-2 mb-4  top-12 left-12">
              <p className="text-[#1d1021]  sm:tracking-wide font-bold parrafo	  ">{project.description}</p>
            </div>
            <iframe
              className="rounded-xl w-[360px] sm:max-w-[660px] h-[260px] sm:h-[440px]"
              width="100%"
              
              src={project.src}
              title={project.title}
            ></iframe>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;
