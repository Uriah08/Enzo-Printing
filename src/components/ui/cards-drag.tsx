"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
 
export const DragCards = cn("absolute inset-0 z-10");
export const DragCardsTitle = cn(
  "relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px]",
);
 
type TDragCard = {
  containerRef: React.RefObject<HTMLDivElement>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className: string;
};
 
export function DragCard({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}: TDragCard) {
  const [zIndex, setZIndex] = useState(0);
 
  return (
    <motion.img
      onMouseDown={() => updateZIndex_(setZIndex)}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 p-1 pb-4 clip-shadow",
        className,
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
}
 
/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                     ✨ FUNCTIONS ✨                        */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
 
const updateZIndex_ = (setZIndex: React.Dispatch<React.SetStateAction<number>>) => {
  const els = document.querySelectorAll(".drag-elements");
 
  let maxZIndex = Number.NEGATIVE_INFINITY;
 
  els.forEach((el) => {
    const zIndex = Number.parseInt(
      window.getComputedStyle(el).getPropertyValue("z-index"),
    );
 
    if (!Number.isNaN(zIndex) && zIndex > maxZIndex) {
      maxZIndex = zIndex;
    }
  });
 
  setZIndex(maxZIndex + 1);
};