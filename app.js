const express = require('express');
const app = express();
const adminRoutes = require('./routes/admin');

app.use(express.json());
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 