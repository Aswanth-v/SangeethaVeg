import { useEffect, useRef } from "react";

const SplitTextAnim = ({ text, className }) => {
  const textRef = useRef();

  useEffect(() => {
    let split;

    const observer = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting) {
        const SplitType = (await import("split-type")).default;
        const { gsap } = await import("gsap");

        split = new SplitType(textRef.current, { types: "chars" });

        gsap.from(split.chars, {
          y: 50,
          opacity: 0,
          stagger: 0.05,
          duration: 1,
        });

        observer.disconnect();
      }
    });

    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
      split?.revert();
    };
  }, []);

  return (
    <h1 ref={textRef} className={className}>
      {text}
    </h1>
  );
};

export default SplitTextAnim;