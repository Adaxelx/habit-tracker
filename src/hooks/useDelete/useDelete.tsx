import { useEffect, useState } from 'react';

const useDelete = (request: Function) => {
  const [show, setShow] = useState(false);
  const [canDelete, setCanDelete] = useState(false);

  useEffect(() => {
    const deleteRequest = async () => {
      if (canDelete) {
        try {
          await request();
        } catch (err) {
          console.log(err);
        }
      }
    };
    deleteRequest();
  }, [canDelete]);

  return {
    show,
    handleOpen: () => setShow(true),
    handleClose: () => setShow(false),
    handleDelete: () => setCanDelete(true),
  };
};

export default useDelete;
