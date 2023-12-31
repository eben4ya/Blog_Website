import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-[56px] mt-[20px] flex items-center justify-between">
      <Link className="text-[1.5rem] font-bold" to="/">
        My Blog
      </Link>
      <nav className="flex flex-row gap-[15px] text-[]">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
};

export default Header;
