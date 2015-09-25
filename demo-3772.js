// gadget initialisation
gadgets.util.registerOnLoadHandler(Init);

function Init()
{
	var btn = document.getElementById("btnRetrieve");
	btn.textContent += "March 2016";
}

function onclick_RetrieveEvents()
{
	var date_start = {year: 2016, month: 3, date: 1};
	var date_end = {year: 2016, month: 4, date: 1};
	
	google.calendar.read.getEvents(receive_events, "selected", date_start, date_end);
}

function receive_events(data)
// callback when event data received
{
	console.log(data);
}
