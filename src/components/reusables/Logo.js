import React from 'react';

import ImageRender from '../reusables/ImageRender';

const Logo = ({ onClick, styles }) => {
  return (
    <div onClick={onClick} className={`text-white cursor-pointer ${styles}`}>
      <ImageRender src="/LotusShop.png" alt="Logo" />
    </div>
  );
};

export default Logo;