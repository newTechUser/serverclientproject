const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")


const app=express()

const PORT=4000

let products=[
    {id:1,name:"book",price:"12$",count:233},
    {id:2,name:"pencil",price:"24$",count:234},
    {id:3,name:"notebook",price:"324$",count:12},
    {id:4,name:"bag",price:"234$",count:356},
    {id:5,name:"pen",price:"32$",count:856},
]

let idCounter=products.length+1

app.use(cors())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
res.send("<h1>Products</h1>")
})

app.get("/products",(req,res)=>{
    res.send(products)
})


app.get("/products/:id",(req,res)=>{
    const id=req.params.id

    const selectproductst=products.find(x=>x.id==id)

    if(selectproductst){
        res.send(selectproductst)
        res.status(200).json({message:"USer var"})
    }else{
        res.status(404).json({message:"User yoxdur"})
     
    }
})


app.delete("/products/:id",(req,res)=>{
    const id=req.params.id
    products=products.filter(x=>x.id!=id)
    res.status(200).json({message:"deleted"})
})

app.post("/products",(req,res)=>{
    const productsObj={
        id:idCounter++,
        name:req.body.name,
        price:req.body.price,
        count:req.body.count
    }
    products.push(productsObj)
    res.send(products)
})

app.put("/products/:id",(req,res)=>{
    const {id}=req.params
    products=products.filter(x=>x.id!=id)


    const updateUser={
        id:id,
        name:req.body.name,
        price:req.body.price,
        count:req.body.count
    }
    products.push(updateUser)
    products.sort((a,b)=>a.id-b.id)
    res.send(products)
})



app.listen(PORT,()=>{
    console.log("Server running");
})

