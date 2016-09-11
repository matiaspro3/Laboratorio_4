var appAngular=angular.module('angularABM',['ui.router']);

appAngular.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    // .State: Hace referencia a la barra de búsqueda URL. Según el valor que ingrese, hará el redireccionamiento al url definido en JSON
    
.state(
        "barraMenuAbstr",{
            url:"/barraMenuAbstr",
            abstract:true,
            templateUrl:"Htmls/barraMenuAbstr.html",
            controller:"controlAbtrac"

        }
        )

    .state(
    	"barraMenuAbstr.inicio", {
    		url:"/inicio",
    	       views:{
               "contenido":{
        	templateUrl:"Htmls/inicio.html",
    		controller:"controlInicio"
                    }
                           }

    	                       }
    	)
    
    .state(
    	"barraMenuAbstr.login",{
    		url:"/login",
    		//templateUrl:"personamenu.html"
    		views:{
    			"contenido":{
    				templateUrl:"Htmls/formLogin3.html",
    				controller:"controllogin"
    			}
    		}
    	}
    	)
     .state(
    	"barraMenuAbstr.alta",{
    		url:"/alta",
    		//templateUrl:"personaalta.html"
    		views:{
    			"contenido":{
    				templateUrl:"Htmls/formAlta2.html",
    				controller:"controlpersonaalta"
    			}
    		}
    	}
    	)
     .state(
    	"barraMenuAbstr.grilla",{
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

  .state(
        "menujuegos",{
            url:"/menujuegos",
             abstract:true,
                   templateUrl:"Htmls/menujuegos.html",
                    controller:"controljuegos"
                
            
        }
        )
 
.state(
        "menujuegos.juegos",{
            url:"/juegos",
            views:{
                "contenido":{
                    templateUrl:"Htmls/juegos.html",
                    controller:"controljuego1"
                }
            }
        }
        )



 .state(
        "menujuegos.AdivinaElNumero3",{
            url:"/AdivinaElNumero3",
            views:{
                "contenido":{
                    templateUrl:"juegos/AdivinaElNumero3.html",
                    controller:"controljuego1"
                }
            }
        }
        )










   $urlRouterProvider.otherwise("/barraMenuAbstr/inicio");
 //   $urlRouterProvider.otherwise("/persona/menu");
});
















//controladores

//
appAngular.controller("controllogin", function($scope){

    });

//controlAbtrac

appAngular.controller("controlAbtrac", function($scope, $state){

$scope.irLogin=function(){

    $state.go("barraMenuAbstr.login");

};
$scope.irAlta=function(){

    $state.go("barraMenuAbstr.alta");

};
$scope.irJuegos=function(){

    $state.go("menujuegos.juegos");

};






});








//
appAngular.controller("controlInicio", function($scope){

	});


//
appAngular.controller("controljuegos", function($scope, $state){

    $scope.irAEN=function(){

    $state.go("menujuegos.AdivinaElNumero3");

};




    });

//
appAngular.controller("controljuego1", function($scope){

    });













//
appAngular.controller("controlpersonamenu", function($scope, $state){

$scope.irAalta=function(){

	$state.go("persona.alta");

};






	});
//
appAngular.controller("controlpersonaalta", function($scope){








	});
//
appAngular.controller("controlpersonagrilla", function($scope){








	});