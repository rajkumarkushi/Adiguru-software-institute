import { useEffect, useRef } from 'react';

/**
 * Wraps children in a div that fades in when scrolled into view.
 * Pass className to get grid classes (e.g. col-md-4) applied to the reveal div.
 */
function ScrollReveal({ children, className = '', delay = 0, direction = 'up', style = {}, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass =
    direction === 'left' ? 'from-left' :
    direction === 'right' ? 'from-right' :
    direction === 'scale' ? 'from-scale' :
    'from-up';

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
