export const setSelectData = ({plan}) =>({
    type:'SET_SELECT_DATA',
    payload:{plan}
});

export const setInfoData = ({name,email,phone, page}) =>({
    type:'SET_INFO_DATA',
    payload:{name, email, phone, page}
});


export const setAddonsData = ({a1,a2,a3}) =>({
    type:'SET_ADDONS_DATA',
    payload:{a1,a2,a3}
});