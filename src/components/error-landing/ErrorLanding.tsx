import imgSrc from '/miyu.webp';
import './ErrorLanding.css';
import Button from '../button/Button';
import Icon from '@mdi/react';
import { mdiReload } from '@mdi/js';

function ErrorLanding() {
  return (
    <div className="error-landing">
      <div className="error-img">
        <img src={imgSrc} alt="Miyu Portrait" />
      </div>
      <div className="error-msg">something went wrong...</div>
      <Button
        variant="icon"
        onClick={() => {
          window.location.reload();
        }}
      >
        <Icon path={mdiReload} color={null} />
      </Button>
    </div>
  );
}

export default ErrorLanding;
