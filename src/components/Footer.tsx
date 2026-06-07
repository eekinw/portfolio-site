import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="py-12 flex flex-col items-center gap-5 border-t border-zinc-800/60 mt-8">
      <div className="flex gap-6">
        <a
          href="https://github.com/eekinw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 hover:text-zinc-300 transition-colors"
        >
          <FaGithub size={18} />
        </a>
        <a
          href="https://www.linkedin.com/in/eekinwong/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-600 hover:text-zinc-300 transition-colors"
        >
          <FaLinkedin size={18} />
        </a>
      </div>
      <p className="text-xs font-mono text-zinc-600">
        Designed & Built by Ee Kin Wong · {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
