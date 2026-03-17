import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Linkedin, Github, FileText, Send } from 'lucide-react';
import { useRef } from 'react';

const MagneticButton = ({ children, className, href, target }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            target={target}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: mouseX, y: mouseY }}
            className={className}
        >
            {children}
        </motion.a>
    );
};

const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="home" className="min-h-[100svh] flex items-center relative overflow-hidden pt-24 md:pt-24 pb-12">
            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-6xl mx-auto"
                >
                    <motion.h2
                        variants={item}
                        className="text-primary font-bold text-sm md:text-base mb-6 tracking-[0.2em] uppercase"
                    >
                        UI/UX Designer, Graphics Designer, and Video Editor
                    </motion.h2>

                    <motion.h1
                        variants={item}
                        className="text-4xl sm:text-5xl lg:text-6xl font-grotesk mb-10 leading-[1.15] text-white tracking-tighter"
                    >
                        <span className="text-gradient">Dhruv Patel</span> <br />
                        UI/UX Designer, Graphics Designer, and Video Editor
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-base sm:text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-inter font-light"
                    >
                        I craft <span className="text-white font-medium">intuitive UI/UX interfaces, bold graphic identities, and engaging video edits</span>. My focus is building visual stories that are clean, memorable, and purpose-driven for digital brands.
                    </motion.p>

                    <motion.div
                        variants={item}
                        className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10"
                    >
                        <MagneticButton
                            href="/DhruvPatel_Resume.pdf"
                            target="_blank"
                            className="btn-primary"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <FileText size={20} /> View Resume
                            </span>
                        </MagneticButton>

                        <MagneticButton
                            href="#contact"
                            className="btn-ghost"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <Send size={20} /> Open to Opportunities
                            </span>
                        </MagneticButton>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="flex flex-wrap items-center justify-center gap-4 mb-12"
                    >
                        <span className="stat-pill">B.Tech CSE (2023-2026)</span>
                        <span className="stat-pill">UI/UX & Graphic Design</span>
                        <span className="stat-pill">Video Editing Portfolio</span>
                    </motion.div>

                    <motion.div
                        variants={item}
                        className="flex items-center justify-center gap-10"
                    >
                        {[
                            { icon: <Github size={24} />, href: "https://github.com/" },
                            { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                className="text-slate-500 hover:text-primary transition-all duration-300 hover:scale-125"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Subtle Gradient Backdrops */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 transition-colors"></div>
        </section>
    );
};



export default Hero;
