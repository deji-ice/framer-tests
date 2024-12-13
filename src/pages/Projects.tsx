import { projects } from "../assets/mockData";
import ScrollCard from "../components/ScrollCard";

const Projects = () => {
  return (
    <div className="mt-[50vh] mb-[50vh] h-full">
      {projects.map((project, i) => {
        return <ScrollCard key={`p_${i}`} {...project} i={i} />;
      })}
    </div>
  );
};

export default Projects;
