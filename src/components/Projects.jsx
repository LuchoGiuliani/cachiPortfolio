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
      <Carousel
        prevArrow={customPrevArrow}
        nextArrow={customNextArrow}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={false}
        dynamicHeight={true}
        autoPlay={true}
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
            className={`${project.className} justify-center items-center`}
            key={index}
          >
            <iframe
              className="rounded-xl w-[360px] sm:max-w-[660px] h-[360px] sm:h-[440px]"
              width="100%"
              height="100%"
              src={project.src}
              title={project.title}
            ></iframe>
            <div className="bg-[#d8cece] w-[256px] max-h-[256px] rounded-xl p-1">
              <p className="text-[#312b2b] text-center truncate ">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects;
