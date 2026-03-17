import { motion } from 'framer-motion';
import { Github, Box } from 'lucide-react';

const projects = [
    {
        title: "Acmegrade Internship Work",
        category: "Software Internship",
        problem: "Need to bridge classroom concepts with real software workflows and delivery expectations.",
        role: "Software Intern",
        solution: "Worked on practical software assignments, documentation, and implementation support while improving code quality and communication.",
        challenge: "Adapting to project timelines and real-world collaboration standards in a short internship period.",
        tech: ["Web Basics", "Documentation", "Problem Solving", "Team Collaboration"],
        link: "#",
        future: "Apply the same discipline to larger production-scale applications."
    },
    {
        title: "Navpad Infotech Internship",
        category: "Industry Exposure",
        problem: "Understanding software project flow from requirements to implementation in an IT environment.",
        role: "Intern",
        solution: "Supported project activities and learned requirement analysis, implementation flow, and practical development discipline.",
        challenge: "Balancing learning speed with project expectations and structured task execution.",
        tech: ["Software Workflow", "Requirement Analysis", "Implementation Support"],
        link: "#",
        future: "Deepen hands-on backend and full-stack development contributions."
    },
    {
        title: "Power BI Learning Projects",
        category: "Data Visualization",
        problem: "Raw data can be hard to communicate without clear visual reporting.",
        role: "Learner & Builder",
        solution: "Built practice dashboards and report layouts to improve insight communication and presentation quality.",
        challenge: "Designing simple visuals that are meaningful, readable, and decision-focused.",
        tech: ["Power BI", "Excel", "Data Cleaning", "Charts"],
        link: "#",
        future: "Create domain-specific dashboards for business and education use cases."
    },
    {
        title: "Web Design Practice",
        category: "UI/UX + Frontend",
        problem: "Need modern, clean web interfaces that remain responsive and user-focused.",
        role: "Frontend Designer/Developer",
        solution: "Practiced responsive page structures and component-driven layouts using HTML, CSS, JavaScript, and React.",
        challenge: "Keeping visual polish while ensuring consistent behavior across devices.",
        tech: ["HTML", "CSS", "JavaScript", "React"],
        link: "#",
        future: "Build complete portfolio-grade products with stronger interaction design."
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Selection
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-grotesk font-bold text-white tracking-tighter"
                        >
                            Featured <br /><span className="text-gradient">Projects.</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-md text-slate-400 text-lg md:text-right font-inter font-light"
                    >
                        Resume-aligned practical work covering internships, web design implementation, and data visualization exercises.
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/5 shadow-sm hover:shadow-2xl transition-all duration-700"
                        >
                            <div className="absolute inset-0 bg-slate-950 transition-colors duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-secondary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative p-8 md:p-12 z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary transition-all duration-500">
                                            <Box className="text-white group-hover:text-white" size={20} />
                                        </div>
                                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">{project.category}</span>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="p-3 rounded-full border border-slate-100 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 font-grotesk tracking-tight group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <div className="space-y-8 flex-grow">
                                    <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">The Problem</p>
                                            <p className="text-sm text-slate-400 font-inter font-light leading-relaxed">
                                                {project.problem}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">The Solution</p>
                                            <p className="text-sm text-slate-400 font-inter font-light leading-relaxed italic">
                                                {project.solution}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Technical Challenge</p>
                                        </div>
                                        <p className="text-sm text-slate-300 font-inter font-medium">
                                            {project.challenge}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="text-[10px] font-bold text-slate-400 border border-white/10 px-3 py-1.5 rounded-lg group-hover:border-primary/30 group-hover:text-primary transition-all">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                                <span className="w-4 h-[1px] bg-slate-200"></span> Roadmap: {project.future}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Projects;
