function CartController($scope) {
    $scope.items = [
    { title: 'Honda', quantity: 1, price: 10500 },
    { title: 'Yamaha', quantity: 2, price: 9600 },
    { title: 'Suzuki', quantity: 3, price: 9900 }
    ];
    $scope.remove = function (index) {
        $scope.items.splice(index, 1);
    };

    $scope.addTodo = function () {

        if ($scope.formItems == null)
            alert("NOTHING_TO_ADD");
         else {
            $scope.items.push({ title: $scope.formItems, quantity: 1, price: 10500});
            $scope.formItems = null;
        }
    };
    
    $scope.removeTodo = function (index) {
    	$scope.items.length = 0;
    };
}