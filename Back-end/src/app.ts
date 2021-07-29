import express from "express";
import {Request, Response} from "express";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import cors from "cors";
import './database'
import createExam from "./routes/createExam"
import createUser from "./routes/createUser"


// create typeorm connection
// createConnection().then(connection => {
//     const userRepository = connection.getRepository(User);

//     // create and setup express app
//     const app = express();
//     app.use(express.json());
//     app.use(cors());
//     // register routes

//     // app.get("/users", async function(req: Request, res: Response) {
//     //     const doctorUser = await userRepository.find();
//     //     res.json(doctorUser);
//     // });

//     app.get("/users/:id", async function(req: Request, res: Response) {
//         const results = await userRepository.findOne(req.params.id);
//         return res.send(results);
//     });

//     app.get("/users/:id", async function(req: Request, res: Response) {
//         const results = await userRepository.findOne(req.params.id);
//         return res.send(results);
//     });

//     app.post("/users", async function(req: Request, res: Response) {
//         const {
//             name,
//             examDate,
//             examDuration,
//             examDescription
//         } = req.body;

//         var regexDate = new RegExp("^([0-9]{2})(\/)([0-9]{2})(\/)([0-9]{4})$")
//         var validateName =  /\s\s/g.test(name);

//         if(examDescription.length > 320){
//             return res.status(404).json({message: "Invalid description"})

//         }

//         if(validateName || name.length > 50){
//             return res.status(404).json({message: "Invalid name"})
//         }
//         // else{
//         //     return res.status(200).json({message: "Valid name"})

//         // }

//         // if(parseInt(examDuration) % 5 != 0 || parseInt(examDuration) == 0){
//         //      return res.status(404).json({message: "Invalid duration exam"})   
//         // }

//         // if(!regexDate.test(examDate)){
//         //     return res.status(404).json({message: "Invalid date format"})
//         // }
//         // else{
//         //     return res.status(200).json({message: "Valid date format"})
//         // }

//         if(!regexDate.test(examDate)){
//             return res.status(404).json({message: "Invalid date format"})

//         }
//         // else{
//         //     return res.status(200).json({message: "Valid date format"})
//         // }



//         console.log(name);


//         const user = await userRepository.create(req.body);
//         const results = await userRepository.save(user);
//         return res.send(results);
//     });

//     // app.put("/doctorUser/:id", async function(req: Request, res: Response) {
//     //     const user = await userRepository.findOne(req.params.id);
//     //     userRepository.merge(user, req.body);
//     //     const results = await userRepository.save(user);
//     //     return res.send(results);
//     // });

//     app.delete("/users/:id", async function(req: Request, res: Response) {
//         const results = await userRepository.delete(req.params.id);
//         return res.send(results);
//     });

    // start express server
// });

const app = express();

const Cors = require('cors');
app.use(express.json());
app.use(Cors());
app.use(createExam)
app.use(createUser)

app.listen(3030);
