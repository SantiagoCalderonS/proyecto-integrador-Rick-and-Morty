const axios= require("axios");
const URL= "https://rickandmortyapi.com/api/character/";

/*function getCharById (req, res){
    let id= req.params.id
    axios.get(`${URL}/${id}`).then((response)=>{
        let character= response.data
        let char={ id:character.id,
            name:character.name,
            gender:character.gender,
            species:character.species,
            origin:character.origin,
            image:character.image,
            status:character.status};

        character.id? res.json(char): res.status(404).send("Not found")
        }
    ).catch((error)=>
 res.send(error.message).status(500))}*/

 async function getCharById (req, res){
    try{
    let id= req.params.id
    const response= await axios.get(`${URL}/${id}`)
        let character= response.data
        let char={ id:character.id,
            name:character.name,
            gender:character.gender,
            species:character.species,
            origin:character.origin,
            image:character.image,
            status:character.status};

       return character.name? res.json(char): res.status(404).send("Not found")
        } catch(error){
            return res.status(500).send(error.message)}
        }

    
    module.exports={getCharById}

    /* function getCharById (res, id){
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((response)=>{
        let character= response.data
        let char={ id:character.id,
             name:character.name,
              gender:character.gender,
               species:character.species,
                origin:character.origin,
                 image:character.image,
                  status:character.status};
                  res.writeHead(200, {"content-type": "application/json"})
                  res.end(JSON.stringify(char))
    }).catch((error)=>{ res.writeHead(500, {"content/type": "text/plain"});
    res.end(error.message)})} */