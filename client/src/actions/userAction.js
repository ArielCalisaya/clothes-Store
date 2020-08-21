const signin = (email, password) => (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}})
    
    try {
        const {data} = await axios.post("/api/users/signin", {email, password})
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data))
    } catch (error) {
        
    }
}