import React, { useState } from "react";
import { STYLES } from "../../../../constains";
import { Button, Row } from "../../../../styledComponents";
import Select from "../Select";

const StatisticsFilter = ({ getByOrgan, region, economicActivity }) => {
    const [statFilter, setStatFilter] = useState({region: '', economicActivity: ''})
    const search = () => {
        getByOrgan(statFilter)
    }
    return (
        <div>
            <Select
                options={economicActivity}
                placeholder="По виду деятельности"
                onChange={({ value }) => { setStatFilter({...statFilter, economicActivity: value}) }}
            />
            <Select
                options={region}
                placeholder="По регионам"
                onChange={({ value }) => { setStatFilter({...statFilter, region: value}) }}
            />
            <Button
                color="white"
                margin="0 0 10px"
                bg={STYLES.blue}
                padding="9px 53px"
                onClick={() => search()}
            >
                Поиск
            </Button>
        </div>


    );
};

export default StatisticsFilter;