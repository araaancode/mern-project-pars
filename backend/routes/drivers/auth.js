const express = require("express")

const router = express()

const driverAuthCtrls = require("../../controllers/drivers/auth")

router.post('/login', driverAuthCtrls.login)
router.post('/register', driverAuthCtrls.register)
router.post('/forgot-password', driverAuthCtrls.forgotPassword)
router.post('/reset-password', driverAuthCtrls.resetPassword)
router.get('/logout', driverAuthCtrls.logout)
router.post('/change-password', driverAuthCtrls.changePassword)

router.post('/send-otp', driverAuthCtrls.sendOtp);
router.post('/verify-otp', driverAuthCtrls.verifyOtp);

module.exports = router