import axios from 'axios'

const baseUrl = 'https://todoapp-backend-69ju.onrender.com'

const getalltodo = (settodo) =>{

    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data:', data)
        settodo(data)
    })
}

const addtodo = (text, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getalltodo(setToDo)
        })
        .catch((err) => console.log(err))

}


const updatetodo = (todoid,text, setText, setToDo, setisupdate) => {

    axios
        .post(`${baseUrl}/update`, {_id:todoid, text})
        .then((data) => {
            setText("")
            setisupdate(false)
            getalltodo(setToDo)
        })
        .catch((err) => console.log(err))

}


const deletetodo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, {_id})
        .then((data) => {
            console.log(data)
            getalltodo(setToDo)
        })
        .catch((err) => console.log(err))

}
export {getalltodo, addtodo, deletetodo, updatetodo}