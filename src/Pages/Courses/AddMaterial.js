import React, { useState } from "react";
import classnames from "classnames";
import { Container, Row, Col, Card, Collapse, Form, Modal } from "reactstrap";
import { Link } from "react-router-dom";
import Dropzone from "react-dropzone";

// Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { useEffect } from "react";

const AddMaterial = () => {
  document.title = "Add Material | Matary - React Admin & Dashboard Template";

  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);

  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
  };

  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const [modal, setmodal] = useState(false);

  function tog_mod() {
    setmodal(!modal);
  }

  // ================================================
  const [type, setType] = useState(false);
  const [videoLink, setVideoLink] = useState(false);

  function handelTypeChange(type_2) {
    setType(type_2);
  }

  function handelVideoLink(link) {
    setVideoLink(link);
  }

  useEffect(() => {
    console.log(type);
  }, [type]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Add Material" />
          <Row>
            <Col lg={12}>
              <div className="custom-accordion" id="AddMaterial-accordion">
                <Card>
                  {
                    // <Link
                    //   to="#AddMaterial-materialinfo-collapse"
                    //   className={classnames("text-dark", { collapsed: !col1 })}
                    //   type="button"
                    //   onClick={t_col1}
                    //   style={{ cursor: "pointer" }}
                    // >
                    //   <div className="p-4">
                    //     <div className="d-flex align-items-center">
                    //       <div className="flex-shrink-0 me-3">
                    //         <div className="avatar-sm">
                    //           <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                    //             01
                    //           </div>
                    //         </div>
                    //       </div>
                    //       <div className="flex-grow-1 overflow-hidden">
                    //         <h5 className="font-size-16 mb-1">Material Info</h5>
                    //         <p className="text-muted text-truncate mb-0">
                    //           Fill all information below
                    //         </p>
                    //       </div>
                    //       <div className="flex-shrink-0">
                    //         <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                    //       </div>
                    //     </div>
                    //   </div>
                    // </Link>
                  }
                  <Collapse isOpen={true} id="checkout-billinginfo-collapse">
                    <div className="p-4 border-top">
                      <form>
                        <div className="mb-3">
                          <label className="form-label" htmlFor="materialname">
                            Material Name
                          </label>
                          <input
                            id="materialname"
                            name="materialname"
                            placeholder="Enter Material Name"
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <Row>
                          <Col lg={4}>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="price">
                                Price
                              </label>
                              <input
                                id="price"
                                name="price"
                                placeholder="Enter Price"
                                type="number"
                                className="form-control"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label
                                htmlFor="choices-single-category"
                                className="form-label"
                              >
                                Material Type
                              </label>
                              <select
                                className="form-control"
                                data-trigger
                                name="choices-single-category"
                                id="choices-single-category"
                                onChange={(e) =>
                                  handelTypeChange(e.currentTarget.value)
                                }
                              >
                                <option value={null}>Select</option>
                                <option value="pdf">PDF</option>
                                <option value="image">Image</option>
                                <option value="video">Video</option>
                              </select>
                            </div>
                          </div>
                        </Row>
                        {type && type == "video" ? (
                          <Row>
                            <Col lg={4}>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="videoId">
                                  Video Source ID
                                </label>
                                <input
                                  id="videoId"
                                  name="videoLink"
                                  placeholder="Enter Video Source ID"
                                  type="text"
                                  className="form-control"
                                  style={{ margin: "10px" }}
                                  onChange={(e) =>
                                    handelVideoLink(e.currentTarget.value)
                                  }
                                />
                                {videoLink != "" && videoLink ? (
                                  <div
                                    className="videoIframe"
                                    style={{ boxShadow: "" }}
                                  >
                                    <iframe
                                      width="290"
                                      height="150"
                                      src="https://player.vimeo.com/video/300409469"
                                      title="YouTube video player"
                                      frameborder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowfullscreen
                                    ></iframe>
                                  </div>
                                ) : null}
                              </div>
                            </Col>
                          </Row>
                        ) : null}
                      </form>
                    </div>
                  </Collapse>
                </Card>
                {type && (type == "pdf" || type == "image") ? (
                  <Card>
                    <Link
                      to="#AddMaterial-img-collapse"
                      className={classnames("text-dark collapsed", {
                        collapsed: !col2,
                      })}
                      type="button"
                      onClick={t_col2}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="p-4">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 me-3">
                            <div className="avatar-sm">
                              <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                                02
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 overflow-hidden">
                            <h5 className="font-size-16 mb-1">Material File</h5>
                            <p className="text-muted text-truncate mb-0">
                              Fill all information below
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Collapse isOpen={col2} id="AddMaterial-img-collapse">
                      <div className="p-4 border-top">
                        <Form className="dropzone">
                          <Dropzone
                            onDrop={(acceptedFiles) => {
                              handleAcceptedFiles(acceptedFiles);
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
                          <div
                            className="dropzone-previews mt-3"
                            id="file-previews"
                          >
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
                              );
                            })}
                          </div>
                        </Form>
                      </div>
                    </Collapse>
                  </Card>
                ) : null}
                {
                  // <Card>
                  //     <Link to="#AddMaterial-metadata-collapse"
                  //         className={classnames(
                  //             "text-dark collapsed",
                  //             { collapsed: !col3 }
                  //         )}
                  //         type="button"
                  //         onClick={t_col3}
                  //         style={{ cursor: "pointer" }}
                  //     >
                  //         <div className="p-4">
                  //             <div className="d-flex align-items-center">
                  //                 <div className="flex-shrink-0 me-3">
                  //                     <div className="avatar-sm">
                  //                         <div className="avatar-title rounded-circle bg-soft-primary text-primary">
                  //                             03
                  //                         </div>
                  //                     </div>
                  //                 </div>
                  //                 <div className="flex-grow-1 overflow-hidden">
                  //                     <h5 className="font-size-16 mb-1">Meta Data</h5>
                  //                     <p className="text-muted text-truncate mb-0">Fill all information below</p>
                  //                 </div>
                  //                 <div className="flex-shrink-0">
                  //                     <i className="mdi mdi-chevron-up accor-down-icon font-size-24"></i>
                  //                 </div>
                  //             </div>
                  //         </div>
                  //     </Link>
                  //     <Collapse
                  //         isOpen={col3}
                  //         id="AddMaterial-metadata-collapse"
                  //     >
                  //         <div className="p-4 border-top">
                  //             <form>
                  //                 <Row>
                  //                     <Col sm={6}>
                  //                         <div className="mb-3">
                  //                             <label className="form-label" htmlFor="metatitle">Meta Title</label>
                  //                             <input id="metatitle" name="metatitle" placeholder="Enter Title" type="text" className="form-control" />
                  //                         </div>
                  //                     </Col>
                  //                     <Col sm={6}>
                  //                         <div className="mb-3">
                  //                             <label className="form-label" htmlFor="metakeywords">Meta Keywords</label>
                  //                             <input id="metakeywords" name="metakeywords" placeholder="Enter Keywords" type="text" className="form-control" />
                  //                         </div>
                  //                     </Col>
                  //                 </Row>
                  //                 <div className="mb-0">
                  //                     <label className="form-label" htmlFor="metadescription">Meta Description</label>
                  //                     <textarea className="form-control" id="metadescription" placeholder="Enter Description" rows="4"></textarea>
                  //                 </div>
                  //             </form>
                  //         </div>
                  //     </Collapse>
                  // </Card>
                }
              </div>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col className="col text-end">
              <Link to="#" className="btn btn-danger me-1">
                {" "}
                <i className="bx bx-x me-1"></i> Cancel{" "}
              </Link>
              <Link
                to="#"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#success-btn"
                onClick={() => {
                  tog_mod();
                }}
              >
                {" "}
                <i className=" bx bx-file me-1"></i> Save{" "}
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Modal
        isOpen={modal}
        toggle={() => {
          tog_mod();
        }}
        id="success-btn"
        centered
      >
        <div className="modal-content">
          <div className="modal-body">
            <div className="text-center">
              <i className="bx bx-check-circle display-1 text-success"></i>
              <h3 className="mt-3">Material Added Successfully</h3>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default AddMaterial;
