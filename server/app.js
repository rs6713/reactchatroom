//use native websocket object in the browser
//ws websocket library
//sudo chmod 0777 ./server/app.js

//src is client side cant use any constant definitions
const WebSocket= require("ws")

const wss= new WebSocket.Server({port:8989})
const users=[]
const broadcast=(data,ws)=>{
    //for each client attached to webserver
    wss.clients.forEach((client)=>{
        if(client.readyState=== WebSocket.OPEN && client !== ws){
            client.send(JSON.stringify(data))
        }
    })
}
//websocket received data
wss.on("connection", (ws)=>{
    let index
    //received message
    ws.on("message", (message)=>{
        const data= JSON.parse(message)
        //server either adds a user or message
        switch(data.type){
            //when client establishes connection to server sends adduser event
            //add to server side list users
            //broadcast to attached clients
            case "ADD_USER":{
                index= users.length
                users.push({name:data.name, id:index+1})
                ws.send(JSON.stringify({
                    type:"USERS_LIST",
                    users
                }))
                broadcast({
                    type:"USERS_LIST",
                    users
                },ws)//websocket instance
                break
            }
            //broadcast to connected clients
            case "ADD_MESSAGE":
                broadcast({
                    type:"ADD_MESSAGE",
                    message: data.message,
                    author: data.author
                }, ws)
            default:
                break
        }
    })
    //if someone closes their browser username removed from user list
    ws.on("close", () =>{
        users.splice(index,1)
        broadcast({
            type:"USERS_LIST", 
            users
        },ws)
    })
})

//on client side need to init websocket
//need to setup where client listens for add client adduser events that are broadcast
//need to send add user event when connect to client