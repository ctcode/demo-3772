// gadget initialisation
gadgets.util.registerOnLoadHandler(Init);

function Init()
{
	document.getElementById("date_text").textContent = "March 2016";
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

	var event_list = "";
	var event_count = 0;

	for (var j in data)
	{
		var cal_data = data[j];

		if (cal_data.error)
		{
			alert("error retrieving event data : " + cal_data.error);
			return;
		}
		
		for (var k in cal_data.events)
		{
			var event = cal_data.events[k];
			
			event_list += (event.title + '\n');
			event_count++;
		}
	}
	
	alert("Events:\n\n" + event_list + "\n" + "Total: " + event_count);
}
