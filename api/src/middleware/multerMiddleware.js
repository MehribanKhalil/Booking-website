import multer from 'multer'
// const storage = multer.diskStorage()
// export const upload=multer({
//     storage:storage,
//     limits:{
//         fileSize: 5* 1024 *1024 //5MB
//     }
// })

import path from 'path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/uploads')
  },

  filename: function (req, file, cb) {

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const ext = path.extname(file.originalname)
    cb(null, uniqueSuffix + ext)
  }
})

export const upload = multer({ storage: storage })