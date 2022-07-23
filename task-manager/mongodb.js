// Crud create read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectId();
// console.log(id);
// console.log(id.id);
// console.log(id.id.length);
// console.log(id.toHexString());
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connet to database!')
    }
    const db = client.db(databaseName);

    db.collection('tasks').deleteOne({
        description: "Watch El classico in the morning"
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

    // db.collection('users').deleteMany({
    //     age: 40
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // })

    // db.collection('tasks').updateMany({compelted: false}, {
    //     $set: {
    //         compelted: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    // db.collection('users').updateOne({
    //     _id: new ObjectId("62dbff7b596118ebec59fb61")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').findOne({_id: new ObjectId("62dc052176bcd94ca99af20b")}, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch.');
    //     }
    //     if (!task) {
    //         return console.log('No such task in database.');
    //     }

    //     console.log(task);
    // })


    // db.collection('tasks').find({compelted: false}).toArray((error, tasks) => {
    //     if (error) {
    //         return console.log('Unabel to fetch.');
    //     }
    //     if (!tasks) {
    //         return console.log('Could not find a matching task.')
    //     }
        
    //     console.log(tasks)
    // })

    // db.collection('users').find({age: 40}).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({age: 40}).count((error, count) => {
    //     console.log(count);
    // })

    // db.collection('users').findOne({_id: new ObjectId("62dc15d7272c1c5fa4c99855")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch.');
    //     }
    //     if (!user) {
    //         return console.log('Unable to find user');
    //     }
    //     console.log(user);
    // })
    // db.collection('users').findOne({age : 1}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch.');
    //     }
    //     if (!user) {
    //         return console.log('Unable to find user');
    //     }
    //     console.log(user);
    // })
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Samson',
    //     age: 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }  

    //     console.log(result.insertedId);
    // });
//     db.collection('users').insertMany([{
//         name: 'Jen',
//         age: 28
//     }, {
//         name: 'Gunther',
//         age: 27
//     }], (error, result) => {
//         if (error) {
//             return console.log('Unable to insert documents');
//         }
        
//         console.log(result);
//     })

        // db.collection('tasks').insertMany([{
        //     description: 'Complete MongoDB session',
        //     compelted: false
        // }, {
        //     description: 'Watch El classico in the morning',
        //     compelted: false
        // }, {
        //     description: 'Complete Weather App',
        //     compelted: true
        // }], (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert documents');
        //     }

        //     console.log(result);
        // })

});

