import React, { useState } from "react";
import { STYLES } from "../../../../constains";
import { Button } from "../../../../styledComponents";


import Select from "../Select";

const typesData = [
    { value: 1, label: "Строительство" },
    { value: 2, label: "Сельское хозяйство, лесное хозяйство, рыболовство" },
    { value: 3, label: "Информационные технологии" },
    { value: 4, label: "Грузовые, пассажирские перевозки" },
    { value: 5, label: "Авиаперевозки" },
    { value: 6, label: "Услуги" },
    { value: 7, label: "Недропользование" },
    { value: 8, label: "Промышленность" },
]

const organData = [
    { value: 1, label: "Налоговая служба" },
    { value: 2, label: "Таможенная служба" },
    { value: 3, label: "Бизнес омбудсмен" }
]

const StatisticsFilter = ({  }) => {
    return (
        <div className="">
            <Select
                options={typesData}
                placeholder="Заявки по датам"
                onChange={({ value }) => {console.log(value)}}
            />
            <Select
                options={organData}
                placeholder="Заявки по органам"
                onChange={({ value }) => {console.log(value)}}
            />
            <Button
                color="white"
                margin="0 0 10px"
                bg={STYLES.blue}
                padding="9px 53px"
            >
                Поиск
            </Button>
            

        </div>


    );
};

export default StatisticsFilter;