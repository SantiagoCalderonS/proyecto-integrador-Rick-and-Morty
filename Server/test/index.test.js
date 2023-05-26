const app = require('../src/app');
const session = require('supertest');
const agent = session(app);  //es como axios pa tests

describe("Test de RUTAS" , ()=>{
    describe('GET /rickandmorty/character/:id', ()=>{
        it('Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',async()=>{
            const {body} = await agent.get('/rickandmorty/character/1')
                /*expect(body).toHaveProperty("id")
                expect(body).toHaveProperty("name")
                expect(body).toHaveProperty("species")
                expect(body).toHaveProperty("gender")
                expect(body).toHaveProperty("status")
                expect(body).toHaveProperty("origin")
                expect(body).toHaveProperty("image")*/
                const props= ["id", "name", "gender", "species", "origin" , "image", "status"]
                expect(Object.keys(body)).toEqual(props)
           
        })

        it("Si hay un error responde con status: 500", async()=>{
                await agent.get('/rickandmorty/character/w').expect(500)
        })
    })
    describe("GET /rickandmorty/login", ()=>{
        it("true",async ()=>{
            const {body}= await agent.get('/rickandmorty/login?email=noob_master69@hotmail.com&password=fortnite1')
            expect(body.access).toBe(true)
        })
        it("false",async ()=>{
            const {body}= await agent.get('/rickandmorty/login?email=noob@hotmail.com&password=fortnite1')
            expect(body.access).toBe(false)
        })
    })

    describe("POST /rickandmorty/fav", ()=>{
        let obj = {id: 1}
        let obj2= {id: 2}
        it("elemento agregado",async ()=>{
            const {body}= await agent.post('/rickandmorty/fav').send(obj)
            expect(body).toEqual([obj])
        })
        it("elementos agregados",async ()=>{
            const {body}= await agent.post('/rickandmorty/fav').send(obj2)
            expect(body).toEqual([obj, obj2])
        })
    })

    describe("DELETE /rickandmorty/fav/:id", ()=>{
        let obj = {id: 1}
        let obj2= {id: 2}
        it("elemento agregado",async ()=>{
            const {body}= await agent.delete('/rickandmorty/fav/3')
            expect(body).toEqual([obj,obj2])
        })
        it("elementos agregados",async ()=>{
            const {body}= await agent.delete('/rickandmorty/fav/2')
            expect(body).toEqual([obj])
        })
    })

})