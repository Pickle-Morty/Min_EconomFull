const initialState = {
    select: {
        region: [{
            id: 0,
            title: "Все регионы"
        }],
        organ: [{
            id: 0,
            title: "Все гос.органы"
        }],
        activity: [{
            id: 0,
            title: "Все отрасли"
        }],
        cause: [],
        subject: [],
    },
    isFetching: false,
    isPostRequest: false,
};

const fieldsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_FIELDS":
            return { ...state, 
                [action.key]: action.payload };
        default:
            return state;
    };
};

export default fieldsReducer;