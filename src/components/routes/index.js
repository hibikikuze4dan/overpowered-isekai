import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { getSectionTitlesArray } from "../../redux/selectors";
import SectionComponent from "../section";

const RoutesComponent = () => {
  const routes = useSelector(getSectionTitlesArray);
  return (
    <>
      {routes.map((route, index) => {
        return (
          <Route
            exact
            path={`/${route}`}
            key={`routes-${route}-${index}`}
            render={() => <SectionComponent />}
          />
        );
      })}
    </>
  );
};

export default RoutesComponent;
