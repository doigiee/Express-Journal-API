import express from 'express'

const categories = ['Food', 'Coding', 'Work', 'Other']

const app = express()
const port = 8080

app.use(express.json())

app.get('/categories', (req, res) => res.status(200).send(categories))
const entries = [
    {category: 'Food', content: 'Hello!'},
    {category: 'Coding', content: 'Express is cool'},
    {category: 'Work', content: 'Anphter day at the office'}
]

app.get('/entries', (req, res) => res.status(204).send(entries))
app.post('/entries', (req, res) => {
console.log(req.body.foo)
res.send(req.body)
})

app.get('/', (request, response) => response.send({ info: 'Journal API' }))

app.listen(port, () => console.log(`App running at http://localhost:${port}/`))
