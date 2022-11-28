const cors = require('cors');

module.exports = cors({
  origin: ['http://localhost:3006', 'http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002'],
  credentials: true,
});
