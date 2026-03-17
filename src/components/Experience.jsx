import { motion } from 'framer-motion';
import { Award, Briefcase, Users, Star, ArrowUpRight, GraduationCap, Building2 } from 'lucide-react';

const experiences = [
    {
        title: "Here Quality Excellence PVT LTD",
        type: "Assistant UI/UX Designer & Graphics Designer",
        period: "Started Position",
        outcome: "Started professional work focused on interface design, visual communication, and graphic asset creation for digital experiences.",
        icon: <Building2 size={20} />,
        color: "bg-fuchsia-500/10"
    },
    {
        title: "Parul University",
        type: "B.Tech Lateral in CSE",
        period: "2023 - 2026",
        outcome: "CPI 8.13/10. Focused on computer science engineering, practical software work, and communication-driven project execution.",
        icon: <GraduationCap size={20} />,
        color: "bg-indigo-500/10"
    },
    {
        title: "PIET-DS, Vadodara",
        type: "Diploma in Computer Science",
        period: "2020 - 2023",
        outcome: "CGPA 8.83/10. Built strong fundamentals in computing and software development.",
        icon: <Award size={20} />,
        color: "bg-blue-500/10"
    },
    {
        title: "Acmegrade",
        type: "Software Intern",
        period: "Feb 2024 - Apr 2024",
        outcome: "Completed a two-month software internship with practical exposure to real-time projects and technical upskilling.",
        icon: <Star size={20} />,
        color: "bg-purple-500/10"
    },
    {
        title: "Navpad Infotech",
        type: "Software Intern",
        period: "Apr 2022 - May 2022",
        outcome: "Worked on software requirements gathering and basic development workflows with a practical learning approach.",
        icon: <Briefcase size={20} />,
        color: "bg-green-500/10"
    },
    {
        title: "Acmegrade Campus Ambassador",
        type: "Position of Responsibility",
        period: "Mar 2024 - May 2024",
        outcome: "Promoted program initiatives and represented campaigns at campus level with communication and outreach activities.",
        icon: <Users size={20} />,
        color: "bg-orange-500/10"
    },
    {
        title: "Power BI Workshop",
        type: "Seminars & Training",
        period: "2025",
        outcome: "Participated in practical Power BI sessions to strengthen reporting and data visualization skills.",
        icon: <Building2 size={20} />,
        color: "bg-cyan-500/10"
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Milestones
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-grotesk font-bold text-white leading-tight"
                        >
                            Academic & Professional <br /><span className="text-gradient">Highlights.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="glass p-10 flex flex-col md:flex-row gap-8 items-start group hover:border-primary/30 transition-all border-white/5"
                        >
                            <div className={`w-16 h-16 shrink-0 rounded-2xl ${exp.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500`}>
                                {exp.icon}
                            </div>
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{exp.type}</p>
                                        <h3 className="text-xl font-bold text-white font-grotesk">{exp.title}</h3>
                                    </div>
                                    <span className="text-xs font-medium text-slate-400 font-inter">{exp.period}</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                                    {exp.outcome}
                                </p>
                                <div className="flex items-center gap-1.5 text-primary text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                    Validated Impact <ArrowUpRight size={12} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
