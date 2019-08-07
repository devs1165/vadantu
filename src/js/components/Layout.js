import React from 'react';
// import connect from 'redux-connect-decorator';
// import {wantToRead,currentRead,readComplete} from '../actions/testAction'
import NestedRouter from './master/NestedRouter/NestedRouter'; 


export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }


    render(){
        return(
            <React.Fragment>
                <div>
                    <NestedRouter routes = {this.props.routes} />
                </div>
            </React.Fragment>
        )
    }
}