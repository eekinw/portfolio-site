import Image from 'next/image';
import myPic from '../public/mypic.jpeg';
import Button from './Button';

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
      <div className="flex flex-col flex-1">
        <p className="text-gold font-mono text-sm mb-4 tracking-wider">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-[#e6edf3] mb-3 leading-tight">
          Ee Kin Wong
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#8b949e] mb-6">
          Full-Stack Engineer
        </h2>
        <p className="text-[#8b949e] max-w-md mb-8 leading-relaxed">
          Self-taught software engineer based in Kuala Lumpur, Malaysia. Currently building cool
          things at{' '}
          <a className="text-gold hover:underline" href="https://supa.so" target="_blank" rel="noopener noreferrer">
            SUPA
          </a>
          .
        </p>
        <div className="flex gap-x-4">
          <a href="https://github.com/eekinw" target="_blank" rel="noopener noreferrer">
            <Button>GitHub ↗</Button>
          </a>
          <a
            href="https://drive.google.com/file/d/1HfdYz5M4sNuEhNxTpS7pPDOvedZiI8FY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Resume ↗</Button>
          </a>
        </div>
      </div>

      <div className="relative flex-shrink-0">
        <div className="absolute inset-0 rounded-2xl bg-gold/20 blur-2xl scale-110" />
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-gold/30 shadow-xl shadow-gold/10">
          <Image src={myPic} alt="Ee Kin Wong" fill className="object-cover" priority />
        </div>
      </div>
    </div>
  );
};

export default Home;
