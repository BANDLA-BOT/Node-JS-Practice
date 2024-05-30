const express = require ('express');
const fs = require('fs')
const users = require('./MOCK_DATA (1).json')

const app = express()

const PORT = 8000

//Middlewares
app.use(express.urlencoded({ extended : false}))
//Routes
app.get('/api/users', (req,res)=>{
    return res.json(users)
})
app.get('/users', (req, res)=>{
    const html = `
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join('')}
    </ul>
    `
    res.send(html)
})
app.post('/api/users', (req,res)=>{
    const body = req.body;
    users.push({...body, id: users.length+1})
    fs.writeFile('./MOCK_DATA (1).json', JSON.stringify(users), (err,data)=>{
       return res.json({status: " pending"})
    })
    console.log(body)
})


app.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user)
})
.patch((req,res)=>{
    


    res.json({status: " pending"})
})

.delete((req,res)=>{
  const body = req.body
  console.log(body)
  const user = users.find((user)=>{ return user.id === body.id})
  users.pop(user)
    res.json({status: " success"})
})




//Server started on 8000
app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})