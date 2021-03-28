angular
  .module("pgApp", [])
  .controller("PasswordGeneratorController", function ($scope) {
    $scope.generateRandomPassword = function generateRandomPassword(
      length,
      uppercase,
      number,
      special
    ) {
      $scope.copyStatus = false;

      let random = "";
      let possible = "abcdefghijklmnopqrstuvwxyz";
      if (uppercase) {
        let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        possible += upperCase;
      }
      if (number) {
        let numbers = "0123456789";
        possible += numbers;
      }
      if (special) {
        let specialCharacters = "()<>?@_-+*%";
        possible += specialCharacters;
      }

      for (var i = 0; i < length; i++) {
        random += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      $scope.password = random;
    };

    $scope.copyPassword = function copyPassword() {
      var copyText = document.getElementById("password");
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
      $scope.copyStatus = true;
    };
  });
