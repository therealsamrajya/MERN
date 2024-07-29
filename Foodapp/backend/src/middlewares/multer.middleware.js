import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinary } from "../utils/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "food-images",
    allowedFormats: ["jpeg", "png", "jpg"],
  },
});

const upload = multer({ storage });

export { upload };
