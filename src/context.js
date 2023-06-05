import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const IntranetContext = React.createContext();

const IntranetProvider = ({ children }) => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [serverError, setServerError] = useState({ show: false, msg: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  const [colorTheme, setColorTheme] = useState("theme-1");
  function handleThemeChange(theme) {
    setColorTheme(theme);
    Cookies.set("theme", theme);
  }
  useEffect(() => {
    const theme = Cookies.get("theme");
    if (theme) setColorTheme(theme);
  }, []);
  const [font, setFont] = useState("font-1");
  function handleFontChange(font) {
    setFont(font);
    Cookies.set("font", font);
  }

  const cookiesFull = Cookies && Cookies.get("user");
  useEffect(() => {
    if (cookiesFull) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const [user, setUser] = useState({
    isLoading: false,
    isAuthenticated: false,
    error: null,
    userData: null,
  });

  const fetchData = async (dataType) => {
    setIsDataLoading(true);
    try {
      const data = await axios.post(
        `https://dmgian.corp-dmg.com/_intranet_dashboard/ajaxResponse.php`,
        { data_type: dataType },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setIsDataLoading(false);

      const result = await data.data;
      return result;
    } catch (error) {
      setIsDataLoading(false);
      setServerError({
        show: true,
        msg: "عذرا هناك عطل في الخادم, يرجى المحاولة في وقت اخر ",
      });
      console.log(error);
    }
  };

  // const getUserCompany =(userEmail) => {
  //   if(userEmail.toLowerCase().includes("mv")) {

  //   }
  // }

  const getLang = () => {
    const defaultLanguage = window.localStorage.getItem("rcml-lang");

    if (defaultLanguage === "ar") {
      return true;
    } else {
      return false;
    }
  };

  const login = async (username, password) => {
    setUser({
      ...user,
      isLoading: true,
      error: null,
    });
    try {
      const data = await axios.post(
        `https://dmgian.corp-dmg.com/_intranet_dashboard/ajaxResponse.php`,
        { data_type: "loginConfirmation", credentials: { username, password } },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(data.data);
      if (data.data.loginStatus === "SUCCESS") {
        console.log(data.data);
        setUser({
          isLoading: false,
          isAuthenticated: true,
          error: null,
          userData: data.data,
        });
        console.log(data.data);
        const {
          userName,
          userEmail,
          companyToShow,
          userDepartment,
          userId,
          userJob,
          userCompany,
          userHiringDate,
          userPromotionDate,
          userPerformance,
        } = data.data;
        let userCookiesObject = {
          userName: userName,
          userEmail: userEmail,
          userCompanyToShow: companyToShow,
          userDepartment: userDepartment,
          userId: userId,
          userJob: userJob,
          userCompany: userCompany,
          userHiringDate: userHiringDate,
          userPromotionDate: userPromotionDate,
          userPerformance: userPerformance,
        };
        Cookies.set("user", JSON.stringify(userCookiesObject), {
          expires: 7,
          path: "/",
        });
        if (userEmail.includes("mv")) {
          handleThemeChange("theme-1");
          handleFontChange("font-1");
        }
        if (userEmail.includes("dma")) {
          handleThemeChange("theme-2");
          handleFontChange("font-2");
        }
        if (userEmail.includes("dme")) {
          handleThemeChange("theme-3");
          handleFontChange("font-3");
        }
        // localStorage.setItem('loginStatus', JSON.stringify(data.data))
      } else {
        setUser({
          isLoading: false,
          isAuthenticated: false,
          error: "Email or Password is incorrect",
          userData: null,
        });
      }
    } catch (error) {
      console.log(error);
      setUser({
        isLoading: false,
        isAuthenticated: true,
        error: error,
        userData: null,
      });
    }
  };

  const logout = () => {
    // localStorage.removeItem('loginStatus')
    window.location.href = "/intranet/`";
    Cookies.remove("user");
    Cookies.expires("user");
    setLoggedIn(false);
  };

  const checkCookie = () => {
    const user = Cookies.get("user");
    // console.log(user);
    if (user) {
      setUser({
        ...user,
        isAuthenticated: true,
        userData: { userEmail: user },
      });
    } else {
      setUser({ ...user, isAuthenticated: false });
    }
  };

  useEffect(() => {
    checkCookie();
  }, []);

  return (
    <IntranetContext.Provider
      value={{
        user,
        isDataLoading,
        serverError,
        fetchData,
        getLang,
        login,
        logout,
        handleThemeChange,
        loggedIn,
        colorTheme,
      }}
    >
      {children}
    </IntranetContext.Provider>
  );
};

export { IntranetContext, IntranetProvider };
