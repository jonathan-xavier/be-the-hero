const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

routes.post('/sessions',SessionController.store);
routes.get('/ongs',ongController.index);

routes.post('/ongs',ongController.store);

routes.post('/incidents',IncidentController.store);
routes.get('/incidents',IncidentController.index); 
routes.delete('/incidents/:id',IncidentController.delete);

routes.get('/profile',ProfileController.index);

module.exports = routes;