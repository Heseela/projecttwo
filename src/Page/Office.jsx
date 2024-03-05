import React, { useEffect, useState } from "react";
import axios from "../HOC/Axios";
import { useParams } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function  Office() {
  const params = useParams();
  const [countries, setCountries] = useState([]);
  const [Show, setShow] = useState("info");

  const getcountries = (id) => {
    console.log(id)
    try {
      axios
        .get(`/courses/${id}`)
        .then((res) => {
          console.log(res.data);
          setCountries([res.data.result]);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // getcountries()
  useEffect(() => {
    if (params && params.id) {
      getcountries(params.id);
    }
  }, [params]);

  return (
    <div>
      <div className=" border flex justify-center ">
        <button
          className={`border transition-all ease-in-out duration-600 dalay-150 text-xl w-full px-10 py-3 ${Show==='info'?"bg-white text-black":"bg-gray-300"}`}
          onClick={() => {
            setShow("info");
          }}
        >
          Course Info

        </button>
        <button
          className={`border transition-all ease-in-out duration-600 dalay-150 text-xl w-full px-10 py-3  ${Show!=='info'?"bg-white text-black":"bg-gray-300"}`}
          onClick={() => {
            setShow("syallabus");
          }}
        >
          Syallabus
        </button>
      </div>
      <div>
        {Show === "info" ? (
          <div>
            {countries.map((val, i) => {
              return (
                <div className="w-full grid my-6 grid-cols-2 gap-10">
                  <div className="grid gap-5 border shadow-lg ">
                    {countries.map((val, i) => {
                      let image = `http://192.168.100.43:3000/${val.image}`;
                      return (
                        <div className="grid grid-cols-2 w-full p-12">
                          <div>
                            <div className="h-full p-2">
                              <img
                                src={image}
                                alt=""
                                className="h-52 w-100 rounded-xl object-cover"
                              />
                              <div className="grid grid-cols-2 w-[450px] gap-5 mt-8 text-lg">
                                <div className="flex flex-col justify-start items-start font-medium text-gray-500">
                                  Course title
                                  <div className="text-black font-semibold">
                                    {val.title}
                                  </div>
                                </div>

                                <div className="flex flex-col justify-start items-start ">
                                  <div className="flex flex-col justify-start items-start font-medium text-gray-500">
                                    Course duration
                                    <div className="text-black font-semibold">
                                      {val.duration}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col justify-start items-start ">
                                  <div className="flex flex-col justify-start items-start font-medium text-gray-500">
                                    Instructor
                                    <div className="text-xm font-semibold capitalize px-2">
                                      {val.instructor}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col justify-start items-start ">
                                  <div className="flex flex-col justify-start items-start font-medium text-gray-500">
                                    Category
                                    <div className="text-black font-semibold text-left">
                                      {val.category}
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col justify-start items-start ">
                                  <div className="flex flex-col justify-start items-start font-medium text-gray-500">
                                    Students
                                    <div className="text-black font-semibold">
                                      0
                                    </div>
                                  </div>
                                </div>

                                <div className="flex flex-col justify-start items-start ">
                                  <div className="flex flex-col justify-start items-start font-medium text-gray-500">
                                    Reviews
                                    <div className="text-black font-semibold">
                                      0
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="p-10 shadow-lg border ">
                    <div className="font-medium flex justify-start text-2xl py-6">
                      About this course
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: val.description }}
                      className="text-left text-lg"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid gap-4">
            {
            countries.map((val, i) => {
              return val.syllabus.map((item, ind) => {
                return (
                  <Accordion key={i}>
                    <AccordionSummary
                    autoFocus={true}
                    expandIcon={<ArrowDropDownIcon/>}
                      id="panel-header"
                      aria-controls="panel-content"
                    >
                    <Typography className="py-4">{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      
                      <div className="px-6">
                        <div dangerouslySetInnerHTML={{__html:item.description}} className="list-disc">
                          
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                );
              });
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Office;




