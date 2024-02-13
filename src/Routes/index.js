import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

// redux
import { useSelector } from "react-redux";

//constants
import { layoutTypes } from "../constants/layout";

// layouts
import NonAuthLayout from "../Layout/NonAuthLayout";
import VerticalLayout from "../Layout/VerticalLayout/index";
import HorizontalLayout from "../Layout/HorizontalLayout/index";
import { AuthProtected } from "./AuthProtected";

import { authProtectedRoutes, publicRoutes } from "./routes";
import Dashboard from "../Pages/Dashboard/Index";

const getLayout = (layoutType) => {
  let Layout = VerticalLayout;
  switch (layoutType) {
    case layoutTypes.VERTICAL:
      Layout = VerticalLayout;
      break;
    case layoutTypes.HORIZONTAL:
      Layout = HorizontalLayout;
      break;
    default:
      break;
  }
  return Layout;
};

const Index = () => {
  const { layoutType } = useSelector((state) => ({
    layoutType: state.Layout.layoutType,
  }));

  const Layout = getLayout(layoutType);
  const navigate=useNavigate()
  let localdata=localStorage.getItem("elmatary_admin");
  return (
    <Routes>
      <Route>
        {publicRoutes.map((route, idx) => {
          if(route.path=='/login'){
            if(!localdata){
              return (
                <Route
                  path={route.path}
                  element={
                    <NonAuthLayout>
                        {route.component}
                    </NonAuthLayout>
                  }
                  key={idx}
                  exact={true}
                />
              )
            }
            else {
              <Route
                  path={route.path}
                  element={
                    <NonAuthLayout>
                        <Dashboard/>
                    </NonAuthLayout>
                  }
                  key={idx}
                  exact={true}
                />
            }
          }
          else if(route.path=='/dashboard'){
              if(!localdata){
                return null
              }
            }
            else {
              return (
                <Route
            path={route.path}
            element={
              <NonAuthLayout>
                  {route.component}
              </NonAuthLayout>
          }
            key={idx}
            exact={true}
          />
              )
            }
          }
        )}
      </Route>

      <Route>
          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <AuthProtected>
                    <Layout>{route.component}</Layout>
                </AuthProtected>}
              key={idx}
              exact={true}
            />
          ))}
      </Route>
    </Routes>
  );
};

export default Index;
