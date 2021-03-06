import React, { MouseEventHandler } from 'react';
import { StyledCloseButton, StyledLine } from 'components/PopUp/PopUp.css';
import { StyledDeleteModal, StyledButton, StyledWrapper } from './DeleteModal.css';

interface DeleteModalProps {
  open: boolean;
  handleClose: Function;
  handleDelete: Function;
}

const DeleteModal = ({ open, handleClose, handleDelete }: DeleteModalProps) =>
  open ? (
    <StyledDeleteModal open={open}>
      <StyledCloseButton
        type="button"
        data-testid="deleteModal-close"
        onClick={handleClose as MouseEventHandler<HTMLButtonElement>}
      >
        <StyledLine rotate={45} />
        <StyledLine rotate={-45} />
      </StyledCloseButton>
      <p>Are you sure to delete this item? This action is not reversible.</p>
      <StyledWrapper>
        <StyledButton
          data-testid="delete-keep"
          onClick={handleClose as MouseEventHandler<HTMLButtonElement>}
        >
          Keep
        </StyledButton>
        <StyledButton
          isDelete
          data-testid="deleteItem"
          onClick={handleDelete as MouseEventHandler<HTMLButtonElement>}
        >
          Delete
        </StyledButton>
      </StyledWrapper>
    </StyledDeleteModal>
  ) : null;

export default DeleteModal;
