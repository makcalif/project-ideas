// test/ProjectDatabase.test.js

import { expect } from 'chai';
import Project from '../Project.js';
import ProjectDatabase from '../ProjectDatabase.js';

describe('ProjectDatabase Class', () => {
    let db;

    beforeEach(() => {
        db = new ProjectDatabase();
    });

    it('should add a project to the database', () => {
        const project = new Project('Node.js App', 'A simple Node.js application', 'JavaScript', 'MongoDB', 'PROJ-001');
        db.addProject(project);

        const retrievedProject = db.getProjectById(project.id);
        expect(retrievedProject).to.deep.equal(project);
    });

    it('should retrieve a project by ID from the database', () => {
        const project = new Project('Node.js App', 'A simple Node.js application', 'JavaScript', 'MongoDB', 'PROJ-001');
        db.addProject(project);

        const retrievedProject = db.getProjectById(project.id);
        expect(retrievedProject).to.deep.equal(project);
    });

    it('should retrieve a project by Project ID from the database', () => {
        const project = new Project('Node.js App', 'A simple Node.js application', 'JavaScript', 'MongoDB', 'PROJ-001');
        db.addProject(project);

        const retrievedProject = db.getProjectByProjectId('PROJ-001');
        expect(retrievedProject).to.deep.equal(project);
    });

    it('should update a project in the database', () => {
        const project = new Project('Node.js App', 'A simple Node.js application', 'JavaScript', 'MongoDB', 'PROJ-001');
        db.addProject(project);

        const updatedProject = new Project('Node.js App', 'An updated Node.js application', 'JavaScript', 'PostgreSQL', 'PROJ-001');
        updatedProject.id = project.id; // Keep the same ID
        const updateResult = db.updateProject(project.id, updatedProject);

        expect(updateResult).to.be.true;
        const retrievedProject = db.getProjectById(project.id);
        expect(retrievedProject).to.deep.equal(updatedProject);
    });

    it('should delete a project from the database', () => {
        const project = new Project('Node.js App', 'A simple Node.js application', 'JavaScript', 'MongoDB', 'PROJ-001');
        db.addProject(project);

        const deleteResult = db.deleteProject(project.id);
        expect(deleteResult).to.be.true;

        const retrievedProject = db.getProjectById(project.id);
        expect(retrievedProject).to.be.undefined;
    });

    it('should list all projects in the database', () => {
        const project1 = new Project('Node.js App', 'A simple Node.js application', 'JavaScript', 'MongoDB', 'PROJ-001');
        const project2 = new Project('Python App', 'A simple Python application', 'Python', 'SQLite', 'PROJ-002');

        db.addProject(project1);
        db.addProject(project2);

        const projects = db.getAllProjects();
        expect(projects).to.have.lengthOf(2);
        expect(projects).to.deep.include(project1);
        expect(projects).to.deep.include(project2);
    });
});

