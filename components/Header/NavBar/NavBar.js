import NavLink from "./NavLink";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <NavLink name="Home" />
        <NavLink name="About" />
        <NavLink name="Portfolio" />
        <NavLink name="Contact" />
      </ul>
    </nav>
  );
};

export default NavBar;
