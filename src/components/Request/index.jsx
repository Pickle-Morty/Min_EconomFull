import React, { useState, useEffect } from "react";
import {
  Text,
  Container,
  LinkButton,
  Button,
  Row,
} from "../../styledComponents";
import { STYLES } from "../../constains";
import { useHistory, useParams } from "react-router-dom";
import { Loader, Document } from "../../common";
import List from "./List";
import Panel from "./Panel";
import Topline from "./Topline";
import { RequestStyled } from "./style";

const Request = ({
  role,
  isGetRequest,
  getRequest,
  request,
  changeCause,
  postStatus,
  
}) => {
  const [panel, setPanel] = useState(false);
  const [changeStatus, setChangeStatus] = useState(true);
  const history = useHistory();
  const { id } = useParams();
  const {attachment} = request 

  useEffect(() => {
    getRequest(+id);
  }, []);

  const sendNewStatus = () => {
    history.push(`/success/${changeStatus ? "approved" : "denied"}`);
    postStatus({ claimId: +id, decision: changeStatus, cause: request?.problemOfDescription });
  };

  return isGetRequest ? (
    <Loader />
  ) : (
      <RequestStyled attachment={request?.attachment}>
        <Container padding="25px 15px">
          <Topline
            panel={panel}
            setPanel={setPanel}
            status={"В обработке"}
            role={role}
          />
          <List request={request} />
          <Text weight="600" size="16px" color={STYLES.blue}>
            Описание не благоприятного фактора:
        </Text>
          <Row wrap className="field" justify="flex-start">
            <textarea
              placeholder="Описание фактора"
              onInput={(e) => changeCause({ ...request, problemOfDescription: e.target.value })}
            >
              {request.problemOfDescription}
            </textarea>
            {request?.attachment && <Document files={request?.attachment}  />}
          </Row>
          {
            !changeStatus ? (
              <div className="comment">
                <Text weight="600" size="16px" color={STYLES.blue}>
                  Причина отказа:
                </Text>
                <Row wrap className="field" justify="flex-start">
                  <textarea
                    placeholder="Причина отказа"
                    onInput={(e) => changeCause({ ...request, problemOfDescription: e.target.value })}
                  >
                  </textarea>
                </Row>
              </div>
            ) : (
                <div className=""></div>
              )
          }
          {panel && (
            <Panel
              setChangeStatus={setChangeStatus}
              changeStatus={changeStatus}
            />
          )}
          {panel ? (
            <Button
              bg={STYLES.blue}
              className="send"
              color="white"
              onClick={sendNewStatus}
            >
              Отправить
            </Button>
          ) : (
              <LinkButton to="/registry" className="link" radius="10px" size="16px">
                Закрыть просмотр
              </LinkButton>
            )}

        </Container>
      </RequestStyled>
    );
};

export default Request;
