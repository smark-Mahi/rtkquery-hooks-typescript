export const INITIAL_STATE={
    avatar:' "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/665.jpg"',
    country:'',
    name:'',
    fav_color:''
}

export const formReducer=(state,action)=>{
    switch(action.type){
        case 'CHANGE_NAME':
            return{
                ...state,
                [action.payload.name]:action.payload.value
            };
        case 'success':
            return{
                ...state,
                name:'',
                country:'',
                fav_color:''
            }
        default:
            return state
    }
}