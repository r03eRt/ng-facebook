'use strict';

angular.module('ngApp.facebook', ['ngRoute','ngFacebook'])

    //https://cpanel.hostinger.es/git/deploy/aid/7432574/id/55148
    .config( function( $facebookProvider ) {
        $facebookProvider.setAppId('291795137876532');
        $facebookProvider.setPermissions("email,user_likes,public_profile,user_posts,public_actions,user_photos");
    })

    .run( function( $rootScope ) {
        // Cut and paste the "Load the SDK" code from the facebook javascript sdk page.
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Load the facebook SDK asynchronously
        /*(function(){
            ...
        }());*/


    })

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/facebook', {
            templateUrl: 'facebook/facebook.html',
            controller: 'facebookCtrl'
        });
    }])

    .controller('facebookCtrl', ['$scope','$facebook',function($scope, $facebook) {

        $scope.isLoggedIn = false;
        $scope.login = function(){
            //promesa para logearnos
            $facebook.login().then(function(){
                $scope.isLoggedIn = true;
                //cojemos los datos si todo ok
                refresh();
            });
        }

        $scope.logout = function(){
            //promesa para logearnos
            $facebook.logout().then(function(){
                $scope.isLoggedIn = false;
                //cojemos los datos si todo ok
                refresh();
            });
        }

        function refresh() {

            $facebook.api(
                "/me?fields=" +
                "gender," +
                "email," +
                "locale," +
                "name," +
                "last_name," +
                "first_name," +
                "picture," +
                "link," +
                "permissions{permission,status}"
            ).then(function (response) {
                console.log(response);
                $scope.welcomeMsg = "Welcome "+ response.name;
                $scope.isLoggedIn = true;
                $scope.userInfo = response;
                $facebook.api("/me?fields=").then(function (response) {
                    
                });
            },
            function (error) {
                $scope.welcomeMsg = "please Log in";

            });
            
            
            
            
        }

        refresh();

    }]);