// User Contstructor

var User = function(name, trips) {
	this.name = name
	this.trips = [];
}

var picJosh = new User("Josh")
var picMark = new User("Mark")
var picRay = new User("Ray")
var picAustin = new User("Austin")
var picGuest = new User("Guest")


// Time Record Constructor 
var Record = function(time, tacOut, tacIn, cost, user, notes) {
	this.time = time;
	this.tacOut = tacOut;
	this.tacIn = tacIn;
	this.cost = cost;
	this.user = user;
	this.notes = notes;
}

Trips.prototype.render = function(){
	this.$el = $('.history-row').clone()
	this.$el.append('<tr><td>' + this.date + this.user + this.tacOut + this.tacIn + this.time + this.cost + this.notes '</td></tr>');
	
	return this.$el;
}


// Maintenance Constructor
var Maintenance = function(distance, type) {
	this.distance = distance;
	this.type = type;
}



$(document).on('ready', function() {
	$('.btn btn-primary').on('click', funtion() {
		var myRecord = new Record ($('.form-user').val(), $('.form-date').val(), $('.form-tac-out').val(), $('.form-tac-in').val(), $('.form-time').val(), $('.form-notes').val())

		myRecord.render();
	})
});