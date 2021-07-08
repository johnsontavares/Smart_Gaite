import Api from "../../services/api";
import  { Component } from 'react';

export default class Home extends Component {

    state = {};

     componentDidMount(){
        const config = {
            headers:{
                Authorization:localStorage.getItem('token')
        }
        
    }
    Api.get('showProfile',config).then(
        res =>{
            this.setState({
                userDoctor:res.data
            })
        },
        err =>{
            console.log(">>>>>erro home>>>>>>>>>>>",err);
        }
    )
    };

    signUp(){
        localStorage.clear();
        window.location.href='/'
    }
    
    render() {

        if(this.state.userDoctor){
            return(
               
          
   
                <div>
                    
                <h1>Olá <h2>{this.state.userDoctor.name}</h2></h1>
                <h2>Opções: </h2>
                <button type="button"  onClick={this.signUp} >Sair</button>
                <h1> <a  href="/viewProfile">VIEW PROFILE</a> </h1>
                
                </div>                  
            )
        }
        return (
            <div>
             <h2>No logado</h2>
              
            </div>
            
        )
    }
}