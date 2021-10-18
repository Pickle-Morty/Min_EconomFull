import React, { useEffect } from "react";
import { Title, Container, Row } from "../../styledComponents";
import { Table } from "../../common";
import { STYLES, COLUMNS } from "../../constains";
import Cart from "./Cart";
import Sort from "./Sort";
import Search from "./Search";
import { useParams, useHistory } from "react-router-dom";
import { Loader } from "../../common";
import { RegisrtyStyled, LinkPage } from "./style";
import { getAuth, parseParams } from "../../utils";
import { useSelector } from "react-redux";

const Registry = ({
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
  const token = getAuth.token(); 
  const getUri = (sort, page) => {
    const data = { ...sort, pageNumber: page - 1 };
    const filter = (data) => {
      let customUri = '/search?pageSize=6'
      Object.keys(data).map(property => {
        if (data[property]) {
          console.log(property, ":", data[property])
          customUri = customUri + `&${property}=${data[property]}`
        }
      })
      return customUri
    };
    return filter(data)
  }

  useEffect(() => {
    let uri = getUri(sort, page)
    getRegistry(uri, token);
  }, [page]);



  const searchRegistry = () => {
    const uri = getUri(sort, page)
    history.push(`/registry` + uri)
    getRegistry(uri, token);
  };

  const setRequest = (e) => {
    const item = e.target;
    if (item.tagName === "TD") {
      const id = item.dataset.id;
      history.push("/request/" + id);
    }
  };

  return isFetching ? (
    <Loader />
  ) : (
      <RegisrtyStyled>
        <Container padding="25px 15px">
          <Title margin="0 0 12px" color={STYLES.blue} weight="700" size="24px">
            Заявки:
        </Title>
          {role ? (
            <>
              <Sort {...select} sortRegistry={sortRegistry} sort={sort} />
              <Search sortRegistry={sortRegistry} sort={sort} searchRegistry={searchRegistry} />
            </>
          ) : (
              <Search sortRegistry={sortRegistry} sort={sort} searchRegistry={searchRegistry} />
            )}
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
                to={`/registry/${item}`}
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
