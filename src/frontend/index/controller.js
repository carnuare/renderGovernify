/*!
governify-render 1.0.0, built on: 2018-05-09
Copyright (C) 2018 ISA group
http://www.isa.us.es/
https://github.com/isa-group/governify-render#readme

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.*/


$scope.date = new Date().toISOString();
$scope.song = {};
$scope.songs=[];
$scope.model2 = [];



$scope.addSong = function () {
    console.log("Song: ", $scope.song);
    $scope.model.push($scope.song); 
    $scope.updateModel();
    $scope.song = {};
};

$scope.deleteSong = function (index){
    console.log("I want to delete song nº: ", index);
    $scope.model.splice(index, 1);
    this.updateModel();
};

$scope.updateModel = function(){
    $scope.model2 = angular.toJson($scope.model); //para que no me añada el atributo $$hashkey 
    $.ajax
    ({
        type: "POST",
        dataType : 'json',
        async: false,
        url: '/model',
        data: { data: $scope.model2},
        success: function () {alert("Song list updated!"); },
        failure: function() {alert("Error!");}
    });
};
