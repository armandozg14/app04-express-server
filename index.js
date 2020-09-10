import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

const port = 5000;

app.use(bodyParser.json());//consumir cosas
app.use(cors());

let tacos = [
    {
        id: 1,
        name: 'de asada',
        quantity: 5,
        pica: 'no'
    },
    {
        id: 2,
        name: 'al pastor',
        quantity: 4,
        pica: 'si'
    },
    {
        id: 3,
        name: 'cabeza',
        quantity: 6,
        pica: 'no'
    }
];

//Metodo GET o Obtener READ
app.get('/', (request, response) =>
{
    response.send(tacos);
});

app.get('/:id', (request, response) =>
{
    const {id} = request.params; //estos son los parametros
    const taco = tacos.find(taco => taco.id == id);//en este taco => me vas a devolver como resultado cuando el id de ese taco sea igual como el que meti
    response.send(taco);
});

//agregar taco CREATE
app.post('/', (request, response) =>
{
    const taco = request.body;
    const {name, quantity, pica} = request.body;
    taco.id = tacos.length + 1;
    tacos.push(taco);
    response.send(taco);
});

//el put actualiza cosas UPDATE
app.put('/:id', (request, response) =>
{
    //buscamos lo que se va actualizar
    const {id} = request.params;
    const taco = tacos.find(taco => taco.id == id);
    //pides los cambios al body
    const {name, quantity, pica} = request.body;
    //aplicar los cambios
    taco.name = name;
    taco.quantity = quantity;
    taco.pica = pica;
    //mostrar los cambios
    response.send(taco);
});

//Borra DELETE
app.delete ('/:id', (request, response)=>
{
    const {id} = request.params;
    tacos = tacos.filter(taco=> taco.id !=id);
    response.send(tacos);
});

app.listen(port, ()=> console.log(`Server started at: http://localhost:${port}`));