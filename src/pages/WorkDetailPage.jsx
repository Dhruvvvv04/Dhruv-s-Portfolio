import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const workPages = {
  'power-bi-insights': {
    label: 'Data Analysis',
    title: 'Power BI & Insights',
    summary:
      'Dashboard-focused work where I turn raw information into clean, visual reports for quick decision making.',
    highlights: [
      'Data cleanup and structure planning',
      'Interactive dashboard sections and KPI cards',
      'Clear chart hierarchy for better storytelling',
    ],
  },
  'modern-interfaces': {
    label: 'Web Development',
    title: 'Modern Interfaces',
    summary:
      'UI work focused on responsive layouts, consistency, and smooth user journeys across desktop and mobile.',
    highlights: [
      'Responsive page systems and reusable components',
      'Visual hierarchy for readability and conversion',
      'Interaction polish with meaningful transitions',
    ],
  },
  'research-prototype': {
    label: 'UI/UX Work',
    title: 'Research to Prototype',
    summary:
      'End-to-end process from user understanding to wireframes and high-fidelity interface prototypes.',
    highlights: [
      'Problem framing and user-flow mapping',
      'Wireframe systems for rapid iteration',
      'Prototype handoff with usability-focused decisions',
    ],
  },
  'uiux-graphics': {
    label: 'Creative Work',
    title: 'UI/UX & Graphics',
    summary:
      'Design direction that blends UI thinking with visual branding to create memorable digital experiences.',
    highlights: [
      'Brand-consistent visual language',
      'Graphic assets for social and product touchpoints',
      'Story-driven compositions for campaigns',
    ],
  },
};

function WorkDetailPage() {
  const { slug } = useParams();
  const work = workPages[slug];

  if (!work) {
    return (
      <main className="min-h-screen relative overflow-hidden px-6 py-20 text-white">
        <div className="container mx-auto max-w-4xl glass p-10">
          <h1 className="text-3xl font-grotesk font-bold mb-4">Work not found</h1>
          <p className="text-slate-400 mb-8">This work page does not exist yet.</p>
          <Link to="/" className="btn-ghost inline-flex items-center gap-2">
            <ArrowLeft size={18} /> Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative overflow-hidden px-6 py-20 text-white">
      <div className="container mx-auto max-w-5xl">
        <div className="glass p-8 md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">{work.label}</span>
            <Link to="/" className="btn-ghost inline-flex items-center gap-2">
              <ArrowLeft size={18} /> Back to Home
            </Link>
          </div>

          <h1 className="text-3xl md:text-5xl font-grotesk font-bold mb-6 text-gradient">{work.title}</h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-3xl">{work.summary}</p>

          <div className="grid md:grid-cols-3 gap-4">
            {work.highlights.map((point) => (
              <article key={point} className="border border-white/10 rounded-2xl p-6 bg-slate-950/50">
                <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-slate-400 text-sm mb-3">When you share your real files/links, I can attach them on this page.</p>
            <a href="#" className="inline-flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase">
              Add project assets <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WorkDetailPage;
