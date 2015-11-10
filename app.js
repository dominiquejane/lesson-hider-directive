var app = angular.module('directivePractice', []);

app.directive('lessonHider', function() {
	return {
		templateUrl: 'lessonHider.html',
		restrict: 'E',
		scope: {
			topic: '=',
			dayAlert: '&',
		},
		link: function(scope, element, attributes) {
			scope.getSchedule.then(function(res) {
				scope.schedule= res.data;		

				scope.schedule.forEach(function( scheduleDay ) {
						if (scheduleDay.lesson === scope.topic) {
							element.css('text-decoration', 'line-through');
							scope.lessonDay = scheduleDay.weekday;
							return;
						}
					});

			});
		},
		controller: function($scope, lessonService) {
			$scope.getSchedule = lessonService.getSchedule();
		}
	};
});