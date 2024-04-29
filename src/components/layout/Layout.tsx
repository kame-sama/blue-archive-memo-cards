import { HTMLAttributes } from 'react';
import './Layout.css';

function Layout({ children }: HTMLAttributes<HTMLDivElement>) {
  return <div className="layout">{children}</div>;
}

export default Layout;
