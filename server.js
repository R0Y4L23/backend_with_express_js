//jshint esversion:6
const express = require('express')
const app = express()
const port = 5000



app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.send(`Hello World!<br><a href="http://localhost:5000/Home">Head to Home</a><br><a href="http://localhost:5000/About">Head to About</a><br><a href="http://localhost:5000/calculator">Head to Calculator</a><br><a href="http://localhost:5000/bmicalculator">Head to BMI Calculator</a><br><a href="http://localhost:5000/Contact">Head to Contact</a>`)
})
app.get('/Home', (req, res) => {
    res.send(`<h1>This is the home page</h1>`)
  })
  app.get('/calculator',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
  })
  app.post('/calculator',(req,res)=>{
    var sum=Number(req.body.n1)+Number(req.body.n2)
    res.send("Thank you for sending. Your answer is "+sum)
  })
  app.get('/bmicalculator',(req,res)=>{
    res.sendFile(__dirname+"/bmi.html");
  })
  app.post('/bmicalculator',(req,res)=>{
    var bmi=Number(req.body.w)/(Number(req.body.h)**2)
    res.send("Thank you for sending. Your answer is "+bmi)
  })
  app.get('/About', (req, res) => {
    res.send('<strong>This is About page</strong><br><a href="https://www.google.com">Head to Google</a>')
  })
  app.get('/Contact', (req, res) => {
    res.send('Phone : 1234567890 <br>Email : test@test.com')
  })

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})