import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Menu = ({ menuItems }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Тільки на клієнті
  }, []);

  if (!isClient) {
    return null; // Поки що не рендеримо на сервері
  }

  return (
    <nav>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  menuItems: state.menu.menuItems,
});

export default connect(mapStateToProps)(Menu);
