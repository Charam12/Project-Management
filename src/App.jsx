import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [ projectsState, setProjectState ] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(task) {
    setProjectState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: task,
        projectId: prevState.selectedProjectId,
        id: taskId
      }

      return {
        ...prevState,
        tasks: [ newTask, ...prevState.tasks ]
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id) 
      };
    });
  };

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      };
    });
  };

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })     
  }

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }

  function handleAddProject(data) {
    setProjectState(prevState => {
      const projectId = Math.random();
      const project = {
        ...data,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, project]
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId) 

  let content = (
    <SelectedProject 
      project={selectedProject} 
      onDelete={handleDeleteProject} 
      onAddTask={handleAddTask} 
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>
  }else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects} 
        onSelectProject={handleSelectProject} 
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
