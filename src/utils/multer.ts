import multer from 'multer';
import path from 'path';
import { mkdir, stat } from 'fs'

const UPLOAD_DIR = path.join(__dirname, '../../public/static/uploads/tmp');

const storage = multer.diskStorage({
    destination (_req, _file, cb) {
      stat(UPLOAD_DIR, (error) => {
        if(error) {
          mkdir(UPLOAD_DIR, { recursive: true }, (err) => {
            if(err) {
              cb(new Error("mkdir failed"), UPLOAD_DIR);
            }
            cb(null, UPLOAD_DIR);
          })
        }
        cb(null, UPLOAD_DIR);
      })

    },
    filename (_req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    }
  })

export const upload = multer({
  storage,
  fileFilter (_req, file, callback) {
    const ext = path.extname(file.originalname);
    if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg' && ext !=='.JPG' && ext !=='.PNG') {
        return callback(new Error('Only images are allowed'))
    }
    callback(null, true)
    },
    limits:{
        fileSize: 1920 * 1920
    }

})


