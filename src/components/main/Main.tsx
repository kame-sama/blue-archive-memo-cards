import { HTMLAttributes } from 'react';
import './Main.css';

function Main({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="main">
      <div className="container">{children}</div>
    </div>
  );
}

export default Main;
