"use client";
import { useEffect, useRef } from "react";

const images = [
  "https://utfs.io/f/96d1a26a-741b-40fa-9615-e53c4096f4a5-ep358k.png",
  "https://utfs.io/f/0837930c-cb67-401e-9341-34d572f846ba-eodgiw.png",
  "https://utfs.io/f/2418afa8-34fe-435a-9535-5130ad6e249f-mvmts6.png",
  "https://utfs.io/f/96d1a26a-741b-40fa-9615-e53c4096f4a5-ep358k.png",
  "https://utfs.io/f/0837930c-cb67-401e-9341-34d572f846ba-eodgiw.png",
  "https://utfs.io/f/2418afa8-34fe-435a-9535-5130ad6e249f-mvmts6.png",
  "https://utfs.io/f/96d1a26a-741b-40fa-9615-e53c4096f4a5-ep358k.png",
  "https://utfs.io/f/0837930c-cb67-401e-9341-34d572f846ba-eodgiw.png",
  "https://utfs.io/f/2418afa8-34fe-435a-9535-5130ad6e249f-mvmts6.png",
];

const PreviousPartners = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 2; // Speed of scroll
    const scroll = () => {
      if (scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0; 
        } else {
          scrollContainer.scrollLeft += scrollAmount;
        }
      }
    };

    const interval = setInterval(scroll, 30); // Smooth auto-scroll
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden pt-20 px-5 pb-10 ">
      <h2 className="text-center text-5xl sm:text-3xl md:text-8xl font-misteri mb-6 text-white">
        Our Previous Partners
      </h2>
      <div
        ref={containerRef}
        className="flex gap-6 sm:gap-10 items-center w-full overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Duplicate images for seamless effect */}
        {[...images, ...images].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Partner ${index + 1}`}
            className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default PreviousPartners;
