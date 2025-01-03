const router = require('express').Router();
const userRoutes = require('./userRoutes')
const blogPostRoutes = require('./blogpostRoutes')
const commentRoutes = require('./commentRoutes')
// Import the routes. This is how we make our routes modular.


// When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.
router.use('./users',userRoutes);
router.use('./blogpost',blogPostRoutes);
router.use('./comments',commentRoutes)

module.exports = router;
