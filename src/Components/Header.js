import Link from "next/link";

const Header = ({children}) => {
  return (
    <>
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link className="topListItem" href={"/"}>Home</Link>
          <Link className="topListItem" href={"/single"}>About</Link>
          <Link className="topListItem" href={"/settings"}>Contact</Link>
          <Link className="topListItem" href={"/write"}>Write</Link>
          <Link className="topListItem" href={"/login"}>LogIn</Link>
          <Link className="topListItem" href={"/register"}>Register</Link>

        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    {children}
    </>
  );
};
export default Header;
