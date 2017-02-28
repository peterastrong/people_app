/* global angular */
(function() {
  "use strict";

  angular.module("app").controller("personCtrl", function($scope) {  
    $scope.people = [{name: "Peter", bio: "asdfads", bioVisible: false}, {name: "Joe", bio: "agdsagdggg", bioVisible: false}];

    $scope.toggleBio = function(person) {
      if (person.bioVisible) {
        person.bioVisible = false;
      } else {
        person.bioVisible = true;
      } // can also write person.bioVisible = !person.bioVisible instead of lines 9-12
    };

    $scope.addPerson = function(newName, newBio) {
      if (newName) {
        $scope.people.push({name: newName, bio: newBio, bioVisible: false});
        $scope.newName = null;
        $scope.newBio = null;
      }
    };

    $scope.deleteName = function(index) {
      $scope.people.splice(index, 1);
    };

  });
})();