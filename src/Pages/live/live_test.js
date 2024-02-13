// import React, { useState } from "react";

// import { Container, Row, Col, Card, Collapse, Form, Modal } from "reactstrap";
// import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

// // Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";
// import "./addquestion.css";

// function randomID(len) {
//   let result = "";
//   if (result) return result;
//   var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(url = window.location.href) {
//   let urlStr = url.split("?")[1];
//   return new URLSearchParams(urlStr);
// }

// const Live = () => {
//   document.title = "Live";
//   const roomID = getUrlParams().get("roomID") || randomID(5);
//   let role_str = getUrlParams(window.location.href).get("role") || "Host";
//   const role =
//     role_str === "Host"
//       ? ZegoUIKitPrebuilt.Host
//       : role_str === "Cohost"
//       ? ZegoUIKitPrebuilt.Cohost
//       : ZegoUIKitPrebuilt.Audience;

//   let sharedLinks = [];
//   if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
//     sharedLinks.push({
//       name: "Join as co-host",
//       url:
//         window.location.protocol +
//         "//" +
//         window.location.host +
//         window.location.pathname +
//         "?roomID=" +
//         roomID +
//         "&role=Cohost"
//     });
//   }
//   sharedLinks.push({
//     name: "Join as audience",
//     url:
//       window.location.protocol +
//       "//" +
//       window.location.host +
//       window.location.pathname +
//       "?roomID=" +
//       roomID +
//       "&role=Audience"
//   });

//   // generate Kit Token
//   const appID = 196975329;
//   const serverSecret = "22c385924f61dd1bf82ac393918526f8";
//   const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
//     appID,
//     serverSecret,
//     roomID,
//     randomID(5),
//     randomID(5)
//   );

//   // start the call
//   let myMeeting = async (element) => {
//     const zp = ZegoUIKitPrebuilt.create(kitToken);
//     // start the call
//     zp.joinRoom({
//       container: element,
//       scenario: {
//         mode: ZegoUIKitPrebuilt.LiveStreaming,
//         config: {
//           role
//         }
//       },
//       sharedLinks
//     });
//   };

//   return (
//     <React.Fragment>
//       <div className="page-content">
//         <Container fluid={true}>
//           <Breadcrumbs title="Live" breadcrumbItem="Live" />
//           <Row>
//             <Col lg={12}>
//               <div className="custom-accordion" id="addcourse-accordion">
//                 <Card>
//                   <div
//                     className="myCallContainer"
//                     ref={myMeeting}
//                     style={{ width: "100vw", height: "100vh" }}
//                   ></div>
//                 </Card>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Live;
