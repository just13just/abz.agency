import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalPage = ({ modal, setModal }) => {

    return (
        <div>
            <Modal isOpen={!!modal} toggle={() => setModal(false)} centered>
                <ModalHeader toggle={() => setModal(false)}>
                    {modal.isSuccess
                        ? <span>Congratulations</span>
                        : <span>Oups...</span>}
                </ModalHeader>
                <ModalBody>
                    {modal.isSuccess
                        ? <div>You have successfully passed the registration</div>
                        : <div>{modal.message}</div>}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={() => setModal(false)}>
                        {modal.isSuccess
                            ? <span>Great</span>
                            : <span>Ok</span>}
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalPage