var EnterKey = 13;

$.fn.isBound = function(type, fn) {
    var data = this.data('events')[type];

    if (data === undefined || data.length === 0) {
        return false;
    }

    return (-1 !== $.inArray(fn, data));
};

$(document).ready(function() {
	// if(typeof(Storage) !== "undefined") {
	//     alert("yahoooo");
	// } else {
	//     alert("Opppsss");
	// }
	$todoList = $('#todo-list');
	if(localStorage.data) {
		var x = localStorage.data;
		var temp = x.split(",");
		$('#main').show();
		$.each(temp, function(index, val) {
			var temptodos = ""+
					"<li>" +
	          "<div class='view'>" +
	            "<input class='toggle' id='"+index+"'  type='checkbox'>" +
	            "<label for='"+index+"' data=''>" + " " + val + "</label>" +
	            "<a class='destroy'></a>" +
	          "</div>" +
	        "</li>";
			$todoList.append(temptodos);
		});
		runBind();
	}
	function runBind() {
        $('.destroy').on('click', function(e) {
          	$currentListItem = $(this).closest('li');
          	$currentListItem.remove();
        });
        $('.toggle').on('click', function(e) {
          	var $currentListItemLabel = $(this).closest('li').find('label');
		  	if ( $currentListItemLabel.attr('data') == 'done' ) {
			  $currentListItemLabel.attr('data', '');
	 	      $currentListItemLabel.css('text-decoration', 'none');
		  	}
		  	else {
			  $currentListItemLabel.attr('data', 'done');
        	  $currentListItemLabel.css('text-decoration', 'line-through');
		  }
		});
	}
	
	
	$('#new-todo').keypress(function(e) {
	    if (e.which === EnterKey) {
			$('.destroy').off('click');
			$('.toggle').off('click');
			var todos = $todoList.html();
	      	todos += ""+
					"<li>" +
	          "<div class='view'>" +
	            "<input class='toggle' id='"+$('#new-todo').val()+"'  type='checkbox'>" +
	            "<label for='"+$('#new-todo').val()+"' data=''>" + " " + $('#new-todo').val() + "</label>" +
	            "<a class='destroy'></a>" +
	          "</div>" +
	        "</li>";
	   	  
		  	var info = [];
			$todoList.html(todos);
            localStorage.data = (localStorage.data)?localStorage.data+","+$('#new-todo').val():$('#new-todo').val();
		  	$(this).val('');
			runBind();
			$('#main').show();
			// var car = {};
			// car.wheels = 4;
			// car.doors = 2;
			// car.sound = 'vroom';
			// car.name = 'Lightning McQueen';
			// console.log( car );
			// localStorage.setItem( 'car', JSON.stringify(car) );
			// console.log( JSON.parse( localStorage.getItem( 'car' ) ) );
	    }
  	}); 
});

