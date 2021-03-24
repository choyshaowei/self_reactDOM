import React, { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";

import "./App.css";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finished the Course" },
    { id: "cg2", text: "All about course" },
    { id: "cg3", text: "Help other students for QnA" },
  ]);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setPosts(await res.json());
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals((precCourseGoals) => {
      return precCourseGoals.concat(newGoal);
    });
    console.log(courseGoals);
  };

  const indexOfLastpost = currentPage * postPerPage;
  const indeOfFirstPost = indexOfLastpost - postPerPage;
  const currentPosts = posts.slice(indeOfFirstPost, indexOfLastpost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="course-goals">
      <h2>
        <button type="button" class="btn btn-danger btn-lg m-5">
          Course Goals
        </button>
      </h2>
      {/* <NewGoal onAddGoal={addNewGoalHandler}></NewGoal>
      <GoalList goals={courseGoals}></GoalList> */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <div className="container-fluid">
        <Posts posts={currentPosts} loading={loading}></Posts>
        <Pagination
          postsPerPage={postPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        ></Pagination>
      </div>
    </div>
  );
};

export default App;
