// const input = process.openStdin();
// input.addListener("data",function(value){
//     console.log(value.toString());
// });

const fs = require('fs');
const express = require('express');

const router = express.Router();
const app = express();
app.use(express.json());
router.get('/users/', (request, response) => {
    const userId = request.query['user-id'];
    const userName = request.query['user-name'];
        
    return response.json({
        message: `hello world ${userId} ${userName}`,
    })

});

router.post('/users/', (request, response) => {
    
    // passo 1 - receber os dados do body

    const { userId, userName, userLastName } = request.body;

    // const userLastName = request.body.userLastName é o mesmo que { userId } = request.body.userId
    // usado da primeira forma pois tem o mesmo nome de variável
    
    // passo 2 - tratar os dados

    if (!userId){
        return response.status(400).json({message: 'userId é requerido'});
    }
    if (!userName){
        return response.status(400).json({message: 'userName é requerido'});
    }
    if (!userLastName){
        return response.status(400).json({message: 'userLastName é requerido'});
    }

    // passo 3 - processar 

    fs.appendFileSync('users.txt', `${userId}, ${userName}, ${userLastName} \n`);

    // passo 4 - devolver resposta

    return response.status(201).json({message: 'Criado com sucesso'});
    
})

app.use(router);
app.listen("3000");