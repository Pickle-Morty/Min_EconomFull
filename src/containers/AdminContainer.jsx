import { Admin } from "../components";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { postNewField, removeField } from "../redux/actions/fieldsActions";
import { Loader } from "../common";
import { adminAPI } from "../API/adminAPI";

const AdminContainer = () => {
  const dispatch = useDispatch();
  const { fields, auth }  = useSelector(state => state);
  const [userList, setUserList] = useState ([{
    
  }])
  const sendNewField = (body, type) => {
    dispatch(postNewField(body, type));
  };
  const sendNewUser = (body, type) => {
    adminAPI.createUser(body, auth.info.accessToken)
  };
  const sendRemoveField = (body, type) => {
    dispatch(removeField(body, type))
  };

  const deleteUser = (id) => {
    adminAPI.deleteUser ( auth.info.accessToken, id).then(massege => console.log(massege)) 
  }

  useEffect (()=>{
    adminAPI.getAllUser(auth.info.accessToken).then( userList => setUserList(userList.data))
  },[])



  if(auth.role !== 2) return <Redirect to="/login" />
  if(fields.isPostRequest) return <Loader />
  return <Admin select={fields.select}sendNewField={sendNewField}sendRemoveField={sendRemoveField} userList ={userList} sendNewUser = { sendNewUser} deleteUser = {deleteUser}/>;
};

export default AdminContainer;
