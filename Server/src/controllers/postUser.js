const {User}= require("../DB_connection")

async function postUser(req, res){
const {email, password}= req.body;

if(!email || !password){
    res.status(400).send("faltan datos")
}else{
    try {
        const newUser = await User.findOrCreate({where:
            {email: email,
        password: password}
    })
        
        res.json(newUser)
    
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}



}

module.exports= postUser;