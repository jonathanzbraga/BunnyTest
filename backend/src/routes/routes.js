// import objects
import { Router } from 'express';
import User from '../models/user';
import mongoose from 'mongoose';
import axios from 'axios';

export default ({ config, db }) => {
	let routes = Router();

	// Route to request Torre-Bio info
	routes.post('/torre-bio', (req, res) => {
		let personId = req.body.personId;
		
		axios.get('https://torre.bio/api/bios/' + personId)
		.then(function (response) {		  
			//console.log(JSON.stringify(response.data)) 
			res.send(stringify(response.data));
		  })
		  .catch(function (error) {
			return res.send(error);
		  });
	});
	
	return routes;
}