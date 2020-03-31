import React from 'react';

import { StyledErrorModal } from './styles';
import Button from './Button';

export interface Props {
  error: string;
  onClick: () => void;
}

const ErrorModal: React.FC<Props> = ({ error, onClick }) => {
  return (
    <StyledErrorModal>
      <div>
        <h1>uh oh!</h1>
        <p>{error}</p>
        <Button primary onClick={onClick}>
          go home
        </Button>
      </div>
    </StyledErrorModal>
  );
};

export default ErrorModal;
