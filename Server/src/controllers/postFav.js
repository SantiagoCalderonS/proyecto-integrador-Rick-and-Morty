const {Favorite}= require("../DB_connection")

async function postFav (req, res){
const {id,name, origin, status, image, species, gender}= req.body;
if(!name|| !origin|| !status|| !image|| !species|| !gender){
    res.status(401).send("Faltan datos")
}else{
    try {
        const fav= await Favorite.findOrCreate({where:{
            id, name, origin, status, image, species, gender
        }})
        const favoritos= await Favorite.findAll();
        res.json(favoritos);
    } catch (error) {
        res.status(505).send(error.message)
    }
    
}

}

module.exports= postFav