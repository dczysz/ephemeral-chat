import React from 'react';
import { StyledModal } from './styles/Modal';

interface Props {
  heading?: string;
}

const Modal: React.FC<Props> = ({ heading, children }) => (
  <StyledModal>
    <div className="modal">
      {heading && <h1>{heading}</h1>}
      {children}
    </div>
  </StyledModal>
);

export default Modal;
