import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const widthVideo = window.innerWidth < 760 ? smallHeroVideo : heroVideo;
  const [videoSrc, setVideoSrc] = useState(widthVideo);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () =>{
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, []);


  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2.5 });
    gsap.to("#cta", { opacity: 1, y:-50, delay: 2.5 });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">Acheter</a>
        <p className="font-normal text-xl">À partir de 149€/mois ou 1799€</p>
      </div>
    </section>
  );
};

export default Hero;
