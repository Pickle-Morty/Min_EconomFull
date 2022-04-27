import React from "react";
import EntityForm from "./EntityForm";
import IndividualForm from "./IndividualForm";
import { STYLES } from "../../constains";
import { Route, useHistory } from "react-router-dom";
import { Container, Title, Row } from "../../styledComponents";
import { RequestStyled } from "./style";
import { Loader } from "../../common";
import { registryAPI } from "../../API/registryAPI";
import { configS3 } from "../../constains/ConfigS3";


const RequestPage = ({ postRequest, isFetching, select }) => {
  const history = useHistory();
  const routeRole = (value) => {
    if (value === 1) {
      history.push("/requestForm/individual");
    } else {
      history.push("/requestForm");
    }
  };
  
  const sendRequest = (data) => {
    console.log(data)
    registryAPI.sendFile(data.file[0], configS3).then( url => {
      const body = {
        ...data,
        applicantType: data.applicantType ? data.applicantType : 2,
        linkToAttachment: url
      };
      history.push("/success/consideration");
      postRequest(body);
    })
  };
  
  if (isFetching) return <Loader />;
  return (
    <RequestStyled>
      <Container small padding="30px 15px">
        <Row column>
          <Title
            className="title"
            margin="0 0 20px"
            color={STYLES.blue}
            size="23px"
          >
            Жалоба о негативном факторе
          </Title>
          <Route
            path="/requestForm"
            exact
            render={() => (
              <EntityForm
                routeRole={routeRole}
                onSubmit={sendRequest}
                {...select}
              />
            )}
          />
          <Route
            path="/requestForm/individual"
            exact
            render={() => (
              <IndividualForm
                routeRole={routeRole}
                onSubmit={sendRequest}
                {...select}
              />
            )}
          />
        </Row>
      </Container>
    </RequestStyled>
  );
};

export default RequestPage;
