import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'; //trata exessões gerado por promisse asicrono, e vai ser tratada pela nossa classe de erro (AppErro)
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';
import '@shared/typeorm'; //conectar automaticamente com o banco quando o server subir
import { errors } from 'celebrate';
import { celebrate } from 'celebrate';
const app = express();
import uploadConfig from '@config/upload';

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory)); //criar uma rota estatica quando for chamada na url ja busca os arquivos na pasta
app.use(routes);
app.use(errors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
); //midiware

app.listen(3333, () => {
  console.log('Server started on port 3333! 🏆');
});
