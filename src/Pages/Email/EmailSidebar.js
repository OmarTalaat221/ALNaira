import React, { useState } from 'react';
import { Modal } from 'reactstrap';

// Ck Editor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Import Images
import avatar2 from '../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../assets/images/users/avatar-4.jpg';
import avatar6 from '../../assets/images/users/avatar-6.jpg';
import { Link } from 'react-router-dom';


const EmailSidebar = () => {

    const [modal_com, setmodal_com] = useState(false);

    function tog_com() {
        setmodal_com(!modal_com);
    }
    return (
        <React.Fragment>
            <div className="email-leftbar card">
                <button type="button" className="btn btn-danger waves-effect waves-light" onClick={() => { tog_com() }} data-bs-toggle="modal" data-bs-target="#composemodal">
                    Compose
                </button>
                <div className="mail-list mt-4">
                    <Link to="/email-inbox" className="active"><i className="mdi mdi-email-outline font-size-16 align-middle me-2"></i> Inbox <span className="ms-1 float-end">(18)</span></Link>
                    <Link to="#"><i className="mdi mdi-star-outline font-size-16 align-middle me-2"></i>Starred</Link>
                    <Link to="#"><i className="mdi mdi-diamond-stone font-size-16 align-middle me-2"></i>Important</Link>
                    <Link to="#"><i className="mdi mdi-file-outline font-size-16 align-middle me-2"></i>Draft</Link>
                    <Link to="#"><i className="mdi mdi-email-check-outline font-size-16 align-middle me-2"></i>Sent Mail</Link>
                    <Link to="#"><i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2"></i>Trash</Link>
                </div>


                <h6 className="mt-4">Labels</h6>

                <div className="mail-list mt-1">
                    <Link to="#"><span className="mdi mdi-circle-outline text-info float-end"></span>Theme Support</Link>
                    <Link to="#"><span className="mdi mdi-circle-outline text-warning float-end"></span>Freelance</Link>
                    <Link to="#"><span className="mdi mdi-circle-outline text-primary float-end"></span>Social</Link>
                    <Link to="#"><span className="mdi mdi-circle-outline text-danger float-end"></span>Friends</Link>
                    <Link to="#"><span className="mdi mdi-circle-outline text-success float-end"></span>Family</Link>
                </div>

                <h6 className="mt-4">Chat</h6>

                <div className="mt-2">
                    <Link to="#" className="d-flex align-items-start">
                        <div className="flex-shrink-0 me-3">
                            <img className="rounded-circle" src={avatar2} alt="Generic placeholder" height="36" />
                        </div>

                        <div className="flex-grow-1 chat-user-box overflow-hidden">
                            <p className="user-title m-0">Scott Median</p>
                            <p className="text-muted text-truncate">Hello</p>
                        </div>
                    </Link>

                    <Link to="#" className="d-flex align-items-start">
                        <div className="flex-shrink-0 me-3">
                            <img className="rounded-circle" src={avatar3} alt="Generic placeholder" height="36" />
                        </div>

                        <div className="flex-grow-1 chat-user-box overflow-hidden">
                            <p className="user-title m-0">Julian Rosa</p>
                            <p className="text-muted text-truncate">What about our next..</p>
                        </div>
                    </Link>

                    <Link to="#" className="d-flex align-items-start">
                        <div className="flex-shrink-0 me-3">
                            <img className="rounded-circle" src={avatar4} alt="Generic placeholder" height="36" />
                        </div>

                        <div className="flex-grow-1 chat-user-box overflow-hidden">
                            <p className="user-title m-0">David Medina</p>
                            <p className="text-muted text-truncate">Yeah everything is fine</p>
                        </div>
                    </Link>

                    <Link to="#" className="d-flex align-items-start">
                        <div className="flex-shrink-0 me-3">
                            <img className="rounded-circle" src={avatar6} alt="Generic placeholder" height="36" />
                        </div>

                        <div className="flex-grow-1 chat-user-box overflow-hidden">
                            <p className="user-title m-0">Jay Baker</p>
                            <p className="text-muted text-truncate">Wow that's great</p>
                        </div>
                    </Link>

                </div>
            </div>

            <Modal isOpen={modal_com} toggle={() => { tog_com(); }} id="composemodal" centered>
                <div className="modal-header">
                    <h5 className="modal-title" id="composemodalTitle">New message</h5>
                    <button type="button" className="btn-close" onClick={() => { setmodal_com(false); }} aria-label="Close" > </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="To" />
                        </div>

                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="mb-3">
                            <CKEditor editor={ClassicEditor} id="email-editor" />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => { setmodal_com(false); }} > Close </button>
                    <button type="button" className="btn btn-primary"> Send <i className="fab fa-telegram-plane ms-1" /> </button>
                </div>
            </Modal>
        </React.Fragment>
    )
}
export default EmailSidebar;