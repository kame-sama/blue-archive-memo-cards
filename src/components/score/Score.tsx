import { HTMLAttributes, forwardRef, Ref } from 'react';
import './Score.css';

interface ScoreProps extends HTMLAttributes<HTMLDivElement> {
  score: number;
}

const Score = forwardRef(
  ({ children, score }: ScoreProps, ref: Ref<HTMLDivElement>) => {
    return (
      <div className="score" ref={ref}>
        <div className="score-heading">{children}</div>
        <div className="score-value">{score}</div>
      </div>
    );
  },
);

export default Score;
