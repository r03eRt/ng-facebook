'use strict';

angular.module('ngApp.facebook', ['ngRoute','ngFacebook'])

    .config( function( $facebookProvider ) {
        $facebookProvider.setAppId('291795137876532');
        $facebookProvider.setPermissions("email, user_likes, public_profile, user_posts, public-actions, user_photos");
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

    .controller('facebookCtrl', [function() {

    }]);