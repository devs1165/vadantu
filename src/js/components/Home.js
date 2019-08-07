import React from 'react'
import Bookself from './master/self/BookSelf'
import {wantToRead,currentRead,readComplete} from '../actions/testAction'
import connect from 'redux-connect-decorator';
@connect((store) => {
    return {
        want : store.test.want
    }
})
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            books:[]
        }
    }
    componentDidMount() {
        this.props.dispatch(wantToRead())
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.want !== nextProps.want){
            this.setState({
                books:nextProps.want
            })
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.books.map((v,i)=>{
                        return(
                            <Bookself
                                key={'key_'+i}
                                data = {v}
                            />
                        )
                    })
                }
            </div>
        )
    }
}