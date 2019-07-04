angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tecInformTica.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('tecInformTica.planDeEstudios', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeEstudios.html',
        controller: 'planDeEstudiosCtrl'
      }
    }
  })

  .state('tecInformTica.perfilDelGraduado', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduado.html',
        controller: 'perfilDelGraduadoCtrl'
      }
    }
  })

  .state('tecInformTica.alcanceDelTTulo', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcanceDelTTulo.html',
        controller: 'alcanceDelTTuloCtrl'
      }
    }
  })

  .state('tecInformTica.horarios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarios.html',
        controller: 'horariosCtrl'
      }
    }
  })

  .state('tecInformTica', {
    url: '/side-menu21',
    templateUrl: 'templates/tecInformTica.html',
    controller: 'tecInformTicaCtrl'
  })

  .state('tecInformTica.bibliotecaDigital', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigital.html',
        controller: 'bibliotecaDigitalCtrl'
      }
    }
  })

  .state('tecInformTica.1AO', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1AO.html',
        controller: '1AOCtrl'
      }
    }
  })

  .state('tecInformTica.programasDeCTedra', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeCTedra.html',
        controller: 'programasDeCTedraCtrl'
      }
    }
  })

  .state('tecInformTica.2AO', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2AO.html',
        controller: '2AOCtrl'
      }
    }
  })

  .state('tecInformTica.acercaDeLaApp', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('tecInformTica.calendarioAcadMico', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('tecInformTica.matemTica', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/matemTica.html',
        controller: 'matemTicaCtrl'
      }
    }
  })

  .state('tecInformTica.informTica', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTica.html',
        controller: 'informTicaCtrl'
      }
    }
  })

  .state('tecInformTica.comunicaciN', {
    url: '/page15',
    views: {
      'side-menu21': {
        templateUrl: 'templates/comunicaciN.html',
        controller: 'comunicaciNCtrl'
      }
    }
  })

  .state('tecInformTica.inglS', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inglS.html',
        controller: 'inglSCtrl'
      }
    }
  })

  .state('tecInformTica.sistemasI', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sistemasI.html',
        controller: 'sistemasICtrl'
      }
    }
  })

  .state('tecInformTica.expresiNOralYEscrita', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expresiNOralYEscrita.html',
        controller: 'expresiNOralYEscritaCtrl'
      }
    }
  })

  .state('tecInformTica.informTica2', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTica2.html',
        controller: 'informTica2Ctrl'
      }
    }
  })

  .state('tecInformTica.planeamientoYControlDeGestiN', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planeamientoYControlDeGestiN.html',
        controller: 'planeamientoYControlDeGestiNCtrl'
      }
    }
  })

  .state('tecInformTica.lGicaComputacional', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lGicaComputacional.html',
        controller: 'lGicaComputacionalCtrl'
      }
    }
  })

  .state('tecInformTica.contabilidadYCostos', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contabilidadYCostos.html',
        controller: 'contabilidadYCostosCtrl'
      }
    }
  })

  .state('tecInformTica.algoritmosYEstructurasDeDatos', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/algoritmosYEstructurasDeDatos.html',
        controller: 'algoritmosYEstructurasDeDatosCtrl'
      }
    }
  })

  .state('tecInformTica.procesamientoDeDatosI', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/procesamientoDeDatosI.html',
        controller: 'procesamientoDeDatosICtrl'
      }
    }
  })

  .state('tecInformTica.seminarioDeActualizaciN', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seminarioDeActualizaciN.html',
        controller: 'seminarioDeActualizaciNCtrl'
      }
    }
  })

  .state('tecInformTica.programaciN', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programaciN.html',
        controller: 'programaciNCtrl'
      }
    }
  })

  .state('tecInformTica.sistemasII', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sistemasII.html',
        controller: 'sistemasIICtrl'
      }
    }
  })

  .state('tecInformTica.basesDeDatos', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/basesDeDatos.html',
        controller: 'basesDeDatosCtrl'
      }
    }
  })

  .state('tecInformTica.gestiNDeRecursosInformTicos', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gestiNDeRecursosInformTicos.html',
        controller: 'gestiNDeRecursosInformTicosCtrl'
      }
    }
  })

  .state('tecInformTica.procesamientoDeDatosII', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/procesamientoDeDatosII.html',
        controller: 'procesamientoDeDatosIICtrl'
      }
    }
  })

  .state('tecInformTica.recursosDeOficina', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recursosDeOficina.html',
        controller: 'recursosDeOficinaCtrl'
      }
    }
  })

  .state('tecInformTica.asignaturaElectivaI', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/asignaturaElectivaI.html',
        controller: 'asignaturaElectivaICtrl'
      }
    }
  })

  .state('tecInformTica.internetServiciosYDiseO', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/internetServiciosYDiseO.html',
        controller: 'internetServiciosYDiseOCtrl'
      }
    }
  })

  .state('tecInformTica.redesDeDatos', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/redesDeDatos.html',
        controller: 'redesDeDatosCtrl'
      }
    }
  })

  .state('tecInformTica.seminarioDeActualizaciNII', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seminarioDeActualizaciNII.html',
        controller: 'seminarioDeActualizaciNIICtrl'
      }
    }
  })

  .state('tecInformTica.asignaturaElectivaII', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/asignaturaElectivaII.html',
        controller: 'asignaturaElectivaIICtrl'
      }
    }
  })

  .state('tecInformTica.trabajoFinal', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajoFinal.html',
        controller: 'trabajoFinalCtrl'
      }
    }
  })

  .state('tecInformTica.horarioIngreso', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngreso.html',
        controller: 'horarioIngresoCtrl'
      }
    }
  })

  .state('tecInformTica.horario1Cuatrimestre', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1Cuatrimestre.html',
        controller: 'horario1CuatrimestreCtrl'
      }
    }
  })

  .state('tecInformTica.horario2Cuatrimestre', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2Cuatrimestre.html',
        controller: 'horario2CuatrimestreCtrl'
      }
    }
  })

  .state('tecInformTica.gUAUNLaR', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gUAUNLaR.html',
        controller: 'gUAUNLaRCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});