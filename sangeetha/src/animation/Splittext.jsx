import { useEffect, useRef } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

const SplitTextAnim = ({ text, className }) => {
  const textRef = useRef();

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: "chars" });

    gsap.from(split.chars, {
      y: 50,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
    });

    return () => split.revert(); // cleanup
  }, []);

  return (
    <h1 ref={textRef} className={className}>
      {text}
    </h1>
  );
};

export default SplitTextAnim;