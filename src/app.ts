import express from 'express';
import TestRouter from './Application/Routers/TestRouter';
import MongoDB from './Infrastructure/Persistence/Config/MongoDB';

MongoDB();

const app = express();

app.use('/api', TestRouter)
export default app;