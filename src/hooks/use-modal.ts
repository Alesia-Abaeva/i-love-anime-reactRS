import React from 'react';

export const useModal = () => {
  const [modal, setModal] = React.useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return { modal, openModal, closeModal };
};
