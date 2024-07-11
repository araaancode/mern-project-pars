const { StatusCodes } = require('http-status-codes');
const House = require("../../models/House")
const User = require("../../models/User")

exports.getMe=async(req,res)=>{
    try {
        let user = await User.findById(req.user.id)
        if(user){
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "کاربر پیدا شد",
                user:user
            })
        }else{
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "کاربر پیدا نشد"
            })
        }
    } catch (error) {
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

exports.updateAvatar=(req,res)=>{
    res.send("user update avatar")
}

exports.getHouses=async(req,res)=>{
    try {
        let houses = await House.find({})
        if(houses.length > 0){
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "خانه ها پیدا شدند",
                count:houses.length,
                houses:houses
            })
        }else{
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "خانه ها پیدا نشدند"
            })
        }
    } catch (error) {
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

exports.getHouse=async(req,res)=>{
    try {
        let house = await House.findById(req.params.houseId)
        if(house){
            return res.status(StatusCodes.OK).json({
                status: 'success',
                msg: "خانه پیدا شد",
                house:house
            })
        }else{
            return res.status(StatusCodes.BAD_REQUEST).json({
                status: 'failure',
                msg: "خانه پیدا نشد"
            })
        }
    } catch (error) {
        console.error(error.message);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status: 'failure',
            msg: "خطای داخلی سرور",
            error
        });
    }
}

exports.searchHouses=(req,res)=>{
    res.send("user searchHouses")
}

exports.bookHouse=(req,res)=>{
    res.send("user book house")
}

exports.notifications=(req,res)=>{
    res.send("user notifications")
}

exports.finance=(req,res)=>{
    res.send("user finance")
}

exports.myTickets=(req,res)=>{
    res.send("user my tickets")
}

exports.createTicket=(req,res)=>{
    res.send("user create tickets")
}

exports.addFavourite=(req,res)=>{
    res.send("user add favourite")
}

exports.myFavourites=(req,res)=>{
    res.send("user my favourites")
}


exports.myFavourites=(req,res)=>{
    res.send("user my favourites")
}

exports.myBookings=(req,res)=>{
    res.send("user my bookings")
}


