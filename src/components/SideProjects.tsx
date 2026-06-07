import SectionHeader from '@/components/SectionHeader';
import SideProjectCard from '@/components/SideProjectCard';

const projects = [
  {
    name: 'jp-magic-banana',
    description:
      'An interactive Japanese word-chain game (ひとりマジカルバナナ). Node-based canvas UI with AI-powered word generation via Google Gemini API, drag-and-pan, and Lottie animations.',
    lang: ['TypeScript', 'Next.js', 'React Flow', 'Gemini API', 'Tailwind'],
    href: 'https://github.com/eekinw/jp-magic-banana',
  },
  {
    name: 'knowledge-base-qa-bot',
    description:
      'A Q&A bot over documentation using two retrieval strategies: BM25 keyword search and vector RAG (FAISS + OpenAI embeddings). REST API with source citations and persistent indexes.',
    lang: ['Python', 'FastAPI', 'OpenAI API', 'FAISS', 'RAG'],
    href: 'https://github.com/eekinw/build-moat-live-sessions/tree/main/knowledge_base_qa_bot',
  },
];

const SideProjects = () => {
  return (
    <>
      <SectionHeader title="Side Projects" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <SideProjectCard key={project.name} {...project} />
        ))}
      </div>
    </>
  );
};

export default SideProjects;
