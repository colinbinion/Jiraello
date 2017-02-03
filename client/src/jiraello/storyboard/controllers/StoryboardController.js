angular.module('Jiraello.Storyboard')
  .controller('StoryboardCtrl',
    function () {
      var storyboard = this;

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
    });
