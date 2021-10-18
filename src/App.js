import React, { useEffect } from 'react';
import { Home, } from './components';
import { Route } from "react-router-dom";
import {
  RegistryContainer, RequestContainer,
  SuccessContainer, LoginContainer,
  StatisticsContainer, HeaderContainer,
  AdminContainer, FormContainer
} from "./containers";
import { useDispatch, useSelector } from "react-redux";
import { getSelect } from "./redux/actions/fieldsActions";
import { checkToken, getUser, setAuth } from "./redux/actions/authActions";

const App = () => {
  const dispatch = useDispatch();  
  const auth = useSelector(state => state.auth);
  const fields = useSelector(state => state.fields)
  
  useEffect(() => {  
    dispatch(checkToken()) //хз
    dispatch(getUser())   //прокидывает данные о user из lockalStorage в state
    dispatch(getSelect(auth.info.accessToken)) //получам с сервера и прокидываем в state все данные о заявках, требуеться токен
  }, []);
  
  useEffect(() => {  
    dispatch(getUser())   //прокидывает данные о user из lockalStorage в state
  }, []);

  
  return (
    <>
      <HeaderContainer />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/requestForm" component={FormContainer} />
        <Route path="/success/:status" component={SuccessContainer} />
        <Route path="/registry/:page" component={RegistryContainer} />
        <Route path="/request/:id" component={RequestContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/statistics" component={StatisticsContainer} />
        <Route path="/admin" component={AdminContainer} />
      </main>
    </>
  );
};

export default App;
