// # description -> HTTP VERB -> Accesss -> Access Type
// # get admin profile -> GET -> Admin -> PRIVATE
// @route = /api/admins/me
exports.getMe=(req,res)=>{
    res.send("admin get me")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # update admin profile -> PUT -> Admin -> PRIVATE
// @route = /api/admins/update-profile
exports.updateProfile=(req,res)=>{
    res.send("admin update profile")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # update admin avatar -> PUT -> Admin -> PRIVATE
// @route = /api/admins/update-avatar
exports.updateAvatar=(req,res)=>{
    res.send("admin update avatar")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get admin notifications -> GET -> Admin -> PRIVATE
// @route = /api/admins/notifications
exports.getNotifications=(req,res)=>{
    res.send("admin get all notifications")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get admin single notification -> GET -> Admin -> PRIVATE
// @route = /api/admins/notifications/:notificationId
exports.getNotification=(req,res)=>{
    res.send("admin get single notifications")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # mark notification as read -> PUT -> Admin -> PRIVATE
// @route = /api/admins/notifications/:notification/mark
exports.markNotification=(req,res)=>{
    res.send("admin mark notification")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get admin finance -> GET -> Admin -> PRIVATE
// @route = /api/admins/finance
exports.finance=(req,res)=>{
    res.send("admin finance")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get admin finance -> GET -> SUPER Admin -> PRIVATE
// @route = /api/admins/change-admin-role
exports.changeAdminRole=(req,res)=>{
    res.send("admin change admin role")
}


// *** admins crud ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # get all admins -> GET -> SUPER Admin -> PRIVATE
// @route = /api/admins
exports.getAdmins=(req,res)=>{
    res.send("admin get all admins")
}


// *** admins crud ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # get single admins -> GET -> SUPER Admin -> PRIVATE
// @route = /api/admins/:adminId
exports.getAdmin=(req,res)=>{
    res.send("admin get single admin")
}


// *** admins crud ***
// # description -> HTTP VERB -> Accesss -> Access Type
// # delete admin -> DELETE -> SUPER Admin -> PRIVATE
// @route = /api/admins/:adminId
exports.deleteAdmin=(req,res)=>{
    res.send("admin delete admin")
}


