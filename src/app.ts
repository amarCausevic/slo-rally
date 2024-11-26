import express from 'express';
import routes from './routes';
//import cors from 'cors';

// Initialize the Express app
const app = express();

// Enable CORS if necessary
//app.use(cors());

// Use the defined routes
app.use('/api', routes);
app.use(express.json());
// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack);
  res.status(500).send({message: 'Something went wrong!'});
});

// Set the app to listen on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;