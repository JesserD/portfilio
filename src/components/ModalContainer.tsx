import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../app/store/store';


const ModalContainer = () => {
    const { modalStore } = useStore();

    return (
        <Modal isOpen={modalStore.modal.open} onClose={modalStore.closeModal} isCentered size='lg' >
            <ModalOverlay />
            <ModalContent>
            <ModalCloseButton />
                {modalStore.modal.body}
            </ModalContent>
        </Modal>
    );
};

export default observer(ModalContainer);