"use strict";
angular.module('app.profile')
    .controller('prf_mainController',[
        "$rootScope",
        "prf_rscService",
        "$scope",
        function($rootScope, prf_rscService, $scope) {
            $scope.$on('$viewContentLoaded', function() {
                // initialize core components
                App.initAjax();
            });

            // set sidebar closed and body solid layout mode
            $rootScope.settings.layout.pageContentWhite = true;
            $rootScope.settings.layout.pageBodySolid = false;
            $rootScope.settings.layout.pageSidebarClosed = false;

            _.merge($scope, {
                user:{
                    id: 23,
                    name: "xiaoji",
                    email: "xiaoji@gmail.com",
                    gender: false,
                    availability: 0,
                    dob: null
                },
                updateUser: function(){
                    prf_rscService.update().get(function(){

                    });
                }

            });

        }]
);