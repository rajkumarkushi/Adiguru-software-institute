import { useEffect, useRef, useState } from 'react';

/**
 * Animated number counter that starts when element scrolls into view.
 * Accepts targets like "5000+", "95%", "Weekly", "25+"
 */
function CountUp({ target, duration = 2000 }) {
  const match = String(target).match(/^([\d.]+)(\D*)$/);
  const num = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : '';

  const [count, setCount] = useState(num !== null ? 0 : null);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (num === null) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(num);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, duration]);

  if (num === null) return <span ref={ref}>{target}</span>;
  return <span ref={ref}>{count}{suffix}</span>;
}

export default CountUp;
