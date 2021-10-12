import React from "react";
import { Statistics } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { getStatistics } from "../redux/actions/statisticsActions";
import { Redirect } from "react-router-dom";

const StatisticsContainer = () => {
  const statistics = useSelector((state) => state.statistics);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const region = useSelector((state) => state.fields.select.region);
  const economicActivity = useSelector((state) => state.fields.select.activity);
  
  
  
  

  return isAuth ? (
    <Statistics region={region} economicActivity = {economicActivity} {...statistics}  />
  ) : (
    <Redirect to="login" />
  );
};

export default StatisticsContainer;
