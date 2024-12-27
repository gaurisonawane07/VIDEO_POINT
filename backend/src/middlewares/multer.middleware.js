import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp"); // Directory where files are stored temporarily
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // File is saved with its original name
    }
});

export const upload = multer({ storage });
