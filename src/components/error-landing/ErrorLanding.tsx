import './ErrorLanding.css';
import Button from '../button/Button';
import Icon from '@mdi/react';
import { mdiReload, mdiAlertRhombus } from '@mdi/js';

interface ErrorLandingProps {
  error: string;
  handleRetryClick: () => void;
}

function ErrorLanding({ error, handleRetryClick }: ErrorLandingProps) {
  return (
    <div className="error-landing">
      <div className="error-img">
        <Icon path={mdiAlertRhombus} color={null} />
      </div>
      <div className="error-msg">{error}</div>
      <Button variant="iconText" onClick={handleRetryClick}>
        Retry <Icon path={mdiReload} color={null} size={1} />
      </Button>
    </div>
  );
}

export default ErrorLanding;
