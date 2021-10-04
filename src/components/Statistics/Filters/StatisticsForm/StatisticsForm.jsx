import { Field, reduxForm } from "redux-form";
import { SelectForm } from "../../../../common";
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


const Form = ({ ECONOMIC, handleSubmit }) => {

    return (
        <form onSubmit={handleSubmit}>
            <Field name="select" options={typesData} placeholder="Заявки по датам" component={SelectForm} />
            <Field name="select" options={organData} placeholder="Заявки по органам" component={SelectForm} />
            <Button
                color="white"
                margin="0 0 10px"
                bg={STYLES.blue}
                padding="9px 53px"
            >
                Поиск
            </Button>

        </form>
    )
}

const StatisticsForm = reduxForm({
    form: 'statistics'
})(Form)

export default StatisticsForm