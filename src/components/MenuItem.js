import React from 'react';

import Link from 'next/link';

const MenuItem = ({ text, url }) => {
  return (
    <li>
      <Link href={url}>
        <a>{text}</a> {/* <a> повинен бути всередині Link */}
      </Link>
    </li>
  );
};

export default MenuItem;