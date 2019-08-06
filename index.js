const express = require('express');

const app = express();               // This represents our application

app.use(express.json());

const courseRoute = require('./src/routes/course.route');
const userRoute = require('./src/routes/user.route');

app.use('/api/courses', courseRoute);
app.use('/api/users', userRoute);

const port = 3000;
app.listen(port, () => console.log(`Listining to port ${port} enjoy`));