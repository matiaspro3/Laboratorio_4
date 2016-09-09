var myApp=angular.module('angularABM',['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    // .State: Hace referencia a la barra de búsqueda URL. Según el valor que ingrese, hará el redireccionamiento al url definido en JSON
    .state(
    	"inicio", {
    		url:"/inicio",
    		templateUrl:"inicio.html",
    		controller:"controlInicio"

    	}
    	)
    .state(
    	"persona",{
    		url:"/persona",
    		abstract:true,
    		templateUrl:"abstractapersona.html"

    	}
    	)
    .state(
    	"persona.menu",{
    		url:"/menu",
    		//templateUrl:"personamenu.html"
    		views:{
    			"contenido":{
    				templateUrl:"personamenu.html",
    				controller:"controlpersonamenu"
    			}
    		}
    	}
    	)
     .state(
    	"persona.alta",{
    		url:"/alta",
    		//templateUrl:"personaalta.html"
    		views:{
    			"contenido":{
    				templateUrl:"personaalta.html",
    				controller:"controlpersonaalta"
    			}
    		}
    	}
    	)
     .state(
    	"persona.grilla",{
    		url:"/grilla",
    		//templateUrl:"personagrilla.html"
    		views:{
    			"contenido":{
    				templateUrl:"personagrilla.html",
    				controller:"controlpersonagrilla"
    			}
    		}
    	}
    	)


    $urlRouterProvider.otherwise("/persona/menu");
});

myApp.controller("controlInicio", function($scope){








	});

myApp.controller("controlpersonamenu", function($scope, $state){

$scope.irAalta=function(){

	$state.go("persona.alta");

};






	});

myApp.controller("controlpersonaalta", function($scope){








	});

myApp.controller("controlpersonagrilla", function($scope){








	});