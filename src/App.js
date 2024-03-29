import React, { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";

import "./App.css";

// import GoalList from "./components/GoalList/GoalList";
// import NewGoal from "./components/NewGoal/NewGoal";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";

const App = () => {
  // const [courseGoals, setCourseGoals] = useState([
  //   { id: "cg1", text: "Finished the Course" },
  //   { id: "cg2", text: "All about course" },
  //   { id: "cg3", text: "Help other students for QnA" },
  // ]);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

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

  // const addNewGoalHandler = (newGoal) => {
  //   // setCourseGoals(courseGoals.concat(newGoal))
  //   setCourseGoals((precCourseGoals) => {
  //     return precCourseGoals.concat(newGoal);
  //   });
  //   console.log(courseGoals);
  // };

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="course-goals">
      <h2>
        <button type="button" class="btn btn-danger btn-lg m-5">
          Simple React App
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
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">Page {currentPage}</li>
            <li class="breadcrumb-item">
              {Math.ceil(posts.length / postPerPage)}
            </li>
          </ol>
        </nav>
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
