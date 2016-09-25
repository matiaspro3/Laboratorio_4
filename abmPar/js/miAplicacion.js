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
    				templateUrl:"Htmls/personaGrilla.html",
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

 .state(
        "menujuegos.PiedarPapelTijera3",{
            url:"/PiedarPapelTijera3",
            views:{
                "contenido":{
                    templateUrl:"juegos/PiedarPapelTijera3.html",
                    controller:"controljuego1"
                }
            }
        }
        )












   $urlRouterProvider.otherwise("/barraMenuAbstr/inicio");
 //   $urlRouterProvider.otherwise("/persona/menu");
});




// token  git 74ad6a5be9a29e41db8e4356cc6c3c00051ea139











//controladores

//
appAngular.controller("controllogin", function($scope,$rootScope,$state){
     // $scope.user;
    //$scope.user.pass;
 // $rootScope.userActual.mail="";
  //$rootScope.userActual.pass="";



$scope.Login=function(){
  //  alert("Logueado!");
  console.info("email", $rootScope.usuarios.email);
  console.info("pass", $rootScope.usuarios.pass);
   //console.info("pass", $scope.user.pass);
  //$rootScope.user.email;
  //$rootScope.user.pass;
  }



$scope.Volver= function()
{
$state.go("barraMenuAbstr.inicio");    

}




    });

//controlAbtrac

appAngular.controller("controlAbtrac", function($scope, $state,$rootScope){

$rootScope.usuarios = {
email:'',   
pass:''

}
$rootScope.personas = {
nombre:'',   
apellido:''

}



$scope.irLogin=function(){

    $state.go("barraMenuAbstr.login");

};
$scope.irAlta=function(){

    $state.go("barraMenuAbstr.alta");

};
$scope.irJuegos=function(){

    $state.go("menujuegos.juegos");
 
  
};
$scope.irGrilla=function(){

    $state.go("barraMenuAbstr.grilla");
 
  
};




});








//
appAngular.controller("controlInicio", function($scope){

	});


//
appAngular.controller("controljuegos", function($scope, $state,$rootScope){


 console.info("email", $rootScope.usuarios.email);
  console.info("pass", $rootScope.usuarios.pass);
    $scope.irAEN=function(){

    $state.go("menujuegos.AdivinaElNumero3");

};



    $scope.irPPT=function(){

    $state.go("menujuegos.PiedarPapelTijera3");
}

$scope.Volver= function()
{
$state.go("barraMenuAbstr.inicio");    

}


    });

//
appAngular.controller("controljuego1", function($scope,$rootScope){
//console.info("email", $rootScope.userActual.mail);
 //  console.info("pass", $rootScope.userActual.pass);
    });













//
appAngular.controller("controlpersonamenu", function($scope, $state){

$scope.irAalta=function(){

	$state.go("persona.alta");

};






	});
//
appAngular.controller("controlpersonaalta", function($scope,$state){


$scope.Volver= function()
{
$state.go("barraMenuAbstr.inicio");    

}





	});
//
appAngular.controller('controlpersonagrilla', function($scope, $http) {



  $http.get('http://www.mocky.io/v2/57c82b3a1200008404e769ad')
  .then(function(respuesta) {       

         $scope.ListadoPersonas = respuesta.data;
         console.log(respuesta.data);

    },function (error) {
         $scope.ListadoPersonas= [];
        console.log( error);
        
   });
 /* $http.get('PHP/nexo.php', { params: {accion :"traer"}})
    .then(function(respuesta) {         

         $scope.ListadoPersonas = respuesta.data.listado;
         console.log(respuesta.data);

    },function errorCallback(response) {
             $scope.ListadoPersonas= [];
            console.log( response);
            
     });*/
        $scope.Borrar=function(persona){
        console.log("borrar"+persona);
}





    $scope.Modificar=function(id){
        
        console.log("Modificar"+id);
    }





});