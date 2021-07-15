import React from 'react';
import Botao from './botao';
import Api from '../../../services/api';

export default class Clock extends React.Component {

    constructor (){
        super();
        this.state={
          contador:60,
          email:'',
          estado:"Confirm email",
          disabled:true
          
        }
        
        this.handleContadorplus= this.handleContadorplus.bind(this);
        this.handleContadorminus= this.handleContadorminus.bind(this);
        this.aumentar= this.aumentar.bind(this);
      }
    
      
      async handleContadorplus(e){
       
        try {
          const emailExists =  sessionStorage.getItem('forgotPassword');
         
          const data = {
            email:emailExists
          }
          console.log(">>>>>>>>>>>emailExiste", data)
          await Api.post('emailUpdate', data)
          //await Api.post('sendToken',data)
          .then(resp =>{
           if(resp.status === 200){
            alert("We send an email with the password reset link to the registered email, access your email to change the password!")
            //alert('Confirmation link sent successfully',emailExists);
           }
          })
          } catch (error) {
          const { data } = error.response;
          alert(data.message);
          }
        
        if (this.state.estado==="Confirm email"){
          this.setState({
            estado: 'Loadind...',
            disabled:false
          });
          this._interval=setInterval(this.aumentar,1000);
          }
        
         
      }
    
       aumentar(e){
        
        if(this.state.estado==='Loadind...'){
          this.setState({
            contador: this.state.contador-1,
            
          });
          
          
          
          if(this.state.contador === 0){         
            window.location.href= '/forgotPass';
        }
        }
      }
      async handleContadorminus(){
        
        const emailExists =  sessionStorage.getItem('forgotPassword');
        try {
          const da = {
            email: emailExists
          }
          console.log(">>>>>>>>>>>",emailExists)
          await Api.post('emailUpdate', da)
          .then(response =>{
            if(response.status === 200){
              alert('Your link has been resent');
              window.location.href= '/';
              sessionStorage.clear();
            }
          })
        } catch (error) {
          const { data } = error.response;
          alert(data.message);
        }
        
      }
      close(){
        window.location.href= '/';
        sessionStorage.clear()
       
      }
      render() {
        
        return (
          <div className=" text-center">
    
            <h1>{this.state.contador}</h1>
            <Botao text={this.state.estado} disabled={!this.state.disabled}  onClick={this.handleContadorplus}/>
            <Botao text={'Resend'} disabled={!this.state.disabled}  onClick={this.handleContadorminus} /> 
            <Botao text="Close"   onClick={this.close}/> 
          </div>
        );
      }
    }