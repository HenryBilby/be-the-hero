/**
 * Métodos HTTP
 * GET: Buscar uma informação no backend;
 * POST: Criar uma informação no backend;
 * PUT: Alterar uma informação no backend;
 * DELETE: Remover uma informação no backend;
 */

/**
 * Tipos de parâmetros:
 * 
 * Query params: Parâmetros nomeados enviados na rota após ?, serve para filtros e paginação
 * Route params: Parâmetros utilizados para identificar recursos
 * Request body:
 * 
 * //return response.send('Hello World, my name is Henry Miller');
   // const params = request.query;//Para query params
   // const params = request.params;//Para route params
 */

const express = require('express');

const OngController = require('./Controllers/OngController')
const IncidentController = require('./Controllers/IncidentController')
const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;