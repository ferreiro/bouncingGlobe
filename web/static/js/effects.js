var i = 0,
	entry = $('.entry'),
	totalEntries = entry.length;

	// Debugging stuff
	console.log(entry);
	console.log(totalEntries);

	// When loaded
	loaderEffect();

	function loaderEffect() {
		entry.hide();

		entry.each(function(i) {
			$(this).delay((i++) * 400).fadeTo(1000, 1); 
		});
 
		//for (var i = 0; i < totalEntries; i++) {
		//	setInterval(function (i) { 
		//		$(entry[i]).fadeIn(300);
		//	}, 3000); 
		//}
	}