(function(){
	'use strict';

	angular
	.module('app.bus')
	.controller('BusController', BusController);

	BusController.$inject = ['$q', 'logger'];

	function BusController($q, logger){
		var busvm = this;
		busvm.companhias = getCompanhias();
		
	
		function getCompanhias(){
			//TODO Implement it
			var companhias = ['Cometa', 'Kaiowa', 'Pluma'];
			return companhias;
		}
	}

})();


