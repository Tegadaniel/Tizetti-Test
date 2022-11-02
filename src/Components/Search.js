import React from "react";

function Search({handleFormDataChange, handleFormSubmit, formData}) {
  return (
    <div className="my-50 layout-row align-items-end justify-content-end">
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            name="name"
			value={formData.name}
            onChange={handleFormDataChange}
            id="studentName"
            data-testid="studentName"
            type="text"
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            name="date"
			value={formData.date}
            onChange={handleFormDataChange}
            id="joiningDate"
            data-testid="joiningDate"
            type="date"
            className="mr-30 mt-10"
          />
        </div>
      </label>
      <button
        onClick={handleFormSubmit}
        type="button"
        data-testid="addBtn"
        className="small mb-0"
      >
        Add
      </button>
    </div>
  );
}

export default Search;
