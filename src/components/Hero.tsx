import Image from 'next/image';
import myPic from '../public/mypic.jpeg';
import Button from './Button';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 w-full">
      <div className="flex-1 space-y-7">
        <div className="space-y-2">
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase">
            Software Engineer
          </p>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-50 leading-none">
            Ee Kin Wong
          </h1>
        </div>

        <p className="text-zinc-400 max-w-md leading-relaxed text-base">
          Full-stack engineer with a backend-heavy focus — building scalable systems and clean APIs.
          Currently exploring AI engineering: RAG pipelines, agent frameworks, and how LLMs fit into
          production. Based in Kuala Lumpur; previously worked remotely for a healthcare startup in
          Tokyo; now at{' '}
          <a
            href="https://merchantspring.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            MerchantSpring
          </a>
          .
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="https://github.com/eekinw" target="_blank" rel="noopener noreferrer">
            <Button>GitHub ↗</Button>
          </a>
          <a
            href="https://drive.google.com/file/d/132HSRxflVXVSvty-hYGwWvzGUnoy-xqq/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">Resume ↗</Button>
          </a>
          <a
            href="https://www.linkedin.com/in/eekinwong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">LinkedIn ↗</Button>
          </a>
        </div>
      </div>

      <div className="relative flex-shrink-0">
        <div className="absolute -inset-4 rounded-3xl bg-indigo-500/15 blur-3xl" />
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          <Image src={myPic} alt="Ee Kin Wong" fill className="object-cover" priority />
        </div>
        <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border border-indigo-500/20 -z-10" />
      </div>
    </div>
  );
};

export default Hero;
