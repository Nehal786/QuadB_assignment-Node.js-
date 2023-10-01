const express = require('express');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware for parsing JSON
app.use(express.json());

// Include API routes
 const userRoutes = require('./routes/user.routes');
app.use('/api/user', userRoutes);

db.sequelize.sync({
    force: true
}).then(() => {
    console.log('Tables dropped and recreated');
    // init();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
