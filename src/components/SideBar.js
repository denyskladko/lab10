import React from 'react';
import Link from 'next/link'; // Імпортуємо Link для створення посилань

const SideBar = ({ title, menuList }) => {
  return (
    <aside className="sidebar">
      <h1>{title}</h1>
      <nav>
        <ul>
          {menuList.map((menuItem, index) => {
            const href = menuItem.toLowerCase(); // Преобразуємо назву до малих літер для шляху
            return (
              <li key={index}>
                <Link href={`/${href}`}> {/* Динамічно створюємо шляхи */}
                  <a>{menuItem}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
