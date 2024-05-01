import { useRef, useState, useContext } from 'react';
import Button from '../button/Button';
import HelpPopUp from '../help-pop-up/HelpPopUp';
import {
  mdiHelpCircle,
  mdiCloseCircle,
  mdiVolumeHigh,
  mdiVolumeOff,
  mdiMusic,
  mdiMusicOff,
} from '@mdi/js';
import Icon from '@mdi/react';
import './Footer.css';
import { SoundContext } from '../../context/SoundContext';
import useSound from 'use-sound';
import clickSound from '/click.wav.mp3';
import backgroundTheme from '/background-theme.ogg';
import greeting from '/greeting.ogg';

function Footer() {
  const [playClickSound] = useSound(clickSound);
  const [playBackgroundTheme, { stop: stopBackgroundTheme }] = useSound(
    backgroundTheme,
    {
      volume: 0.1,
      loop: true,
    },
  );
  const [playGreeting] = useSound(greeting, { volume: 0.25, interrupt: true });
  const [isMusicOn, setIsMusicOn] = useState(false);
  const { isSoundOn, setIsSoundOn } = useContext(SoundContext);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const helpPopUpRef = useRef<HTMLDivElement>(null);
  const handleHelpButtonClick = () => {
    if (isSoundOn) playClickSound();
    if (isSoundOn && !isHelpOpen) playGreeting();
    setIsHelpOpen(!isHelpOpen);
    helpPopUpRef.current?.classList.toggle('open');
  };
  const handleSoundButtonClick = () => {
    if (isSoundOn) playClickSound();
    setIsSoundOn(!isSoundOn);
  };
  const handleMusicButtonClick = () => {
    setIsMusicOn(!isMusicOn);
    if (isMusicOn) stopBackgroundTheme();
    if (!isMusicOn) playBackgroundTheme();
  };
  return (
    <div className="footer">
      <div className="sound-controls">
        <Button variant="icon" onClick={handleMusicButtonClick}>
          <Icon path={isMusicOn ? mdiMusic : mdiMusicOff} color={null} />
        </Button>
        <Button variant="icon" onClick={handleSoundButtonClick}>
          <Icon path={isSoundOn ? mdiVolumeHigh : mdiVolumeOff} color={null} />
        </Button>
      </div>
      <HelpPopUp ref={helpPopUpRef} />
      <Button variant="icon" onClick={handleHelpButtonClick}>
        <Icon path={isHelpOpen ? mdiCloseCircle : mdiHelpCircle} color={null} />
      </Button>
    </div>
  );
}

export default Footer;
