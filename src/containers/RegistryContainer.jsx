import { Registry } from "../components";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRegistry, sortRegistry } from "../redux/actions/registryActions";

const RegistryContainer = () => {
  const dispatch = useDispatch();
  const { registry, auth, fields } = useSelector((state) => state);
  let {type} = useParams()
  
  const dots = [];
  for (let i = 1; i <= registry.totalPage; i++) {
    dots.push(i);
  };

  return (
    <Registry
      {...registry}
      {...fields}
      {...auth}
      dots={dots}
      type = {type}
      getRegistry={(page, token) => dispatch(getRegistry(page, token))}
      sortRegistry={(params) => dispatch(sortRegistry(params))}
    />
  );
};

export default RegistryContainer;
