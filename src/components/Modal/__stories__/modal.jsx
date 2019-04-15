import { storiesOf } from '@storybook/react';
import React from 'react';
import { Button, Modal, ModalContent, ModalFooter, ModalHeader, Overlay } from '../../index';

const stories = storiesOf('Modal', module);

stories.add('Modal', () => {
    return (
        <Overlay type="fullscreen" padding="0px">
            <Modal>
                <ModalHeader>
                    <h4>Title</h4>
                </ModalHeader>
                <ModalContent>
                    <p>Add content here</p>
                </ModalContent>
                <ModalFooter>
                    <Button>Confirmar</Button>
                    <Button color="secondary">Cancelar</Button>
                </ModalFooter>
            </Modal>
        </Overlay>
    );
});
