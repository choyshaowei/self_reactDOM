import React, { useState } from "react";

import "./App.css";

import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finished the Course" },
    { id: "cg2", text: "All about course" },
    { id: "cg3", text: "Help other students for QnA" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals((precCourseGoals) => {
      return precCourseGoals.concat(newGoal);
    });
    console.log(courseGoals);
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}></NewGoal>
      <GoalList goals={courseGoals}></GoalList>
    </div>
  );
};

export default App;
