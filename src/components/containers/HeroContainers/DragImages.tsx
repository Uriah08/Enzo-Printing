"use client";
import { useRef } from "react";
 
import { DragCard } from "@/components/ui/cards-drag";
 
export function DemoCardsDrag() {
  const containerRef = useRef(null);
 
//   const DemoContainer = cn(
//     "relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950",
//   );
 
  return (
    <div className="w-full h-full mt-60 lg:hidden">
      <div ref={containerRef}>
        {CARDS_DEMO.map((card, index) => (
          <DragCard
            key={index}
            containerRef={containerRef}
            src={card.src}
            alt={card.alt}
            rotate={card.rotate}
            top={card.top}
            left={card.left}
            className={card.className}
          />
        ))}
      </div>
    </div>
  );
}
 
/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                        CONSTANTS                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
 
const CARDS_DEMO = [
  {
    src: "/papermax.svg",
    alt: "Example image",
    rotate: "6deg",
    top: "20%",
    left: "25%",
    className: "w-[120px]",
  },
  {
    src: "/mug.svg",
    alt: "Example image",
    rotate: "12deg",
    top: "45%",
    left: "60%",
    className: "w-[200px]",
  },
  {
    src: "/keychain.svg",
    alt: "Example image",
    rotate: "-6deg",
    top: "20%",
    left: "40%",
    className: "w-40",
  },
  {
    src: "/box.svg",
    alt: "Example image",
    rotate: "8deg",
    top: "50%",
    left: "40%",
    className: "w-[100px]",
  },
  {
    src: "/box2max.svg",
    alt: "Example image",
    rotate: "18deg",
    top: "20%",
    left: "65%",
    className: "w-[120px]",
  },
  {
    src: "/shirt.svg",
    alt: "Example image",
    rotate: "-3deg",
    top: "35%",
    left: "55%",
    className: "w-[250px]",
  },
] as const;