// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiEye, FiHeart, FiStar, FiCode, FiCpu } from 'react-icons/fi';

// Achievement cards
const achievements = [
  {
    icon: FiAward,
    title: 'GATE DA 2026',
    value: 'AIR 6574',
    desc: 'Qualified Graduate Aptitude Test in Engineering — Data Science & AI',
    color: 'from-violet-600/20 to-violet-800/10',
    border: 'border-violet-500/30',
    iconColor: 'text-violet-400',
    glow: 'rgba(124,58,237,0.3)',
  },
  {
    icon: FiEye,
    title: 'Computer Vision',
    value: 'Specialist',
    desc: 'Real-time hand tracking, air writing, gesture recognition with OpenCV & MediaPipe',
    color: 'from-cyan-600/20 to-cyan-800/10',
    border: 'border-cyan-500/30',
    iconColor: 'text-cyan-400',
    glow: 'rgba(34,211,238,0.3)',
  },
  {
    icon: FiHeart,
    title: 'Healthcare AI',
    value: 'Deep Learning',
    desc: 'CNN-based medical image classification for skin disease & pneumonia detection',
    color: 'from-rose-600/20 to-rose-800/10',
    border: 'border-rose-500/30',
    iconColor: 'text-rose-400',
    glow: 'rgba(244,63,94,0.3)',
  },
  {
    icon: FiStar,
    title: 'RecSys',
    value: 'AI-Powered',
    desc: 'Content-based & collaborative filtering for personalized food recommendations',
    color: 'from-amber-600/20 to-amber-800/10',
    border: 'border-amber-500/30',
    iconColor: 'text-amber-400',
    glow: 'rgba(245,158,11,0.3)',
  },
];

// Timeline milestones
const timeline = [
  {
    year: '2026',
    title: 'GATE DA Qualified',
    desc: 'All India Rank 6574 in Graduate Aptitude Test — Data Science & AI',
    icon: FiAward,
    color: 'bg-violet-500',
    glow: 'shadow-[0_0_12px_rgba(124,58,237,0.8)]',
  },
  {
    year: '2025',
    title: 'AI Medical System',
    desc: 'Built CNN-based multi-disease detection (Skin + Pneumonia) with TensorFlow/Keras',
    icon: FiCpu,
    color: 'bg-cyan-500',
    glow: 'shadow-[0_0_12px_rgba(34,211,238,0.8)]',
  },
  {
    year: '2024',
    title: 'Air Writing Recognition',
    desc: 'Real-time hand gesture system converting air movements to digital text with OpenCV',
    icon: FiEye,
    color: 'bg-accent-500',
    glow: 'shadow-[0_0_12px_rgba(249,115,22,0.8)]',
  },
  {
    year: '2023',
    title: 'CS Undergraduate',
    desc: 'Started B.Tech in Computer Science — focused on algorithms, ML fundamentals & competitive programming',
    icon: FiCode,
    color: 'bg-emerald-500',
    glow: 'shadow-[0_0_12px_rgba(16,185,129,0.8)]',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-[#030712] text-white section-padding overflow-hidden scroll-mt-20"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-[80px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge-violet mb-4 inline-flex">About Me</span>
          <h2 className="section-title centered">
            Building Intelligent Systems
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-white/60 leading-relaxed">
            CS student turned AI builder — transforming complex problems into smart, elegant solutions.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Bio + Achievement Cards ── */}
          <div className="space-y-8">
            {/* Bio card */}
            <motion.div
              className="glass-card p-6 md:p-8"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/75 leading-8 text-base md:text-lg">
                Hey there! 👋 I'm a Computer Science student deeply passionate about building
                intelligent systems that solve complex, real-world problems.
              </p>
              <p className="text-white/65 leading-8 text-sm md:text-base mt-4">
                I qualified <span className="text-violet-400 font-semibold">GATE DA 2026</span> with
                an All India Rank of <span className="text-violet-400 font-semibold">6574</span> —
                and I'm constantly exploring new frontiers in AI and machine learning.
              </p>
              <p className="text-white/65 leading-8 text-sm md:text-base mt-4">
                When I'm not training models or working with Computer Vision, you'll find me
                optimizing algorithms and sharpening problem-solving skills through competitive programming.
              </p>
              {/* Focus areas */}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <p className="text-xs text-white/40 uppercase tracking-widest font-mono mb-3">Focus Areas</p>
                <div className="flex flex-wrap gap-2">
                  {['Computer Vision', 'Healthcare AI', 'Recommendation Systems', 'Deep Learning', 'Competitive Programming'].map(tag => (
                    <span key={tag} className="badge-violet text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievement cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  className={`relative rounded-2xl border p-5 bg-gradient-to-br ${a.color} ${a.border} transition-all duration-300 hover:scale-[1.03] cursor-default overflow-hidden animated-border`}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  style={{ boxShadow: `0 0 0 1px ${a.glow} inset` }}
                >
                  <a.icon className={`text-2xl ${a.iconColor} mb-3`} />
                  <div className="text-xs text-white/50 font-mono uppercase tracking-wider mb-1">{a.title}</div>
                  <div className={`text-lg font-bold font-heading ${a.iconColor}`}>{a.value}</div>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Milestone Timeline ── */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xs text-white/40 uppercase tracking-widest font-mono mb-6">Timeline</p>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent opacity-30" />

              <div className="space-y-8">
                {timeline.map((milestone, i) => (
                  <motion.div
                    key={milestone.year}
                    className="relative flex gap-6"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    {/* Icon dot */}
                    <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${milestone.color} ${milestone.glow}`}>
                      <milestone.icon className="text-white text-sm" />
                    </div>

                    {/* Content */}
                    <div className="glass-card flex-1 p-4 hover:border-violet-500/30 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-heading font-semibold text-white text-sm">{milestone.title}</h3>
                        <span className="font-mono text-xs text-white/40 bg-white/5 px-2 py-0.5 rounded-md">{milestone.year}</span>
                      </div>
                      <p className="text-xs text-white/55 leading-relaxed">{milestone.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <motion.div
              className="glass-card p-6 mt-6 border-l-2 border-violet-500"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-white/65 italic text-sm leading-relaxed">
                "The goal of AI is not to replace human intelligence, but to augment it —
                building tools that make the impossible, possible."
              </p>
              <p className="text-violet-400 text-xs font-mono mt-3">— Prakash Mani Patel</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;