import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import FilterComponent from "react-data-table-component";

const IntranetContext = React.createContext();

const IntranetProvider = ({ children }) => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [serverError, setServerError] = useState({ show: false, msg: "" });
  const [loggedIn, setLoggedIn] = useState(false);

  // Handle three themes with three companies START
  const [colorTheme, setColorTheme] = useState("theme-1");
  function handleThemeChange(theme) {
    setColorTheme(theme);
    Cookies.set("theme", theme);
  }

  useEffect(() => {
    const theme = Cookies.get("theme");
    if (theme) setColorTheme(theme);
  }, []);
  // Handle three themes with three companies END

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

  const getLang = () => {
    const defaultLanguage = window.localStorage.getItem("i18nextLng");

    if (defaultLanguage === "ar") {
      return true;
    } else {
      return false;
    }
  };

  // HR Directory Serach logic
  const [searchQuery, setSearchQuery] = useState("");
  const [isUserSearch, setIsUserSearch] = useState(false);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const [filteredResults, setFilteredResults] = useState([]);

  async function searchUsers() {
    try {
      setIsUserSearch(true);
      const response = await axios.post(
        `https://dmgian.corp-dmg.com/_intranet_dashboard/ajaxResponse.php`,
        { data_type: "userSearch", credentials: { userToSearch: searchQuery } },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setFilteredResults(response.data);
      setIsUserSearch(false);
    } catch (error) {
      console.error(error);
    }
  }
  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (searchQuery) {
        setResetPaginationToggle(!resetPaginationToggle);
        setSearchQuery("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => searchQuery(e.target.value)}
        onClear={handleClear}
        filterText={searchQuery}
      />
    );
  }, [searchQuery, resetPaginationToggle]);

  function handleInputChange(event) {
    const newSearchQuery = event.target.value;
    setSearchQuery(newSearchQuery);
  }

  useEffect(() => {
    setIsUserSearch(false);
    if (searchQuery.length >= 3) searchUsers();
  }, [searchQuery]);
  // HR Directory Serach logic END

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

      if (data.data.loginStatus === "SUCCESS") {
        // console.log(data.data);
        window.location.reload();
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
        setUser({
          isLoading: false,
          isAuthenticated: true,
          error: null,
          userData: null,
        });
        const myCookie = Cookies.get("user");
        const myCookieUserObj =
          myCookie !== "undefined" && JSON.parse(myCookie);
        const { userCompanyToShow } = myCookieUserObj;
        // console.log(userCompanyToShow);
        if (userCompanyToShow.toLowerCase() === "mv") {
          handleThemeChange("theme-1");
        }
        if (userCompanyToShow.toLowerCase() === "dma") {
          handleThemeChange("theme-2");
        }
        if (userCompanyToShow.toLowerCase() === "dme") {
          handleThemeChange("theme-3");
        }
        checkCookie();
        // window.location.reload();
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
    window.location.href = `/`;
    Cookies.remove("user");
    // setLoggedIn(false);
  };

  const checkCookie = () => {
    const user = Cookies.get("user");
    // console.log(user);
    if (user) {
      setUser({
        ...user,
        isAuthenticated: true,
      });
    } else {
      setUser({ ...user, isAuthenticated: false });
    }
  };

  // Log to several sites with the same credentials of the user START

  // Log to several sites with the same credentials of the user END

  useEffect(() => {
    checkCookie();
  }, []);

  return (
    <IntranetContext.Provider
      value={{
        user,
        isDataLoading,
        isUserSearch,
        serverError,
        fetchData,
        getLang,
        login,
        logout,
        handleThemeChange,
        handleInputChange,
        subHeaderComponentMemo,
        loggedIn,
        colorTheme,
        searchQuery,
        filteredResults,
        resetPaginationToggle,
      }}
    >
      {children}
    </IntranetContext.Provider>
  );
};

export { IntranetContext, IntranetProvider };
