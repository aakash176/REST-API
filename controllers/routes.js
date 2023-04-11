const tasks = []
const uid = require('uuid4')


const getAllTask = (req,res) => {
    res.json(tasks)
}
    
const getTaskById = (req,res) => {
    const id = req.params
    tasks.forEach((element) => {
        if(element.id == id){
            res.send(element)
        }
    })
    res.send(`No task with id ${id}`)
}

const createTask = (req,res) => {
    const id = uid()
    const data = req.body
    tasks.push({...data, id})
    res.send('Task added sucessfully')
}

const deleteTask = (req,res) => {
    const id = req.params
    const index = tasks.findIndex((item) => item.id === id)
    tasks.splice(index, 1)
    res.send("Task deleted")
}

module.exports = {getAllTask, getTaskById, deleteTask, createTask}