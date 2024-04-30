import { useRef, useState } from 'react';
import Button from '../button/Button';
import HelpPopUp from '../help-pop-up/HelpPopUp';
import { mdiHelpCircle, mdiCloseCircle } from '@mdi/js';
import Icon from '@mdi/react';
import './Footer.css';

function Footer() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const helpPopUpRef = useRef<HTMLDivElement>(null);
  const handleHelpButtonClick = () => {
    setIsHelpOpen(!isHelpOpen);
    helpPopUpRef.current?.classList.toggle('open');
  };
  return (
    <div className="footer">
      <HelpPopUp ref={helpPopUpRef} />
      <Button variant="icon" onClick={handleHelpButtonClick}>
        <Icon path={isHelpOpen ? mdiCloseCircle : mdiHelpCircle} color={null} />
      </Button>
    </div>
  );
}

export default Footer;
