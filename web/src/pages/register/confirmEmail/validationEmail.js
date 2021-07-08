import {useParams} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {useEffect} from 'react';
import axios from 'axios';



export default function ValidationEmail() {
  
  const {idUsuario} = useParams();

  try {
  useEffect(() => {
    
      async function getUsuario(){
        var response = await axios.get(`https://server-gait.herokuapp.com/activate/${idUsuario}`);
      
      }
  
      getUsuario();
    
    
  },[])
} catch (error) {
  const { data } = error.response;
  alert(data.message);
}





  async function hundleSub(e){
    e.preventDefault()
    window.location.href= '/';
  }
  
  
  return (
    <div>

    <form>
      
      <h2 className='subtitle'>Email succcessfully validated!</h2>
      <Button onClick={hundleSub} type='submit' fullWidth  variant="contained" color="secondary">
      Continue
      </Button>
      
    </form>
</div>

  );
}