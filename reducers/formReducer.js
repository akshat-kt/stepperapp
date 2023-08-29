const initialState = {
    Info : {},
    Select : {},
    Addons: {},
}


const formReducer=(state = initialState, action)=>{
    switch(action.type){
        case 'SET_INFO_DATA': return{ ...state, Info: action.payload };
        case 'SET_SELECT_DATA': return{ ...state, Select: action.payload};
        case 'SET_ADDONS_DATA': return{ ...state, Addons: action.payload};
        default: return state;
    }
}


export default formReducer;