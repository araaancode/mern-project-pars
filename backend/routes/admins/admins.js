const express = require("express")

const router = express()

const adminCtrls = require("../../controllers/admins/admins")

router.get('/me',adminCtrls.getMe)
router.put('/update-profile',adminCtrls.updateProfile)
router.put('/update-avatar',adminCtrls.updateAvatar)
router.get('/notifications',adminCtrls.getNotifications)
router.get('/notifications/:notificationId',adminCtrls.getNotification)
router.put('/notifications/:notificationId/mark',adminCtrls.markNotification)
router.get('/finance',adminCtrls.finance)
router.put('/change-admin-role',adminCtrls.changeAdminRole)
router.get('/',adminCtrls.getAdmins)
router.get('/:adminId',adminCtrls.getAdmin)
router.delete('/:adminId',adminCtrls.deleteAdmin)

module.exports = router