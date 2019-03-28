import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, Button, ModalButtons, ModalHeader, ModalContent } from '../../index';

const stories = storiesOf('Modal', module);

stories.add('Modal', () => {
    return (
        <Modal>
            <ModalHeader>
                <h4>Title</h4>
            </ModalHeader>
            <ModalContent>
                <p>Add content here</p>
            </ModalContent>
            <ModalButtons>
                <Button>Confirmar</Button>
                <Button color="secondary">Cancelar</Button>
            </ModalButtons>
        </Modal>
    );
});
