/**
 * Created by cen on 2017/2/20.
 */
var app = angular.module('myApp', ['ui.router']);

app.controller("mainController", function ($scope,$state) {

    $(function () {

        $("#dowebok").fullpage({
            loopTop : true,
            loopBottom : true,
            navigation : true,
            onLeave : function (index,nextIndex,direction) {
                console.log("index: "+index+"  "+"nextIndex: "+nextIndex+"  "+"direction: "+direction);
                if (nextIndex == 1){
                    $state.go("home");
                    console.log("第一个");
                }else if (nextIndex == 2){
                    $state.go("about");
                }else if (nextIndex == 3){
                    $state.go("skill");
                }else if (nextIndex == 4){
                    $state.go("experience")
                }else if (nextIndex == 5){
                    $state.go("works");
                }else if (nextIndex ==6){
                    $state.go("contact");
                }

                window.localStorage.setItem("currentPage",nextIndex+"");
            }
        });

        // get current item
        var currentPage = window.localStorage.getItem("currentPage");
        console.log(currentPage);
        if (currentPage) {
            setTimeout(function(){
                $.fn.fullpage.moveTo(parseInt(currentPage));
            },0);
        }

    });

    /*window.onbeforeunload = function () {
        $.fn.fullpage.moveTo(1);
    }*/


});
app.controller("homeController", function ($scope) {
    $scope.img = $(".my-img");
    $scope.mouseOverThing = function () {
        $scope.img.attr("src","images/cc2.jpeg");
    }
    $scope.mouseLeaveThing = function () {
        $scope.img.attr("src","images/cc1.jpeg")
    }
});
app.controller("expController",function ($scope) {
    $scope.current = 1;
    $scope.mouseOverThing = function (current) {
        $scope.current = current;
        $(".exp-line").css("left",(current-1)*128+"px");
        console.log(this);
        console.log($scope.current);
    };
});
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("", "/home");

    $stateProvider.state("home", {
        url: "/home",
        views: {
            "home": {
                templateUrl: "templates/home.html"
            }
        }
    });
    $stateProvider.state("about", {
        url: "/about",
        views: {
            "about": {
                templateUrl: "templates/about.html"
            }
        }
    });
    $stateProvider.state("skill", {
        url: "/skill",
        views: {
            "skill": {
                templateUrl: "templates/skill.html"
            }
        }
    });
    $stateProvider.state("experience", {
        url: "/experience",
        views: {
            "experience": {
                templateUrl: "templates/experience.html"
            }
        }
    });
    $stateProvider.state("works", {
        url: "/works",
        views: {
            "works": {
                templateUrl: "templates/works.html"
            }
        }
    });
    $stateProvider.state("contact",{
        url : "/contact",
        views : {
            "contact" : {
                templateUrl : "templates/contact.html"
            }
        }
    });
});
