const {User}= require("../DB_connection");

async function login(req, res){
    const {email, password}= req.query;
    if(!email || !password){
        res.status(400).send("faltan datos")
    }else{
        try {
            const user = await User.findOne({where:{email: email}})
            if(!user){
                res.status(404).send("Usuario no encontrado")
            }else{
                user.password=== password? res.json({access: true}): res.status(403).send("Contraseña incorrecta")
            }
            res.json({access: true})
        
        } catch (error) {
            res.status(500).send(error.message)
        }
    }

}

module.exports= login