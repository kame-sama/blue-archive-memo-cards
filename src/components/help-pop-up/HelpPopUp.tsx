import { forwardRef, Ref } from 'react';
import imgSrc from '/hanae.webp';
import './HelpPopUp.css';

const HelpPopUp = forwardRef((_, ref: Ref<HTMLDivElement>) => {
  return (
    <div className="help" ref={ref}>
      <ul className="help-msg-list">
        <li className="help-msg">5 rounds</li>
        <li className="help-msg">each round deck size increments by 2</li>
        <li className="help-msg">
          don't click the same card twice in a single round
        </li>
      </ul>
      <img src={imgSrc} alt="Hanae Portrait" className="help-img" />
    </div>
  );
});

export default HelpPopUp;
