export default function reducer(state = {
    want : [],
    read:[],
    current:[]
}, action){
    switch(action.type){
        case "WANT" : {
            return { ...state, want : action.payload }
        }
        case "READ" : {
            return { ...state, read : action.payload }
        }
        case "CURRENT" : {
            return { ...state, current : action.payload }
        }
        default : {}
    }

    return state;
}