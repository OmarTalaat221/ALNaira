import React from "react";
import { Navigate } from "react-router-dom";

import { useProfile } from "../Hooks/UserHooks";

const AuthProtected = (props) => {
  const { userProfile, loading } = useProfile();

  /*
    redirect is un-auth access protected routes via url
    */

  // if (!userProfile && loading) {
  //   return (
  //     <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
  //   );
  // }

  return <>{props.children}</>;
};


export { AuthProtected };



