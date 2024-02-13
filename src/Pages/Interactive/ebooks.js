import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry"; // Import the worker entry file

import {
  Row,
  Col,
  Container,
  Modal,
  TabContent,
  TabPane,
  Tooltip,
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import LessonsTableList from "../Lessons/LessonsTabel/LessonsTableList";
import { useCallback } from "react";
import Dropzone from "react-dropzone";
import { toast } from "react-toastify";
import axios from "axios"
import { useEffect } from "react";
import EbooksTableList from "../Lessons/LessonsTabel/EbooksTableList";
import { Icon } from "@iconify/react";
import { Loader } from "rsuite";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Confirm from "../../components/ConfComp/Confirm";
const Ebooks = ({ CourseId, unitId, allunitdata, cd }) => {
  const [type, setType] = useState(false);
  const [videoLink, setVideoLink] = useState(false);

  const [rowdata, setrowdata] = useState({});
  const [showconf, setshowconf] = useState(false);

  // console.log(data)
  const [modal, setmodal] = useState(false);

  /* ====================   Files   ===================*/
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

  function tog_mod() {
    setmodal(!modal);
  }
  /* ====================   Files   ===================*/

  const toggle = useCallback(() => {
    if (modal) {
      setmodal(false);
    } else {
      setmodal(true);
    }
  }, [modal]);

  const [ebook_data, setEbookData] = useState(false);
  const [edit, setEdit] = useState(false);
  const [ebooks, setEbooks] = useState(false);
  const [item, setItem] = useState(false);

  const [itemLoader, setItemLoader] = useState(false);
  const getEbooks = async () => {
    setItemLoader(true)
    const data_send = {
      "course_id": CourseId,
      "unit_id": unitId
    }
    const get = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/ebooks/select_ebook.php", data_send)
    setEbooks(get.message);
    setItemLoader(false);
  }

  const showHideEbooks = async (send_data) => {
    const ebooks_1 = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/ebooks/update_ebook_hidden.php", send_data);
    console.log(send_data);
    if (ebooks_1.status == "success") {
      toast.success(ebooks_1.message);
      await getEbooks();
      setEdit(false)
    } else {
      toast.error(ebooks_1.message);
    }
  }

  const editEbook = async (e) => {
    const data_send = {
      "course_id": CourseId,
      "unit_id": unitId,
      "book_url": book_url ? book_url : book_url,
      "book_title": e.currentTarget.ebook_title.value,
      "book_id": item.book_id,
      "page_count": numberOfPages ? numberOfPages : item.page_count
    }
    const edit = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/ebooks/update_ebook_info.php", data_send)

    if (edit.status == "success") {
      toast.success(edit.message);
      await getEbooks();
      setEdit(false);
    } else {
      toast.error(edit.message);
    }
  }

  // editEbook
  useEffect(() => { getEbooks() }, [])
  const columns =
    [
      {
        Header: "No",
        Cell: (cell) => {
          return (
            <b>
              {cell.cell.row.index + 1}
            </b>
          )
        }
      },
      {
        Header: 'Ebook title',
        accessor: 'book_title',
      },
      {
        Header: 'Pages Count',
        accessor: 'page_count',
      },
      {
        Header: 'Pdf',
        Cell: (cell) => {
          return <a target="_blank" href={cell.cell.row.original.book_url}>Show Book</a>
        }
      },
      {
        Header: 'Status',
        Cell: (cell) => {
          switch (cell.cell.row.original.hidden) {
            case 'no':
              return <div style={{ cursor: 'pointer' }} onClick={() => {
                setshowconf(true);
                setrowdata({ ...cell.cell.row.original, number: cell.cell.row.index + 1 })
                // const item = cell.cell.row.original;
                // const send_data = {
                //   hidden_value: item.hidden == "no" ? "yes" : "no",
                //   book_id: item.book_id
                // }
                // showHideEbooks(send_data)
              }}>
                <Visibility className="shown" />
              </div>;

            case 'yes':
              return <div style={{ cursor: 'pointer' }} onClick={() => {
                setshowconf(true);
                setrowdata({ ...cell.cell.row.original, number: cell.cell.row.index + 1 })
                // const item = cell.cell.row.original;
                // const send_data = {
                //   hidden_value: item.hidden == "no" ? "yes" : "no",
                //   book_id: item.book_id
                // }
                // showHideEbooks(send_data)
              }}>
                <VisibilityOff className="hidden" />
              </div>;

            default:
              return <span className="badge badge-pill badge-soft-success font-size-12">
                {
                  cell.cell.row.original.hidden
                }</span>
          }
        }
      },
      {
        Header: 'Action',
        Cell: (cell) => {
          return (
            <>
              <UncontrolledDropdown>
                <DropdownToggle className="btn btn-light btn-sm" tag="button" data-bs-toggle="dropdown" direction="start">
                  <i className="bx bx-dots-horizontal-rounded"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                  <DropdownItem onClick={() => { setEdit(true); setItem(cell.cell.row.original); }}>Edit</DropdownItem>
                  {/* <DropdownItem onClick={() => {
                    const item = cell.cell.row.original;
                    const send_data = {
                      hidden_value: item.hidden == "no" ? "yes" : "no",
                      book_id: item.book_id
                    }
                    showHideEbooks(send_data)
                  }}>Hide/Show</DropdownItem> */}
                  <DropdownItem onClick={() => handlecopyitem(cell.cell.row.original)}>Copy</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </>
          )
        }
      },
    ]
  const handlecopyitem = (data) => {
    const data_send = {
      ebook_id: data.ebook_id
    }
    console.log(data_send)
    axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/ebooks/make_copy_from_ebooks.php", JSON.stringify(data_send))
      .then((res) => {
        if (res.status == 'success') {
          toast.success(res.message);
          getEbooks();
        }
        else if (res.status == 'error') {
          toast.error(res.message);
        }
        else {
          toast.error("Something Went Error");
        }
      })
  }
  const [numberOfPages, setNumberOfPages] = useState(false);
  const [book, setBook] = useState(false);

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      // No file selected
      return;
    }
    setBook(file);
    var reader = new FileReader();
    reader.readAsBinaryString(event.target.files[0]);
    reader.onloadend = function () {
      var count = reader.result.match(/\/Type[\s]*\/Page[^s]/g)?.length;
      if (count) {
        setNumberOfPages(count);
      } else {
        setNumberOfPages(false)
      }
    }

  };
  const [book_url, setBookUrl] = useState(false);
  const [loading, setLoading] = useState(false)
  const uploadPdf = async () => {
    setLoading(true)
    const formData = new FormData();
    if (book) {
      formData.append("file_attachment", book)
      console.log(book);
      const url = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/uploud_pdf.php", formData);
      console.log(url);
      if (url.status == "success") {
        setBookUrl(url.message);
        toast.success("File Uploaded Successfully");
      } else {
        toast.error(url.message)
      }
    }
    setLoading(false);

  }

  const addBook = async (e) => {
    const data_send = {
      "unit_id": unitId,
      "course_id": CourseId,
      "book_title": e.currentTarget.book_title.value,
      "book_url": book_url,
      "page_count": numberOfPages
    }
    console.log(data_send);

    // https://elmatary.com/El_Matary_Platform/platform/admin/ebooks/insert_ebooks.php
    const add = await axios.post("https://elmatary.com/El_Matary_Platform/platform/admin/ebooks/insert_ebooks.php", data_send);
    console.log(add);
    if (add.status == "success") {
      toast.success("Added");
      setBook(false);
      setBookUrl(false);
      setNumberOfPages(false);
      getEbooks();
      setmodal(false)
    } else {
      toast.error(add.message)
    }
  }

  return (
    <React.Fragment>
      <Container fluid={true}>
        <Breadcrumbs title={cd.course_name} breadcrumbItem={allunitdata.unit_name + " > Ebooks List"} />

        <Row>
          <Col lg={12}>
            <Card>
              <CardBody>
                <div className="position-relative">
                  <div className="modal-button mt-2">
                    <Row className="align-items-start">
                      <Col className="col-sm">
                        <div>
                          <button
                            type="button"
                            className="btn btn-success mb-4"
                            data-bs-toggle="modal"
                            data-bs-target="#addCourseModal"
                            onClick={() => {
                              // showModal()
                              setmodal(true);
                            }}
                          >
                            <i
                              onClick={() => {
                                setmodal(true);
                              }}
                              className="mdi mdi-plus me-1"
                            ></i>{" "}
                            Add Ebook
                          </button>
                        </div>
                      </Col>
                   
                    </Row>
                  </div>
                </div>
                <div id="table-invoices-list">{
                  itemLoader ? <Loader /> :
                    <>
                      {ebooks && ebooks.length ? <EbooksTableList showHideEbook={showHideEbooks} data={ebooks} columns={columns} /> : <h4>No Ebooks</h4>}
                    </>

                }</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} tag="h4">
          Add New Ebook
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addBook(e);
              return false;
            }}
          >
            <Row>
              <Col md={12}>
                <div className="mb-3">
                  <Label className="form-label">Ebook Title</Label>
                  <Input name="book_title" type="text" />
                </div>
                <div className="mb-3">
                  <Label className="form-label">ebook file</Label>
                  <div style={{ "display": "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>  <input type="file" id="pdfInput" accept=".pdf" onChange={handleFileSelect} /> <span className="btn btn-primary" onClick={() => uploadPdf()}>
                    {!loading ? <Icon icon="solar:upload-bold-duotone" /> : <Loader size="sm" />}
                  </span></div>
                  <h4>{numberOfPages ? <span>numberOfPages : {numberOfPages}</span> : null}</h4>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-end">
                  <button type="submit" className="btn btn-success save-user">
                    Save
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
      <Modal isOpen={edit} toggle={() => setEdit(false)}>
        <ModalHeader toggle={() => setEdit(false)} tag="h4">
          Edit Written Ebook
        </ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              editEbook(e)
              return false;
            }}
          >
            <Row>
              <Col md={12}>
                <div className="mb-3">
                  <Label className="form-label">Ebook Title</Label>
                  <Input type="text" name="ebook_title" defaultValue={item?.book_title} />
                </div>
                <div className="mb-3">
                  <Label className="form-label">ebook file</Label>
                  <div style={{ "display": "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>  <input type="file" id="pdfInput" accept=".pdf" onChange={handleFileSelect} /> <span className="btn btn-primary" onClick={() => uploadPdf()}>
                    {!loading ? <Icon icon="solar:upload-bold-duotone" /> : <Loader size="sm" />}
                  </span></div>
                  <h4>{numberOfPages ? <span>numberOfPages : {numberOfPages}</span> : null}</h4>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="text-end">
                  <button type="submit" className="btn btn-success save-user">
                    Save
                  </button>
                </div>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
      {
        showconf ? (
          <Confirm
            id={rowdata.number}
            cancleoper={() => {
              setshowconf(false)
            }}
            confirmoper={() => {
              const send_data = {
                hidden_value: rowdata.hidden == "no" ? "yes" : "no",
                book_id: rowdata.book_id
              }
              showHideEbooks(send_data)
              setshowconf(false);
            }}
            status={rowdata.hidden == 'no' ? 'hide' : 'show'}
            comp={'unit'} />
        ) : (null)
      }
    </React.Fragment>
  );
};

export default Ebooks;
