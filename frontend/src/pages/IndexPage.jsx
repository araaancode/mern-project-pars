import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../Image.jsx";
import Navbar from "../Navbar.jsx"
import PhotoSlider from "../PhotoSlider.jsx";
import North from "../North.jsx"
import Center from "../Center.jsx"
import ArrowLeftIcon from '@iconscout/react-unicons/icons/uil-angle-left.js'
import ArrowRightIcon from '@iconscout/react-unicons/icons/uil-angle-right.js'

export default function IndexPage() {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    axios.get('/api/users/houses').then(response => {
      setHouses(response.data.houses);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center">
        <div className="text">
          <h1 className="text-gray-900 text-2xl font-bold">اجاره ویلا در مقصدهای محبوب</h1>
          <h4 className="text-gray-900 mt-1">اقامتگاه در شهرهای پرطرفدار با ما</h4>
        </div>
        <div className="buttons ">
          <button className="btn mr-2 w-10 h-10 bg-white p-2 border border-gray-300 rounded-xl"><ArrowRightIcon /></button>
          <button className="btn mr-2 w-10 h-10 bg-white p-2 border border-gray-300 rounded-xl"><ArrowLeftIcon /></button>
        </div>
      </div>

      <div className="mt-8 mb-10 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-6 lg:grid-cols-6 min-w-4xl">
        {houses.length > 0 && houses.map(house => (
          <Link to={'/house/' + house._id}>
            <div className="bg-gray-500 mb-2 rounded-xl flex">
              {house.images?.[0] && (
                <Image className="rounded-xl object-cover aspect-square" src={house.cover} alt="" />
              )}
            </div>
            <h2 className="font-bold">{house.address}</h2>
            <h3 className="text-sm text-gray-500">{house.name}</h3>
            <div className="mt-1">
              قیمت به ازای هر شب
              <span className="font-bold"> {house.price}</span>
              <small className="text-gray-500 block">{house.description}</small>
            </div>
          </Link>
        ))}
      </div>
      <PhotoSlider houses={houses} />
      <North houses={houses} />
      <Center houses={houses} />
    </>

  );
}
