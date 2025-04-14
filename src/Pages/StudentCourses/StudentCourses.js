import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CloseButton, Container, Modal } from "reactstrap";

import "./studentcourses.css";
import axios from "axios";
// import { CloseButton } from 'react-toastify/dist/components';
import { toast, ToastContainer } from "react-toastify";
const StudentCourses = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { state } = location;
  // console.log(state)
  const [studentData, setStudentData] = useState(false);
  const [subs, setSubs] = useState(false);
  if (!location?.state) {
    navigate("/students");
  }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const getStudentSub = async () => {
    const subStudent = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/subscription/select_student_subscription.php",
      JSON.stringify({ student_id: location?.state?.unitData?.student_id })
    );
    setSubs(subStudent?.message);
    console.log(location?.state?.unitData?.student_id);
  };
  const cancelSub = async (e) => {
    const subStudent = await axios.post(
      "https://camp-coding.online/Teacher_App_2025/elnaira_jor/admin/subscription/cancel_student_sub.php",
      JSON.stringify({
        student_id: location?.state?.unitData?.student_id,
        cancel_reason: e?.currentTarget?.cancel_notes?.value,
      })
    );
    if (subStudent.status == "success") {
      toast.success("Canceled");
    } else {
      toast.error(subStudent.message);
    }
  };
  useEffect(() => {
    getStudentSub();
  }, []);

  return (
    <Container
      className="contaciner courseStudent py-6"
      style={{
        marginTop: "100px",
      }}
      fluid={true}
    >
      <div className="student_info">
        <img src={location?.state?.unitData?.student_avater_url} alt="" />
        <div className="text">
          <span>
            {location?.state?.unitData?.student_name} -{" "}
            {location?.state?.unitData?.university_name} -{" "}
            {location?.state?.unitData?.grade_title}
          </span>
          <span>{location?.state?.unitData?.student_email}</span>
          <span>{location?.state?.unitData?.phone}</span>
        </div>
      </div>
      <h2>Subscription Courses</h2>
      <div className="courses_student">
        {subs && subs.length ? (
          subs.map((item, index) => {
            return (
              <div
                style={{
                  textAlign: "start",
                  cursor: "pointer",
                }}
                key={index}
              >
                {
                  // <h5 style={{ marginBottom: "15px" }} className='sub_status active'>
                  //   <span style={{ fontWeight: "900", fontSize: "18px" }}></span> <em style={{ fontStyle: "normal", fontWeight: "300" }}> Active </em>
                  // </h5>
                }
                <img
                  src={item.course_photo_url}
                  alt=""
                  onClick={() => {
                    navigate("/studentcouunits", {
                      state: { data: location?.state?.unitData },
                    });
                  }}
                />
                <h5 style={{ marginBottom: "15px" }}>
                  <span style={{ fontWeight: "900", fontSize: "15px" }}>
                    Course :{" "}
                  </span>{" "}
                  <em
                    style={{
                      fontStyle: "normal",
                      fontWeight: "300",
                      fontSize: "14.1px",
                    }}
                  >
                    {" "}
                    {item.course_name}{" "}
                  </em>
                </h5>
                <div>
                  <p style={{ margin: 0 }}>
                    <span style={{ fontWeight: "900", fontSize: "15px" }}>
                      subscription start date :{" "}
                    </span>{" "}
                    <em style={{ fontStyle: "normal" }}>
                      {" "}
                      {item.student_subscription_start}{" "}
                    </em>
                  </p>
                  <p style={{ margin: 0 }}>
                    <span style={{ fontWeight: "900", fontSize: "15px" }}>
                      subscription end date :{" "}
                    </span>{" "}
                    <em style={{ fontStyle: "normal" }}>
                      {item.subscription_end_date}
                    </em>
                  </p>
                  {/* <p style={{ "margin": 0 }}><span style={{ fontWeight: "900", fontSize: "15px" }}>Category : </span> <em style={{ fontStyle: "normal" }}>{item.category}</em></p> */}
                </div>
                {/* <button className='btn btn-danger' onClick={() => { setIsModalOpen(true); }}>Cancel Subscription</button> */}
              </div>
            );
          })
        ) : (
          <h3> No Subscription </h3>
        )}

        <Modal title="Cancel subscription" isOpen={isModalOpen}>
          <form
            action="#"
            style={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
            }}
            onSubmit={(e) => {
              e.preventDefault();
              cancelSub(e);
              setIsModalOpen(false);
            }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="orderdetailsModalLabel">
                {" "}
                Are You Sure Cancel subscription For Student{" "}
                <span style={{ fontWeight: "700", color: "red" }}>
                  ({location?.state?.unitData?.student_name}) ?
                </span>{" "}
              </h5>
              <CloseButton
                onClick={() => setIsModalOpen(false)}
                style={{ marginLeft: "auto" }}
              />
            </div>
            <textarea
              name="cancel_notes"
              id=""
              cols="30"
              rows="10"
              placeholder="Notes"
              style={{ padding: "10px", outline: "none" }}
            ></textarea>
            <button
              className="btn btn-danger"
              style={{ margin: "10px 0 0 auto" }}
            >
              {" "}
              Cancel subscription{" "}
            </button>
          </form>
        </Modal>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default StudentCourses;
