// index.js

import Project from './Project.js';
import ProjectDatabase from './ProjectDatabase.js';

const db = new ProjectDatabase();

// Add some projects
const project1 = new Project('Node.js App', 'A simple Node.js application', 'JavaScript', 'MongoDB', 'PROJ-001');
const project2 = new Project('Python App', 'A simple Python application', 'Python', 'SQLite', 'PROJ-002');

db.addProject(project1);
db.addProject(project2);

// Retrieve a project by ID
const retrievedProject = db.getProjectById(project1.id);
console.log(retrievedProject.getDetails());

// Retrieve a project by Project ID
const retrievedByProjectId = db.getProjectByProjectId('PROJ-001');
console.log(retrievedByProjectId.getDetails());

// Update a project
const updatedProject = new Project('Node.js App', 'An updated Node.js application', 'JavaScript', 'PostgreSQL', 'PROJ-001');
updatedProject.id = project1.id; // Keep the same ID
db.updateProject(project1.id, updatedProject);

// Retrieve the updated project
const updatedRetrievedProject = db.getProjectById(project1.id);
console.log(updatedRetrievedProject.getDetails());

// Delete a project
db.deleteProject(project2.id);

// List all projects
console.log(db.getAllProjects().map(project => project.getDetails()));

