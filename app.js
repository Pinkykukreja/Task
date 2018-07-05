var app = angular.module("myApp", []);

app.controller("MyController", function ($scope, $http) {
    $http.get("data.json").then(function (item) {
        $scope.players = item.data;
    });
    $scope.addPlayer = function () 
    {
        $scope.players.push({
            name: $scope.newName,
            id: $scope.newId,
            image: $scope.newImage,
            runs: $scope.newRuns

        }),
            name = "",
            id = "",
            image = "",
            runs = "";

    };
        $scope.removePlayer = function (player) {
            var removePlayer = $scope.players.indexOf(player);
            $scope.players.splice(removePlayer, 1);
        };
       
}

);
