// ProjectDatabase.js

import Project from './Project.js';

class ProjectDatabase {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }

    getProjectById(id) {
        return this.projects.find(project => project.id === id);
    }

    getProjectByProjectId(projectId) {
        return this.projects.find(project => project.projectId === projectId);
    }

    updateProject(id, updatedProject) {
        const index = this.projects.findIndex(project => project.id === id);
        if (index !== -1) {
            this.projects[index] = updatedProject;
            return true;
        }
        return false;
    }

    deleteProject(id) {
        const index = this.projects.findIndex(project => project.id === id);
        if (index !== -1) {
            this.projects.splice(index, 1);
            return true;
        }
        return false;
    }

    getAllProjects() {
        return this.projects;
    }
}

export default ProjectDatabase;

