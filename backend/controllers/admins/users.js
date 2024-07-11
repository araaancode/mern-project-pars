// # description -> HTTP VERB -> Accesss -> Access Type
// # get all users -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/users
exports.getUsers=(req,res)=>{
    res.send("admin get all users")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # get single user -> GET -> SUPER Admin & ADMIN -> PRIVATE
// @route = /api/admins/users/:userId
exports.getUser=(req,res)=>{
    res.send("admin get single user")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active user -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/users/:userId/active-user
exports.activeUser=(req,res)=>{
    res.send("admin active user")
}

// # description -> HTTP VERB -> Accesss -> Access Type
// # active user -> PUT -> SUPER Admin -> PRIVATE
// @route = /api/admins/users/:userId/deactive-user
exports.deactiveUser=(req,res)=>{
    res.send("admin deactive user")
}



