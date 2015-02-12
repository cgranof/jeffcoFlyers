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
	
};

User.prototype.addRecords = function(record) {
	this.records = this.records.push(record);
};




// Maintenance Constructor
var Maintenance = function(items, type) {
	this.type = type;
	this.items = [];
};

hoursAtLastCheck = 0
var maintChecks = {
	firstOil : function() {
		if (hoursAtLastCheck >= 25 && < 30)
			alert("Oil Change Coming Up")
	}
	{
		else if (hoursAtLastCheck >= 30) {
			alert("Oil Change Due!!")
		}
	},

}

Maintenance.prototype.addMaintenace = function(item) {
	
}




$(document).on('ready', function() {
	var newUser = new User();

	$('#saveTime').on('click', function() {
		var myRecord = new Record ($('#user').val(), $('.form-date').val(), $('.form-tac-out').val(), $('.form-tac-in').val(), $('.form-notes').val());
		
		console.log("clicked!")

		$('.form-tac-out'). val(' ');
		$('.form-tac-in'). val(' ');
		$('.form-notes').val(' ');
		$('.form-date').val(' ');
		$('#user').val(' ');
	
		
		$('#myModal').modal('hide');

		


		myRecord.render();
		newUser.addRecords(myRecord);
	})
});