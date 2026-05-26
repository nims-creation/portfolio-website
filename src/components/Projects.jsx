import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiSearch, FiX } from 'react-icons/fi';
import { useInView } from 'framer-motion';

import { twMerge } from 'tailwind-merge';

const projectGradient =
  'bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.35),_rgba(59,130,246,0)_55%),radial-gradient(circle_at_left,_rgba(34,211,238,0.25),_rgba(34,211,238,0)_45%)]';


function usePrefersReducedMotion() {
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

function TechBadge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-200/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 shadow-[0_0_22px_rgba(34,211,238,0.12)]">
      {children}
    </span>
  );
}


function GlowParticles() {
  // Subtle blue/cyan neon blobs + tiny drifting particles.
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="absolute top-1/4 -left-16 h-64 w-64 rounded-full bg-sky-500/12 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />


      <div className="absolute inset-0 opacity-90">
        {Array.from({ length: 22 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/70"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0.05, 0.9, 0.05], scale: [0.6, 1.2, 0.6] }}
            transition={{
              duration: 3.2 + (i % 6) * 0.35,
              repeat: Infinity,
              delay: i * 0.09,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Modal({ open, onClose, title, image, description, stack, features }) {
  const reduced = usePrefersReducedMotion();


  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-zinc-950/70 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={reduced ? { scale: 0.98 } : { scale: 0.9, y: 10, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={reduced ? { scale: 0.98 } : { scale: 0.9, y: 10, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-sky-500/10" />
            <div className="relative p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/15 bg-white/5">
                      <img src={image} alt="" className="h-full w-full object-cover" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed">{description}</p>
                </div>


                <button
                  onClick={onClose}
                  className="rounded-xl border border-white/15 bg-white/5 p-2 text-white/80 hover:text-white hover:bg-white/10 transition"
                  aria-label="Close"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-sm font-semibold text-white/90">Key Features</h4>
                  <ul className="mt-3 space-y-2 text-sm text-white/75">
                    {features.map((f, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.6)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-sm font-semibold text-white/90">Tech Stack</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {stack.map((s, idx) => (
                      <TechBadge key={idx}>{s}</TechBadge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <FiGithub /> GitHub
                </a>

                <a
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/90 px-4 py-2 text-sm text-white shadow-[0_0_28px_rgba(34,211,238,0.35)] hover:bg-cyan-500 transition"
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  <FiExternalLink /> Live Demo
                </a>

              </div>

              <p className="mt-4 text-xs text-white/55">
                Note: Update the GitHub/Live Demo URLs in src/components/Projects.jsx.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectCard({ project, onOpen }) {
  const reduced = usePrefersReducedMotion();

  return (
    <motion.article
      className={twMerge(
        'group relative rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 overflow-hidden',
        'shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_40px_rgba(249,115,22,0.14)]'
      )}
      onClick={onOpen}
      style={{ perspective: 1200 }}
      initial={reduced ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={
        reduced
          ? undefined
          : {
              boxShadow: '0 0 60px rgba(249,115,22,0.18)',
            }
      }
      onMouseMove={(e) => {
        if (reduced) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotY = (px - 0.5) * 14;
        const rotX = (0.5 - py) * 10;
        e.currentTarget.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
        const x = px * 100;
        e.currentTarget.style.setProperty('--x', `${x}%`);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)';
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      {/* Animated gradient border */}
      <div
        className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background:
            'linear-gradient(120deg, rgba(249,115,22,0.0), rgba(249,115,22,0.55), rgba(59,130,246,0.35), rgba(249,115,22,0.0))',
          filter: 'blur(10px)',
        }}
      />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,_50%)_50%,rgba(249,115,22,0.22),transparent_55%)]" />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-[0_0_24px_rgba(249,115,22,0.2)]">
            <img src={project.image} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_18px_rgba(249,115,22,0.6)]" />
            <span className="text-xs text-white/60">AI/ML</span>
          </div>
        </div>

        <h3 className="mt-4 text-lg md:text-xl font-bold text-white leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-sm md:text-base text-white/70 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((s, idx) => (
            <TechBadge key={idx}>{s}</TechBadge>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
            onClick={(e) => {
              e.stopPropagation();
              onOpen();
            }}
          >
            <FiSearch /> Details
          </button>
          <div className="flex-1" />
        </div>

        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-orange-500/10 blur-2xl" />
        <div className="pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full bg-sky-500/10 blur-2xl" />
      </div>
    </motion.article>
  );
}


function SkeletonCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 overflow-hidden">
      <div className="h-12 w-12 rounded-2xl bg-white/10 animate-pulse" />
      <div className="mt-4 h-5 w-2/3 rounded bg-white/10 animate-pulse" />
      <div className="mt-3 h-4 w-full rounded bg-white/10 animate-pulse" />
      <div className="mt-2 h-4 w-4/5 rounded bg-white/10 animate-pulse" />
      <div className="mt-5 flex flex-wrap gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-6 w-20 rounded-full bg-white/10 animate-pulse" />
        ))}
      </div>
      <div className="mt-6 h-10 w-32 rounded-xl bg-white/10 animate-pulse" />
    </div>
  );
}

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [openProjectId, setOpenProjectId] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const projects = useMemo(
    () => [
      {
        id: 'air-writing',
        title: 'Air Writing Recognition Using Hand Gestures',
        description:
          'Developed a real-time air writing system using Computer Vision and hand gesture recognition. The application captures hand movements through webcam input and converts virtual writing into digital text.',
        image: '/src/assets/img.jpeg',
        features: [
          'Real-time hand tracking',
          'Gesture recognition',
          'Air drawing functionality',
          'Character prediction',
          'Webcam-based interaction',
        ],
        stack: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
      },
      {
        id: 'medical-detection',
        title: 'AI-Based Medical Disease Detection System',
        description:
          'Developed an AI-powered healthcare diagnosis system capable of detecting Skin Diseases and Pneumonia using Deep Learning and Medical Image Processing techniques. The system analyzes medical images and provides disease prediction assistance for early diagnosis.',
        image: '/src/assets/profile.jpg',
        features: [
          'Skin Disease Detection',
          'Pneumonia Detection using Chest X-rays',
          'Medical image classification',
          'CNN-based deep learning models',
          'Image preprocessing and augmentation',
          'Disease prediction system',
          'Accuracy and performance visualization',
          'Chest X-ray analysis',
          'Multi-disease detection capability',
        ],
        stack: [
          'Python',
          'TensorFlow',
          'Keras',
          'CNN',
          'Deep Learning',
          'Medical Image Processing',
        ],
      },
      {
        id: 'flavormatch',
        title: 'FlavorMatch – AI-Powered Food Recommendation System',
        description:
          'Built an intelligent food recommendation platform that suggests personalized recipes and meals based on user preferences, cuisine interests, dietary choices, and cooking time. The system uses recommendation techniques and AI-powered filtering for smart food suggestions.',
        image: '/src/assets/img.jpeg',
        features: [
          'Personalized food recommendations',
          'Content-based and collaborative filtering',
          'Cuisine and dietary preference analysis',
          'Recipe recommendation engine',
          'Interactive modern UI',
          'AI-powered suggestion system',
        ],
        stack: [
          'Python',
          'Machine Learning',
          'Pandas',
          'Scikit-learn',
          'Streamlit',
          'React',
          'Tailwind CSS',
        ],
      },
    ],
    []
  );

  const openProject = projects.find((p) => p.id === openProjectId);

  return (
    <section id="projects" className="relative bg-black text-white py-16 md:py-20 px-6 md:px-20 overflow-hidden">
      <GlowParticles />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.7)]" />
              <span className="text-sm text-white/75">Featured Projects</span>
            </div>
            <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-white">
              Projects
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-white/65 leading-relaxed">
              Real-world AI/ML applications focused on Computer Vision, Healthcare AI, and Intelligent Recommendation Systems.
            </p>

        </motion.div>

        <div className="mt-10 relative">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className={projectGradient} />
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
              : projects.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <ProjectCard project={p} onOpen={() => setOpenProjectId(p.id)} />
                  </motion.div>
                ))}
          </div>
        </div>
      </div>

      <Modal
        open={!!openProject}
        onClose={() => setOpenProjectId(null)}
        title={openProject?.title ?? ''}
        image={openProject?.image ?? '/src/assets/img.jpeg'}
        description={openProject?.description ?? ''}
        stack={openProject?.stack ?? []}
        features={openProject?.features ?? []}
      />
    </section>
  );
};

export default Projects;

