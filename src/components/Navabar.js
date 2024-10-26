import logo from "../logo.svg";
import { navItems } from "../data/data";
const Navabar = () => {
  return (
    <header className="header">
      <div className="nav-container ">
        <nav className="top-nav">
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <div>
            <ul className="nav-items">
              {navItems.map((items) => (
                <li key={items.id}>
                  <a href={items.path}>{items.pathName}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navabar;
