const Organization = require("../users/models/OrganizationModel");
const Employee = require("./EmployeesModel");

// List all employees
async function listAll(req, res) {
    try {
        const employees = await Employee.findAll({
            include: [
                { model: Organization, as: 'organization' }
            ]
        });
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get employee details by ID
async function detail(req, res) {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id, {
            include: [
                { model: Organization, as: 'organization' }
            ]
        });
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Add a new employee
async function add(req, res) {
    try {
        const newEmployee = await Employee.create(req.body);
        res.status(201).json({data:newEmployee,message:"Employees created Successfully"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update an existing employee
async function update(req, res) {
    const { id } = req.params;
    const { name, email, phone, position, department, organizationId, updatedBy } = req.body;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        // employee.name = name;
        // employee.email = email;
        // employee.phone = phone;
        // employee.position = position;
        // employee.department = department;
        // employee.organizationId = organizationId;
        // employee.updatedBy = updatedBy;
        employee=req.body;
        await employee.save();
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete an employee
async function del(req, res) {
    const { id } = req.params;
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        await employee.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const list = async (req, res) => {
    console.log("SSSSSSSSSreq "+JSON.stringify(req.body));
    const { organizationId } = req.query; // Filter condition for organizationId
    const { page = 1, size = 10, sortColumn = 'id', sortDirection = 'desc' } = req.query; // Pagination and sorting parameters

    try {
        // Construct the where clause based on provided filters
        const whereClause = organizationId ? { organizationId } : {};
        // Fetch employees with pagination, sorting, and included related models
        const employees = await Employee.findAll({
            where: whereClause,
            include: [
                { model: Organization, as: 'organization' }
            ],
            limit: parseInt(size, 10),
            offset: (parseInt(page, 10) - 1) * parseInt(size, 10),
            order: [[sortColumn, sortDirection.toUpperCase()]]
        });

        // Get total count for pagination
        const total = await Employee.count({
            where: whereClause
        });

        res.status(200).json({
            data: employees,
            total
        });
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ error: error.message });
    }
}
const getListByOrganizationId = async (req, res) => {
    console.log("SSSSSSSSSreq "+JSON.stringify(req.body));
    // const { organizationId } = req.query; // Filter condition for organizationId
    const organizationId = req.params.organizationId;
    const { page = 1, size = 10, sortColumn = 'id', sortDirection = 'desc' } = req.query; // Pagination and sorting parameters

    try {
        // Construct the where clause based on provided filters
        const whereClause = organizationId ? { organizationId } : {};
        // Fetch employees with pagination, sorting, and included related models
        const employees = await Employee.findAll({
            where: whereClause,
            include: [
                { model: Organization, as: 'organization' }
            ],
            limit: parseInt(size, 10),
            offset: (parseInt(page, 10) - 1) * parseInt(size, 10),
            order: [[sortColumn, sortDirection.toUpperCase()]]
        });

        // Get total count for pagination
        const total = await Employee.count({
            where: whereClause
        });

        res.status(200).json({
            data: employees,
            total
        });
    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    list,
    getListByOrganizationId,
    listAll,
    detail,
    add,
    update,
    del
};
