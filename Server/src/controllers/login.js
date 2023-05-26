const {users} = require ("../utils/users")
function login (req, res){
    console.log(req.query)
    const {email, password } = req.query
    const acceso= users.find((user)=> user.email=== email && user.password=== password)

   return acceso? res.status(200).json({access: true}): res.status(200).json({access: false})
                                               //status(404) esto ya indica que sera rejected y con un error
}

module.exports={login}




//return acceso? res.status(200).json({access: true}): res.status(404).send("incorrecto")
//esto era para enviar status(404) que ya indica que seria rejected con un error