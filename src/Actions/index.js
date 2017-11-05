export const addUser = (user) => {

    return (dispatch) => {
        dispatch({
            type: 'ADD_NEW_USER',
            payload: user
        })
    }
};