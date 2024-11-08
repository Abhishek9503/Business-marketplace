import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScrollComponent = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <div>
      {/* Add your content here */}
      {/* <LoadingSpinner /> Optional: Show a loading spinner if needed */}
    </div>
  );
};

export default SmoothScrollComponent;
