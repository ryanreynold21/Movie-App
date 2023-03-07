const reducer = (state,action) => {
    switch(action.type){
        case 'GET_MOVIE' :
            return {...state,movies:action.payload}
    } 
}

export default reducer;