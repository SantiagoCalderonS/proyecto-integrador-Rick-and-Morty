let favorites=[];

function  postFav (req, res){
    if (favorites.filter(fav=> fav.id === req.body.id).length === 0){
        favorites.push(req.body)
        return res.status(200).json(favorites)
    }else{ return res.status(200).json(favorites)}
}


function  deleteFav (req, res){
    favorites=favorites.filter(fav=> fav.id !== Number(req.params.id))
   return res.status(200).json(favorites)
}


module.exports={
    postFav,
    deleteFav
}