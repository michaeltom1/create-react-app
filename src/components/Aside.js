import { useState } from "react";
import { asideItems } from "../data/data";

const Aside = () => {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <aside className="aside">
      <div>
        <nav className="aside-nav">
          <div>
            <ul className="aside-items">
              {asideItems.map((item) => (
                <li className="topic" key={item.id}>
                  <a href={item.path}>{item.pathName}</a>
                  <span onClick={() => setActiveItem(item.id)}>
                    {activeItem === item.id ? <item.IconTwo /> : <item.Icon />}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Aside;

