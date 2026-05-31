import { useState, useEffect } from 'react';

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  
  useEffect(() => {
    const mql = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mql) return;
    
    const onChange = () => setReduced(!!mql.matches);
    onChange();
    
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, []);
  
  return reduced;
}
