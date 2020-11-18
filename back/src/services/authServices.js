const express = require("express");
require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jwt.sign({ data }, process.env.AU_HASH_KEY, { expiresIn: 86400 });
}

exports.decodeToken = async (authToken) => {
    const [, token] = authToken.split(" ");

    const data = await jwt.verify(token, process.env.AU_HASH_KEY);
    return data;
}

exports.middlewares = async function(req, res, next) {
    const authToken = req.headers.authorization;

    const [, token] = authToken.split(" ");

    if(!token){
        return res.status(401).json({
            message:'Acesso Restrito'
        });
    }

    await jwt.verify(token,process.env.AU_HASH_KEY,function(error, decoded){

        if(error){
            return res.status(401).json({
                message: 'Token inválido'
            });
        }

        req.body.idUsuario = decoded.data.idUsuario;
        next();
    })


}