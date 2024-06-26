import axios from "../HOC/Axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ReactQuill from "react-quill";
import { ErrorMessage, Formik, Field, Form } from "formik";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { IoCloudUploadSharp } from "react-icons/io5";

function Table() {
  const [countries, setCountries] = useState([]);
  const [Search, setSearch] = useState("");
  const [Deleted, setDeleted] = useState(false);
  const [deleteId, setdeleteId] = useState("");
const navigate=useNavigate()
  const [Edited, setEdited] = useState([]);
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const [value, setValue] = useState("");
  const { quill, quillRef } = useQuill();

  const getcountries = () => {
    try {
      axios
        .get("/courses")
        .then((res) => {
          console.log(res.data);
          setCountries([...res.data.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // getcountries();
  useEffect(() => {
    getcountries();
  }, []);

  const Filter = (val) => {
    return val.filter(
      (x) => x["course"].toLowerCase().indexOf(Search.toLowerCase()) > -1
    );
  };

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = () => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);
  };

  const deleteData = () => {
    try {
      axios
        .delete(`/courses/${deleteId}`)
        .then((res) => {
          setDeleted(false);
          getcountries();
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {Deleted ? (
        <div
          onClick={() => {
            setDeleted(false);
          }}
          className="h-full w-full fixed top-0  right-0 flex items-center justify-center bg-gray-900 bg-opacity-70 left-0"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white w-fit h-fit p-10 rounded-md"
          >
            <div>Are you sure?</div>

            <button
              onClick={() => {
                deleteData();
              }}
              type="button"
              className="bg-black h-8 my-14 m-6 w-16 text-lg rounded-lg text-center text-white"
            >
              Yes
            </button>

            <button
              type="button"
              className="bg-black h-8 my-14 m-6 w-16 text-lg rounded-lg text-center text-white"
            >
              No
            </button>
          </div>
        </div>
      ) : (
        " "
      )}


      {Edited.length>0 ? (
        <div
          onClick={() => {
            setEdited([]);
          }}
          className="h-full w-full fixed top-0 right-0 flex items-center justify-center bg-gray-900 bg-opacity-70 left-0"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-gray-100 h-full w-[1200px] p-10 rounded-md "
          >
            <div>
              <Formik
                initialValues={{
                  course: Edited && Edited.length>0?Edited[0].course:'',
                  duration: Edited && Edited.length>0?Edited[0].duration:"",
                  category: Edited && Edited.length>0?Edited[0].category:"",
                  instructor:Edited && Edited.length>0?Edited[0].instructor: "",
                  image: "",
                }}
                onSubmit={(values, { resetForm }) => {
                  try {
                    const formData = new FormData();
                    formData.append("course", values.course);
                    formData.append("duration", values.duration);
                    formData.append("category", values.category);
                    formData.append("instructor", values.instructor);
                    formData.append("image", values.image);

                    axios
                      .patch(`/course/${Edited &&  Edited.length>0  && Edited[0].id}`, formData)
                      .then((res) => {
                        console.log(res.data);

                        // toast.success("login successful")
                        // localStorage.setItem("token",res.data.accesstoken)

                        navigation("/");
                        // setCountries([...res.data.data]);
                      })
                      .catch((error) => {
                        console.log(error);
                        toast.error(error.response.data.message);
                      });
                  } catch (error) {
                    console.log(error);
                  }
                  console.log(values);
                  // resetForm();
                }}
              >
                {({ handleSubmit, setFieldValue, values }) => {
                  ``;
                  return (
                    <Form onSubmit={handleSubmit}>
                      <div>
                        <div className="text-left bg-white p-4">
                          <div className="text-pink-800 font-bold text-2xl">
                            {" "}
                            Add Course
                          </div>
                          <div className="text-lg text-gray-700 pt-3 font-normal">
                            A list of all the users in your account including
                            their name, title, email and role.
                          </div>
                        </div>

                        <div className=" bg-white h-[600px]  p-4 ">
                          <div className=" gap-5 mt-10 flex justify-between">
                            <div className="text-left">
                              <div className="text-lg font-medium text-purple-700 mb-2">
                                Course name
                              </div>
                              <div>
                                <Field
                                  name="course"
                                  type="text"
                                  label="hehe"
                                  className="outline-none h-10 w-[250px] outline-gray-200"
                                />
                              </div>
                            </div>

                            <div className="text-left">
                              <div className="text-lg font-medium text-purple-700 mb-2">
                                Duration
                              </div>
                              <div>
                                <Field
                                  name="duration"
                                  type="text"
                                  label="hehe"
                                  className="outline-none h-10 w-[250px] outline-gray-200"
                                />
                              </div>
                            </div>

                            <div className="text-left">
                              <div className="text-lg font-medium text-purple-700 mb-2">
                                Select Category
                              </div>
                              <div>
                                <Field
                                  name="category"
                                  id="combo-box-demo"
                                  type="text"
                                  className="outline-none py-5 w-[250px] outline-gray-200"
                                />
                              </div>
                            </div>

                            <div className="text-left">
                              <div className="text-lg font-medium text-purple-700 mb-2">
                                Instructor
                              </div>
                              <div>
                                <Field
                                  type="text"
                                  name="instructor"
                                  id="combo-box-demo"
                                  className="outline-none py-5 w-[250px] outline-gray-200"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="gap-5 mt-10 flex justify-between">
                            <div className="text-left mt-10">
                              <div className="text-lg font-medium text-purple-700 mb-2">
                                Upload Course Image
                              </div>
                              <div onClick={handleImageClick}>
                                {values.image ? (
                                  <img
                                    src={URL.createObjectURL(values.image)}
                                    alt=""
                                    name="image"
                                  />
                                ) : (
                                  <div className="h-48  w-48  border border-black border-dashed flex text-xl flex-col  justify-center text-center items-center text-gray-400 ">
                                    <div className="text-5xl">
                                      <IoCloudUploadSharp />
                                    </div>
                                    <div>Click to upload</div>
                                  </div>
                                )}
                                <input
                                  name="image"
                                  type="file"
                                  ref={inputRef}
                                  onChange={(e) => {
                                    setFieldValue("image", e.target.files[0]);
                                  }}
                                  style={{ display: "none" }}
                                />
                              </div>
                            </div>

                            <div className="text-left mt-10">
                              <div className="text-lg font-medium text-purple-700 mb-2">
                                Description
                              </div>
                              <div style={{ width: 850, height: 150 }}>
                                <div ref={quillRef} />
                              </div>
                            </div>
                          </div>

                          <div className="text-left flex gap-5">
                            <button
                              type="button"
                              onClick={() => {}}
                              className="bg-red-600 h-10 my-14 w-24 text-lg rounded-lg text-center text-white hover:bg-red-500"
                            >
                              Cancel
                            </button>

                            <button
                              type="submit"
                              className="bg-indigo-600 h-10 my-14 w-24 text-lg rounded-lg text-center text-white hover:bg-indigo-500"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}

      {console.log(countries)}

      <div className="flex items-center text-center flex-row-reverse justify-between">
        <div className="text-end">
          <Link to={"/add"}>
            <button
              type="button"
              className="bg-black h-10 my-14 w-24 text-lg rounded-lg text-center text-white hover:bg-gray-700"
            >
              Add
            </button>
          </Link>
        </div>

        <div className="text-end">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.reload();
            }}
            type="button"
            className="bg-black h-10 my-14 w-24 text-lg rounded-lg text-center text-white hover:bg-gray-700"
          >
            Logout
          </button>
        </div>

        <div className=" border-gray-900 border-2 p-2">
          <input
            className="outline-none"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search"
          />
        </div>
      </div>
      <table className="w-full mx-auto border">
        <thead>
          <tr className="border bg-blue-500 py-4">
            <th className="py-4 px-3 capitalize text-white">S.N.</th>
            <th className="py-4 px-3 capitalize text-white">Title</th>
            <th className="py-4 px-3 capitalize text-white">Duration</th>
            <th className="py-4 px-3 capitalize text-white">Instructor</th>
            <th className="py-4 px-3 capitalize text-white">Course Category</th>
            <th className="py-4 px-3 capitalize text-white">Action</th>
          </tr>
        </thead>
        <tbody>
          {Filter(countries).map((val, i) => {
            return (
              <tr className={`${i % 2 != 0 ? "bg-gray-200" : "bg-white"}`}>
                <td align="center" className="py-4 px-4">
                  {i + 1}
                </td>
                <td align="center" className="py-4 px-4">
                  <Link to={`/${val.id}`}>{val?.course}</Link>
                </td>
                <td align="center" className="py-4 px-4">
                  {val?.duration}
                </td>
                <td className="px-3 py-3">
                  <ol type="1">
                    {/* {val.instructor.map((item, ind) => {
                      return <li>{item.name}</li>;
                    })} */}
                  </ol>
                </td>
                {/* <td align='center' className='py-4 px-4'>{val?.name}</td> */}
                <td align="center" className="py-4 px-4">
                  {/* {val?.category.name} */}
                </td>
                <td className="px-3 py-3">
                  <div className="flex gap-4">
                    <button
                      onClick={() => {
                        // navigate(`/${val.id}`)
                        setEdited([val]);
                      }}
                      className="text-white capitalize bg-blue-400 px-6 py-2 rounded-full text-sm"
                    >
                      edit
                    </button>

                   <button
                      onClick={() => {
                        setDeleted((prev) => !prev);
                        setdeleteId(val.id);
                      }}
                      className="text-white capitalize bg-red-400 px-6 py-2 rounded-full text-sm"
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table; 

