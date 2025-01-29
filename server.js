
import express from 'express';
import dotenv from 'dotenv';
import gadgetRoutes from './routes/gadgets.js';
import selfDestructRoutes from './routes/selfDestruct.js';

dotenv.config();

const app = express();
app.use(express.json());


app.use('/gadgets', gadgetRoutes);
app.use('/gadgets', selfDestructRoutes);


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
