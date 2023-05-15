

export const login=({username,password})=>dispatch=>{
    dispatch({type:'LOGIN',payload:{username,password}});
}