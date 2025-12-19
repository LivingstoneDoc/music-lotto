import { useEffect, useState } from 'react';

export function useFullscreenLike(threshold = 0.95) {
  const [isFullscreenLike, setIsFullscreenLike] = useState(false);

  useEffect(() => {
    function handleResize() {
      const h = window.innerHeight;
      const H = window.screen.height;
      const isFull = H > 0 && h / H >= threshold;
      setIsFullscreenLike(isFull);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [threshold]);

  return isFullscreenLike;
}