import {useParams} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import axios from 'axios';



export default function ValidationEmail() {
  
  const {idUsuario} = useParams();

  async function hundleSub(e){
    e.preventDefault()
    
    try {

      await axios.post(`https://server-gait.herokuapp.com/activate/${idUsuario}`,)
      .then(response =>{
        if(response.status === 200){
          alert('Email successfully validated');
          window.location.href= '/';
        }
      })
    } catch (error) {
      const { data } = error.response;
      alert(data.message);
      window.location.href= '/';
    }
      
      
    
  }
  
  
  return (
    <form>
      <h2 className='subtitle'>CONFIRM REGISTRATION</h2>
      <Button onClick={hundleSub} type='submit' fullWidth  variant="contained" color="secondary">
      Continue
      </Button>
      
    </form>

  );
}