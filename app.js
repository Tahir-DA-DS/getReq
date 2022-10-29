const express = require("express")
const cors = require ("cors")


const app = express()
app.use(cors())

app.get("/", cors(), (req, res) => {
  res.json({
    slackUsername: "Tahir. A",
    backend: true,
    age: 26,
    bio: "I am Tahir Adeleye a backend Intern with HNGi9 and a Mathematics Graduate .",
  })
})



    



app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Up and Running")
})