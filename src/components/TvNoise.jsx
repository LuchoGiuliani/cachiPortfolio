import React, { useRef, useEffect } from 'react';

function TVNoise() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let requestId;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
    };

    const noise = () => {
      const w = ctx.canvas.width;
      const h = ctx.canvas.height;
      const iData = ctx.createImageData(w, h);
      const buffer32 = new Uint32Array(iData.data.buffer);
      const len = buffer32.length;
      let i = 0;

      for (; i < len; i++) {
        if (Math.random() < 0.5) buffer32[i] = 0xffffffff;
      }

      ctx.putImageData(iData, 0, 0);
    };

    const loop = () => {
      noise();
      requestId = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return <canvas className='' ref={canvasRef} />;
}

export default TVNoise;
