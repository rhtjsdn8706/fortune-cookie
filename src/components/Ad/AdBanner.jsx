import { useEffect, useRef } from 'react';

export default function AdBanner({ format = 'auto', className = '' }) {
  const adRef = useRef(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      if (adRef.current && adRef.current.childElementCount === 0) {
        const ins = document.createElement('ins');
        ins.className = 'adsbygoogle';
        ins.style.display = 'block';
        ins.setAttribute('data-ad-client', 'ca-pub-5600670028741938');
        ins.setAttribute('data-ad-slot', '');
        ins.setAttribute('data-ad-format', format);
        ins.setAttribute('data-full-width-responsive', 'true');
        adRef.current.appendChild(ins);

        (window.adsbygoogle = window.adsbygoogle || []).push({});
        pushed.current = true;
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, [format]);

  return (
    <div
      ref={adRef}
      className={`w-full overflow-hidden ${className}`}
      style={{ minHeight: '100px' }}
    />
  );
}
