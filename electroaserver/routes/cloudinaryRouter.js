const express = require("express");
const { upload, remove } = require("../controllers/cloudinaryControllers");
const router = express.Router();

router.post("/uploadImage", upload);
router.post("/removeImage", remove)


module.exports = router;