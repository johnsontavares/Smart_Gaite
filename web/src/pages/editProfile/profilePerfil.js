import {useParams} from 'react-router-dom';
import {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Api from '../../services/api';
import Button from '../../components/utils/button/button';
import '../editProfile/editprofile.css';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from "../../components/utils/regex/input";



const useStyles = makeStyles((theme) => ({
    root: {display: 'flex',},
    title: {flexGrow: 1,},
    appBarSpacer: theme.mixins.toolbar,
    content: {flexGrow: 1,height: '100vh',overflow: 'auto',},
    container: {paddingTop: theme.spacing(2),paddingBottom: theme.spacing(4),},
    paper: {padding: 35,display: 'flex',overflow: 'auto',flexDirection: 'column',},
    formControl:{width:'100%'},
    btnSuccess:{ backgroundColor:"green",color:"#fff","&:hover":{backgroundColor:"#12b912"}}
  }));
export default function ProfilePerfil() {
    const classes = useStyles();

    const [specialization, setSpecialization] =  useState('');
    const [phone, setPhone] =  useState('');
    const [phone2, setPhone2] =  useState('');
    const {idUsuario} = useParams();
    
    

async function handleSubmit(e){
    e.preventDefault();
    const data = {
        specialization:specialization,
        phone:phone,
        phone2: phone2
      }


    const config = {
        headers:{
            Authorization:localStorage.getItem('token')
    }
    
}
try {
    if(specialization!==''&&phone!==''){
        const response = await Api.put(`updateUser/${idUsuario}`,data, config);

        if(response.status===200){
          alert('Profile edited successfully')
          window.location.href='/viewProfile'
        }else{
          alert('Error updating user!');
        }
      }else{
        alert('fill in the data!');
      }
} catch (error) {
    const { data } = error.response;
    alert(data.message);
}

}

    return(
            <div>
               <div><a href="/home"><img src="https://i.imgur.com/tDvwyyA.png" className = {'logo'} title="Smart Palm"/></a></div>
                    <br></br>
                    <br></br>
                    <form>
                    <text className = {'title'}>Edit profile</text>
                    <br/>
                    <br></br>
                    <FormControl className={classes.formControl}>
                        <br/>
                    <InputLabel id="labelTipo">Specialization</InputLabel>
                    <Select
                      labelId="labelTipo"
                      id="tipo"
                      value={specialization}
                      onChange={e => setSpecialization(e.target.value)}
                    >
                      <MenuItem value={"Cardiologia"}>Cardiologia</MenuItem>
                      <MenuItem value={"Dermatologia"}>Dermatologia</MenuItem>
                      <MenuItem value={"Ginecologia"}>Ginecologia e Obstetrícia</MenuItem>
                      <MenuItem value={"Ortopedia"}>Ortopedia</MenuItem>
                      <MenuItem value={"Anestesiologia"}>Anestesiologia</MenuItem>
                      <MenuItem value={"Pediatria"}>Pediatria</MenuItem>
                      <MenuItem value={"Oftalmologia"}>Oftalmologia</MenuItem>
                      <MenuItem value={"Psiquiatria"}>Psiquiatria</MenuItem>
                      <MenuItem value={"Urologia"}>Urologia</MenuItem>
                      <MenuItem value={"Oncologia"}>Oncologia</MenuItem>
                      <MenuItem value={"Endocrinologia"}>Endocrinologia</MenuItem>
                      <MenuItem value={"Neurologia"}>Neurologia</MenuItem>
                      <MenuItem value={"Hematologia"}>Hematologia</MenuItem>
                      <MenuItem value={"CirurgiaPlástica"}>Cirurgia Plástica</MenuItem>
                    </Select>
                    </FormControl>
                    
                    <br></br>
                    
                    <div className={"question"}>
                         <Input mask="telefone" placeholder="phone" id="phone" name="phone" type="text" required
                            onChange={e => setPhone(e.target.value)}
                        />
                        </div>
                        <br></br>
                        <div className={"question"}>
                         <Input mask="telefone"  placeholder="phone2" id="phone2" name="phone2" type="text" required
                            onChange={e => setPhone2(e.target.value)}
                        />
                            
                       
        
                        </div>
                        <br></br>
                        <Button onClick={handleSubmit}  buttonSize='btn--large'  type="submit">To edit</Button>
                
                    </form>
                    
            </div>
        )
}