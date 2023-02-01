import React from 'react';
import { StyledButton } from './style';

interface buttonProps {
  children: string;
  disabled?: boolean;
  type?: 'submit' | 'button';
  color?: string;
  size?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // 이벤트 핸들러
}

const Button = ({ children, disabled, color, size, type, onClick }: buttonProps) => {
  return (
    <StyledButton disabled={disabled} color={color} size={size} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
