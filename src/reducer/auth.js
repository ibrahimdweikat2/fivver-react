
const auth=(state={user:[{id:1,username:'ibrahim',password:'123456',isSeller:false}]},action)=>{
    switch(action.type){
        case 'LOGIN':
        return {
            ...state,
            user:state?.user.filter(user=>user.username == action?.payload?.username)
        };
        default:
        return state;
    }
}

export default auth;