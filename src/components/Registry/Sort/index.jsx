import React, { useState } from "react";
import { Row, Button } from "../../../styledComponents";
import Select from "./Select";
import { STYLES } from "../../../constains";



const Sort = ({ region, organ, activity, cause, sortRegistry, sort, searchRegistry }) => {
  const [show, setShow] = useState(false);
  return (
    <Row column justify="flex-start" align="flex-start" margin="0 0 10px">
      <Button
        margin="0 0 12px"
        onClick={() => setShow(!show)} 
        bg={STYLES.blue}
        color="white"
        padding="10px 15px"
        radius="33px"
      >
        Сортировка
      </Button>
      {show && (
        <Row wrap justify="space-around" style={{ width: "100%" }}>
          <Select
            value = {sort.region}
            options={region}
            placeholder="Регионы"
            onChange={(e) => {
              sortRegistry({ ...sort, region: e })
            }}
          />
          <Select
            value={sort.organ}
            options={organ}
            placeholder="Орган"
            onChange={(e) => sortRegistry({ ...sort, organ: e })}
          />
          <Select
            value = {sort.economicActivity}
            options={activity}
            placeholder="Вид деятельности"
            onChange={(e) => sortRegistry({ ...sort, economicActivity: e })}
          />
          <Select
            value = {sort.cause}
            options={cause}
            placeholder="Неблагоприятный фактор"
            onChange={(e) => sortRegistry({ ...sort, cause: e })}
          />
          <Button
            margin="0 0 12px"
            onClick={() => setShow(!show)}
            bg={STYLES.blue}
            color="white"
            padding="10px 30px"
            radius="33px"
            onClick={() => searchRegistry()}
          >
            Поиск
          </Button>
        </Row>
      )} 
    </Row>
  );
};

export default Sort;
