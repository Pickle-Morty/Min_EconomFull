import { Admin } from "../components";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { postNewField, removeField } from "../redux/actions/fieldsActions";
import { Loader } from "../common";

const AdminContainer = () => {
  const dispatch = useDispatch();
  const { fields, auth }  = useSelector(state => state);
  const sendNewField = (body, type) => {
    dispatch(postNewField(body, type));
  };
  const sendNewUser = (body, type) => {
    console.log ("New Admin! \n" )
    console.log (body)
    //dispatch(postNewField(body, type));
  };
  const sendRemoveField = (body, type) => {
    dispatch(removeField(body, type))
  };



  if(auth.role !== 2) return <Redirect to="/login" />
  if(fields.isPostRequest) return <Loader />
  return <Admin select={fields.select}sendNewField={sendNewField}sendRemoveField={sendRemoveField}  sendNewUser = { sendNewUser} />;
};

export default AdminContainer;
