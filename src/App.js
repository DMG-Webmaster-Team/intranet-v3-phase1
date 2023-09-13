import React, { useContext, useState, useEffect, Suspense } from "react";
import { BrowserRouter as Router, HashRouter, Switch } from "react-router-dom";
import "./App.scss";
import { IntranetContext } from "./context";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import SkeletonLoader from "./Components/Skeleton/SkeletonLoader";
import Login from "./Pages/Login/Login";
import NavBar from "./Components/Header/Navbar";
import Header from "./Components/Header/Header";
import MyModal from "./Components/modal/Modal";
const App = () => {
  const [isArabic, setIsArabic] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const { getLang, user, serverError } = useContext(IntranetContext);
  const isAuthenticated = user.isAuthenticated;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setIsArabic(getLang());
  }, [getLang]);

  return (
    <div>
      <HashRouter basename="/">
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
                  <MyModal show={showModal} handleClose={handleCloseModal} />
                </PrivateRoute>
              </>
            )}
          </Switch>
        </Suspense>
      </HashRouter>
    </div>
  );
};
export default App;
