var atp = angular.module('atp', ['ui.bootstrap']);

atp.controller('AppCtrl', function ($scope, $http) {
  var app = this;
  $scope.showForm = false;
  $scope.showEditForm = false;
  
  var updatePeople = function () {
    $http.get('http://localhost:3000/people').success(function (data) {
      app.people = data;
    });
  };
  
  app.selectPerson = function (person) {
    $http.get('http://localhost:3000/people/' + person._id).success(function (data) {
      app.selectedPerson = data;
    });
  };
  
  app.addPerson = function (person) {
    if (person) {
      $http.post('http://localhost:3000/people/', person, {headers: {'Content-Type': 'application/json'}})
        .success(function (data) {
          console.log(data);
          updatePeople();
        })
        .error(function (data) {
          console.log(data);
        });
    }
 };
 
 app.updatePerson = function (person) {
   if (person) {
     $http.put('http://localhost:3000/people/' + person._id, person, {headers: {'Content-Type': 'application/json'}})
       .success(function (data) {
         console.log(data);
         updatePeople();
       });
   }
 };
 
 app.deletePerson = function (person) {
   if (person) {
     $http.delete('http://localhost:3000/people/' + person._id).success(function (data) {
       console.log(data);
       app.selectedPerson = null;
       updatePeople();
     });
   }
 };
 
 updatePeople();
});
