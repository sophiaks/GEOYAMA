const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
//const path = require('path');
const config = require('./config/key');
const app = express();

// const buildPath = path.join(__dirname, './client', 'build');
// app.use(express.static(buildPath));

app.use(express.urlencoded({ extended: false }))
app.use(express.json({ extended: false }))

//const dbUrl = require('./config/dev').mongoURI;


const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, 
            useFindAndModify: false
        });
        console.log("Mongo Conectado")
    } catch (error) {
        console.log(error);
    }
}

connectDB()

app.get("/", (req, res) => {
    res.send("Inside backend")
})

app.post("/api/cadastro", async (req, res) => {
    try {
        await User.create({
            username: req.body.username,
            password: req.body.password
        });
        res.json({
            message: "Cadastro feito com sucesso!"
        });
    } catch (error) {
        console.log(error)
        res.json({
            message: "Deu ruim"
        });
    }
});

app.get("/api/users", (req, res) => {
    (req.body)
})

app.post("/api/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username }).then(user => {
        if (!user) {
            return res.status(404).json({message: "Login não encontrado!"})
        }
        if (req.body.password === user.password) {
            return res.status(200).json({message: "Login feito com sucesso!"})
        }
        else {
            return res.status(401).json({message: "Erro de autenticação"})
        }
    });
    });

const Port = process.env.PORT || 5000;

app.listen( Port, () => {
    console.log("Sevidor rodando na porta " + Port)
    console.log("Client rodando na port 3000")
})