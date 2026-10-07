"use client";

import React, { useEffect, useRef } from "react";

interface CosmicBackgroundProps {
  globePosition?: "left" | "right" | "ambient" | "none";
}

export default function CosmicBackground({
  globePosition = "ambient",
}: CosmicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Stars / "Sitare"
    interface Star {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speed: number;
      twinkleOffset: number;
      color: string;
      isCrossFlare?: boolean;
    }

    const stars: Star[] = [];
    const STAR_COUNT = 130;

    for (let i = 0; i < STAR_COUNT; i++) {
      const isCross = Math.random() > 0.9;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isCross ? Math.random() * 1.5 + 1.2 : Math.random() * 1.3 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.02 + 0.008,
        twinkleOffset: Math.random() * Math.PI * 2,
        color:
          Math.random() > 0.75
            ? "#38bdf8"
            : Math.random() > 0.5
            ? "#93c5fd"
            : "#ffffff",
        isCrossFlare: isCross,
      });
    }

    // Shooting Stars
    interface ShootingStar {
      x: number;
      y: number;
      len: number;
      speed: number;
      angle: number;
      opacity: number;
      active: boolean;
      delay: number;
    }

    const shootingStars: ShootingStar[] = [
      {
        x: 0,
        y: 0,
        len: 120,
        speed: 12,
        angle: Math.PI / 4,
        opacity: 0,
        active: false,
        delay: 80,
      },
      {
        x: 0,
        y: 0,
        len: 160,
        speed: 14,
        angle: Math.PI / 4 + 0.1,
        opacity: 0,
        active: false,
        delay: 240,
      },
    ];

    // Constellation / glowing network nodes
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      baseAlpha: number;
    }

    const nodes: Node[] = [];
    const NODE_COUNT = 28;

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        radius: Math.random() * 2.2 + 1.2,
        color: Math.random() > 0.45 ? "#38bdf8" : "#60a5fa",
        baseAlpha: Math.random() * 0.4 + 0.6,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.014;
      ctx.clearRect(0, 0, width, height);

      // Deep space base gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        40,
        width * 0.5,
        height * 0.5,
        width * 0.85
      );
      bgGrad.addColorStop(0, "rgba(8, 26, 68, 0.45)");
      bgGrad.addColorStop(0.4, "rgba(4, 14, 38, 0.7)");
      bgGrad.addColorStop(0.8, "rgba(2, 6, 23, 0.95)");
      bgGrad.addColorStop(1, "rgba(1, 4, 16, 1)");

      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Center Ambient Backlight Glow behind the card
      const centerHalo = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        10,
        width * 0.5,
        height * 0.5,
        Math.min(width * 0.45, 360)
      );
      centerHalo.addColorStop(0, "rgba(37, 99, 235, 0.28)");
      centerHalo.addColorStop(0.5, "rgba(6, 182, 212, 0.1)");
      centerHalo.addColorStop(1, "rgba(2, 6, 23, 0)");
      ctx.fillStyle = centerHalo;
      ctx.fillRect(0, 0, width, height);

      // Draw Rotating 3D Digital Cyber Globe in Background (Left-anchored on desktop)
      ctx.save();
      const globeCenterX = width > 1024 ? width * 0.12 : width * 0.08;
      const globeCenterY = height * 0.5;
      const globeRadius = Math.min(width * 0.32, height * 0.44, 340);

      // Globe Atmospheric Glow Aura
      const globeGlow = ctx.createRadialGradient(
        globeCenterX,
        globeCenterY,
        globeRadius * 0.3,
        globeCenterX,
        globeCenterY,
        globeRadius * 1.35
      );
      globeGlow.addColorStop(0, "rgba(14, 116, 244, 0.3)");
      globeGlow.addColorStop(0.5, "rgba(56, 189, 248, 0.12)");
      globeGlow.addColorStop(1, "rgba(2, 6, 23, 0)");

      ctx.fillStyle = globeGlow;
      ctx.beginPath();
      ctx.arc(globeCenterX, globeCenterY, globeRadius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // Globe Rim
      ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(globeCenterX, globeCenterY, globeRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Globe Latitude lines
      const latCount = 8;
      for (let i = 1; i < latCount; i++) {
        const latY = globeCenterY + (i / latCount - 0.5) * globeRadius * 1.8;
        const dy = latY - globeCenterY;
        const chord = Math.sqrt(Math.max(0, globeRadius * globeRadius - dy * dy));

        ctx.strokeStyle = "rgba(56, 189, 248, 0.14)";
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.ellipse(globeCenterX, latY, chord, chord * 0.26, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Globe Longitude rotating lines
      const lonCount = 7;
      for (let j = 0; j < lonCount; j++) {
        const lonPhase = time * 0.55 + (j / lonCount) * Math.PI;
        const scaleX = Math.cos(lonPhase);

        ctx.strokeStyle = `rgba(56, 189, 248, ${0.08 + Math.abs(scaleX) * 0.15})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(
          globeCenterX,
          globeCenterY,
          Math.abs(scaleX) * globeRadius,
          globeRadius,
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      // Orbital Ring
      ctx.strokeStyle = "rgba(14, 165, 233, 0.28)";
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.ellipse(
        globeCenterX,
        globeCenterY,
        globeRadius * 1.32,
        globeRadius * 0.38,
        -Math.PI / 6,
        0,
        Math.PI * 2
      );
      ctx.stroke();

      // Glowing Data Nodes on the Globe
      const pointCount = 18;
      for (let p = 0; p < pointCount; p++) {
        const pAngle = (p / pointCount) * Math.PI * 2 + time * 0.4;
        const pYOffset = Math.sin(p * 1.8 + time * 0.25) * globeRadius * 0.72;
        const pRadiusAtY = Math.sqrt(
          Math.max(0, globeRadius * globeRadius - pYOffset * pYOffset)
        );
        const px = globeCenterX + Math.cos(pAngle) * pRadiusAtY;
        const py = globeCenterY + pYOffset;

        if (Math.sin(pAngle) > -0.2) {
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(px, py, 1.6, 0, Math.PI * 2);
          ctx.fill();

          const pGlow = ctx.createRadialGradient(px, py, 0, px, py, 5.5);
          pGlow.addColorStop(0, "rgba(56, 189, 248, 0.85)");
          pGlow.addColorStop(1, "rgba(2, 6, 23, 0)");
          ctx.fillStyle = pGlow;
          ctx.beginPath();
          ctx.arc(px, py, 5.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // Draw Luminous 3D Digital Sine Wave Lattice at Bottom
      ctx.save();
      const waveCount = 12;
      const waveStartX = 0;
      const waveEndX = width + 40;

      for (let w = 0; w < waveCount; w++) {
        const progress = w / waveCount;
        ctx.beginPath();
        const baseHeight = height * (0.68 + progress * 0.32);

        ctx.strokeStyle = `rgba(56, 189, 248, ${0.05 + progress * 0.12})`;
        ctx.lineWidth = 0.9 + progress * 0.6;

        for (let x = waveStartX; x <= waveEndX; x += 24) {
          const xNorm = x / width;
          const yOffset =
            Math.sin(xNorm * 4.5 + time + w * 0.35) * (18 + progress * 24) +
            Math.cos(xNorm * 2.8 - time * 0.5 + w * 0.2) * (12 + progress * 16);

          const curY = baseHeight + yOffset;

          if (x === waveStartX) {
            ctx.moveTo(x, curY);
          } else {
            ctx.lineTo(x, curY);
          }
        }
        ctx.stroke();
      }
      ctx.restore();

      // Draw Constellation Lines
      ctx.save();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.2;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Update & Draw Constellation Nodes (Glowing blue stars)
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > height - 10) node.vy *= -1;

        const nodeGlow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 4
        );
        nodeGlow.addColorStop(0, "rgba(56, 189, 248, 0.75)");
        nodeGlow.addColorStop(0.5, "rgba(37, 99, 235, 0.2)");
        nodeGlow.addColorStop(1, "rgba(2, 6, 23, 0)");

        ctx.fillStyle = nodeGlow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 0.9, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw Twinkling Stars (Chand Sitare)
      for (const star of stars) {
        const twinkle =
          Math.sin(time * 2.2 + star.twinkleOffset) * 0.35 + star.alpha;
        const currentAlpha = Math.max(0.12, Math.min(1, twinkle));

        if (star.isCrossFlare) {
          // Celestial Starburst with cross flare
          const starGlow = ctx.createRadialGradient(
            star.x,
            star.y,
            0,
            star.x,
            star.y,
            star.radius * 4
          );
          starGlow.addColorStop(0, `rgba(255, 255, 255, ${currentAlpha})`);
          starGlow.addColorStop(0.4, `rgba(56, 189, 248, ${currentAlpha * 0.5})`);
          starGlow.addColorStop(1, "rgba(2, 6, 23, 0)");

          ctx.fillStyle = starGlow;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
          ctx.fill();

          // Cross flare rays
          ctx.strokeStyle = `rgba(255, 255, 255, ${currentAlpha * 0.65})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(star.x - star.radius * 3.5, star.y);
          ctx.lineTo(star.x + star.radius * 3.5, star.y);
          ctx.moveTo(star.x, star.y - star.radius * 3.5);
          ctx.lineTo(star.x, star.y + star.radius * 3.5);
          ctx.stroke();
        }

        ctx.fillStyle =
          star.color === "#38bdf8"
            ? `rgba(56, 189, 248, ${currentAlpha})`
            : star.color === "#93c5fd"
            ? `rgba(147, 197, 253, ${currentAlpha})`
            : `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw & Update Shooting Stars
      for (const shoot of shootingStars) {
        if (!shoot.active) {
          shoot.delay--;
          if (shoot.delay <= 0) {
            shoot.active = true;
            shoot.x = Math.random() * width * 0.7;
            shoot.y = Math.random() * height * 0.35;
            shoot.opacity = 1;
            shoot.delay = Math.floor(Math.random() * 250 + 150);
          }
        } else {
          shoot.x += Math.cos(shoot.angle) * shoot.speed;
          shoot.y += Math.sin(shoot.angle) * shoot.speed;
          shoot.opacity -= 0.016;

          if (shoot.opacity <= 0 || shoot.x > width || shoot.y > height) {
            shoot.active = false;
          } else {
            const tailX = shoot.x - Math.cos(shoot.angle) * shoot.len;
            const tailY = shoot.y - Math.sin(shoot.angle) * shoot.len;

            const grad = ctx.createLinearGradient(shoot.x, shoot.y, tailX, tailY);
            grad.addColorStop(0, `rgba(255, 255, 255, ${shoot.opacity})`);
            grad.addColorStop(0.3, `rgba(56, 189, 248, ${shoot.opacity * 0.7})`);
            grad.addColorStop(1, "rgba(2, 6, 23, 0)");

            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(shoot.x, shoot.y);
            ctx.lineTo(tailX, tailY);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [globePosition]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-[#020617]/40" />
    </div>
  );
}
