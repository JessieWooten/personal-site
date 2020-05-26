import React, { useRef } from "react";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = useRef();
  React.useEffect(() => {
    const currentRef = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // only when scrolling down
        if (entry.boundingClientRect.top > 0) setVisible(entry.isIntersecting);
      });
    });
    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, [isVisible]);
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
