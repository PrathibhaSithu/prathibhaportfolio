import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FadeInSection = ({ children, className = "" }) => {
  const elRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: elRef.current,
            start: "top bottom-=100",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, elRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};

export default FadeInSection;
