import React, { useContext, Suspense } from "react";
import { HashRouter, Switch } from "react-router-dom";
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
  const { user, serverError } = useContext(IntranetContext);
  const isAuthenticated = user.isAuthenticated;
  // console.log(isAuthenticated);

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
                  <Header />
                  <NavBar />
                  <ProtectedRoutes />
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
