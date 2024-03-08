
import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <div>
            <Button onClick={onStartAddProject}>
                + Add Project
            </Button>
        </div>
        <ul className="mt-8">
            {projects.map(project => {
                let projectItem = 'project-item'
                if (project.id === selectedProjectId) {
                    projectItem += " active"
                } else {
                    projectItem = "project-item"
                }
            
                return (
                    <li key={project.id}>
                        <button 
                            className={projectItem}
                            onClick={() => onSelectProject(project.id)}
                        >
                            {project.title}
                        </button>
                    </li>
            )})}
        </ul>
    </aside>;
}