"use client";
import React, { useEffect, useState } from "react";
import Courses from "./components/Courses";
import Loading from "./loading";

function Home() {
  const [courses, setCourses] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const req = await fetch("/api/courses");
      const data = await req.json();
      setCourses(data);
      setIsPending(false);
    };
    getData();
  }, []);

  if (isPending) {
    return <Loading />;
  }
  return (
    <div>
      <h1>Welcome to the Courses</h1>
      <Courses courses={courses} />
    </div>
  );
}

export default Home;
