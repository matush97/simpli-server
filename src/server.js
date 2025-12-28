require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const http = require('http');
const socket = require('./socket');

const PORT = process.env.PORT;

connectDB();

const server = http.createServer(app);
const io = socket.init(server);

io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});