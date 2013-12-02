$(document).ready(function() {
	var card_contents = [
		"Waterloo, ON<br/>Light Rain<br/>8&deg;C (12/5)",
		"OAK 28<br/>HOU 23<br/>Final",
		"Econ Midterm<br/>PAC 1<br/>11:30 - 01:00",
		"Democrats losing patience with Obamacare",
		"TWTR<br/>46.64<br/>+0.04 (+0.1%)",
		"Hong Kong<br/>Tomorrow<br/>10:41",
		"Here's a note. Have a nice day!"
	];
	var card_index = 0;

	var card_content = $(".card-content");
	function setCardContent() {
		card_content.html(card_contents[card_index]);
	}
	setCardContent();

	var intvl = setInterval(function() {
		card_index = (card_index + 1) % card_contents.length;
		setCardContent();
	}, 3000);

	$(".watch-up-button").click(function() {
		clearInterval(intvl);
		card_index = (card_index + card_contents.length - 1) % card_contents.length;
		setCardContent();
	});

	$(".watch-down-button").click(function() {
		clearInterval(intvl);
		card_index = (card_index + 1) % card_contents.length;
		setCardContent();
	});

	$(".download-btn").click(function() {
		if (window.confirm("Pebble Cards requires Pebble firmware 2.0 BETA to be installed on both the WATCH and SMARTPHONE. Did you install Pebble firmware 2.0 BETA on both devices?")) {
			ga('send', 'event', 'download-btn', 'click');
		}
		else return false;
	});

	$(".sdk-2-btn").click(function() {
		ga('send', 'event', 'sdk-2-btn', 'click');
	});

	$(".sdk-2-label").click(function() {
		ga('send', 'event', 'sdk-2-label', 'click');
	});
});
