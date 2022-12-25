// const db = require('../database/db');

// module.exports = class User {

//     constructor(id, name, email, password) {
//         this.id = id;
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     save() {
//         if (this.id) {
//             return db.execute(
//                 'update User set name=?, email=?, password=? where id = ?',
//                 [this.name, this.email, this.password, this.id]
//             );
//         } else {
//             return db.execute(
//                 'insert into User(name, email , password) values(?,?,?)',
//                 [this.name, this.email, this.password]
//             );
//         }
//     }
// }