// mongod   inicia el servidor de mongoDB
// mongo    abre el shell de mongoDB

use MiPrimerDB  // con ese código crea una db pero ella no se crea hasta no insertar elementos
show dbs        // Sirve para mostrar las dbs
db              // muestra en que db estamos trabajando

db.createUser({     // crear un usuario
    user: 'DiegoV',
    pwd: '1234',
    roles: ['readWrite', 'dbAdmin']

})

db.misUsuarios.insert([  //Vamos a crear e insertar datos a una coleccion de usuarios que en SQL sería una tabla, además se crea como un array de objetos que va en [] y cada objeto se describe entre {}

    {firstName: 'Diego',LastName: 'Vivas'},
    {firstName: 'Pepito',LastName: 'Perez'}

])

db.misUsuarios.find() //muestra los objetos almacenados en la colección misUsuarios de la DB utilizada

 db.misUsuarios.find({firstName: 'Diego'}).pretty()


 db.misUsuarios.find({ //Vamos a buscar un objeto por un atributo OR otro
    $or: [{firstName: "diego"},{lastName: "Vivas"}]
    
 }).pretty()

 
 db.misUsuarios.find({ //Vamos a buscar un objeto por un atributo u otro
    $or: [{firstName: "diego"},{lastName: "Vivas"}]
    
 }).pretty()

 db.misUsuarios.find( //Vamos a buscar los objetos mayores que 
    {age: {$gt: 20} // $gt mayor que   GRATER THAN
 }).pretty()


 db.misUsuarios.find( //Vamos a buscar los objetos menores que 
    {age: {$lt: 20} // $lt menor que  LESS THAN
 }).pretty()



 db.misUsuarios.update( //Vamos a actualizar un registro, se debe pasar el primer parametro con el cual se                                  busca el registro y después se pasan TODOS los parámetros 
     {lastName: 'Perez'},
     { firstName: 'Elena',
       Genero: 'femenino'}
 )

 db.misUsuarios.update(  //Vamos a Agregar un atributo a un objeto ya creado, sin tener que agregar TODOS los                               parámetros
    {_id: ObjectId("Códhash")}, //Agregamos el ObjectId que es un código hash del registro a editar
    {$set: {age: 45}}   // con $set se agrega un atributo sin agregar los demás
 )


 db.misUsuarios.update(  //Vamos a aumentar el valor de un atributo numérico ya creado en el valor que se                               indique
    {_id: ObjectId("Códhash")}, //Agregamos el ObjectId que es un código hash del registro a editar
    {$inc: {age: 5}}   // con $inc se incrementa un dato numérico, si queremos decrementar, se pasa un valor negativo
 )

 db.misUsuarios.update( //Vamos a eliminar un atributo a un registro
    {_id: ObjectId("Códhash")}, //Agregamos el ObjectId que es un código hash del registro a editar
    {$unset: {age: 1}} // si Set era para agregar un atributo, entonces unset se utiliza para eliminar el atributo que se indica y se pone 1 para indicar que es true
 )


 db.misUsuarios.update( //Vamos a renombrar un atributo a un registro
    {_id: ObjectId("Códhash")}, //Agregamos el ObjectId que es un código hash del registro a editar
    {$rename: {"firstName": "primerNombre"}} // $rename permite renombrar el nombre del primer atributo por el segundo
 )

 db.misUsuarios.update( //Vamos a editar un objeto, pero si no lo encuentra lo agrega
    {_id: ObjectId("Códhash")}, //Agregamos el ObjectId que es un código hash del registro a editar
    {firstName: "Diego", lastName: "Betancourth"}, // añadimos los datos a editar y/o agregar
    {upsert: true}  //si no encuentra el objectId va a agregar este objeto
 )


 db.misUsuarios.remove( //Vamos a ELIMINAR un usuario que coincida con el atributo indicado, pero sólo el primero que encuentre
     {firstName: "Diego"}, //Atributo a buscar para eliminar el object
     {justOne: true}  //Atributo para que elimine sólo UN elemento, además de ser el primero que encuentre
 )

 db.misUsuarios.find


 mongod                                             | inicia el servidor de mongodb, deja el servicio corriendo                                                    |
| mongo                                             | para ejecutar comandos de mongo, habilita el shell propio de mongo                                            |
| show dbs                                          | muestra las bases de datos, (como show databases en mysql)                                                    |
| db                                                | indica la base de datos a la que se ha conectado                                                              |
| use <nombrebd>                                    | cambia la conexión actual a la bd <nombrebd>                                                                  |
| db.createUser()                                   | crea un usuario, muestra Successfully added user:<el json>                                               |
| db.clientes.insert()                              | indica que <bd actual>.<coleccion>.<haz un isnert de>() seria como: INSERT INTO clientes (...) VALUES(...)  |
| db.clientes.find()                                | SELECT * FROM clientes                                                                                        |
| db.clientes.insert([...])                         | hace un bulk insert como INSERT INTO ... VALUES (...),(...)(...);                                         |
| db.clientes.find({firstName:"Isaac"})             | SELECT * FROM clientes WHERE firstName='Isaac'                                                                |
| db.clientes.update({.condicion.},{nuevos valores})| UPDATE clientes SET nuevos valores WHERE condicion                                                            |
| db.clientes.find().pretty()                       | Muestra los datos formateados para mejor legibilidad                                                          |
| $set                                              | seria como un alter table de agregación de campo                                                              |
| $inc                                              | seria como una funcion preprogramada                                                                          |
| $unset                                            | seria como un alter table de eliminacion de campo                                                             |
| upsert                                            | Flag que indica que si no existe el registro lo inserta y si existe lo actualia                               |
| $rename                                           | alter table de un nombre de campo                                                                             |
| db.clientes.remove({condicion})                   | es como un DELETE FROM clientes WHERE <condición>                                                             |
| $or                                               | condicional OR                                                                                                |
| $regex                                            | Se podria entender como el LIKE                                                                               |
| find().sort()                                     | Es la ordenacion como hace ORDER BY, el -1 es el DESC                                                         |
| find().count()                                    | Es el COUNT(*)                                                                                                |
| find().limit(iN)                                  | Es el LIMIT                                                                                                   |
| find().forEach()                                  |                     
