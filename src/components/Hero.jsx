import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg';
import { useTypewriter } from '../hooks/useTypewriter';

// ─── Neural Network Particle Canvas ──────────────────────────────────────────
function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrameId;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const PARTICLE_COUNT = 55;
    const CONNECTION_DIST = 140;

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r:  Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height)  p.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = (1 - dist / CONNECTION_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124, 58, 237, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(167, 139, 250, 0.7)';
        ctx.fill();
        // glow
        ctx.shadowColor = 'rgba(124, 58, 237, 0.8)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
    />
  );
}

// ─── Typewriter Hook ──────────────────────────────────────────────────────────
const ROLES = [
  'AI/ML Engineer',
  'Computer Vision Dev',
  'Deep Learning Builder',
  'Data Science Enthusiast',
];

// ─── Stats Row ────────────────────────────────────────────────────────────────
const stats = [
  { value: '3+',       label: 'AI/ML Projects' },
  { value: '6574',     label: 'GATE DA 2026 AIR' },
  { value: 'CV+DL',    label: 'Specialization' },
];

// ─── Hero Component ───────────────────────────────────────────────────────────
const Hero = () => {
  const role = useTypewriter(ROLES);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show:   { opacity: 1, y: 0,  transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030712] dot-grid"
    >
      {/* Neural network particle canvas */}
      <NeuralCanvas />

      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px]" />
        <div className="absolute top-1/2 left-0 h-64 w-64 rounded-full bg-accent-500/10 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col md:flex-row items-center justify-between gap-16">

        {/* ── Left: Text Content ── */}
        <motion.div
          className="flex-1 text-center md:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Status badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
            <span className="badge-violet">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
              Open to Opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={item} className="text-white/60 font-mono text-sm mb-2 tracking-widest uppercase">
            Hey there 👋 I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4"
          >
            <span className="text-white">Prakash</span>{' '}
            <span className="gradient-text">Mani Patel</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={item} className="flex items-center gap-2 mb-6 justify-center md:justify-start">
            <span className="font-mono text-xl sm:text-2xl text-cyan-400 font-medium">
              {role}
            </span>
            <span className="h-7 w-0.5 bg-cyan-400 animate-cursor-blink rounded-full" />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl mb-8 mx-auto md:mx-0"
          >
            CS student passionate about building intelligent systems that solve real-world problems.
            Specializing in <span className="text-violet-400 font-medium">Computer Vision</span>,{' '}
            <span className="text-cyan-400 font-medium">Healthcare AI</span>, and{' '}
            <span className="text-accent-400 font-medium">Recommendation Systems</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(124,58,237,0.5)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.8)] hover:scale-105"
            >
              View Projects <FiArrowRight className="text-base" />
            </a>
            <a
              href="/resume.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:bg-white/10 hover:scale-105"
            >
              <FiDownload className="text-base" /> Download Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/PRAKASH230502"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-violet-500/50 hover:text-white hover:bg-violet-600/15 hover:scale-110"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/prakash-mani-181366275/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-600/10 hover:scale-110"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:prakashmanipatel7@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-accent-500/50 hover:text-accent-400 hover:bg-accent-600/10 hover:scale-110"
            >
              <span className="text-sm">@</span>
            </a>
          </motion.div>
        </motion.div>

        {/* ── Right: Profile Image ── */}
        <motion.div
          className="flex-shrink-0 flex flex-col items-center gap-8"
          initial={{ opacity: 0, scale: 0.8, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          {/* Hexagonal profile with rotating rings */}
          <div className="relative">
            {/* Outer rotating gradient ring */}
            <div
              className="absolute -inset-4 rounded-full animate-spin-slow"
              style={{
                background: 'conic-gradient(from 0deg, #7c3aed, #22d3ee, #f97316, #7c3aed)',
                borderRadius: '50%',
                padding: '2px',
                filter: 'blur(0px)',
              }}
            >
              <div className="h-full w-full rounded-full bg-[#030712]" />
            </div>

            {/* Inner counter-rotating ring */}
            <div
              className="absolute -inset-2 rounded-full animate-spin-slow-reverse opacity-60"
              style={{
                background: 'conic-gradient(from 180deg, #22d3ee, #7c3aed, #22d3ee)',
                borderRadius: '50%',
                padding: '1px',
              }}
            >
              <div className="h-full w-full rounded-full bg-[#030712]" />
            </div>

            {/* Profile image */}
            <div className="relative h-56 w-56 sm:h-64 sm:w-64 overflow-hidden rounded-full border-2 border-violet-600/40 shadow-[0_0_60px_rgba(124,58,237,0.4)] animate-float">
              <img
                src={profileImg}
                alt="Prakash Mani Patel — AI/ML Engineer"
                className="h-full w-full object-cover"
              />
              {/* Overlay shimmer */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-violet-900/30" />
            </div>

            {/* Glow pulse behind */}
            <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-2xl animate-pulse-glow -z-10" />
          </div>

          {/* Stats row */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="glass-card px-4 py-3 text-center min-w-[80px]"
              >
                <div className="font-heading text-lg font-bold gradient-text-violet">{value}</div>
                <div className="text-[10px] text-white/50 leading-tight mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-white/30 tracking-widest uppercase font-mono">Scroll</span>
        <div className="h-10 w-5 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.div
            className="h-2 w-1 rounded-full bg-violet-500"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
