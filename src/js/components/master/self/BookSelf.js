import React from 'react'
import './bookself.css'
import Bimg from '../../section/img/dear-senator.jpg'
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
            ]
        }
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

    render(){
        return(
            <div className='col-3'>
                <div className='book-cover-wrapper p-3'>
                    <div className='img-and-tip-container'>
                        <img src={Bimg} alt="" className='fluid-img img-book-cover'/>
                        <div className='drop-down-tip' onClick={this.handleOptionDropDown.bind(this)}><i className='fa fa-caret-down py-3'></i></div>
                        {
                            (this.state.pop)?
                        <div className='pop-drop-container'>
                            <div className=''>abc</div>
                            <div>123</div>
                            <div>abc123</div>
                        </div>:null
                        }
                    </div>
                    <div className='book-name-container pt-3'>Dear Sanator</div>
                    <div className='book-auther-container'>Danie Martin</div>
                </div>
            </div>
        )
    }
}