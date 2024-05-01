import { HTMLAttributes } from 'react';
import './Header.css';
import imgSrc from '/blue-archive-logo.svg';

function Header({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="header">
      <div className="container">
        <img src={imgSrc} alt="Blue Archive Logo" className="header-logo" />
        <div className="header-scores">{children}</div>
      </div>
    </div>
  );
}

export default Header;
