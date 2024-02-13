import React, { useState } from "react";
import { Row, Col, Card, CardBody, Container, CardHeader } from "reactstrap";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// Ck Editor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// Snow Editor
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const Editors = () => {
    document.title = "Editors | Matary - React Admin & Dashboard Template";


    const [value, setValue] = useState(`<h2>Hello World!</h2> 
    </br> 
    <h3>This is an simple editable area.</h3> 
    </br> 
    <ul>
        <li>
            Select a text to reveal the toolbar.
        </li>
        <li>
            Edit rich document on-the-fly, so elastic!
        </li>
    </ul>
    <p><br /></p>
    <p>
        End of simple area
    </p>`);

    const [valueb, setValueb] = useState(`<h2>Hello World!</h2> 
    </br> 
    <h3>This is an simple editable area.</h3> 
    </br> 
    <ul>
        <li>
            Select a text to reveal the toolbar.
        </li>
        <li>
            Edit rich document on-the-fly, so elastic!
        </li>
    </ul>
    <p><br /></p>
    <p>
        End of simple area
    </p>`);

    const modules = {
        toolbar: [[{ 'font': [] }, { 'size': [] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'script': 'super' }, { 'script': 'sub' }],
        [{ 'header': [false, 1, 2, 3, 4, 5, 6] }, 'blockquote', 'code-block'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['direction', { 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']]
    };

    return (
        <React.Fragment>

            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="Forms" breadcrumbItem="Editors" />
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Ckeditor Classic Editor</h4>
                                </CardHeader>
                                <CardBody>
                                    <CKEditor editor={ClassicEditor} id="ckeditor-classic" />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={12}>
                            <div className="justify-content-between d-flex align-items-center my-1">
                                <h5 className="mb-2 pb-3">Quilljs Editor</h5>
                            </div>
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Snow Editor</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="snow-editor" style={{ height: "300px" }}>
                                        <ReactQuill theme="snow" id="snow-editor" value={value} onChange={setValue} modules={modules}
                                            style={{ height: "250px" }} />
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <h4 className="card-title mb-0">Bubble Editor</h4>
                                </CardHeader>
                                <CardBody>
                                    <div id="bubble-editor" style={{ height: "300px" }}>
                                        <ReactQuill theme="bubble" id="bubble-editor" value={valueb} onChange={setValueb} style={{ height: "300px" }} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Editors;
