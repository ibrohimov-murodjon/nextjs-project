"use client";
import React, { useState } from "react";

function CoursesSearch({ getRep }) {
  const [name, setName] = useState("");

  const submitFilter = async (e) => {
    e.preventDefault();
    const data = await fetch(`/api/search?query=${name}`);
    const res = await data.json();
    if (res.length == 0) {
      alert("Not Found");
    } else {
      getRep(res);
    }
    setName("");
  };

  return (
    <div>
      <form action="" className="search-form">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="search-input"
          value={name}
        />
        <button onClick={submitFilter} className="search-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default CoursesSearch;
