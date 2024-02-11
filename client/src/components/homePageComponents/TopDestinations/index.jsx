import React, { useEffect, useRef } from "react";

import destinationImg1 from "../../../assets/images/rt-1.jpg";
import destinationImg2 from "../../../assets/images/rt-2.jpg";
import destinationImg3 from "../../../assets/images/rt-3.jpg";
import destinationImg4 from "../../../assets/images/rt-4.jpg";
import destinationImg5 from "../../../assets/images/rt-5.jpg";
import destinationImg6 from "../../../assets/images/New-York-City-400x400.jpg";
import destinationImg7 from "../../../assets/images/San-Francisco-400x400.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import "./index.scss";
import SectionTitle from "@/components/commonComponents/SectionTitle";

const TopDestinations = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: destinationImg1,
      scale: scale4,
    },
    {
      src: destinationImg2,
      scale: scale5,
    },
    {
      src: destinationImg3,
      scale: scale6,
    },
    {
      src: destinationImg4,
      scale: scale5,
    },
    {
      src: destinationImg5,
      scale: scale6,
    },
    {
      src: destinationImg6,
      scale: scale8,
    },
    {
      src: destinationImg7,
      scale: scale9,
    },
  ];

  return (
    <section id="top-destinations"  className="">
        <div className="wrapper flex justify-center text-center py-4">
        <SectionTitle
            title='Top Destinations'
            subtitle='Enjoy Your Dream'
        />
        </div>
      <div ref={container} className="destinations-container">
        <div className="position-sticky">
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className="main-el">
                <div className="image-container">
                  <img src={src} alt="image" />
                </div>
              </motion.div>
            );
          })}
          {/* <div className="main-el">
                <div className="image-container">
                    <img src={destinationImg4} alt=""   />
                </div>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
