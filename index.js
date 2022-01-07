var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Text",
assets : {
large_image : "",
large_text : "" 
},
buttons : [{label : " " , url : ""},{label : "",url : ""}]
}
})
})
client.login({ clientId : "bot id " }).catch(console.error); 
