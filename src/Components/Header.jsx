import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";

function Header({ cart }) {
  let onlineStatus = useOnlineStatus();
  return (
    <>
      <div
        className="
            flex flex-row gap-8 justify-between flex-wrap
            mt-4 p-4 px-[150px]
            bg-slate-700"
      >
        {onlineStatus ? (
          <h1 className="text-white">You are online✅</h1>
        ) : (
          <h1 className="text-white">You are offline❌</h1>
        )}

        <h1 className="text-2xl text-white">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="text-2xl text-white">
          <Link to="/about">About</Link>
        </h1>
        <h1 className="text-2xl text-white">
          <Link to="/contact">Contact</Link>
        </h1>
        <h1 className="text-2xl text-white">
          <Link to="/cart">Cart:- {cart.length}</Link>
        </h1>
        <h1 className="text-2xl text-white">
          <Link to="/grocery">Grocery</Link>
        </h1>
      </div>
    </>
  );
}

export default Header;
