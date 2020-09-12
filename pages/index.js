import React,{Component} from 'react';
import Link from 'next/link';
import Router from 'next/router';

class AuthIndexPage extends Component {
    state = {
        searching:{
            value:'',
        },
    }
    onInputHandler = (event) =>{
        const search = {
            ...this.state.searching,
            value : event.target.value
        }
        
        this.setState({
            searching:search
        })
        console.log(this.state.searching);

    };
    render(){
       

        return (
            <div>
        <h1>This is main page</h1>    
        <input  value={this.state.searching.value} type="text" onChange={(event) => this.onInputHandler(event)}/>
        <button onClick={()=>Router.push('/'+this.state.searching.value)}>Search</button>
    
    </div>
        )
    };
};

export default AuthIndexPage;