 	var app = {
		storyHandler: function () {
			/* body... */
			var thisMonth, thisDate, thisDay, thisHour, thisMinute;
			
			//Variables relating to DOM
			var $container = $("section.main");
			var $addStory = $container.find("#post");

			function currentDate() {
				var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thuesday", "Friday", "Saturday"];
				var date = new Date();

				var month = date.getMonth();
				var day = date.getDay();
				var hour = date.getHours();
				var minute = date.getMinutes();
				//console.log( day, month, hour, minute);

				var ampm = hour >= 12 ? "pm" : "am";
				thisDay = dayNames[day];
				thisMonth = monthNames[month];
				thisHour = hour;
				thisMinute = minute; 
				//console.log(thisDay, thisMonth, thisHour, thisMinute);

			};
			currentDate();
			var retrieveData = JSON.parse(localStorage.getItem('storyObjt'));
			var stories = retrieveData || {};
			//var stories = stories || {};
			stories.users = stories.users || [];
			

			var storyParameters = {
				shouldIEdit: false,
				userIndex: "",
				allUsers: stories.users.length,
				deletedUsers: 0,

				deleteStory: function() {},
				updateStory: function() {
				//console.log(stories.users.length);
				var output = "";
				
				//stories = retrieveData;
					for (var i = 0; i < stories.users.length; i++ ) {
						/*$(".posts").append('<div>' + 
												'<img src=" ' + stories.users[i].picture + ' ">' + 
											'</div>' + 
											'<p>' + stories.users[i].id + '</p>' + 
											'<p>' + stories.users[i].story + '</p>' +
											'<p>' + stories.users[i].locale + '</p>' + 
											'<p>' + stories.users[i].date + '</p>');*/
											output += '<div>' + 
														'<div class="disflex">' + 
															'<div class="thumbs">' + 
																'<img  src="' + stories.users[i].picture + ' " class="thumbs">' + 
															'</div>' +
															'<div class="details">' + 
																'<p>' + stories.users[i].story + '</p>' +
																'<p>' + stories.users[i].locale + '</p>' +
																'<p>' + stories.users[i].date + '</p>' + 
																'<div class="pull-right">' +
																	 '<a href="#">'+ '<i class="fa fa-pencil">' + '</i>' + '</a>' +
																	 '<a href="#">'+ '<i class="fa fa-trash">' + '</i>' + '</a>' +
																	 '<a href="#">'+ '<i class="fa fa-eye">' + '</i>'  + '</a>' +
															 '</div>' +
														'</div>' + 
													'</div>';
					}
					
					$(".posts").html(output);
					$('#allUsers').text(stories.allUsers);

				},
				saveStory: function() {
					localStorage.setItem( 'storyObjt', JSON.stringify(stories));
					
				},
				createStory: function() {
					var $textArea = $('#inputTextArea').clone().val();
					var $picturePreview = $('#picture_preview').clone().attr("src");
					var $location = $('#location').val();
					//Fills up the users
					stories.users.unshift({
						id: stories.users.length,
						story: $textArea,
						picture: $picturePreview,
						locale: $location,
						date: thisDay + ", " + thisMonth,

						getUser: function() {
							return this.id;
						}
					});
					//this.saveStory();
					//this.updateStory();
					
					stories.allUsers ++;
					//console.log(stories.user[0].date);
					//console.log($location);
					//console.log(stories.users.length);
					//console.log($('.posts'))
					//$(".posts").append(stories.users[0].id);	
				}

			};
			//console.log(stories);
			//currentDate();
			$.extend(stories, storyParameters);
			//console.log(stories);
			$addStory.on('click', function(e) {
				//console.log($(this));
				//console.log(e);
				e.preventDefault();
				stories.createStory();
				stories.saveStory();
				stories.updateStory();
				
			});
			stories.updateStory();

		},//======= End of Story Handler =========
		imageHandler: function() {
			$('#upload').on('change', function() {
				readURL();
			});
			function readURL() {
				var file = $('#upload')[0].files[0];
				var reader = new FileReader();
				//console.log(reader);
				reader.onloadend = function() {

					$('#picture_preview').attr("src", reader.result);
					$('#picture_preview')[0].src = "" + reader.result;
					//console.log($('#picture_preview'));
					//console.log(reader.result);
				};
				if (file) {
					reader.readAsDataURL(file);
				}
			}

		}
	};