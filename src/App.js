import React, { useContext, useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.scss";

import { IntranetContext } from "./context";

import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import SkeletonLoader from "./Components/Skeleton/SkeletonLoader";
import Login from "./Pages/Login/Login";
import NavBar from "./Components/Header/Navbar";
import Header from "./Components/Header/Header";

const App = () => {
  const [isArabic, setIsArabic] = useState(false);

  const { getLang, user, serverError } = useContext(IntranetContext);
  const isAuthenticated = user.isAuthenticated;

  useEffect(() => {
    setIsArabic(getLang());
  }, [getLang]);

  return (
    <>
      <Router>
        <Suspense fallback={<SkeletonLoader />}>
          <Switch>
            <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
              <Login />
            </PublicRoute>

            {serverError.show ? (
              <>
                <div className="error-container">
                  <h3>{serverError.msg}</h3>
                </div>
              </>
            ) : (
              <>
                <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
                  <Header isArabic={isArabic} />
                  <NavBar isArabic={isArabic} />
                  <ProtectedRoutes />
                </PrivateRoute>
              </>
            )}
          </Switch>
        </Suspense>
      </Router>
    </>
  );
};
export default App;
