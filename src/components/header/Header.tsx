import { HTMLAttributes } from 'react';
import './Header.css';

function Header({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="header">
      <div className="container">
        <img
          src="/blue-archive-logo.svg"
          alt="Blue Archive Logo"
          className="header-logo"
        />
        <div className="header-scores">{children}</div>
      </div>
    </div>
  );
}

export default Header;
