import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className=" border p-3">
        <ul className="flex gap-7 text-green-500 cursor-pointer">
          NAVBARRR!
          {/* <Link to="/blogs">Blogs</Link>
          <Link to="/">Users</Link> */}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
