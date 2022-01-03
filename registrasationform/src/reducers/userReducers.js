export const initialState = null;

//for user login logout toggle
export const Reducers = (state, action) => {
    if(action.type === 'User'){
        return action.payload;
    }

    return state;
}