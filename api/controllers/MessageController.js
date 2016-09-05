/**
 * MessageController
 *
 * @description :: Server-side logic for managing messages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	test : function(req, res) {

		
		console.log(req)
		res.json('ok from test action')

	}

};
