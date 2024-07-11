import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }


  if (!ready) {
    return 'در حال بارگزاری...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>
      <AccountNav />

      {subpage === 'places' && (
        <PlacesPage />
      )}

      <section className="w-full overflow-hidden dark:bg-gray-900">
        <div className="flex flex-col">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Si-o-se-Pol.jpg/800px-Si-o-se-Pol.jpg" alt="User Cover"
            className="w-full xl:h-[25rem] lg:h-[18rem] md:h-[16rem] sm:h-[14rem] xs:h-[11rem]" />

          <div className="sm:w-[80%] xs:w-[90%] mx-auto flex">
            <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww" alt="User Profile"
              className="rounded-md lg:w-[12rem] lg:h-[12rem] md:w-[10rem] md:h-[10rem] sm:w-[8rem] sm:h-[8rem] xs:w-[7rem] xs:h-[7rem] relative lg:bottom-[5rem] sm:bottom-[4rem] xs:bottom-[3rem]" />
          </div>

          <div
            className="xl:w-[80%] lg:w-[90%] md:w-[90%] sm:w-[92%] xs:w-[90%] mx-auto flex flex-col gap-4 items-center relative lg:-top-8 md:-top-6 sm:-top-4 xs:-top-4">
            <p className="w-fit text-gray-700 dark:text-gray-400 text-md text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>


            <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
              <div className="w-full flex sm:flex-row xs:flex-col gap-2 justify-center">
                <div className="w-full">
                  <dl className="text-gray-900 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pb-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">نام</dt>
                      <dd className="text-lg font-semibold">{user.name}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">نام خانوادگی</dt>
                      <dd className="text-lg font-semibold">{user.name}</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">تاریخ تولد</dt>
                      <dd className="text-lg font-semibold">21/02/1997</dd>
                    </div>
                    <div className="flex flex-col py-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">جنسیت</dt>
                      <dd className="text-lg font-semibold">زن</dd>
                    </div>
                  </dl>
                </div>
                <div className="w-full">
                  <dl className="text-gray-900 dark:text-white dark:divide-gray-700">
                    <div className="flex flex-col pt-3 mb-2">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">محل زندگی</dt>
                      <dd className="text-lg font-semibold">اصفهان</dd>
                    </div>

                    <div className="flex flex-col pt-3 mb-2">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">شماره همراه</dt>
                      <dd className="text-lg font-semibold">0913xxxxxxx</dd>
                    </div>
                    <div className="flex flex-col pt-3 mb-2">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">ایمیل</dt>
                      <dd className="text-lg font-semibold">{user.email}</dd>
                    </div>

                    <div className="flex flex-col pt-3">
                      <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">شبکه اجتماعی</dt>
                      <dd className="text-lg font-semibold">https://www.instagram.com/</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

         

          </div>
        </div>


        <div className="w-[50%] border p-10 rounded-lg border-gray-300 m-auto mb-20">
          <h2 className="mt-2 mb-8 text-xl">ویرایش پروفایل</h2>
          <form>
            <div className="mb-5">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full" placeholder="نام" required />
            </div>
            <div className="mb-5">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">نام خانوادگی</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full" placeholder="نام خانوادگی" required />
            </div>
            <div className="mb-5">
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل</label>
              <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full" placeholder="ایمیل" required />
            </div>

            <div className="mb-5">
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره همراه</label>
              <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full" placeholder="شماره همراه" required />
            </div>
           
           
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ویرایش پروفایل</button>
          </form>
        </div>

      </section>

    </div>
  );
}