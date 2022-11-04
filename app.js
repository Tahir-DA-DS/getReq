const express = require("express")
const bodyParser=require("body-parser")
const cors = require ("cors")
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get("/", cors(), (req, res) => {
  res.json({
    slackUsername: "Tahir. A",
    backend: true,
    age: 26,
    bio: "I am Tahir Adeleye a backend Intern with HNGi9 and a Mathematics Graduate .",
  })
})

app.post("/", (req, res)=>{
  let {operation_type, x, y}=req.body
  let result

  const operation ={
    addition:x+y,
     subtraction:x-y,
     multiplication:x*y,
     division:x/y
}

//addition ops
if(operation_type.includes('add')||
   operation_type.includes('sum')||
   operation_type.includes('plus')||
   operation_type.includes('and')||
   operation_type.includes('+')
){
  result=operation.addition
  operation_type="addition"
}

//subtraction ops
if(operation_type.includes('subtract')||
   operation_type.includes('minus')||
   operation_type.includes('difference')||
   operation_type.includes('less')||
   operation_type.includes('-')
){
  result=operation.subtraction
  operation_type="subtraction"
}
//multiplication ops
if(operation_type.includes('multiply')||
   operation_type.includes('times')||
   operation_type.includes('product')||
   operation_type.includes('*')
){
  result=operation.multiplication
  operation_type="multiplication"
}

//division ops
if(operation_type.includes('divide')||
   operation_type.includes('divide by')||
   operation_type.includes('by')||
   operation_type.includes('/')
){
  result=operation.division
  operation_type="division"
}

res.json({
  slackUsername: "Tahir. A",
    operation_type: operation_type,
    result: result,
})

})


    



app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Up and Running")
})