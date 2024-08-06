import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";

function Header({ cart }) {
  let onlineStatus = useOnlineStatus();
  return (
    <>
      <div
        className="
            flex flex-row gap-8 justify-center flex-wrap
            mt-4 p-4
            border-2 border-black"
      >
        <h1>
          {onlineStatus ? (
            <h1>You are online✅</h1>
          ) : (
            <h1>You are offline❌</h1>
          )}
        </h1>
        <h1 className="text-2xl">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="text-2xl">
          <Link to="/about">About</Link>
        </h1>
        <h1 className="text-2xl">
          <Link to="/contact">Contact</Link>
        </h1>
        <h1 className="text-2xl">
          <Link to="/cart">Cart:- {cart.length}</Link>
        </h1>
        <h1 className="text-2xl">
          <Link to="/grocery">Grocery</Link>
        </h1>
      </div>
    </>
  );
}

export default Header;
