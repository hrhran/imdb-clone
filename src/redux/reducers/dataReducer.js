// const initial = {
//     results: [
//         {
//             id: 21,
//             name: 'Game of Thrones',
//             description: 'blah bolachacacj aahaihfkashckce',
//             backdrop_path: "http://unsplash.it/400/200?gravity=center",
//             liked: 0.95,      
//         },
        
//     ]
// }


const dataReducer = (state={}, action) => {
    switch(action.type){
        case "GET_MOVIES":
            return action.payload;
        default:
            return state;
    }
}

export default dataReducer