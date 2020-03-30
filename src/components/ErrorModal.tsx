import React from 'react';

import { StyledErrorModal } from './styles';

export interface Props {
  error: string;
  onClick: () => void;
}

const ErrorModal: React.FC<Props> = ({ error, onClick }) => {
  return (
    <StyledErrorModal>
      <div>
        <h1>Error</h1>
        <p>{error}</p>
        <button onClick={onClick}>Click here</button>
      </div>
    </StyledErrorModal>
  );
};

export default ErrorModal;
