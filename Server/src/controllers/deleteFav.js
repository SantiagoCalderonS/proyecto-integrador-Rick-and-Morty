const {Favorite}= require("../DB_connection");


async function deleteFav (req, res){
    const {id}= req.params;
    try {
        const del= await Favorite.destroy({where: {id}})
        if(!del){
            throw Error("")
        }else{
            const newFavs= await Favorite.findAll()
            res.json(newFavs);
        }
         
    } catch (error) {
        res.status(500).send(error.message)
    }

};

module.exports= deleteFav;