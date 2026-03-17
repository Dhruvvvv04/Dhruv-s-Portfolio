import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const certificates = [
    {
        title: "Computer Networks and Internet Protocol",
        issuer: "NPTEL",
        type: "other",
        file: "#"
    },
    {
        title: "Artificial Intelligence Internship Program",
        issuer: "Acmegrade",
        type: "other",
        file: "#"
    },
    {
        title: "Java Basics Internship",
        issuer: "Technosoft",
        type: "other",
        file: "#"
    },
    {
        title: "CCNA Networking Course",
        issuer: "Cisco",
        type: "other",
        file: "#"
    }
];

const Certificates = () => {
    return (
        <section id="certificates" className="py-24 bg-slate-900/20">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Credentials
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-grotesk font-bold text-white tracking-tighter"
                        >
                            Professional <br /><span className="text-gradient">Validation.</span>
                        </motion.h2>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.file}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="glass p-8 group hover:bg-slate-900/60 transition-all duration-500 border-white flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-3 bg-white/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <Award size={20} />
                                    </div>
                                    <ShieldCheck size={16} className="text-slate-300 group-hover:text-primary transition-colors" />
                                </div>
                                <h3 className="font-bold text-white leading-snug text-lg font-grotesk group-hover:text-primary transition-colors duration-300">
                                    {cert.title}
                                </h3>
                                <p className="text-xs font-bold text-slate-500 mt-3 uppercase tracking-widest">{cert.issuer}</p>
                            </div>

                            <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-thicker">Certificate Details</span>
                                <motion.div whileHover={{ x: 2, y: -2 }}>
                                    <ExternalLink size={14} className="text-slate-500 group-hover:text-white transition-colors" />
                                </motion.div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Certificates;
