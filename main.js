// Time Record Constructor 


var Record = function(user, date, tacOut, tacIn, hours, cost, notes) {
	this.hours = tacIn - tacOut;
	this.date = date;
	this.tacOut = tacOut;
	this.tacIn = tacIn;
	this.cost = parseInt(this.hours * 125);
	this.user = user;
	this.notes = notes;
}

Record.prototype.render = function(){
	this.$el = $('.history-row')
	this.$el.append('<tr><td class="postedDate">' + this.date + '</td><td class="postedUser">' + this.user + '</td><td class="postedTacOut">' + this.tacOut + '</td><td class="postedTacIn">' + this.tacIn + '</td><td>' + this.hours + '</td><td>' + this.cost + '</td><td>' + this.notes + '</td></tr>');
	
	
	console.log('this.$el', this.$el);
	
	return this.$el;

};


// User Constructor

var User = function(name, records) {
	this.name = name;
	this.records = [];
	this.hoursflown = 0
	
};

User.prototype.addRecords = function(record) {
	this.records.push(record);
};
 
var oilchangemin = 25 
var oilchangedev = 5
User.prototype.oilCheck = function(){
	this.hoursflown = _.reduce(this.records, function(memo, num) { 
		return memo + num.hours}, 0);

	
		if (this.hoursflown >= oilchangemin && this.hoursflown < oilchangemin + oilchangedev ) {
			alert("Oil Change Coming Up")
		}	else if (this.hoursflown - oilchangemin >= oilchangedev) {
			console.log('hello')
			alert("Oil Change Due!!")
		}
	
	
	

};




// Maintenance Constructor
var Maintenance = function(items, type) {
	this.type = type;
	this.items = [];
};









$(document).on('ready', function() {
	var newUser = new User();

	$('#saveTime').on('click', function() {
		var myRecord = new Record ($('#user').val(), $('.form-date').val(), $('.form-tac-out').val(), $('.form-tac-in').val(), $('.form-notes').val());
		
		

		$('.form-tac-out'). val(' ');
		$('.form-tac-in'). val(' ');
		$('.form-notes').val(' ');
		$('.form-date').val(' ');
		$('#user').val(' ');
	
		
		$('#myModal').modal('hide');

		


		myRecord.render();
		newUser.addRecords(myRecord);
		newUser.oilCheck();
	})

	$('#maintenance').on('click', function(){
		oilchangemin = newUser.hoursflown + 25
		console.log(oilchangemin)
	});
});







