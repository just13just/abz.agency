import React, { useEffect } from 'react'
import { blockScroll } from '../../util/screenHelper'


const ModalPage = ({ modal, setModal }) => {

    useEffect(() => {
        blockScroll(modal)
        return () => blockScroll(false)
    }, [modal])

    return (
        <div className="modal modal-custom">
            <div className="modal-dialog modal-dialog-centered modal-custom__dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">
                            {modal.isSuccess
                                ? <span>Congratulations</span>
                                : <span>Oups...</span>}
                        </h5>
                        <button onClick={() => setModal(false)} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {modal.isSuccess
                            ? <div>You have successfully passed the registration</div>
                            : <div>{modal.message}</div>}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={() => setModal(false)}>
                            {modal.isSuccess
                                ? <span>Great</span>
                                : <span>Ok</span>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPage
