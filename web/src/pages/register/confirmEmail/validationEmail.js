import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';



export default function ValidationEmail() {
  

  const {idUsuario} = useParams();
  try {
  useEffect(() => {
    
      async function getUsuario(){
        var response = await axios.get(`http://localhost:8081/activate/${idUsuario}`);
       if(response.status === 200){
        alert(response.data.message);
       }else{
        alert(response.data.message);
       }
        
       console.log(response.data.message)
      }
  
      getUsuario();
    
    
  },[])
} catch (error) {
  const { data } = error.response;
  alert(data.message);
}
  function hundleSub(e){
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