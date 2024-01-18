interface TechnologyListProps {
  technologies: string[];
}

const TechnologyList = ({ technologies }: TechnologyListProps) => {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-4">
        {technologies.map((t, index) => (
          <li key={index}>▹ {t}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologyList;