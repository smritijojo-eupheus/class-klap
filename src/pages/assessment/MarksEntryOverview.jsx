import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SwipeableTemporaryDrawer from "../../components/Material/MaterialSidebar";
import { Chip, Skeleton, Switch } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Breadcrumbs from "../../components/Material/BreadCrumbs";
import SearchDropDown from "../../components/Material/SearchDropDown";
// import BasicTextFields from "../../components/Material/TextField";
// import SwitchLabels from "../../components/Material/Switch";
// import HorizontalStepper from "../../components/Material/Stepper";
// import { GetPrsTrackerData } from "../../apis/fectcher/assessment/prsOverview/TrackerData";
// import { GetPrsTableData } from "../../apis/fectcher/assessment/prsOverview/TableData";
import { GetMarksEntryOverviewData } from "../../apis/fectcher/assessment/marksEntry/overview";
import CircularProgressWithLabel from "../../components/Material/CircleProgress";
import BasicButton from "../../components/Material/Button";
import { GetApplicableExamType } from "../../apis/fectcher/assessment/GetApplicableExamType";

const MarksEntryOverview = () => {
  const [id, setId] = useState("SA1");
  const [sectionId, setSectionId] = useState("117145");

  const {
    data: Overview_TableData,
    isLoading: OverviewData_Loading,
    refetch,
  } = useQuery({
    queryKey: ["prs_tracker", id],
    queryFn: () => GetMarksEntryOverviewData(id, sectionId),
    onSuccess: (data) => {
      console.log(data);
    },
    refetchOnWindowFocus: false,
  });

  const { data: Exam_Types, isLoading: Exam_Type_Loading } = useQuery({
    queryKey: ["exam_types"],
    queryFn: () => GetApplicableExamType(),
    onSuccess: (data) => {
      console.log(data);
    },
    refetchOnWindowFocus: false,
  });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const show = null;

  const sidebarRef = useRef();

  const handleDropDown = (value, type) => {
    console.log(value, type);
    if (type === "class") {
      //   updateData(value.value);
    } else if ((type = "prs")) {
      //   console.log(value.value.split(" ")[1]);
      setId(`RSA ${value.value.split(" ")[1]}`);
    }
  };

  const handleSidebarCollapsed = () => {
    sidebarRef.current.openSidebar();
  };

  useEffect(() => {
    document.title = "Marks Entry Overview - ClassKlap";
    const handleWidth = () => {
      if (window.innerWidth > 1024) {
        setSidebarCollapsed(false);
      } else {
        setSidebarCollapsed(true);
      }
    };
    window.addEventListener("resize", handleWidth);
    handleWidth();
    window.scroll(0, 0);

    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  }, []);
  return (
    <>
      <div className="flex w-[100%] min-h-[100vh]">
        <Sidebar
          highLight={""}
          sidebarCollapsed={sidebarCollapsed}
          show={show}
        />

        <div>
          <SwipeableTemporaryDrawer
            ref={sidebarRef}
            sidebarCollapsed={sidebarCollapsed}
            show={show}
            highLight={""}
          />
        </div>
        <div
          className={`flex flex-col w-[100vw] bg-gray-200 relative transition-all overflow-hidden ease-linear duration-300 lg:w-[83vw] lg:ml-[18vw] ${
            window.innerWidth < 1024 ? null : "md:ml-[30vw] ml-[85vw]"
          } `}
        >
          <div
            className="lg:hidden absolute cursor-pointer top-4 left-4"
            onClick={handleSidebarCollapsed}
          >
            <Menu className={"text-[#67748e]"} />
          </div>
          <div className="w-full flex text-sm font-semibold bg-gray-200 text-gray-600 justify-end">
            <div className="flex flex-col px-4 cursor-pointer py-4 items-end gap-[1px]">
              <span>Vidyanidhi Public School</span>
              <span>KA2015 [2022-2023]</span>
            </div>
          </div>

          <div className="w-full flex text-sm items-center font-semibold px-4 py-2 bg-gray-200 text-gray-600 justify-end">
            Enable Student Mode <Switch />
          </div>

          <div className="relative flex flex-col w-full justify-center items-start gap-4 bg-gray-200">
            <div className="sm:px-8 px-4 w-full flex flex-col gap-4 mb-4">
              <Breadcrumbs
                crumbs={["Home", "Assessment", "Marks Entry - Overview"]}
              />
              <h1 className="font-bold sm:text-2xl text-base">
                Marks Entry - Overview
              </h1>

              <div className="w-full flex sm:flex-row flex-col gap-2 justify-between">
                {Exam_Type_Loading ? (
                  <Skeleton
                    animation="wave"
                    variant="text"
                    sx={{ fontSize: "2rem", width: "12rem" }}
                  />
                ) : (
                  <div className="w-[15rem] flex gap-2">
                    <SearchDropDown
                      handleDropDown={handleDropDown}
                      data={Exam_Types.map((item) => {
                        return { value: item };
                      })}
                      variant={"outlined"}
                      Name={"exam"}
                      defaultValue={{ value: "SA1" }}
                      size={"small"}
                    />
                    <SearchDropDown
                      handleDropDown={handleDropDown}
                      data={[
                        { value: "Nursery" },
                        { value: "LKG" },
                        { value: "UKG" },
                        { value: "1" },
                        { value: "2" },
                        { value: "3" },
                        { value: "4" },
                        { value: "5" },
                      ]}
                      variant={"outlined"}
                      Name={"grade"}
                      defaultValue={{ value: "Nursery" }}
                      size={"small"}
                    />
                  </div>
                )}
                <BasicButton text={"Exam Attendance"} size={"small"} />
              </div>

              <div className="w-full flex justify-center">
                <h1 className="sm:text-xl text-base font-semibold text-gray-600">
                  {OverviewData_Loading ? (
                    <Skeleton
                      animation="wave"
                      variant="text"
                      sx={{ fontSize: "1rem", width: "12rem" }}
                    />
                  ) : (
                    // ExamTimetableData.examinationName
                    "SA1"
                  )}
                </h1>
              </div>

              {OverviewData_Loading ? (
                <Skeleton animation="wave" variant="rectangular" height={300} />
              ) : (
                <TableContainer
                  className="sm:!w-full !overflow-auto max-h-[70vh] "
                  component={Paper}
                >
                  <Table
                    className="!w-full"
                    //   sx={{ width: 1000 }}
                    aria-label="simple table"
                  >
                    <TableHead className="w-full">
                      <TableRow className="w-full">
                        <TableCell align="right" className="w-[15%]">
                          <div className="flex flex-col items-center gap-2">
                            <h1 className="font-bold">Subjects</h1>
                            <div className="w-[5rem]">
                              <SearchDropDown
                                handleDropDown={handleDropDown}
                                data={[
                                  {
                                    value: "All",
                                  },
                                  ...Overview_TableData.map((item) => {
                                    return { value: item.subject.displayName };
                                  }),
                                ]}
                                variant={"outlined"}
                                Name={"class"}
                                defaultValue={{
                                  value: "All",
                                }}
                                size={"small"}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="right" className="w-[25%]">
                          <div className="flex flex-col items-center gap-2">
                            <h1 className="font-bold">Marks Entry Status</h1>
                          </div>
                        </TableCell>
                        <TableCell align="right" className="w-[15%]">
                          <div className="flex flex-col items-center gap-2">
                            <h1 className="font-bold">Lock Status</h1>
                          </div>
                        </TableCell>
                        <TableCell align="right" className="w-[15%]">
                          <div className="flex flex-col items-center gap-2">
                            <h1 className="font-semibold">Locked By</h1>
                          </div>
                        </TableCell>
                        <TableCell align="right" className="w-[15%]">
                          <div className="flex flex-col items-center gap-2">
                            <h1 className="font-semibold">Role</h1>
                          </div>
                        </TableCell>
                        <TableCell align="right" className="w-[15%]">
                          <div className="flex flex-col items-center gap-2">
                            <h1 className="font-semibold">Progress</h1>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Overview_TableData?.map((item, index) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row" align="center">
                            <h1 className="font-bold">
                              {item.subject.displayName}
                            </h1>
                          </TableCell>
                          <TableCell align="center">
                            <h1 className="font-bold text-blue-500">
                              {item.marksEntryStatus}
                            </h1>
                          </TableCell>
                          <TableCell align="center">
                            {/* <h1 className="font-bold text-blue-500 text-sm">
                              {item.lockStatus.displayName}
                            </h1> */}
                            <Chip
                              variant="outlined"
                              label={item.lockStatus.displayName}
                              color="error"
                              size="small"
                            />
                          </TableCell>
                          <TableCell align="center">
                            {/* <Chip
                              variant="outlined"
                              label={item.lockedBy}
                              color="error"
                              size="small"
                            /> */}
                            <h1 className="font-semibold">{item.lockedBy}</h1>
                          </TableCell>
                          <TableCell align="center">
                            {/* <Chip
                              variant="outlined"
                              label={item.lockedByUserRole.displayName}
                              color="warning"
                              size="small"
                            /> */}
                            <h1 className="font-semibold">
                              {item.lockedByUserRole.displayName}
                            </h1>
                          </TableCell>
                          <TableCell align="center">
                            {/* <h1 className="font-bold text-blue-500 text-sm">
                              {item.completionPercentage}
                            </h1> */}
                            <CircularProgressWithLabel
                              value={item.completionPercentage}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarksEntryOverview;
