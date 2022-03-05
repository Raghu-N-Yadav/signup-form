let userData = []

const addUser = ({ name, password, email, age }) => {
    let obj = {}
    obj['name'] = name
    obj['password'] = password
    obj['email'] = email
    obj['age'] = age
    userData.push(obj)
    return true
}

const findUser = (user, pass) => {
    return userData.find(obj => obj.name === user && obj.password === pass)
    // return true
}



// let obj = {
//     name: "raghu",
//     password: '123',
//     email: 'raghu@',
//     age: '23'
// }
// addUser(obj)
// console.log(userData)
module.exports = { addUser, findUser }