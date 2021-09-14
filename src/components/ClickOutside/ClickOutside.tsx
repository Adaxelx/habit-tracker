import React, { useRef, useEffect, ReactNode } from 'react';
import { Wrapper } from './ClickOutside.css';

interface ClickOutsideProps {
  onOutsideClick: () => void;
  children: ReactNode;
}

const ClickOutside = ({ onOutsideClick, children }: ClickOutsideProps) => {
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      const target = event.target as Node;
      const isClickedOutside = wrapper?.current && !wrapper?.current.contains(target);

      if (isClickedOutside) {
        onOutsideClick();
      }
    };
    document.body.addEventListener('mousedown', handleClick);
    return () => document.body.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <Wrapper ref={wrapper} data-testid="clickOutside:wrapper">
      {children}
    </Wrapper>
  );
};

export default ClickOutside;
