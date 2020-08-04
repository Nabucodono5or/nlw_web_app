import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import TeacherList from "./TeacherList";
import TeacherForm from "./TeacherForm";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}></Route>
      <Route path="/study" exact component={TeacherList}></Route>
      <Route path="/give-classes" exact component={TeacherForm}></Route>
    </BrowserRouter>
  );
}

export default Routes;
