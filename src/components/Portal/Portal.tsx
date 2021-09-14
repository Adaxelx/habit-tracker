import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const portalWrapper = document.querySelector('.app-modal');

  if (portalWrapper) {
    return ReactDOM.createPortal(children, portalWrapper);
  }
  return <>{children}</>;
};

export default Portal;
