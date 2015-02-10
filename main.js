// User Contstructor

var User = function(name, trips) {
	this.name = name
	this.trips = [];
}

var pic1 = new User("Josh")
var pic2 = new User("Mark")
var pic3 = new User("Ray")


// Trips Constructor 
var Trips = function(time, hobbOut, hobbIn, distance, user) {
	this.time = time;
	this.hobbOut = hobbOut;
	this.hobbIn = hobbIn;
	this.distance = distance;
	this.user = user;
}

Trips.prototype.create = function(){

}


// Maintenance Constructor
var Maintenance = function(distance, type) {
	this.distance = distance;
	this.type = type;
}



$(document).on('ready', function() {

	//$('#myModal').modal('click', function)
});