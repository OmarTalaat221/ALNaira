import React, { Fragment, useEffect, useState } from "react";
import { CloseButton, Input, Modal, ModalBody, ModalHeader } from "reactstrap";
// import TableContainer from "./../../../../components/Common/TableContainer";
// import {CourseData} from "../../../../CommonData/Data/Course";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import TableContainer from "../../../components/Common/TableContainer";

import Confirm from "../../../components/ConfComp/Confirm";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { base_url } from "../../../constants";
import { uploadFile } from "../../../utils";

const UniversityListTable = ({ Univerisities, handleupdateparent }) => {
  const navigate = useNavigate();
  const localdata = localStorage.getItem("elmatary_admin");
  let adminData = localdata && JSON.parse(localdata);
  const [showuniedit, setshowuniedit] = useState(false);
  const [rowdata, setrowdata] = useState({});
  const [showconf, setshowconf] = useState(false);

  const handleupdateuniversity = async () => {
    let imageUrl = null;
    if (rowdata?.image_url instanceof File) {
      imageUrl = await uploadFile(rowdata?.image_url);
    }
    const data_send = {
      university_name: rowdata.university_name,
      university_id: rowdata.university_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
      image_url: imageUrl ? imageUrl : rowdata?.image_url,
    };
    axios
      .post(
        base_url + "/admin/universities/update_university_info.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          toast.success(res.message);
          handleupdateparent();
          // window.location.reload();
        } else if (res.message == "Session Expired") {
          localStorage.removeItem("elmatary_admin");
          navigate("/login", { replace: true });
        } else if (res.status == "success") {
          toast.error(res.message);
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(rowdata);
  }, [rowdata]);
  const handleupdateshow = (rowdata) => {
    console.log(rowdata);
    const data_send = {
      university_id: rowdata.university_id,
      admin_id: adminData.admin_id,
      access_token: adminData.access_token,
      hidden_value: rowdata.hidden == "no" ? "yes" : "no",
    };
    axios
      .post(
        base_url + "/admin/universities/update_university_hidden.php",
        JSON.stringify(data_send)
      )
      .then((res) => {
        if (res.status == "success") {
          handleupdateparent();
          // window.location.reload();
          setshowuniedit(false);
          toast.success(res.message);
        } else if (res.message == "Session Expired") {
          localStorage.removeItem("elmatary_admin");
          navigate("/login", { replace: true });
        } else if (res.status == "error") {
          toast.error(res.message);
        } else {
          toast.error("Something Went Error");
        }
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    {
      Header: "No",
      Cell: (cell) => {
        return <b>{cell.cell.row.index + 1}</b>;
      },
    },
    {
      Header: "Company Name",
      accessor: "university_name",
    },
    {
      Header: "Image",
      Cell: (cell) => {
        return (
          <img
            src={cell?.cell?.row?.original?.image_url}
            alt="Univ Name"
            width={100}
            height={100}
            style={{ objectFit: "contain" }}
          />
        );
      },
    },
    {
      Header: "Status",
      Cell: (cell) => {
        switch (cell.cell.row.original.hidden) {
          case "no":
            return (
              <Visibility
                className="shown"
                onClick={() => {
                  // handleupdateshow(cell.cell.row.original);
                  setshowconf(true);
                  setrowdata({
                    ...cell.cell.row.original,
                    number: cell.cell.row.index + 1,
                  });
                  // console.log(cell.cell.original,"ddd")
                }}
                style={{ cursor: "pointer", fontSize: "22px" }}
              />
            );

          case "yes":
            return (
              <VisibilityOff
                className="hidden"
                onClick={() => {
                  setshowconf(true);
                  setrowdata({
                    ...cell.cell.row.original,
                    number: cell.cell.row.index + 1,
                  });
                  // handleupdateshow(cell.cell.row.original);
                }}
                style={{ cursor: "pointer", fontSize: "22px" }}
              />
            );
          default:
            return (
              <span className="badge badge-pill badge-soft-success font-size-12">
                {cell.cell.row.original.hidden}
              </span>
            );
        }
      },
    },
    {
      Header: "View Company",
      Cell: (cell) => {
        return (
          <button
            class="btn btn-success"
            onClick={() => {
              console.log(cell.cell.row.original);
              navigate("/categories", {
                state: {
                  universitydata: cell.cell.row.original,
                },
              });
            }}
          >
            View
          </button>
        );
      },
    },
    {
      Header: "Action",
      Cell: (cell) => {
        return (
          <>
            <button
              className="btn btn-primary"
              onClick={() => {
                setshowuniedit(true);
                setrowdata(cell.cell.row.original);
                console.log(cell.cell.row.original);
              }}
            >
              Edit
            </button>
          </>
        );
      },
    },
  ];
  return (
    <React.Fragment>
      {Univerisities ? (
        <TableContainer
          columns={columns}
          data={Univerisities}
          isGlobalFilter={true}
          customPageSize={10}
          className="Invoice table"
        />
      ) : (
        <Fragment />
      )}
      <Modal centered isOpen={showuniedit} toggle={() => setshowuniedit(false)}>
        <ModalHeader tag="h4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h4>Edit Company Data</h4>
            <CloseButton
              onClick={() => {
                setshowuniedit(false);
              }}
              style={{ marginLeft: "auto" }}
            />
          </div>
        </ModalHeader>
        <ModalBody>
          <form
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              // AssignVideo(e)
              handleupdateuniversity();
            }}
          >
            <div className="input_Field">
              <label htmlFor="">Title</label>
              <Input
                style={{
                  width: "100%",
                  borderRadius: "4px",
                  margin: "10px 0",
                }}
                onChange={(e) => {
                  setrowdata({ ...rowdata, university_name: e.target.value });
                }}
                value={rowdata.university_name}
                type="text"
                name="new_title"
                id="new_title"
                placeholder="Enter Course Title"
              />
            </div>

            <div className="input_Field">
              <label htmlFor="image_url">Company Image</label>

              {rowdata?.image_url ? (
                <div className="flex items-center gap-[10px] w-full">
                  <div className="w-[100px] h-[100px]">
                    <img
                      className="w-full  h-full rounded-md object-contain"
                      src={
                        rowdata?.image_url instanceof File
                          ? URL.createObjectURL(rowdata?.image_url)
                          : rowdata?.image_url
                      }
                    />
                  </div>

                  <div>
                    <button
                      className="btn btn-danger mt-0"
                      onClick={() =>
                        setrowdata({
                          ...rowdata,
                          image_url: null,
                        })
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ) : (
                <Input
                  onChange={(e) => {
                    setrowdata({
                      ...rowdata,
                      image_url: e.target.files[0],
                    });
                  }}
                  style={{
                    width: "100%",
                    borderRadius: "4px",
                    margin: "10px 0",
                  }}
                  type="file"
                  name="image_url"
                  id="image_url"
                  placeholder="Enter Company Image"
                />
              )}
            </div>
            <button
              className="btn btn-success"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Edit
            </button>
          </form>
        </ModalBody>
      </Modal>
      {showconf ? (
        <Confirm
          id={rowdata.number}
          cancleoper={() => {
            setshowconf(false);
          }}
          confirmoper={() => {
            const send_data = {
              hidden_value: rowdata.hidden == "no" ? "yes" : "no",
              book_id: rowdata.book_id,
            };
            handleupdateshow(rowdata);
            setshowconf(false);
          }}
          status={rowdata.hidden == "no" ? "hide" : "show"}
          comp={"unit"}
        />
      ) : null}
    </React.Fragment>
  );
};

export default UniversityListTable;
