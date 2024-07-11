const bcrypt = require("bcryptjs")
const moment = require("moment")
const mongoose = require('mongoose');
const { BSON } = require('bson');
const { ObjectId, Long, Double, Int32, Decimal128, Timestamp } = BSON;

const cities = [
    "arak",
    "ardebil",
    "oromieh",
    "isfahan",
    "ahvaz",
    "elam",
    "bognord",
    "bandar_abbas",
    "boshehr",
    "birgand",
    "tabriz",
    "tehran",
    "khoram_abad",
    "rasht",
    "zahedan",
    "zanjan",
    "sari",
    "semnan",
    "sanandaj",
    "sharekord",
    "shiraz",
    "ghazvin",
    "ghom",
    "karaj",
    "kerman",
    "kermanshah",
    "gorgan",
    "mashhad",
    "hamedan",
    "yasoj",
    "yazd",
];



function makeRandomCity(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error('Input must be a non-empty array of strings');
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}



function makeRandomPrice(min = 150000, max = 1000000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let houses = []

for (let i = 1; i <= 500; i++) {
    let data = {
        "owner": new ObjectId().toString(),
        "name": `house ${i}`,
        "province":makeRandomCity(cities),
        "city": makeRandomCity(cities),
        "price":makeRandomPrice(),
        "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4AmsnPw1mmGtdSxSdLIRgTLenF-NdiGJAElnuFE8n5DbMuWb_g6AKpbGrWKLQzzO05U&usqp=CAU",
        "images": ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4AmsnPw1mmGtdSxSdLIRgTLenF-NdiGJAElnuFE8n5DbMuWb_g6AKpbGrWKLQzzO05U&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4AmsnPw1mmGtdSxSdLIRgTLenF-NdiGJAElnuFE8n5DbMuWb_g6AKpbGrWKLQzzO05U&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4AmsnPw1mmGtdSxSdLIRgTLenF-NdiGJAElnuFE8n5DbMuWb_g6AKpbGrWKLQzzO05U&usqp=CAU"]
    }

    houses.push(data)
}



module.exports = houses

