import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";
import ExtraLinks from "./ExtraLinks.jsx";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <header className="flex justify-between mb-10">
        <Link to={'/'} className="flex items-center gap-1">
          <img className="w-10 h-10" src="logo.svg" alt="logo" />
        </Link>

        <Link to={user ? '/account' : '/login'} className="flex items-center bg-gray-100 gap-2 border border-gray-300 rounded-lg py-1 px-4">
          <div className="bg-gray-400 text-white rounded-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 relative top-1">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
          </div>

          {!!user && (
            <div>
              {user.name}
            </div>
          )}


        </Link>
      </header>
     
    </>

  );
}