const express = require('express');

const ViewRoutes = require('./routes/ViewRoutes');

const router = express.Router();

router.use('/view', ViewRoutes);

module.exports = router;