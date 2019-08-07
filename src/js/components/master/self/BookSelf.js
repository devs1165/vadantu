import React from 'react'
import './bookself.css'
import Bimg from '../../section/img/dear-senator.jpg'
import {wantToRead,currentRead,readComplete} from '../../../actions/testAction'
import connect from 'redux-connect-decorator';
@connect((store) => {
    return {
        want : store.test.want
    }
})

export default class BookSelf extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pop:false,
            data:[
                {
                    img:Bimg,
                    name:'harry potter',
                    auther:'harry'
                }
            ],
            option:[
                {name:'Currently Reading'},
                {name:'Want to Read'},
                {name:'Read'},
                {name:'none'}
            ]
        }
    }
    componentWillReceiveProps(nextProps) {
        // if()
    }
    handleOptionDropDown(){
        if(this.state.pop){
            this.setState({
                pop:false
            })
        }
        else{
            this.setState({
                pop:true
            })
        }
    }
    handleChangeGroup(v){
        if(v.name === 'Currently Reading' ){
            
        }
        else if(v.name === 'Want to Read' ){

        }
        else if(v.name === 'Read'){

        }
        else{

        }
    }

    render(){
        console.log(this.props.data)
        return(
            <div className='col-3 pt-4'>
                <div className='book-cover-wrapper p-3'>
                    <div className='img-and-tip-container'>
                        <img src={Bimg} alt="" className='fluid-img img-book-cover'/>
                        <div className='drop-down-tip' onClick={this.handleOptionDropDown.bind(this)}><i className='fa fa-caret-down py-3'></i></div>
                        {
                            (this.state.pop)?
                                <div className='pop-drop-container'>
                                    <div className='p-2 drop-popup-move'>Move to...</div>
                                    {
                                        this.state.option.map((v,i)=>{
                                            return(
                                                <div key={'ind_'+i} className='p-2 drop-popup-element' onClick={this.handleChangeGroup.bind(this,v)}>{v.name}</div>
                                            )
                                        })
                                    }
                                </div>
                            :null
                        }
                    </div>
                    <div className='book-name-container pt-3'>Dear Sanator</div>
                    <div className='book-auther-container'>Danie Martin</div>
                </div>
            </div>
        )
    }
}