const express = require('express')
const app = express()
const port = 3333

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'API do curso Ninja do Cypress!' })
})

app.post('/api/users/register', (req, res) => {
  // Lógica para registrar um usuário
  console.log(req.body)
  return res.status(201).json({mensagem: 'Usuário cadastrado com sucesso!'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
