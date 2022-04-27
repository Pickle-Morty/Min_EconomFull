import React, { useEffect } from "react";
import { Title, Container, Row } from "../../styledComponents";
import { Table } from "../../common";
import { STYLES, COLUMNS } from "../../constains";
import Cart from "./Cart";
import Sort from "./Sort";
import { useParams, useHistory } from "react-router-dom";
import { Loader } from "../../common";
import { RegisrtyStyled, LinkPage } from "./style";
import { useSelector } from "react-redux";

const Registry = ({
  type,
  dots,
  list,
  isFetching,
  role,
  getRegistry,
  sort,
  select,
  sortRegistry,
}) => {
  const { page } = useParams();
  const history = useHistory();
  const token = useSelector((state) => state.auth.info.accessToken);
  const getUri = (sort, page) => {
    let data = { ...sort, pageNumber: {value: page - 1} };
    if (type!="public") {
      data = {...data,"status.id":{ value: type } }
    }
    const filter = (data) => {
      let customUri = '/search?pageSize=6'
      Object.keys(data).map(property => {
        if (data[property]) {
          customUri = customUri + `&${property}=${data[property].value}`
        }
      })
      return customUri
    };
    return filter(data)
  }



  useEffect(() => {
    let uri = getUri(sort, page)
    getRegistry(uri, token);
  }, [page, type]);




  const searchRegistry = () => {
    const uri = getUri(sort, page)
    sortRegistry(({region: '', organ: '', economicActivity: '', cause: ''}))
    getRegistry(uri, token);
  };

  const setRequest = (e) => {
    const item = e.target;
    if (item.tagName === "TD") {
      const id = item.dataset.id;
      history.push("/request/" + id);
    }
  };

  useEffect(() => {
    searchRegistry()
  }, [])

  return isFetching ? (
    <Loader />
  ) : (
      <RegisrtyStyled>
        <Container padding="25px 15px">
          <Title margin="0 0 12px" color={STYLES.blue} weight="700" size="24px">
            Заявки:
          </Title>
          {role == 2 ? (
            <>
              <Sort {...select} sortRegistry={sortRegistry} sort={sort} searchRegistry = {searchRegistry} />
            </>
          ) : null}
          {list.length ? (
            <Table data={list} columns={COLUMNS} onClick={setRequest} />
          ) : (
              <h3 className="warning">Ничего не найдено!</h3>
            )}
          <Row wrap={true} className="slider">
            {list.length ? (
              list.map((item) => <Cart {...item} key={item.id} />)
            ) : (
                <h3 className="warning">Ничего не найдено!</h3>
              )}
          </Row>
          <Row justify="flex-start" className="pagination">
            {dots.map((item) => (
              <LinkPage
                key={item}
                className={+page === item ? "active" : ""}
                to={`/registry/${type}/${item}`}
              >
                {item}
              </LinkPage>
            ))}
          </Row>
        </Container>
      </RegisrtyStyled>
    );
};

export default Registry;
