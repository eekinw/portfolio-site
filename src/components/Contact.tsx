import Button from './Button';
import SectionHeader from './SectionHeader';

const Contact = () => {
  return (
    <>
      <SectionHeader title="Get In Touch" />
      <div className="flex flex-col items-center text-center max-w-md mx-auto gap-6">
        <p className="text-zinc-400 leading-relaxed">
          I&apos;m always open to new opportunities and collaborations. Whether it&apos;s a project,
          a question, or just a hello — my inbox is open.
        </p>
        <div className="flex gap-3">
          <a href="mailto:wongeekinn@gmail.com">
            <Button>Say Hello ✉</Button>
          </a>
          <a href="https://www.linkedin.com/in/eekinwong/" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary">LinkedIn ↗</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
