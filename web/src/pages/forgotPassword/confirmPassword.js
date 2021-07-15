import {useState} from 'react';
import Button from '@material-ui/core/Button';
import {useParams} from 'react-router-dom';
import Api from '../../services/api';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '60ch',
      },
    },
  }));
export default function ConfirmPassword(){

    const classes = useStyles();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');
    const {idUsuario} = useParams();
    const [loading, setLoading] = useState(false)


    async function handleSubmmit(e){
        
        const data = {
            password:password,
        }
        try {

            if(password!=='' && confirmPassword!==''){
                if(password === confirmPassword){
                   const response = await Api.put(`updatePassword/${idUsuario}`,data)
                   
                   if(response.status === 200){
                    alert('Password changed successfully!');
                    window.location.href='/'
                   }
                   
                }else{
                 alert('Invalid password!');
                }
                setLoading(false);
            }else{
                alert('Please !, fill in all the data!');
            }
            setLoading(false);
        } catch (error) {
            const { data } = error.response;
            alert(data.message);
            window.location.href='/'
        }
       
       
    }
    function loadingSubmit(){
        setLoading(true);
        setTimeout(
          () => handleSubmmit(),
          2000
        )
      }
    return (
        <form   className={classes.root} noValidate autoComplete="off">
        <br/>
        <text >Forgot Password</text>
        <br/>
        <TextField
        id="outlined-basic" 
        fullWidth label="New Password:" 
        type="password"
        onChange={e => setPassword(e.target.value)}
        variant="outlined" />
        
        <Divider variant="middle"/>
        
        <TextField
        id="outlined-basic" 
        fullWidth label="Confirm Password:" 
        type="password"
        onChange={e => setConfirm(e.target.value)}
        variant="outlined" />
        <br/>
        <div>
        
        <Button 
            fullWidth 
            variant="contained"
            onClick={loadingSubmit} 
                
            color="primary">
            {loading?<CircularProgress color="inherit" />:"Send"}
        </Button>
        </div>
        <br/>
    </form>
    );
}