// const http= require('http');
// const server=http.createServer((req,res)=>{
    
// })
// server.listen(4000,()=>{
//     console.log('Server is running on port 4000');
// })


const express = require('express');
const app = express();

app.use(express.json());

let students = [];
let nextId = 1;

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    const newStudent = { id: nextId++, name };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.put('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const { name } = req.body;

    const student = students.find(s => s.id === studentId);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = name || student.name;
    res.json(student);
});

app.delete('/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === studentId);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    students.splice(index, 1);
    res.json({ message: "Student deleted successfully" });
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
