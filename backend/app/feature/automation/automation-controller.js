const express = require('express');
const router = express.Router();
const automationReportImpl = require('./automation-implement');
const  runAutomation  = require('./app/school-stg');
// List all automation reports
router.post('/list', automationReportImpl.list);
router.get('/all', automationReportImpl.listAll);

// Get details of a specific automation report
router.post('/run', runAutomation.getRowCount);
router.get('/:id', automationReportImpl.detail);
router.post('/:projectId', automationReportImpl.getListByProjectId);

// Add a new automation report
router.post('/create', automationReportImpl.add);

// Update an existing automation report
router.post('/update/:id', automationReportImpl.update);

// Delete an automation report
router.delete('/:id', automationReportImpl.del);

module.exports = router;
