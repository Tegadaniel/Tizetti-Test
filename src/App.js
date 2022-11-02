import React, { useState } from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";
import "h8k-components";
import { STUDENTS } from "./studentsList";
import { checkValidity } from "../src/utils";

const title = "Tizeti";
const initialState = {
  name: "",
  date: "",
};
function App() {
  const [formData, setFormData] = useState(initialState);
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  const handleFormDataChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = () => {
    const studentExists = STUDENTS.find(
      (student) => student.name.toLowerCase() === formData.name.toLowerCase()
    );
    let errorMessage;

    if (studentExists) {
      const isDateValid = checkValidity(
        formData.date,
        studentExists.validityDate
      );
      if (!isDateValid) {
        errorMessage = `Sorry, ${formData.name}'s validity has Expired!`;
        setError(errorMessage);
      } else {
        setList((prevList) => [...prevList, formData]);
        setFormData(initialState);
        setError(null)
      }
      return;
    }
    errorMessage = `Sorry, ${formData.name} is not a verified student!`;
    setError(errorMessage);
    
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center align-items-center w-50 mx-auto">
        <Search
          handleFormSubmit={handleFormSubmit}
          handleFormDataChange={handleFormDataChange}
          formData={formData}
        />
        {error && <Error error={error} />}
        <ResidentsList list={list} />
      </div>
    </div>
  );
}

export default App;
