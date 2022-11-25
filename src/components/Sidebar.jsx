import React, { useEffect, useState } from "react";

import {
  Monitor,
  Home,
  Laptop,
  Hail,
  Assessment,
  Devices,
  Settings,
  Message,
  Circle,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import logoLight from "../assets/classklap_logo.png";
import { Collapse } from "@mui/material";

const Sidebar = ({ sidebarCollapsed, highLight, show }) => {
  const [eLearning, setELearning] = useState(true);
  const [setUp, setSetUp] = useState(show === 2 ? true : false);
  const [assessment, setAssessment] = useState(false);
  const [user, setUser] = useState({});

  //   useEffect(() => {
  //     if (show === null) {
  //       setIsSchoolClicked(false);
  //       setIsSchoolDetailClicked(false);
  //     }
  //   }, []);

  return (
    <div
      className={`fixed transition-all h-[100vh] ease-linear duration-300 ${
        window.innerWidth < 1024 ? "-left-[100%]" : "left-[0%]"
      } lg:py-2 md:py-4 py-8 z-[100] w-[85vw] lg:w-[18vw] md:w-[30vw] bg-gray-200 h-[100vh] overflow-auto`}
    >
      <div
        className={`flex flex-col gap-6 transition-all ease-linear duration-100`}
      >
        <div className="flex items-center mt-[1rem] gap-3 justify-center">
          <img
            src={logoLight}
            className=" w-[10vw] md:w-[12vw] h-auto object-cover"
            alt=""
          />
        </div>

        <Link to="/">
          <aside
            className={`px-6 mt-[2rem] py-2 hover:bg-gray-500 flex ${
              highLight === "dashboard" ? "bg-gray-500" : ""
            } rounded-md gap-4 cursor-pointer group`}
          >
            <div className="flex gap-4">
              <Home
                className={`${
                  highLight === "dashboard"
                    ? "!text-gray-100"
                    : "!text-gray-400"
                } group-hover:!text-gray-100 !transition-all !duration-150 !ease-linear`}
              />
              <span
                className={`${
                  highLight === "dashboard" ? "text-gray-200" : "text-gray-600"
                } group-hover:!text-gray-100 transition-all duration-150 font-semibold ease-linear`}
              >
                Home
              </span>
            </div>
          </aside>
        </Link>

        <Link to="/manageSchool">
          <aside
            className={`px-6 py-2 flex gap-4 cursor-pointer ${
              highLight === "manageSchool" ? "bg-gray-500" : ""
            } group hover:bg-gray-500 rounded-md transition-all duration-150 ease-linear`}
          >
            <Monitor
              className={`${
                highLight === "manageSchool"
                  ? "!text-gray-100"
                  : "!text-gray-400"
              } group-hover:!text-gray-100 !transition-all !duration-150 !ease-linear`}
            />
            <span
              className={`${
                highLight === "manageSchool" ? "text-gray-200" : "text-gray-600"
              } group-hover:!text-gray-100 transition-all duration-150 font-semibold ease-linear`}
            >
              Live Class
            </span>
          </aside>
        </Link>
        <aside className="px-6 py-2 flex gap-4 cursor-pointer group hover:bg-gray-500 rounded-md transition-all duration-150 ease-linear">
          <Laptop className="!text-gray-400 group-hover:!text-gray-100 !transition-all !duration-150 !ease-linear" />
          <span className="text-gray-600 font-semibold group-hover:!text-gray-100 transition-all duration-150 ease-linear">
            Teacher Progress
          </span>
        </aside>
        <Link to="/order_processing">
          <aside
            className={`px-6 py-2 flex gap-4 ${
              highLight === "order_pro" ? "bg-gray-500" : ""
            } cursor-pointer group hover:bg-gray-500 rounded-md transition-all duration-150 ease-linear`}
          >
            <Hail
              className={`${
                highLight === "order_pro" ? "!text-gray-100" : "!text-gray-400"
              } group-hover:!text-gray-100 !transition-all !duration-150 !ease-linear`}
            />
            <span
              className={`${
                highLight === "order_pro" ? "text-gray-200" : "text-gray-600"
              } group-hover:!text-gray-100 transition-all duration-150 font-semibold ease-linear`}
            >
              Students
            </span>
          </aside>
        </Link>
        <Link>
          <aside
            onClick={() => setAssessment(!assessment)}
            className={`px-6 py-2 flex justify-between gap-4 ${
              highLight === "manageOrder" ? "bg-gray-500" : ""
            } cursor-pointer group hover:bg-gray-500 rounded-md transition-all duration-150 ease-linear`}
          >
            <div className="flex gap-4">
              <Devices
                className={`${
                  highLight === "manageOrder"
                    ? "!text-gray-100"
                    : "!text-gray-400"
                } group-hover:!text-gray-100 !transition-all !duration-150 !ease-linear`}
              />
              <span
                className={`${
                  highLight === "manageOrder"
                    ? "text-gray-200"
                    : "text-gray-600"
                } group-hover:!text-gray-100 font-semibold transition-all duration-150 ease-linear`}
              >
                Assessment
              </span>
            </div>
            <div
              className={`transition-all duration-200  ease-linear ${
                assessment ? null : "-rotate-90"
              }`}
            >
              <KeyboardArrowDown className={`text-gray-600 `} />
            </div>
          </aside>
          <Collapse in={assessment}>
            {" "}
            <div
              className={`${
                eLearning ? "h-[40vh] opacity-100 visible" : null
              } transition-all ease-linear duration-200`}
            >
              <Link to="/assessment/overview">
                <div
                  className={`flex items-center transition-all ease-linear duration-100 mr-8 ml-6 group `}
                >
                  <Circle
                    className={`!text-[.7rem] !transition-all !ease-linear !duration-200 ${
                      highLight === "schoolTagging"
                        ? "text-white"
                        : "text-gray-600"
                    } `}
                  />
                  <h1
                    className={`pl-9 ${
                      highLight === "schoolTagging"
                        ? "text-white"
                        : "text-gray-600 "
                    } transition-all ease-linear font-semibold duration-200  py-2 cursor-pointer`}
                  >
                    Overview
                  </h1>
                </div>
              </Link>
              <Link to="/assessment/exam_set_up">
                <div
                  className={`flex items-center transition-all ease-linear duration-100 mr-8 ml-6 group `}
                >
                  <Circle
                    className={`!text-[.7rem] !transition-all !ease-linear !duration-200 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } `}
                  />
                  <h1
                    className={`pl-9 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } transition-all ease-linear font-semibold duration-200  py-2 cursor-pointer`}
                  >
                    Exam Step Up
                  </h1>
                </div>
              </Link>
              <Link to="/school/schools">
                <div
                  className={`flex items-center transition-all ease-linear duration-100 mr-8 ml-6 group `}
                >
                  <Circle
                    className={`!text-[.7rem] !transition-all !ease-linear !duration-200 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } `}
                  />
                  <h1
                    className={`pl-9 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } transition-all ease-linear font-semibold duration-200  py-2 cursor-pointer`}
                  >
                    Exam Timetable
                  </h1>
                </div>
              </Link>
              <Link to="/school/schools">
                <div
                  className={`flex items-center transition-all ease-linear duration-100 mr-8 ml-6 group `}
                >
                  <Circle
                    className={`!text-[.7rem] !transition-all !ease-linear !duration-200 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } `}
                  />
                  <h1
                    className={`pl-9 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } transition-all ease-linear font-semibold duration-200  py-2 cursor-pointer`}
                  >
                    Marks Entry
                  </h1>
                </div>
              </Link>
              <Link to="/school/schools">
                <div
                  className={`flex items-center transition-all ease-linear duration-100 mr-8 ml-6 group `}
                >
                  <Circle
                    className={`!text-[.7rem] !transition-all !ease-linear !duration-200 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } `}
                  />
                  <h1
                    className={`pl-9 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } transition-all ease-linear font-semibold duration-200  py-2 cursor-pointer`}
                  >
                    Scoreboard
                  </h1>
                </div>
              </Link>
              <Link to="/school/schools">
                <div
                  className={`flex items-center transition-all ease-linear duration-100 mr-8 ml-6 group `}
                >
                  <Circle
                    className={`!text-[.7rem] !transition-all !ease-linear !duration-200 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } `}
                  />
                  <h1
                    className={`pl-9 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } transition-all ease-linear font-semibold duration-200  py-2 cursor-pointer`}
                  >
                    Add Exam Set Up
                  </h1>
                </div>
              </Link>
            </div>
          </Collapse>
        </Link>
        <Link>
          <aside
            onClick={() => setELearning(!eLearning)}
            className={`px-6 py-2 flex justify-between gap-4 ${
              highLight === "manageOrder" ? "bg-gray-500" : ""
            } cursor-pointer group hover:bg-gray-500 rounded-md transition-all duration-150 ease-linear`}
          >
            <div className="flex gap-4">
              <Devices
                className={`${
                  highLight === "manageOrder"
                    ? "!text-gray-100"
                    : "!text-gray-400"
                } group-hover:!text-gray-100 !transition-all !duration-150 !ease-linear`}
              />
              <span
                className={`${
                  highLight === "manageOrder"
                    ? "text-gray-200"
                    : "text-gray-600"
                } group-hover:!text-gray-100 font-semibold transition-all duration-150 ease-linear`}
              >
                E-Learning
              </span>
            </div>
            <div
              className={`transition-all duration-200  ease-linear ${
                eLearning ? null : "-rotate-90"
              }`}
            >
              <KeyboardArrowDown className={`text-gray-600 `} />
            </div>
          </aside>
          <Collapse in={eLearning}>
            {" "}
            <div
              className={`${
                eLearning ? "h-[10vh] opacity-100 visible" : null
              } transition-all ease-linear duration-200`}
            >
              <Link to="/school/tagging">
                <div
                  className={`flex items-center transition-all ease-linear duration-100 mr-8 ml-6 group `}
                >
                  <Circle
                    className={`!text-[.7rem] !transition-all !ease-linear !duration-200 ${
                      highLight === "schoolTagging"
                        ? "text-white"
                        : "text-gray-600"
                    } `}
                  />
                  <h1
                    className={`pl-9 ${
                      highLight === "schoolTagging"
                        ? "text-white"
                        : "text-gray-600 "
                    } transition-all ease-linear font-semibold duration-200  py-2 cursor-pointer`}
                  >
                    Digital Content
                  </h1>
                </div>
              </Link>
              <Link to="/school/schools">
                <div
                  className={`flex items-center transition-all ease-linear duration-100 mr-8 ml-6 group `}
                >
                  <Circle
                    className={`!text-[.7rem] !transition-all !ease-linear !duration-200 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } `}
                  />
                  <h1
                    className={`pl-9 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } transition-all ease-linear font-semibold duration-200  py-2 cursor-pointer`}
                  >
                    Downloads
                  </h1>
                </div>
              </Link>
            </div>
          </Collapse>
        </Link>

        <Link>
          <aside
            onClick={() => setSetUp(!setUp)}
            className={`px-6 py-2 flex justify-between gap-4 ${
              highLight === "manageOrder" ? "bg-gray-500" : ""
            } cursor-pointer group hover:bg-gray-500 rounded-md transition-all duration-150 ease-linear`}
          >
            <div className="flex gap-4">
              <Settings
                className={`${
                  highLight === "manageOrder"
                    ? "!text-gray-100"
                    : "!text-gray-400"
                } group-hover:!text-gray-100 !transition-all !duration-150 !ease-linear`}
              />
              <span
                className={`${
                  highLight === "manageOrder"
                    ? "text-gray-200"
                    : "text-gray-600"
                } group-hover:!text-gray-100 font-semibold transition-all duration-150 ease-linear`}
              >
                Set-Up
              </span>
            </div>
            <div
              className={`transition-all duration-200  ease-linear ${
                setUp ? null : "-rotate-90"
              }`}
            >
              <KeyboardArrowDown className={`text-gray-600 `} />
            </div>
          </aside>
          <Collapse in={setUp}>
            {" "}
            <div
              className={`${
                eLearning ? "h-[16vh] opacity-100 visible" : null
              } transition-all ease-linear duration-200`}
            >
              <Link to="/school/tagging">
                <div
                  className={`flex items-center transition-all ease-linear duration-100 mr-8 ml-6 group `}
                >
                  <Circle
                    className={`!text-[.7rem] !transition-all !ease-linear !duration-200 ${
                      highLight === "schoolTagging"
                        ? "text-white"
                        : "text-gray-600"
                    } `}
                  />
                  <h1
                    className={`pl-9 ${
                      highLight === "schoolTagging"
                        ? "text-white"
                        : "text-gray-600"
                    } transition-all ease-linear font-semibold duration-200  py-2 cursor-pointer`}
                  >
                    School Calender
                  </h1>
                </div>
              </Link>
              <Link to="/school/schools">
                <div
                  className={`flex items-center transition-all ease-linear duration-100 mr-8 ml-6 group `}
                >
                  <Circle
                    className={`!text-[.7rem] !transition-all !ease-linear !duration-200 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } `}
                  />
                  <h1
                    className={`pl-9 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } transition-all ease-linear duration-200  py-2 font-semibold cursor-pointer`}
                  >
                    Class Sections
                  </h1>
                </div>
              </Link>
              <Link to="/school/schools">
                <div
                  className={`flex items-center transition-all ease-linear duration-100 mr-8 ml-6 group `}
                >
                  <Circle
                    className={`!text-[.7rem] !transition-all !ease-linear !duration-200 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } `}
                  />
                  <h1
                    className={`pl-9 ${
                      highLight === "schools" ? "text-white" : "text-gray-600"
                    } transition-all ease-linear duration-200  py-2 font-semibold cursor-pointer`}
                  >
                    Manage Users
                  </h1>
                </div>
              </Link>
            </div>
          </Collapse>
        </Link>
        <Link to="/manage_order">
          <aside
            className={`px-6 py-2 flex gap-4 ${
              highLight === "manageOrder" ? "bg-gray-500" : ""
            } cursor-pointer group hover:bg-gray-500 rounded-md transition-all duration-150 ease-linear`}
          >
            <Message
              className={`${
                highLight === "manageOrder"
                  ? "!text-gray-100"
                  : "!text-gray-400"
              } group-hover:!text-gray-100 !transition-all !duration-150 !ease-linear`}
            />
            <span
              className={`${
                highLight === "manageOrder" ? "text-gray-200" : "text-gray-600"
              } group-hover:!text-gray-100 transition-all duration-150 font-semibold ease-linear`}
            >
              Messenger
            </span>
          </aside>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
