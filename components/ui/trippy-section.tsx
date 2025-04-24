"use client"

import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";

const TrippyScroll = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const rotate = useTransform(scrollYProgress, [0, 0.4], ["0deg", "90deg"]);

  return (
    <div ref={targetRef} className="relative z-0 md:h-[160vh] h-[50vh]  bg-primary">
      <div className="sticky top-0 h-screen bg-primary ">
        <Trippy rotate={rotate} />
      </div>
    </div>
  );
};

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

interface SectionProps {
  background: string;
  children: ReactNode;
  rotate: MotionValue<string>;
}

const Section = ({ background, children, rotate }: SectionProps) => {
  return (
    <motion.div
      className="relative h-full w-full origin-center"
      style={{
        background,
        rotate,
        padding: PADDING,
      }}
    >
      {children}
    </motion.div>
  );
};

interface TrippyProps {
  rotate: MotionValue<string>;
}

const generateSections = (count: number, color: string, rotate: MotionValue<string>): ReactNode => {
  if (count === NUM_SECTIONS) {
    return <></>;
  }

  const nextColor = color === "#1b1500" ? "#fbcf1f" : "#1b1500";

  return (
    <Section rotate={rotate} background={color}>
      {generateSections(count + 1, nextColor, rotate)}
    </Section>
  );
};

const Trippy = ({ rotate }: TrippyProps) => {
  return (
    <motion.div className="absolute inset-0 overflow-hidden bg-black-primary">
      {generateSections(0, "black", rotate)}
    </motion.div>
  );
};

export default TrippyScroll;