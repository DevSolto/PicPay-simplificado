import fastify from 'fastify';
import { userController } from './controllers/user';

export const app = fastify();

app.register(userController);
