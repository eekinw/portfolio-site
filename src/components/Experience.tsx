import SectionHeader from './SectionHeader';

interface Job {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    role: 'Software Engineer',
    company: 'MerchantSpring',
    companyUrl: 'https://merchantspring.io',
    location: 'Kuala Lumpur, Malaysia',
    startDate: 'May 2026',
    endDate: 'Present',
    description:
      'SaaS platform providing unified analytics and marketplace management across 120+ e-commerce channels (Amazon, Shopify, eBay, Walmart, and more) for brands and agencies globally.',
    bullets: [
      'Building and maintaining backend services powering real-time marketplace data ingestion and analytics for 35,000+ brands across 2 continents.',
      'Contributing to scalable API design and data pipeline development across a multi-marketplace integration layer.',
      'Working across the full stack to deliver product features and improvements that support agency and brand clients.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'mairu tech, inc 🇯🇵',
    companyUrl: 'https://mairu.co.jp',
    location: 'Tokyo, Japan · Remote',
    startDate: 'Jun 2025',
    endDate: 'May 2026',
    description:
      'Healthcare and welfare mobility startup building infrastructure for medical and welfare transportation services.',
    bullets: [
      'Collaborating with the Tokyo-based engineering team from Malaysia, contributing to development and feature delivery.',
      'Developed and maintained features for a web-based booking platform for welfare taxis and private ambulances.',
      'Contributed to frontend logic and UI/UX improvements, enhancing reservation and schedule management workflows.',
      'Wrote unit and integration tests to ensure quality across core features.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'SUPA',
    companyUrl: 'https://supa.so',
    location: 'Kuala Lumpur, Malaysia',
    startDate: 'Jul 2023',
    endDate: 'Jun 2025',
    description:
      'Scalable data labeling solutions for AI development, serving businesses across retail, robotics, and construction.',
    bullets: [
      'Designed and maintained a backend Express.js service with full Jest test coverage and CI/CD pipelines via GitHub Actions — reduced post-deployment bugs by 30%, improving UX for 200+ data labellers and 10+ corporate clients.',
      'Built an interactive freelancer performance dashboard that increased accuracy by 40% across 10 labelling projects.',
      'Built and maintained APIs with 95% test coverage; maintained a record of 0 production incidents on backend APIs.',
      'Developed frontend/backend solutions for data-labeling clients end-to-end.',
    ],
  },
  {
    role: 'Senior Business Operations Analyst',
    company: 'SUPA',
    companyUrl: 'https://supa.so',
    location: 'Kuala Lumpur, Malaysia',
    startDate: 'Nov 2021',
    endDate: 'Jun 2023',
    description: '',
    bullets: [
      'Oversaw data labelling operations to ensure smooth client delivery and high quality standards.',
      'Led training programmes — developed 4 modules that upskilled 200+ data annotators, improving accuracy by 20%.',
      'Primary coordinator in a cross-functional team managing 10+ projects across 4 industries.',
      'Conducted 20 user interviews and created actionable content to drive continuous product improvements.',
    ],
  },
];

const Experience = () => {
  return (
    <>
      <SectionHeader title="Experience" />

      <div className="relative">
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-indigo-500/60 via-zinc-700 to-transparent" />

        <div className="space-y-14">
          {jobs.map((job, i) => (
            <div key={i} className="relative flex gap-8 pl-10">
              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-indigo-500 bg-[#09090b] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <div>
                    <h3 className="text-zinc-100 font-semibold text-base">
                      {job.role}{' '}
                      <span className="text-indigo-400">
                        @{' '}
                        {job.companyUrl ? (
                          <a
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {job.company}
                          </a>
                        ) : (
                          job.company
                        )}
                      </span>
                    </h3>
                    <p className="text-xs text-zinc-500 mt-0.5">{job.location}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 whitespace-nowrap shrink-0">
                    {job.startDate} — {job.endDate}
                  </span>
                </div>

                {job.description && (
                  <p className="text-sm text-zinc-500 italic mb-3">{job.description}</p>
                )}

                <ul className="space-y-2 mt-3">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                      <span className="text-indigo-500 mt-0.5 flex-shrink-0">▸</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
