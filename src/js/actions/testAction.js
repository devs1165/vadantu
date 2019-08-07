var want_to_read = [
    {
        ID:0,
        name:'harry potter',
        auther:'some one',
        img:''
    },
    {
        ID:1,
        name:'harry potter',
        auther:'some one',
        img:''
    },
    {
        ID:2,
        name:'harry potter',
        auther:'some one',
        img:''
    },
    {
        ID:3,
        name:'harry potter',
        auther:'some one',
        img:''
    }
];
var current = [];
var read = [];

export function wantToRead(res){
    return function(dispatch){
        dispatch({
            type : "WANT",
            payload:want_to_read
        })
    }
}

export function currentRead(){
    return function(dispatch){
        dispatch({
            type : "CURRENT",
            payload:current
        })
    }
}

export function readComplete(){
    return function(dispatch){
        dispatch({
            type : "READ",
            payload:read
        })
    }
}