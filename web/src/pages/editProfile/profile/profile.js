import { Component} from 'react';
import Api from '../../../services/api';
import { Link } from 'react-router-dom'
import './profile.css';
import Button from '../../../components/utils/button/button';


export default class Profile extends Component{

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
            <div><a href="/home"><img src="https://i.imgur.com/tDvwyyA.png" className = {'logo'} title="Smart Palm"/></a></div>
            <br></br><br></br><br></br><br></br><br></br><br></br>
            <form>
                <div><img src = 'https://i.imgur.com/r5SArNh.png' className={"icon"}/></div>
                <h1 className={"title"}>Meu Perfil</h1>
                <br></br><br></br>
                    <table>
                        <tr>
                        <th>NOME </th><br></br>
                        <th>E-MAIL </th><br></br>
                        <th>ESPECIALIZAÇÃO </th><br></br>
                        <th>TELEFONE </th><br></br>
                    </tr>
                    {/* const number = this.state.userDoctor.phone */}
                        <tr>
                        <td>{this.state.userDoctor.name}</td><br></br>
                        <td>{this.state.userDoctor.email}</td><br></br>
                        <td>{this.state.userDoctor.specialization}</td><br></br>
                        <td>{this.state.userDoctor.phone.replace(/^(\d\d)(\d)/g,"($1)$2").replace(/(\d{4})(\d)/,"$1-$2")} </td><br></br>
                        </tr>
                    </table>
                    <br></br>
                        <Link to ={`/profilePerfil/${this.state.userDoctor.id}`}><Button buttonSize='btn--small' type="submit">Editar</Button></Link>
                        <br></br>
                        <br></br>
                        <br></br>
                        <Link to ={`/justification/${this.state.userDoctor.id}`}><Button buttonSize='btn--small' type="submit">inativar Perfil</Button></Link>
                </form>
                </div>      
            )
        }
        return (
            <div>
             
            
           
            
            </div>
            
        )
    }
}