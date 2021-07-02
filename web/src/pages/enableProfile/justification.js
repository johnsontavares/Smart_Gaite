import { useState} from "react";
import Api from "../../services/api";
import {useParams} from 'react-router-dom';
import "./enableprofile.css";
import Button from "../../components/utils/button/button";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  
export default function Justification(){
    const classes = useStyles();
   
   const [description, setDescription] = useState('');
   const [checked, setChecked] = useState('');
   const {idUsuario} = useParams();

   var name = [];
     

    async function handleSub(e){

    e.preventDefault()
        

        const config = {
            headers:{
                Authorization:localStorage.getItem('token')
        }

    }
        try {
           
           
            var listaMarcados = document.getElementsByTagName("INPUT");
            for (var loop = 0; loop < listaMarcados.length; loop++) {
                var item = listaMarcados[loop];
                if (item.type == "checkbox" && item.checked) {
                    
                        console.log(item.value+',');
                        name[loop] = item.value;
                       }
                    
                }
                
                const res =  await Api.post('justification',{name, description}, config)
                console.log("res>>>>>>", res.data);
                
                window.location.href=`/enableProfile/${idUsuario}`
            
       //{/window.confirm("Tem certeza?");/}
                
                
             
            
        
        
        } catch (error) {
        const { data } = error.response;
        alert(data.message);
        }
       
   }
   function textChange(e){
  
    setChecked({input: e.target.checked})
  }


    return(
        <div>
            <div><a href="/home"><img src="https://i.imgur.com/tDvwyyA.png" className = {'logo'} title="Smart Palm"/></a></div><br></br><br></br>
            <form className={"form"} >
            <text className={"subtitle"}>Justifique sua saída:</text>
                <br></br><br></br>
                <label className={"container"}>Não usarei mais a plataforma
                <input type = "checkbox" id="1"  value="Eu Não usarei mais a plataforma"></input>
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                <label className={"container"}>Não atendeu as minhas necessidades
                <input type = "checkbox" id="item2" value="Não atendeu as minhas necessidades"></input>
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                <label className={"container"}>Achei a plataforma confusa ou difícil
                <input type = "checkbox" id="item3" value="Achei a plataforma confusa ou difícil"></input>
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                <label className={"container"}>Simplesmente não gostei da plataforma
                <input type = "checkbox" id="item4" value="Simplesmente não gostei da plataforma"></input>
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                <label className={"container"}>Não consegui utilizar as funcionalidades
                <input type = "checkbox" id="item5" value="Não consegui utilizar as funcionalidades"></input>
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                <label className={"container"}>Outros motivos:
                <input type="checkbox" id="outros" onChange={textChange.bind(this)} value="Outros motivos"  ></input>
            
                <span className={"checkmark"}></span>
                </label><br></br><br></br>
                
                <textarea className={'textarea'} id="estado" disabled={!checked.input} onChange={e => setDescription(e.target.value)}   placeholder="Insira sua justificativa"></textarea>
                <div>
                 <br></br>
                <Button onClick={handleSub}>submit</Button>
                </div>
            </form>
        </div>
    )
}