const bcrypt = require('bcrypt');
const {MD5} = require('crypto-js');
const jwt = require('jsonwebtoken');

// bcrypt.genSalt(10,(err,salt)=>{
//     // console.log(salt);
//     if(err) return next(err);

//     bcrypt.hash('password123',salt,(err,hash) => {
//         if(err) return next(err);

//         console.log(hash);
//     });
// })

//HOW IT ALL WORKS (jwts)
// const secret = 'mySecretPassword';
// const secretSalt = 'asdfrwesiorjnfore'

// const user = {
//     id:1,
//     token: MD5('SDFKLJSFJIOEWF').toString() + secretSalt
// }

// const receviedToken = '2c62eb0c380f3fcf5759d01bfd1da628asdfrwesiorjnfore';

// if(receviedToken === user.token) {
//     console.log('good to move forward');
// }

// console.log(user);

//ACtual jwts
const id = '1000' //some user id
const secret = 'supersecret' // some secret that you create

const receivedToken = 'eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y'


const token = jwt.sign(id, secret); //encodes
const decodeToken = jwt.verify(receivedToken, secret); //decodes
console.log(decodeToken) //expected result is '1000' (the user)