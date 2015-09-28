// gadget initialisation
gadgets.util.registerOnLoadHandler(Init);

var read_event_start;
var read_event_end;

function Init()
{
	var range = new Date();
	range.setDate(1);
	range.setMonth(range.getMonth() + 6);
	read_event_start = {year: range.getFullYear(), month: (range.getMonth() + 1), date: 1, hour: 0, minute:0, second: 0};

	range.setMonth(range.getMonth() + 1);
	read_event_end = {year: range.getFullYear(), month: (range.getMonth() + 1), date: 1, hour: 0, minute:0, second: 0};

	document.getElementById("date_text").textContent = "Month: " + read_event_start.month + "/" + read_event_start.year;
}

function onclick_RetrieveEvents()
{
	console.log(read_event_start);
	console.log(read_event_end);

	google.calendar.read.getEvents(receive_events, "selected", read_event_start, read_event_end);
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
	
	alert(event_count + " events returned:\n\n" + event_list);
}
