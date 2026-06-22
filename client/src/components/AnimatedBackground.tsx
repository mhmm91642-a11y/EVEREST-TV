import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const stars: Array<{ x: number; y: number; opacity: number; speed: number }> = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.6,
        opacity: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.5 + 0.1,
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;

      // Clear canvas with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0a0e27');
      gradient.addColorStop(0.5, '#1a1f3a');
      gradient.addColorStop(1, '#0f1428');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated glow effects
      const glowGradient1 = ctx.createRadialGradient(
        canvas.width * 0.2 + Math.sin(time * 0.3) * 50,
        canvas.height * 0.5 + Math.cos(time * 0.4) * 50,
        0,
        canvas.width * 0.2,
        canvas.height * 0.5,
        300
      );
      glowGradient1.addColorStop(0, 'rgba(0, 200, 255, 0.15)');
      glowGradient1.addColorStop(1, 'rgba(0, 100, 200, 0)');
      ctx.fillStyle = glowGradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const glowGradient2 = ctx.createRadialGradient(
        canvas.width * 0.8 + Math.sin(time * 0.5) * 50,
        canvas.height * 0.8 + Math.cos(time * 0.3) * 50,
        0,
        canvas.width * 0.8,
        canvas.height * 0.8,
        300
      );
      glowGradient2.addColorStop(0, 'rgba(0, 150, 255, 0.1)');
      glowGradient2.addColorStop(1, 'rgba(0, 100, 200, 0)');
      ctx.fillStyle = glowGradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars with twinkling effect
      stars.forEach((star) => {
        const twinkle = Math.sin(time * 2 + star.x + star.y) * 0.3 + 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow to stars
        ctx.strokeStyle = `rgba(0, 200, 255, ${star.opacity * twinkle * 0.3})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Draw animated mountain silhouette
      drawMountains(ctx, canvas.width, canvas.height, time);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const drawMountains = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    time: number
  ) => {
    // Main mountain range
    ctx.fillStyle = 'rgba(15, 20, 40, 0.8)';
    ctx.beginPath();
    ctx.moveTo(0, height * 0.6);

    for (let x = 0; x <= width; x += 50) {
      const baseHeight = Math.sin((x / width) * Math.PI) * height * 0.3;
      const wave = Math.sin((x / width) * Math.PI * 2 + time * 0.5) * 10;
      const y = height * 0.6 - baseHeight - wave;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();

    // Add glow to mountains
    ctx.strokeStyle = 'rgba(0, 150, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Secondary mountain range (darker)
    ctx.fillStyle = 'rgba(10, 14, 39, 0.6)';
    ctx.beginPath();
    ctx.moveTo(0, height * 0.65);

    for (let x = 0; x <= width; x += 40) {
      const baseHeight = Math.sin((x / width) * Math.PI * 1.5) * height * 0.2;
      const wave = Math.sin((x / width) * Math.PI * 2.5 + time * 0.3) * 8;
      const y = height * 0.65 - baseHeight - wave;
      ctx.lineTo(x, y);
    }

    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();
  };

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
