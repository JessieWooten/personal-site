import React, { useRef } from "react";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = useRef();
  React.useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {isVisible && props.children}
    </div>
  );
};

export default FadeInSection;
