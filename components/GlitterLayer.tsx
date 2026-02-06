
import React, { useEffect, useRef } from 'react';

const GlitterLayer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];
    const count = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Glitter {
      x: number;
      y: number;
      size: number;
      speed: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = -20;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 1 + 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        if (this.y > window.innerHeight) this.reset();
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx.fillRect(-this.size/2, -this.size/2, this.size, this.size);
        ctx.restore();
      }
    }

    const init = () => {
      particles = Array.from({ length: count }, () => new Glitter());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40 z-[1]" />;
};

export default GlitterLayer;
