import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <img src="/logo192.png" alt="Logo" style={{ cursor: 'pointer' }} />
      </Link>
    </div>
  );
};

export default Logo;
