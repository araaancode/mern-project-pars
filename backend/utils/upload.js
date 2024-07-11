const multer = require('multer')
const path = require('path');
const mkdirp = require('mkdirp');
const avatarsDir = path.join(__dirname, '../uploads/ownerAvatars/');
const houseCoverImagesDir = path.join(__dirname, '../uploads/houseCoverImages/');

module.exports = {
    // owner avatar
    ownerAvatarUpload: multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                const made = mkdirp.sync(avatarsDir);
                cb(null, avatarsDir)
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + path.extname(file.originalname));
            }
        })
    }),

    // house cover
    houseUpload: multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                const made = mkdirp.sync(houseCoverImagesDir);
                cb(null, houseCoverImagesDir)
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + path.extname(file.originalname));
            }
        })
    })
}