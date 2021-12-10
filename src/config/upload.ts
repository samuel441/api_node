import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads'); // '..' segnifica que vai subir niveis de pasta

export default {
  directory: uploadFolder,
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');

      const fileName = `${fileHash}- ${file.originalname}`;
      callback(null, fileName);
    },
  }),
};
