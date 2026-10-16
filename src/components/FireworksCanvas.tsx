import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  size: number;
  decay: number;
}

interface HeartFirework {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  color: string;
  exploded: boolean;
  particles: Particle[];
}

const FireworksCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const fireworksRef = useRef<HeartFirework[]>([]);
  const backgroundParticlesRef = useRef<Particle[]>([]);

  const colors = [
    '#FFB6C1',
    '#FF69B4',
    '#FF1493',
    '#DB7093',
    '#FFC0CB',
    '#FFE4E1',
    '#FFA07A',
    '#FFD700',
  ];

  const createHeartParticle = (x: number, y: number, color: string): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 3 + 1;
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color,
      size: Math.random() * 3 + 2,
      decay: Math.random() * 0.02 + 0.01,
    };
  };

  const createFirework = (canvasWidth: number, canvasHeight: number): HeartFirework => {
    const x = Math.random() * canvasWidth;
    const targetY = Math.random() * (canvasHeight * 0.4) + canvasHeight * 0.1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    return {
      x,
      y: canvasHeight,
      targetY,
      vy: -(Math.random() * 5 + 8),
      color,
      exploded: false,
      particles: [],
    };
  };

  const createBackgroundParticle = (canvasWidth: number, canvasHeight: number): Particle => {
    return {
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: -(Math.random() * 0.5 + 0.2),
      alpha: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 2 + 1,
      decay: 0,
    };
  };

  const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
    ctx.save();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + size * 0.3);
    ctx.bezierCurveTo(
      x, y,
      x - size * 0.5, y,
      x - size * 0.5, y + size * 0.3
    );
    ctx.bezierCurveTo(
      x - size * 0.5, y + size * 0.7,
      x, y + size,
      x, y + size
    );
    ctx.bezierCurveTo(
      x, y + size,
      x + size * 0.5, y + size * 0.7,
      x + size * 0.5, y + size * 0.3
    );
    ctx.bezierCurveTo(
      x + size * 0.5, y,
      x, y,
      x, y + size * 0.3
    );
    ctx.fill();
    ctx.restore();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      backgroundParticlesRef.current = [];
      for (let i = 0; i < 50; i++) {
        backgroundParticlesRef.current.push(createBackgroundParticle(canvas.width, canvas.height));
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let lastFireworkTime = 0;
    const fireworkInterval = 800;

    const animate = (timestamp: number) => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(255, 245, 250, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(255, 192, 203, 0.1)');
      gradient.addColorStop(1, 'rgba(255, 182, 193, 0.2)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (timestamp - lastFireworkTime > fireworkInterval) {
        fireworksRef.current.push(createFirework(canvas.width, canvas.height));
        lastFireworkTime = timestamp;
      }

      backgroundParticlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }

        ctx.save();
        ctx.globalAlpha = particle.alpha;
        drawHeart(ctx, particle.x, particle.y, particle.size, particle.color);
        ctx.restore();
      });

      fireworksRef.current = fireworksRef.current.filter((firework) => {
        if (!firework.exploded) {
          firework.y += firework.vy;
          firework.vy += 0.1;

          ctx.save();
          ctx.globalAlpha = 1;
          drawHeart(ctx, firework.x, firework.y, 8, firework.color);
          ctx.restore();

          if (firework.y <= firework.targetY || firework.vy >= 0) {
            firework.exploded = true;
            for (let i = 0; i < 30; i++) {
              firework.particles.push(createHeartParticle(firework.x, firework.y, firework.color));
            }
          }
          return true;
        }

        firework.particles = firework.particles.filter((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vy += 0.05;
          particle.alpha -= particle.decay;

          if (particle.alpha <= 0) return false;

          ctx.save();
          ctx.globalAlpha = particle.alpha;
          drawHeart(ctx, particle.x, particle.y, particle.size, particle.color);
          ctx.restore();

          return true;
        });

        return firework.particles.length > 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
};

export default FireworksCanvas;
