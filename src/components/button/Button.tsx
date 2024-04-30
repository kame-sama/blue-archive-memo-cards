import { ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'icon';
}

const classNames = {
  icon: 'button-icon',
};

function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <button className={classNames[variant]} {...props}>
      {children}
    </button>
  );
}

export default Button;
