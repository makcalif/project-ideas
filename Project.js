// Project.js

import { v4 as uuidv4 } from 'uuid';

class Project {
    constructor(title, description, language, database, projectId) {
        this.id = uuidv4(); // Generate a unique ID
        this.projectId = projectId; // Business key
        this.title = title;
        this.description = description;
        this.language = language;
        this.database = database;
    }

    getDetails() {
        return `ID: ${this.id}, ProjectID: ${this.projectId}, Title: ${this.title}, Description: ${this.description}, Language: ${this.language}, Database: ${this.database}`;
    }
}

export default Project;

