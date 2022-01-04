export const initialState = false;

//for user login logout toggle
export const Reducers = (state, action) => {
    if(action.type === 'LoginUser'){
        return action.payload;
    }
    return state;
}