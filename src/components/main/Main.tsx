import { HTMLAttributes, forwardRef, Ref } from 'react';
import './Main.css';

const Main = forwardRef(
  ({ children }: HTMLAttributes<HTMLDivElement>, ref: Ref<HTMLDivElement>) => {
    return (
      <div className="main">
        <div className="container" ref={ref}>
          {children}
        </div>
      </div>
    );
  },
);

export default Main;
