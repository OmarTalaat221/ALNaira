import React, { useState } from "react";
import { Row, Col, Card, Form, CardBody, Container, CardHeader } from "reactstrap"

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import Dropzone from "react-dropzone";

import { Link } from "react-router-dom";


const FileUpload = () => {
    document.title = "File Upload | Matary - React Admin & Dashboard Template";


    const [selectedFiles, setselectedFiles] = useState([])

    function handleAcceptedFiles(files) {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        )
        setselectedFiles(files)
    }

    /**
     * Formats the size
     */
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    }

    return (
        <React.Fragment>


            <div className="page-content">
                <Container fluid={true}>

                    <Breadcrumbs title="Forms" breadcrumbItem="File Upload" />


                    <Row>
                        <Col className="col-12">
                            <Card>
                                <CardHeader>
                                    <h4 className="card-title">Dropzone</h4>
                                    <p className="card-title-desc">DropzoneJS is an open source library
                                        that provides drag'n'drop file uploads with image previews.
                                    </p>
                                </CardHeader>
                                <CardBody>
                                    <div>
                                        <Form
                                            className="dropzone"
                                        >
                                            <Dropzone
                                                onDrop={acceptedFiles => {
                                                    handleAcceptedFiles(acceptedFiles)
                                                }}
                                            >
                                                {({ getRootProps, getInputProps }) => (
                                                    <div style={{ textAlign: "center" }}>
                                                        <div
                                                            className="dz-message needsclick"
                                                            {...getRootProps()}
                                                        >
                                                            <input {...getInputProps()} />
                                                            <div className="mb-3 mt-5">
                                                                <i className="display-4 text-muted mdi mdi-cloud-upload"></i>
                                                            </div>
                                                            <h4>Drop files here or click to upload.</h4>
                                                        </div>
                                                    </div>
                                                )}
                                            </Dropzone>
                                            <div className="dropzone-previews mt-3" id="file-previews">
                                                {selectedFiles.map((f, i) => {
                                                    return (
                                                        <Card
                                                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                            key={i + "-file"}
                                                        >
                                                            <div className="p-2">
                                                                <Row className="align-items-center">
                                                                    <Col className="col-auto">
                                                                        <img
                                                                            data-dz-thumbnail=""
                                                                            height="80"
                                                                            className="avatar-sm rounded bg-light"
                                                                            alt={f.name}
                                                                            src={f.preview}
                                                                        />
                                                                    </Col>
                                                                    <Col>
                                                                        <Link
                                                                            to="#"
                                                                            className="text-muted font-weight-bold"
                                                                        >
                                                                            {f.name}
                                                                        </Link>
                                                                        <p className="mb-0">
                                                                            <strong>{f.formattedSize}</strong>
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </Card>
                                                    )
                                                })}
                                            </div>
                                        </Form>
                                    </div>

                                    <div className="text-center mt-4">
                                        <button type="button" className="btn btn-primary waves-effect waves-light">Send Files</button>
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

export default FileUpload;
