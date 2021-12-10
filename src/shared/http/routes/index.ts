import productsRouter from '@modules/products/routes/products.routes';
import sessionsRouter from '@modules/Users/routes/sessions.routers';
import usersRouter from '@modules/Users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

// routes.get('/', (request, response) => {
//   return response.json({ message: 'Hello my frieds' });
// });

export default routes;
