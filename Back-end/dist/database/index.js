"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Arquivo que faz a conexão com o banco de dados
var typeorm_1 = require("typeorm");
// ler o arquivo ormconfig.json e estabelece a conexão com o bando de dados
typeorm_1.createConnection();
