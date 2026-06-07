import Image from 'next/image';
import myPic from '../public/mypic.jpeg';
import NumberedList from './NumberedList';

const technologies = [
  'TypeScript',
  'Next.js',
  'Ruby on Rails',
  'Amazon Web Services',
  'PostgreSQL',
  'Tailwind CSS',
];

const About = () => {
  return (
    <>
      <div className="mb-12" id="about">
        <NumberedList number="01" title="About Me" />
      </div>
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="relative flex-shrink-0 mx-auto md:mx-0">
          <div className="absolute inset-0 rounded-xl bg-gold/15 blur-xl scale-110" />
          <div className="relative w-56 h-64 md:w-64 md:h-72 rounded-xl overflow-hidden border border-gold/30 shadow-lg shadow-gold/5">
            <Image src={myPic} alt="Ee Kin Wong" fill className="object-cover" />
          </div>
        </div>

        <div className="flex-1 text-[#8b949e] space-y-4">
          <p>
            Hey there! Thanks for visiting. I come from an economics background. My interest in{' '}
            <span className="text-gold">tech</span> and{' '}
            <span className="text-gold">web development</span> started when I was working as a
            business operations analyst. Somewhere along the line, I decided to take the plunge and
            learn the ropes to become a software engineer — and I haven&apos;t looked back since.
          </p>
          <p>
            In my day-to-day, I&apos;m a{' '}
            <span className="text-gold">full-stack engineer</span> working across{' '}
            <span className="text-gold">front-end, back-end</span>, and occasionally{' '}
            <span className="text-gold">DevOps</span>. Everyday is different, and that&apos;s what I
            love about being in tech.
          </p>
          <p className="pt-2">Here are the technologies I&apos;ve been working with recently:</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs border border-gold/40 text-gold rounded-full font-mono tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
