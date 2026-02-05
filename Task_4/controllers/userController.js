

let Users=[
    {
        id:1,
        name:"Abel Belete",
        email:"abelbelete@example.com",
        age:28,
    },
    {
        id:2,
        name:"Sara Ahmed",
        email:"saraahmed@example.com",
        age:20
    },
    {
        id:3,
        name:"David Tadesse",
        email:"davidtadesse@example.com",
        age:25
    }
]

// get all users
app.get('/users',(req,res)=>{
    if(Users.length===0){
        res.status(404).json({
            message:"No user Found"
        })
    }
    res.status(200).json({
       count:Users.length,
        Users,
    })
    
})

