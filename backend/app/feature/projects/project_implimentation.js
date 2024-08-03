const { paginate } = require("../../helpers/pagination");
const Employee = require("../employees/EmployeesModel");
const Organization = require("../users/models/OrganizationModel");
const User = require("../users/models/UserModel");
const Projects = require("./ProjectModel");


// List all projects
async function listAll(req, res) {
    try {
        const projects = await Projects.findAll({
            include: [
                { model: Organization, as: 'organization' },
                { model: User, as: 'user' }
            ]
        });
        res.status(200).json({message:"projects get successfully",data:projects});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get project details by ID
async function detail(req, res) {
    const { id } = req.params;
    try {
        const project = await Projects.findByPk(id, {
            include: [
                { model: Organization, as: 'organization' },
                { model: User, as: 'user' }
            ]
        });
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Add a new project
const add=async (req, res) => {
    // const { name, organizationId, userId, status ,createdBy} = req.body;
    try {
        const newProject = await Projects.create(req.body);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update an existing project
async function update(req, res) {
    const { id } = req.params;
    const { name, organizationId, userId, status } = req.body;
    try {
        const project = await Projects.findByPk(id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        project.name = name;
        project.organizationId = organizationId;
        project.userId = userId;
        project.status = status;
        await project.save();
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete a project
async function del(req, res) {
    const { id } = req.params;
    try {
        const project = await Projects.findByPk(id);
        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }
        await project.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function list(req, res) {
    const { page , size , searchString , sortColumn, sortDirection, filters = {} } = req.body;
    const userId = req.body.userId || null; // Example filter condition

    try {
        let whereClause = {};

        // Add userId to whereClause if it exists
        if (userId) {
            whereClause.userId = userId;
        }

        // Use the paginate function to get the data
        const result = await paginate(Projects, page, size, searchString, filters, whereClause);

        // Include related models
        const projectsWithIncludes = await Projects.findAll({
            where: whereClause,
            include: [
                { model: Organization, as: 'organization' },
                { model: User, as: 'user' }
            ],
            limit: size,
            offset: (page > 0 ? (page - 1) * size : 0), // Ensure offset is non-negative
            order: [[sortColumn, sortDirection.toUpperCase()]]
        });

        // Replace the data rows with the ones that include related models
        result.data = projectsWithIncludes;

        res.status(200).json({
            data: result.data,
            total: result.total
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ error: error.message });
    }
}
const listOrganizationId = async (req, res) => {
    const { page, size, searchString, sortColumn, sortDirection, filters = {} } = req.body;
    const organizationId = req.params.organizationId; // Get organizationId from request params
    
    try {
        let whereClause = {};

        // Add organizationId to whereClause if it exists
        if (organizationId) {
            whereClause.organizationId = organizationId;
        }

        // Use the paginate function to get the data
        const result = await paginate(Projects, page, size, searchString, filters, whereClause);

        // Include related models
        const projectsWithIncludes = await Projects.findAll({
            where: whereClause,
            include: [
                { model: Organization, as: 'organization' },
                { model: User, as: 'user' }
            ],
            limit: size,
            offset: (page > 0 ? (page - 1) * size : 0), // Ensure offset is non-negative
            order: [[sortColumn, sortDirection.toUpperCase()]]
        });

        // Replace the data rows with the ones that include related models
        result.data = projectsWithIncludes;

        res.status(200).json({
            data: result.data,
            total: result.total
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    list,
    listOrganizationId,
    listAll,
    detail,
    add,
    update,
    del
};
