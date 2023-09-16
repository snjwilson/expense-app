import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const Header = () => {
  return (
    <div className="w-full flex justify-between bg-slate-950 border-b-2 border-b-slate-500">
      <div>
        <button className="p-6 min-h-full">
          <Link to="/" className="text-white">
            <h2 className="text-3xl tracking-widest first-letter:text-rose-500">
              Expensly
            </h2>
          </Link>
        </button>
      </div>
      <div className="">
        <Avatar
          src={
            "https://media.licdn.com/dms/image/D5635AQFOw9TpZdwVEQ/profile-framedphoto-shrink_200_200/0/1692072595230?e=1694538000&v=beta&t=Qn-lMJNx1INHKGBTMUZlEHkZuN1Vy_idmStlwhH8EPI"
          }
        />
      </div>
    </div>
  );
};
