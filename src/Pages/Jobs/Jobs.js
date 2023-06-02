import React, { Component } from "react";
import PagesHeader from "../../Components/Header/PagesHeader";
import TableJobs from "../../Components/Jobs/TableJobs";
import Filter from "../../Components/Filter/Filter";
import { motion } from "framer-motion";
import axios from "axios";
import { Text } from "../../containers/Language";

class Jobs extends Component {
  state = {
    title: "Jobs",
    isArabic: false,

    jobs: [],
    filteredJobs: [],
    filter: {
      company: "all",
      department: "all",
      location: "all",
    },
  };

  componentDidMount() {
    const fetchData = () => {
      axios
        .post(
          `https://dmgian.corp-dmg.com/_intranet_dashboard/ajaxResponse.php`,
          { data_type: "jobs" },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((response) => {
          this.setState((prevState) => {
            return {
              ...prevState,
              jobs: response.data.jobs,
              filteredJobs: response.data.jobs,
            };
          });
          return response.data;
        })

        .catch((err) => console.log(err));
    };

    const getLanguage = () => {
      const defaultLanguage = window.localStorage.getItem("rcml-lang");

      if (defaultLanguage === "ar") {
        this.setState((prevState) => {
          return {
            ...prevState,
            isArabic: true,
          };
        });
      } else {
        this.setState((prevState) => {
          return {
            ...prevState,
            isArabic: false,
          };
        });
      }
    };

    getLanguage();
    fetchData();
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState((prevState) => {
      return {
        ...prevState,
        filter: { ...prevState.filter, [name]: value },
      };
    }, this.sortData);
  };

  sortData = () => {
    const {
      jobs,
      filter: { company, location, department },
    } = this.state;

    let tempJobs = [...jobs];
    // // filtering based on company
    if (company.toLowerCase() !== "all") {
      tempJobs = tempJobs.filter(
        (item) => item.company.toLowerCase() === company.toLowerCase()
      );
    }

    // // // filtering based on company
    if (department.toLowerCase() !== "all") {
      tempJobs = tempJobs.filter(
        (item) => item.department.toLowerCase() === department.toLowerCase()
      );
    }
    // // // filtering based on company
    if (location.toLowerCase() !== "all") {
      tempJobs = tempJobs.filter(
        (item) => item.location.toLowerCase() === location.toLowerCase()
      );
    }

    this.setState((prevState) => {
      return { ...prevState, filteredJobs: tempJobs };
    });
  };

  render() {
    const { isArabic, jobs, filteredJobs, filter } = this.state;

    const containerVariants = {
      hidden: {
        opacity: 0,
        x: "100vw",
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          delay: 0.5,
        },
      },
    };

    return (
      <>
        <div className="container-fluid">
          <PagesHeader data={<Text tid="navCareers" />} />
          <br />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Filter
              isArabic={isArabic}
              jobs={jobs}
              filter={filter}
              handleChange={this.handleChange}
            />
            <br />
            <br />

            <TableJobs isArabic={isArabic} filteredJobs={filteredJobs} />
          </motion.div>
        </div>
      </>
    );
  }
}

export default Jobs;
