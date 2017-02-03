angular.module('Jiraello.Storyboard')
  .controller('StoryboardCtrl',
    function () {
      var storyboard = this;

      storyboard.currentStory = null;
      storyboard.editedStory = {};

      storyboard.stories = [
        {
          "assignee": "1",
          "criteria"; "It tests!",
          "id": "1",
          "reporter": "2",
          "status": "To Do",
          "title": "First Story",
          "type": "Spike”
        },
        {
          "assignee": "2",
          "criteria": "It works!",
          "description": "testing something",
          "id": "2",
          "reporter": "1",
          "status": "In Progress",
          "title": "Second Story",

          "type": "Enhancement"
        }
      ];

      storyboard.statuses = [
        {name: 'To Do'},
        {name: 'In Progress'},
        {name: 'Code Review'},
        {name: 'QA Review'},
        {name: 'Verified'},
      ];

      storyboard.setCurrentStory = function(story) {
        storyboard.currentStory = story;
        storyboard.editedStory = angular.copy(storyboard.currentStory);
      };

      storyboard.updateStory = function() {
        var fields = ['title', 'description', 'criteria', 'status', 'type', 'reporter', 'assignee'];

        fields.forEach(function(field) {
          storyboard.currentStory[field] = storyboard.editedStory[field];
        });

        storyboard.resetForm();
      };

      storyboard.updateCancel = function() {
        storyboard.resetForm();
      };

      storyboard.resetForm = function() {
        storyboard.currentStory = null;
        storyboard.editedStory = {};

        storyboard.detailsForm.$setPristine();
        storyboard.detailsForm.$setUntouched();
      };
    });
