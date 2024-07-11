import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext.jsx";


export default function LoginPage() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(e) {
    exports.preventDefault();
    try {
      const { data } = await axios.post('/api/users/auth/login', { phone, password });

      setUser(data);
      alert('با موفقیت وارد سایت شدید');
      setRedirect(true);
    } catch (e) {
      console.log(e);
      alert('وارد سایت نشدید!');
    }
  }

  // if (redirect) {
  //   return <Navigate to={'/'} />
  // }

  

  return (
    <div>
      <div>
        <div class="mb-4 flex">
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          <span class="flex justify-around items-center">
            login
          </span>
        </div>
      </div>
    </div>
  );
}