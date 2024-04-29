import { HTMLAttributes } from 'react';
import './Score.css';

interface ScoreProps extends HTMLAttributes<HTMLDivElement> {
  score: number;
}

function Score({ children, score }: ScoreProps) {
  return (
    <div className="score">
      <div className="score-heading">{children}</div>
      <div className="score-value">{score}</div>
    </div>
  );
}

export default Score;
