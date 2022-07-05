const http = require('http'); //API HTTP
const server = http.createServer((req, res) => {

    const ref = [];
        ref['/'] = '<h1>Home</h1>';
        ref['/noURL'] = '<h1>Cant find this url! :(</h1>';
        ref['/user'] = '<h1>Welcome, _username_</h1>';
        //ref['/user'] = `<h1>Welcome, ${admin.getUsername()}</h1>`;

    res.end(ref[req.url] || resp['noURL']); // Resposta do servidor: true || false;

}); //Cria o servidor;

/*
    servidor fica disponível para ouvir a requisição
    na porta 3001
    no ip: localhost
    quando requisitado/disponível, retorna uma função ();
*/
server.listen(3001, 'localhost', ()=> {
    console.log("Server is Running up.");
    console.log("Press CTRL+C to Down services;");
});

/*
function User(name, age, pw){
    this.name = name;
    this.age = age;
    this.power = pw;

    getUsername(){
        return this.name;
    }
}

const admin = new User('Kervi', 22, 'admin');
*/