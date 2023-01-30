const { emitToSocket, setIo, getSession, requireAuth } = require("../services/socket.service");

const { connectEdMapRoutes } = require("../api/ED-map/edMap.socketRoutes");

function connectSocketRoutes(io) {
  setIo(io);
  
  io.use(requireAuth);
  io.on('connection', socket => {
    socket.on('disconnect', () => {});

    const session = getSession(socket);
    session.socketId = socket.id;
    session.save();

    connectEdMapRoutes(io, socket);
  });
}

module.exports = { 
  connectSocketRoutes
};