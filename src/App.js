import React, { useContext, Suspense, useState } from "react";
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
import MyModal from "./Components/Modal/Modal";
import Cookies from "js-cookie";


const App = () => {
    const { user, serverError } = useContext(IntranetContext);
    const [showModal, setShowModal] = useState(true);

    const userCoc = JSON.parse(localStorage.getItem("user123"))?.codeOfCOnductAgreement
    const cocSubmitted = JSON.parse(localStorage.getItem("codeOfCOnductAgreement"))

    const isAuthenticated = user.isAuthenticated;
    // console.log(JSON.parse(localStorage.getItem("user123"))?.codeOfCOnductAgreement);


    const handleCloseModal = () => {
        setShowModal(false);
    };

    // React.useEffect(() => {

    //     const text = 'hello Moaz'
    //     const utterance = new SpeechSynthesisUtterance(text)
    //     window.speechSynthesis.speak(utterance)
    // }, [])


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
                                    {!userCoc && !cocSubmitted && <MyModal show={showModal} handleClose={handleCloseModal} />}
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
