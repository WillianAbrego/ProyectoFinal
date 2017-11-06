window.onload=principal;
var departamento=[];
var barra=[];
var contenedor=[];
var fotos=[];
var comentarios =["","","","","","","","","","","",""];

function principal (){

var mapProp= {center:new google.maps.LatLng(13.8,-88.7926762),zoom:9,};
var map=new google.maps.Map(document.getElementById("googleMape"),mapProp);
document.getElementById("Elsalvador").onclick=function(){Elsalvador();}
document.getElementById("ahuachapan").onclick=function(){Ahuachapan();}
document.getElementById("sonsonate").onclick=function(){Sonsonate();}
document.getElementById("santa_ana").onclick=function(){SantaAna();}
document.getElementById("libertad").onclick=function(){LaLibertad();}
document.getElementById("Chala").onclick=function(){Chalatenango();}
document.getElementById("Cusca").onclick=function(){Cuscatlan();}
document.getElementById("vicente").onclick=function(){SanVicente();}
document.getElementById("SanMiguel").onclick=function(){SanMiguel();}
document.getElementById("union").onclick=function(){La_union();}
document.getElementById("usu").onclick=function(){Usulutan();}
document.getElementById("mora").onclick=function(){Morazan();}
document.getElementById("sanSalvador").onclick=function(){sanSalvador();}
document.getElementById("laPaz").onclick=function(){laPaz();}
document.getElementById("cabañas").onclick=function(){cabañas();}
document.getElementById("contactanos").onclick=function(){contactanos();}
document.getElementById("comentarios").onclick=function(){comentariost();}
document.getElementById("miembros").onclick=function(){miembros();}

		var chalate={lat:14.0283244, lng: -88.91989509999996}

		var mapasantaana={lat:13.99417, lng:-89.55972}
	var sonso={lat:13.7348986, lng:-89.6731631}
 var ahua ={lat:13.9029238, lng: -89.8626773}

var lalibertad_mapa= {lat:13.6368169, lng:-89.3761389}
var cuscatlan_mapa = {lat:13.85421,lng: -89.1567509}
var sanvicente_mapa ={lat:13.6406079, lng:-88.7926762}
var sanmiguel_mapa = {lat:13.4785149, lng:-88.2041089}
var launion_mapa = {lat:13.3376564,lng:-87.8662064}
var usulutan_mapa={lat:13.4220199,lng:-88.448334}
var morazan_mapa = {lat:13.746818,lng:-88.1418039}
var sansivar_mapa={lat:13.6927471, lng: -89.2192422}
var lapaz_mapa ={lat:13.5,lng:-88.86666}
var cabanas_mapa={lat:13.8643972, lng: -88.7509086}



  var mapCanvas = document.getElementById("googleMape");
  var myCenter = new google.maps.LatLng(13.8,-88.7926762); 
  var mapOptions = {center: myCenter, zoom: 9};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  
  



  var map = new google.maps.Map(mapCanvas,mapOptions);
  
  var chalate = new google.maps.Marker({
    position: chalate,

    animation: google.maps.Animation.BOUNCE,
   
  });

  var mapasantaana = new google.maps.Marker({
    position: mapasantaana,

    animation: google.maps.Animation.BOUNCE,
   
  });

   var sonso = new google.maps.Marker({
    position: sonso,

    animation: google.maps.Animation.BOUNCE,
   
  });

  var ahua = new google.maps.Marker({
    position: ahua,

    animation: google.maps.Animation.BOUNCE,
   
  });


  var map = new google.maps.Map(mapCanvas,mapOptions);
  var cabanas_mapa= new google.maps.Marker({
    position: cabanas_mapa,
    animation: google.maps.Animation.BOUNCE,
  });

  var map = new google.maps.Map(mapCanvas,mapOptions);
  var lapaz_mapa= new google.maps.Marker({
    position: lapaz_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var sansivar_mapa= new google.maps.Marker({
    position: sansivar_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var morazan_mapa= new google.maps.Marker({
    position: morazan_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var sanmiguel_mapa= new google.maps.Marker({
    position: sanmiguel_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var usulutan_mapa= new google.maps.Marker({
    position: usulutan_mapa,
    animation: google.maps.Animation.BOUNCE,
  });

  var map = new google.maps.Map(mapCanvas,mapOptions);
  var launion_mapa= new google.maps.Marker({
    position: launion_mapa,
    animation: google.maps.Animation.BOUNCE,
  });

  var map = new google.maps.Map(mapCanvas,mapOptions);
  var lalibertad_mapa = new google.maps.Marker({
    position: lalibertad_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var cuscatlan_mapa= new google.maps.Marker({
    position: cuscatlan_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var sanvicente_mapa= new google.maps.Marker({
    position: sanvicente_mapa,
    animation: google.maps.Animation.BOUNCE,
  });

  

chalate.setMap(map);
mapasantaana.setMap(map);
sonso.setMap(map);
ahua.setMap(map);
lalibertad_mapa.setMap(map);
cuscatlan_mapa.setMap(map);
sanvicente_mapa.setMap(map);
 sanmiguel_mapa.setMap(map);
launion_mapa.setMap(map);
 usulutan_mapa.setMap(map);
 morazan_mapa.setMap(map);
 sansivar_mapa.setMap(map);
 lapaz_mapa.setMap(map);
 cabanas_mapa.setMap(map);


  google.maps.event.addListener(cabanas_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Cabañas"
    });
  infowindow.open(map,cabanas_mapa);
  });

  google.maps.event.addListener(lapaz_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de La Paz"
    });
  infowindow.open(map,lapaz_mapa);
  });
  google.maps.event.addListener(sansivar_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de San Salvador"
    });
  infowindow.open(map,sansivar_mapa);
  });

  google.maps.event.addListener(morazan_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Morazan"
    });
  infowindow.open(map,morazan_mapa);
  });

  google.maps.event.addListener(usulutan_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Usulutan"
    });
  infowindow.open(map,usulutan_mapa);
  });

  google.maps.event.addListener(launion_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de La Union"
    });
  infowindow.open(map,launion_mapa);
  });

  google.maps.event.addListener(sanmiguel_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de San Miguel"
    });
  infowindow.open(map,sanmiguel_mapa);
  });

  google.maps.event.addListener(sanvicente_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de San Vicente"
    });
  infowindow.open(map,sanvicente_mapa);
  });

  google.maps.event.addListener(cuscatlan_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Cuscatlan"
    });
  infowindow.open(map,cuscatlan_mapa);
  });

  google.maps.event.addListener(lalibertad_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de La Libertad"
    });
  infowindow.open(map,lalibertad_mapa);
  });

  google.maps.event.addListener(ahua,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Ahuachapan"
    });
  infowindow.open(map,ahua);
  });

  google.maps.event.addListener(sonso,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Sonsonate"
    });
  infowindow.open(map,sonso);
  });


  google.maps.event.addListener(chalate,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Chalatenango"
    });
  infowindow.open(map,chalate);
  });
  google.maps.event.addListener(mapasantaana,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Santa Ana"
    });
  infowindow.open(map,mapasantaana);
  });

;(function($) {

$.fn.letterDrop = function() {
  // Chainability
  return this.each( function() { 
  
  var obj = $( this );
  
  var drop = {
    arr : obj.text().split( '' ),
    
    range : {
      min : 1,
      max : 9
    },
    
    styles : function() {
      var dropDelays = '\n', addCSS;
      
       for ( i = this.range.min; i <= this.range.max; i++ ) {
         dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';  
       }
      
        addCSS = $( '<style>' + dropDelays + '</style>' );
        $( 'head' ).append( addCSS );
    },
    
    main : function() {
      var dp = 0;
      obj.text( '' );
      
      $.each( this.arr, function( index, value ) {

        dp = dp.randomInt( drop.range.min, drop.range.max );
        
        if ( value === ' ' )
          value = '&nbsp'; //Add spaces
        
          obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );
        
      });
          
    }
  };
   
  Number.prototype.randomInt = function ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  };
  
  
  // Create styles
  drop.styles();


    // Initialise
    drop.main();
  });

};

}(jQuery));


// USAGE
$( 'efectos' ).letterDrop();


}


function Elsalvador(){
document.getElementById("formularios").innerHTML="";
document.getElementById("logo").innerHTML = "<h1>Elsalvador<h1>";
document.getElementById("contenedor").innerHTML = "";
document.getElementById("sidebar").innerHTML = "";
document.getElementById("slider").innerHTML = "";
var mapita ='<div id="googleMape" class = "googles" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.8,-88.7926762),zoom:9,};
var map=new google.maps.Map(document.getElementById("googleMape"),mapProp);

		var chalate={lat:14.0283244, lng: -88.91989509999996}
var lalibertad_mapa= {lat:13.6368169, lng:-89.3761389}
var cuscatlan_mapa = {lat:13.85421,lng: -89.1567509}
var sanvicente_mapa ={lat:13.6406079, lng:-88.7926762}
var sanmiguel_mapa = {lat:13.4785149, lng:-88.2041089}
var launion_mapa = {lat:13.3376564,lng:-87.8662064}
var usulutan_mapa={lat:13.4220199,lng:-88.448334}
var morazan_mapa = {lat:13.746818,lng:-88.1418039}
var sansivar_mapa={lat:13.6927471, lng: -89.2192422}
var lapaz_mapa ={lat:13.5,lng:-88.86666}
var cabanas_mapa={lat:13.8643972, lng: -88.7509086}
		var mapasantaana={lat:13.99417, lng:-89.55972}
	var sonso={lat:13.7348986, lng:-89.6731631}
 var ahua ={lat:13.9029238, lng: -89.8626773}


  var mapCanvas = document.getElementById("googleMape");
  var myCenter = new google.maps.LatLng(13.8,-88.7926762); 
  var mapOptions = {center: myCenter, zoom: 9};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  
 
  var map = new google.maps.Map(mapCanvas,mapOptions);
  
  var chalate = new google.maps.Marker({
    position: chalate,

    animation: google.maps.Animation.BOUNCE,
   
  });

  var map = new google.maps.Map(mapCanvas,mapOptions);
  var cabanas_mapa= new google.maps.Marker({
    position: cabanas_mapa,
    animation: google.maps.Animation.BOUNCE,
  });

  var map = new google.maps.Map(mapCanvas,mapOptions);
  var lapaz_mapa= new google.maps.Marker({
    position: lapaz_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var sansivar_mapa= new google.maps.Marker({
    position: sansivar_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var morazan_mapa= new google.maps.Marker({
    position: morazan_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var sanmiguel_mapa= new google.maps.Marker({
    position: sanmiguel_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var usulutan_mapa= new google.maps.Marker({
    position: usulutan_mapa,
    animation: google.maps.Animation.BOUNCE,
  });

  var map = new google.maps.Map(mapCanvas,mapOptions);
  var launion_mapa= new google.maps.Marker({
    position: launion_mapa,
    animation: google.maps.Animation.BOUNCE,
  });

  var map = new google.maps.Map(mapCanvas,mapOptions);
  var lalibertad_mapa = new google.maps.Marker({
    position: lalibertad_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var cuscatlan_mapa= new google.maps.Marker({
    position: cuscatlan_mapa,
    animation: google.maps.Animation.BOUNCE,
  });
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var sanvicente_mapa= new google.maps.Marker({
    position: sanvicente_mapa,
    animation: google.maps.Animation.BOUNCE,
  });


  var mapasantaana = new google.maps.Marker({
    position: mapasantaana,

    animation: google.maps.Animation.BOUNCE,
   
  });

   var sonso = new google.maps.Marker({
    position: sonso,

    animation: google.maps.Animation.BOUNCE,
   
  });

  var ahua = new google.maps.Marker({
    position: ahua,

    animation: google.maps.Animation.BOUNCE,
   
  });


chalate.setMap(map);
mapasantaana.setMap(map);
sonso.setMap(map);
ahua.setMap(map);
lalibertad_mapa.setMap(map);
cuscatlan_mapa.setMap(map);
sanvicente_mapa.setMap(map);
 sanmiguel_mapa.setMap(map);
launion_mapa.setMap(map);
 usulutan_mapa.setMap(map);
 morazan_mapa.setMap(map);
 sansivar_mapa.setMap(map);
 lapaz_mapa.setMap(map);
 cabanas_mapa.setMap(map);





  google.maps.event.addListener(cabanas_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Cabañas"
    });
  infowindow.open(map,cabanas_mapa);
  });

  google.maps.event.addListener(lapaz_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de La Paz"
    });
  infowindow.open(map,lapaz_mapa);
  });
  google.maps.event.addListener(sansivar_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de San Salvador"
    });
  infowindow.open(map,sansivar_mapa);
  });

  google.maps.event.addListener(morazan_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Morazan"
    });
  infowindow.open(map,morazan_mapa);
  });

  google.maps.event.addListener(usulutan_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Usulutan"
    });
  infowindow.open(map,usulutan_mapa);
  });

  google.maps.event.addListener(launion_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de La Union"
    });
  infowindow.open(map,launion_mapa);
  });

  google.maps.event.addListener(sanmiguel_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de San Miguel"
    });
  infowindow.open(map,sanmiguel_mapa);
  });

  google.maps.event.addListener(sanvicente_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de San Vicente"
    });
  infowindow.open(map,sanvicente_mapa);
  });

  google.maps.event.addListener(cuscatlan_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Cuscatlan"
    });
  infowindow.open(map,cuscatlan_mapa);
  });

  google.maps.event.addListener(lalibertad_mapa,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de La Libertad"
    });
  infowindow.open(map,lalibertad_mapa);
  });

  google.maps.event.addListener(ahua,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Ahuachapan"
    });
  infowindow.open(map,ahua);
  });

  google.maps.event.addListener(sonso,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Sonsonate"
    });
  infowindow.open(map,sonso);
  });


  google.maps.event.addListener(chalate,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Chalatenango"
    });
  infowindow.open(map,chalate);
  });
  google.maps.event.addListener(mapasantaana,'mouseover',function() {
    var infowindow = new google.maps.InfoWindow({
      content:"Departamento de Santa Ana"
    });
  infowindow.open(map,mapasantaana);
  });

;(function($) {

$.fn.letterDrop = function() {
  // Chainability
  return this.each( function() { 
  
  var obj = $( this );
  
  var drop = {
    arr : obj.text().split( '' ),
    
    range : {
      min : 1,
      max : 9
    },
    
    styles : function() {
      var dropDelays = '\n', addCSS;
      
       for ( i = this.range.min; i <= this.range.max; i++ ) {
         dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';  
       }
      
        addCSS = $( '<style>' + dropDelays + '</style>' );
        $( 'head' ).append( addCSS );
    },
    
    main : function() {
      var dp = 0;
      obj.text( '' );
      
      $.each( this.arr, function( index, value ) {

        dp = dp.randomInt( drop.range.min, drop.range.max );
        
        if ( value === ' ' )
          value = '&nbsp'; //Add spaces
        
          obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );
        
      });
          
    }
  };
   
  Number.prototype.randomInt = function ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  };
  
  
  // Create styles
  drop.styles();


    // Initialise
    drop.main();
  });

};

}(jQuery));


// USAGE
$( "efectos" ).letterDrop();

}


function Ahuachapan() {
var mapita;
document.getElementById("formularios").innerHTML="";
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.9029238,-89.8626773,10),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[0]= '<h1>ahuachapan</h1>';
barra[0] = '<ul><li><h2>Municipios</h2>';
barra[0] += '<ul><li>Ahuachapán</li><li>Apaneca</li><li>Atiquizaya</li><li>Concepción de Ataco</li><li>El Refugio</li><li>Guaymango</li><li>Jujutla</li><li>San Francisco Menéndez</li><li>San Lorenzo</li><li>San Pedro Puxtla</li><li>Tacuba</li><li>Turín</li></ul></li><li>';
barra[0] += '<h2> Centros Turisticos</h2>';
barra[0] += '<ul><li>Laguna El Espino</li><li>Río Paz</li><li>Playa y Estero Barra de Santiago</li><li>Municipios de aspecto colonial</li></ul></li></ul>';
contenedor[0] = '<div class="post"><h1 class="tittle">Historia 7897 Ahuachapan</h1>';
contenedor[0] += '<p class="descr">Fue creado por Ley de 9 de febrero de 1869 durante la administración del Dr. Francisco Dueñas. Su Poblacion 319,503  hab. Su cabecera es la ciudad de Ahuachapán y consta de dos distritos o partidos: el de Ahuachapán y el de Atiquizaya, instituidos por las leyes de 4 de julio de 1832 y 26 de febrero de 1869, respectivamente <br />El actual gobernador departamental es Salvador Antonio Gómez Góchez nombrado en mayo de 2011, por Mauricio Funes (ex presidente salvadoreño).</p>';
contenedor[0] += '<br/><br/>';
//contenedor[0] += '</div><div class="post">';
contenedor[0] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de La union son:</p><ul><li>Escritor de Ahuachapan :  Edgardo Alfredo Espino Najarro</li>';
contenedor[0] += '<h2>Alcaldes</h2>';
contenedor[0] += '<li>Ahuachapán Alcalde Municipal: Abilio Flores Vásquez </li>';
contenedor[0] += '<li> Apaneca Alcalde Municipal: Osmín Antonio Guzmán Escobar </li>'; 
contenedor[0] += '<li> Atiquizaya Alcalde Municipal: Ana Luisa Rodríguez de González </li>';  
contenedor[0] += '<li> Concepción de Ataco Alcalde Municipal: Oscar Oliverio Gómez Duarte </li>'; 
contenedor[0] += '<li> El Refugio Alcalde Municipal: Wilfredo Barrientos Posada </li>';
contenedor[0] += '<li>Guaymango Alcalde Municipal: Domingo Mendoza Castaneda  </li>';
contenedor[0] += '<li>Jujutla Alcalde Municipal: Víctor Manuel Martínez Jiménez </li>';  
contenedor[0] += '<li>San Francisco Menéndez Alcalde Municipal: José Narciso Ramírez Ventura </li>'; 
contenedor[0] += '<li> San Lorenzo Alcalde Municipal: Walter Fernando Ortíz Chinchilla </li>';
contenedor[0] += '<li> San Pedro Puxtla Alcalde Municipal: Carlos Armando Joma Cabrera </li>'; 
contenedor[0] += '<li>San Pedro Puxtla Alcalde Municipal: Carlos Armando Joma Cabrera </li>';
contenedor[0] += '<li>Tacuba Alcalde Municipal: Joel Ernesto Ramírez Acosta </li>';
contenedor[0] += '<li>Turín Alcalde Municipal: Nuri Yolanda Cristales de Arévalo  </li>';
contenedor[0] += '<h3>Fiestas patronales</h3>';
contenedor[0] += '<li>Ahuachapán (cabecera),05 al 14 de febrero, en honor del Dulce Nombre de Jesús.</li>';
contenedor[0] += '<li>Villa Jujutla:Del 20 al 29 de enero, dedicadas a San Miguel Arcangel.</li>';
contenedor[0] += '<li> Turín:17 al 19 de marzo en honor de San José.</li>';
contenedor[0] += '<li> Tacuba:21 y 22 de julio en honor de Santa María Magdalena.</li>';
contenedor[0] += '<li> San Pedro Puxtla:21 al 28 de agosto en honor de San Pedro Apóstol.</li>';
contenedor[0] += '<li>Cantón Cara Sucia:1 al 3 de noviembre dedicadas a San Martín de Porres.</li>';
contenedor[0] += '<li> Guaymango:17 y 18 de noviembre en honor de San Pedro Apostol.</li>';
contenedor[0] += '<li> Apaneca:29 y 30 de noviembre en honor de San Andrés Apóstol.</li>';
contenedor[0] += '<li> Atiquizaya:1 al 8 de diciembre en honor de la Inmaculada Concepción de María.</li>';
contenedor[0] += '<li>Concepción de Ataco:9 al 15 de diciembre en honor de la Inmaculada Concepción de María</li>';
contenedor[0] += '<li> San Francisco Menéndez:28 de noviembre al 4 de diciembre dedicadas a San Francisco Javier.</li>';
contenedor[0] += '<li> Villa El Refugio:Del 6 al 13 de diciembre en honor de la Virgen del Refugio.</li>';
contenedor[0] += '<li>San Lorenzo:23 al 26 de abril y 10 de agosto en honor de San Lorenzo y San Emigdio.</li>';
contenedor[0] += '</ul></div>';
fotos[0] = '<img class="mySlides" src="images/ahua0.jpg"/>';
fotos[0] +='<img class="mySlides" src="images/ahuachapan-municipio.jpg" />';
fotos[0] +='<img class="mySlides" src="images/alcaldia.jpg" />';
document.getElementById("logo").innerHTML = departamento[0];
document.getElementById("contenedor").innerHTML = contenedor[0];
document.getElementById("sidebar").innerHTML = barra[0];
document.getElementById("slider").innerHTML = fotos[0];
slider();
}

function Sonsonate() {
document.getElementById("formularios").innerHTML="";
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.6971825,-89.7416653,10.75),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[1] = '<h1>sonsonate</h1>';
barra[1] = '<ul><li><h2>Municipios</h2>';
barra[1] += '<ul><li>Acajutla</li><li>Armenia</li><li>Caluco</li><li>Cuisnahuat</li><li>Santa Isabel Ishuatán</li><li>Izalco</li><li>Juayúa</li><li>Nahuizalco</li><li>Nahulingo</li><li>Salcoatitán</li><li>San Antonio del Monte</li><li>San Julián</li><li>Santa Catarina Masahuat</li><li>Santo Domingo de Guzmán</li><li>Sonsonate</li><li>Sonzacate</li></ul></li>';
barra[1] += '<h2> Centros Turisticos</h2>';
barra[1] += '<ul><li>Atecozol</li><li>Cerro Verde</li><li>Volcán de Izalco</li><li>Playa y Puerto de Acajutla</li><li>Juayua</li></ul>';
contenedor[1] = '<div class="post"><h1 class="tittle">Historia sonsonate</h1>';
contenedor[1] += '<p class="descr">Una vez consumada la conquista en la denominada provincia de los Izalcos, a mediados del siglo XVI, varias familias de españoles se asentaron en las tierras de los nativos. Su Poblacion 438.960 hab. La zona era rica en recursos, ya que en ella se cultivaban el cacao y el bálsamo negro, que pronto comenzaron a exportarse. Sin embargo, los asentamientos de los españoles y la explotación de la tierra se desarrollaban sin orden alguno, lo que provocaba no pocos altercados. Por esa razón, las leyes de la corona española prohibían que los peninsulares convivieran con los naturales.<br />Ya en 1558, ostentaba el cargo de alcalde mayor de Sonsonate, don Alonso de Paz, y la villa era considerada como la cabecera principal de la provincia, que se complementaba como plaza comercial del puerto de Acajutla.​ En 1570, la orden de los Dominicos fundó dos sedes en la Nueva España: una ubicada en Chiapas y la otra en Sonsonate, que tuvo su asiento provisional en Izalco, aunque en Sonsonate se erigió el templo de Santo Domingo. En esos años, según una crónica de Juan López de Velasco, se estimaba la población en «2000 personas repartidas en 400 familias españolas», y también se daba relevancia a la intensa producción de cacao. Un personaje que ocupó el cargo de alcalde mayor entre 1583 y 1589 fue Juan de Mestanza, poeta que fue amigo de Miguel de Cervantes.<br />Para el año 1770, según consigna el arzobispo Pedro Cortés y Larraz, Sonsonate era cabecera de la parroquia homónima que comprendía a San Miguel Sonsacate, San Francisco Tacuzcalco, San Antonio del Monte y Santa Isabel Mejicanos, cuyo nombre se debía al asentamiento de tlaxcaltecas y mexicas en el tiempo que se fundó la ciudad.​ Además, el religioso calculaba su población en 2836 personas distribuidas en 644 familias.<br />La catedral a principios del siglo XX.Tras la firma del Acta de Independencia de América Central del 15 de septiembre de 1821, Sonsonate se encontraba anexa al estado de Guatemala. Sin embargo, debido a la proximidad con la capital salvadoreña, las autoridades de la villa giraron invitación a los otros poblados de la antigua alcaldía mayor para que se unieran al estado de El Salvador, lo cual se ratificó el 22 de diciembre de 1823. Para el 1 de abril de 1824, la primera asamblea constituyente del estado salvadoreño otorgó el título de ciudad a Sonsonate.</p>';
contenedor[1] += '<br/><br/>';
//contenedor[1] += '</div><div class="post">';
contenedor[1] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de sonsonate son:</p><ul><li>Poesia de Sonsonate :  Margarita del Carmen Brannon Vega, conocida por su seudónimo Claudia Lars</li><li>Escritor de Sonsonate: Salvador Efraín Salazar Arrué</li>';
contenedor[1] += '<h2>Alcaldes</h2>';
contenedor[1] += '<li> Acajutla Alcalde Municipal: Hugo Antonio Calderón Arriola </li>';
contenedor[1] += '<li> Armenia Alcalde Municipal: Carlos Alberto Molina López </li>'; 
contenedor[1] += '<li> Caluco Alcalde Municipal: Blanca Lidia Orellana de Vásquez </li>';
contenedor[1] += '<li> Cuisnahuat Alcalde Municipal: Jorge Alberto Abrego Miranda </li>';
contenedor[1] += '<li> Izalco Alcalde Municipal: José Alfonso Guevara Cisneros </li>';
contenedor[1] += '<li>Juayúa Alcalde Municipal: Rafael Orlando Contreras Gamez </li>';
contenedor[1] += '<li> Nahulingo Alcalde Municipal: Miguel Ángel Mejía </li>';
contenedor[1] += '<li> Nahuizalco Alcalde Municipal: Jorge Willer Patríz Castaneda </li>';
contenedor[1] += '<li> Salcoatitán Alcalde Municipal: José Elías Mata Amaya  </li>';
contenedor[1] += '<li> San Antonio del Monte Alcalde Municipal: Teodoro Pineda Osorio   </li>';
contenedor[1] += '<li>San Julián Alcalde Municipal: Edna Beatriz Chacón </li>';
contenedor[1] += '<li>Santa Catarina Masahuat Alcalde Municipal: Alba Yesenia Eguizabal Gutiérrez  </li>';
contenedor[1] += '<li>Santa Isabel Ishuatán Alcalde Municipal: Flor de María Najarro Peña </li>';
contenedor[1] += '<li>Santo Domingo de Guzmán Alcalde Municipal: Gerardo Cuellar Siguenza </li>';
contenedor[1] += '<li>Sonsonate Alcalde Municipal: José Roberto Aquino Ruíz</li>';
contenedor[1] += '<li>Sonzacate Alcalde Municipal: Héctor Antonio Orellana Valladares </li>';
contenedor[1] += '<h3>Fiestas patronales</h3>';
contenedor[1] += '<li>Sonsonate (cabecera),del 25 de enero al 2 de febrero, en honor a la Virgen de Candelaria...</li>';
contenedor[1] += '<li>Juayúa,del 1 al 15 de enero, en honor al Cristo Negro de Juayua.</li>';
contenedor[1] += '<li> San Julián,del 14 al 28 de enero, en honor a San Julián Obispo..</li>';
contenedor[1] += '<li>Acajutla,del 22 al 23 de mayo, en honor a la Santísima Trinidad.</li>';
contenedor[1] += '<li>Santo Domingo de Guzmán,del 1 al 5 de agosto, en honor a Santo Domingo de Guzmán..</li>';
contenedor[1] += '<li>Salcoatitlán,del 7 al 14 de noviembre, en honor a San Miguel Arcángel.</li>';
contenedor[1] += '<li> Nahuizalco,del 17 al 24 de junio, en honor a San Juan Bautista.</li>';
contenedor[1] += '<li> Caluco,del 22 al 30 de junio, en honor a San Pablo y de San Pedro Apóstol.</li>';
contenedor[1] += '<li> Nahulingo,del 22 al 26 de julio, en honor a Santiago Apóstol.</li>';
contenedor[1] += '<li>San Antonio del Monte,El tercer domingo de agosto, en honor a San Antonio de Padua.</li>';
contenedor[1] += '<li> Armenia,del 17 al 24 de noviembre, en honor a Santa Teresa de Ávila.</li>';
contenedor[1] += '<li>Santa Catarina Masahuat,del 20 al 25 de noviembre, en honor a Santa Catarina de Alejandría.</li>';
contenedor[1] += '<li>Cuisnahuat,del 25 al 28 de noviembre, en honor a San Lucas.</li>';
contenedor[1] += '<li> Izalco,del 14 y 15 de agosto en honor a la Virgen de Transito y el 8 de diciembre, en honor a la Inmaculado Virgen de Concepción de María.</li>';
contenedor[1] += '<li> Santa Isabel Ishuatándel 12 al 15 de febrero en honor al Santo Niño de Atoche y del 19 al 30 de noviembre en honor a la Virgen Santa Isabel.</li>';
contenedor[1] += '<li> Sonzacate29 de septiembre en honor a San Miguel Arcangel.</li>';
contenedor[1] += '</ul></div>';
fotos[1] = '<img class="mySlides" src="images/armenia-sonsonate.jpg"/>';
fotos[1] +='<img class="mySlides" src="images/alcaldia_sonsonate.jpg" />';
fotos[1] +='<img class="mySlides" src="images/sonsonate_catedral.jpg" />';
document.getElementById("logo").innerHTML = departamento[1];
document.getElementById("contenedor").innerHTML = contenedor[1];
document.getElementById("sidebar").innerHTML = barra[1];
document.getElementById("slider").innerHTML = fotos[1];
slider();
}


function SantaAna() {
document.getElementById("formularios").innerHTML="";
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(14.0600981,-89.5974898,10),zoom:9,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[2] = '<h1>Santa Ana</h1>';
barra[2] = '<ul><li><h2>Municipios</h2>';
barra[2] += '<ul><li>Candelaria de la Frontera</li><li>Coatepeque</li><li>Chalchuapa</li><li>El Congo</li><li>El Porvenir</li><li>Masahuat</li><li>Metapán</li><li>San Antonio Pajonal</li><li>San Sebastián Salitrillo</li><li>Santa Ana</li><li>Santa Rosa Guachipilín</li><li>Santiago de la Frontera</li><li>Texistepeque</li>';
barra[2] += '<h2> Centros Turisticos</h2>';
barra[2] += '<ul><li>Turicentro Sihuatehuacán</li><li>Ruinas del Tazumal</li><li>Lago Coatepeque</li><li>Volcán Ilamatepec</li><li>Lago  Guija</li>';
contenedor[2] = '<div class="post"><h1 class="tittle">Historia Santa Ana </h1>';
contenedor[2] += '<p class="descr"> Existe evidencia de poblamientos del período preclásico y período clásico sobre todo en el área de la cabecera municipal; en el período preclásico destaca el sitio arqueológico Finca Rosita que era el centro dominante o centro regional primario de la zona. Este y otros asentamientos fueron deshabitados por la erupción del lago de Ilopango en el 250 d. C.57​ Para el período clásico destacan los sitios San Jorge y Las Aradas (centros regionales secundarios que probablemente conformaban un solo sitio) que habían sido fundados en el preclásico y continuaron siendo habitados o fueron repoblados durante el clásico para luego ser definitivamente despoblados junto con el resto de sitios de ese entonces a finales de ese período debido al colapso maya,58​ permanaciendo despoblada la zona durante el período posclásico temprano (900 - 1200, tiempo en que también se da la emigración de los pipiles al actual territorio salvadoreño) debido a la preferencia de ubicar las poblaciones en sitios altos para una mayor defensa.<br/>Su Poblacion 438.960 hab. La cabecera municipal fue fundada durante el período posclásico tardió (1200 - 1524), debido al colapsó de las poblaciones dominantes del posclásico temprano y la posterior unificación de los pipiles en el Señorío de Cuzcatlán lo que permitió la fundación de poblaciones en los valles interiores del país, siendo fundada la localidad como Sihuatehuacán, que literalmente significa lugar de sacerdotisas, que estaba ubicado en lo que hoy es el barrio de Santa Bárbara cerca de los ríos Apanteos y Apanchacal; siendo sede de una de las provincias tributarias del Señorío de Cuzcatlán, dentro de la cuál tenía como población tributaria a Chacalcingo (actual barrio de Santa Lucía).</p>';
contenedor[2] += '<br/><br/>';
//contenedor[2] += '</div><div class="post">';
contenedor[2] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de Santa Ana son:</p><ul><li>Musico de Santa Ana :  David Granadino</li><li>Musico de Santa Ana: Francisco Antonio Lara Hernández</li><li>Escritor de Santa Ana : Miguel Ángel Espino</li>';
contenedor[2] += '<h2>Alcaldes</h2>';
contenedor[2] += '<li> Candelaria de la Frontera Alcalde Municipal: Janet Rivera de Rivera </li>';
contenedor[2] += '<li> Chalchuapa Alcalde Municipal: César Candido Hernández</li>';
contenedor[2] += '<li> Coatepeque Alcalde Municipal: Jorge Alberto Rivas </li>';
contenedor[2] += '<li> El Congo Alcalde Municipal: José Rodolfo Antonio Hernández Quijada  </li>';
contenedor[2] += '<li> El Porvenir Alcalde Municipal: Jorge Sigfredo Ramos Macal  </li> ';
contenedor[2] += '<li>Masahuat Alcalde Municipal: Menando Nahúm Mendoza Rosales </li>  ';
contenedor[2] += '<li> Metapán Alcalde Municipal: Pedro Antonio Sanabria Salazar </li> ';
contenedor[2] += '<li> San Antonio Pajonal Alcalde Municipal: Silvia Liceht Chavarría de González </li> ';
contenedor[2] += '<li> San Sebastián Salitrillo Alcalde Municipal: Ana Mercedes Aguilar de Ochoa </li> ';
contenedor[2] += '<li> Santa Ana Alcalde Municipal: Mario David Moreira Cruz  </li> ';
contenedor[2] += '<li>Santa Rosa Guachipilín Alcalde Municipal: Hugo Flores Magaña </li>';
contenedor[2] += '<li>Santiago de la Frontera Alcalde Municipal: José Antonio Martínez Barrera </li>';
contenedor[2] += '<li>Texistepeque Alcalde Municipal: José Armando Portillo Portillo</li>';
contenedor[2] += '<h3>Fiestas patronales</h3>';
contenedor[2] += '<li>Santa Ana (cabecera),Del 17 al 26 de julio, en honor de Nuestra Señora de Santa Ana..</li>';
contenedor[2] += '<li>San Antonio Pajonal:Del 17 al 25 de enero, dedicadas a San Antonio de Padua.</li>';
contenedor[2] += '<li> Texistepeque:Del 20 al 27 de diciembre, en honor a la Virgen de Belén y al Patrono San Esteban.</li>';
contenedor[2] += '<li>Santa Rosa Guachipilín:Del 16 al 19 de febrero, en honor de Santa Rosa de Lima</li>';
contenedor[2] += '<li>Metapán:Del 20 al 29 de junio, en honor de San Pedro Apóstol.</li>';
contenedor[2] += '<li>Santiago de la Frontera:Del 17 al 25 de julio, en honor de Santiago Apóstol.</li>';
contenedor[2] += '<li>Candelaria de la Frontera:24 de enero al 2 de febrero, dedicadas a la Virgen de Candelaria.</li>';
contenedor[2] += '<li>Chalchuapa:la fiesta patronal es del 22 al 25 de julio, en honor de Santiago Apóstol, y del 10 al 16 de agosto en honor de San Roque.</li>';
contenedor[2] += '<li> San Sebastián Salitrillo:Del 15 al 20 de enero, en honor de San Sebastián Mártir.</li>';
contenedor[2] += '<li>El Porvenir:Del 1 al 4 de diciembre, dedicadas a Santa Bárbara.</li>';
contenedor[2] += '<li>Coatepeque:Del 20 al 29 de junio en honor de San Pedro Apóstol y la fiesta de Semana Santa en honor del Santo Niño de Atocha.</li>';
contenedor[2] += '<li>El Congo:Del 9 al 15 de agosto, en honor de la Virgen del Tránsito.</li>';
contenedor[2] += '<li>Masahuat:Del 5 al 8 de marzo, en honor de la Virgen de la Luz.</li>';
contenedor[2] += '</ul></div>';
fotos[2] = '<img class="mySlides" src="images/catedral-de-santa ana.jpg"/>';
fotos[2] +='<img class="mySlides" src="images/santa ana.jpg" />';
fotos[2] +='<img class="mySlides" src="images/Santa-Ana-Principal.jpg" />';
document.getElementById("logo").innerHTML = departamento[2];
document.getElementById("contenedor").innerHTML = contenedor[2];
document.getElementById("sidebar").innerHTML = barra[2];
document.getElementById("slider").innerHTML = fotos[2];
slider();
}

function LaLibertad() {
document.getElementById("formularios").innerHTML="";
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.561396,-89.6593841),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[3] = '<h1>La Libertad</h1>';
barra[3] = '<ul><li><h2>Municipios</h2>';
barra[3] += '<ul><li>Antiguo Cuscatlan</li><li>Chiltiupán</li><li>Ciudad Arce</li><li>Colón</li><li>Comasagua</li><li>Huizúcar</li><li>Jayaque</li><li>Jicalapa</li><li>La Libertad</li><li>Santa Tecla</li><li>Nuevo Cuscatlán</li><li>San Juan Opico</li><li>Quezaltepeque</li><li>Sacacoyo</li><li>San José Villanueva</li><li>San Matías</li><li>San Pablo</li><li>Tacachico</li><li>Talnique</li><li></li><li>Tamanique</li><li>Teotepeque</li><li>Tepecoyo</li><li></li><li>Zaragoza</li></ul></li>';
barra[3] += '<h2> Centros Turisticos</h2>';
barra[3] += '<ul><li>Volcan de San Salvador</li><li>Joya de Ceren</li><li>San Andres</li><li>Jardin Botanico Plan de la Laguna</li><li>Paseo el Carmen</li><li>Parque el Bicentenario</li><li>Puerta del Diablo</li><li>Parque Los Chrros</li><li>El Cafetalon</li></ul>';
contenedor[3] = '<div class="post"><h1 class="tittle">Historia, La Libertad</h1>';
contenedor[3] += '<p class="descr"> Fue creado como departamento el 28 de enero de 1865, mediante Decreto Legislativo emitido durante la administración del doctor Francisco Dueñas. Su 842,624 hab. La extensión territorial de La Libertad es de 1,652.88 kilómetros cuadrados y posee una población de unos 445,000 habitantes, según el censo poblacional de 2007. Su área geográfica cubre desde ruinas prehispánicas, así como edificaciones coloniales, poblaciones determinantes para la historia del país, las más fértiles zonas agrícolas y hermosas playas. Su clima se caracteriza por ser caluroso debido a la cercanía de la costa y de valles bajos, pero también se experimenta clima templado e incluso frío en algunas regiones. </p>';
contenedor[3] += '<br/><br/>';
//contenedor[3] += '</div><div class="post">';
contenedor[3] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de La Libertad son:</p><ul><li>Poeta: Kenny Rodriguez</li><li></li>';
contenedor[3] += '<h2>Alcaldes</h2>';
contenedor[3] += '<li>Antiguo Cuscatlán.Alcalde Municipal: Zoila Milagro Navas</li>';
contenedor[3] += '<li> Chiltiupán Alcalde Municipal: Jorge Luis Díaz Morales </li>'; 
contenedor[3] += '<li> Ciudad Arce Alcalde Municipal: José Alfredo Contreras Villalta </li>';
contenedor[3] += '<li> Colón Alcalde Municipal: Guillermo Guevara Huezo </li>';
contenedor[3] += '<li> Comasagua Alcalde Municipal: José Ricardo Reyes Rosales </li>';
contenedor[3] += '<li> Huizúcar Alcalde Municipal: Marina Elizabeth Avilés Dueñas</li>';
contenedor[3] += '<li> Jayaque Alcalde Municipal: Pánfilo Santos Mancía Velásquez </li>';
contenedor[3] += '<li> Jicalapa Alcalde Municipal: José Salvador Menjivar Miranda </li>';
contenedor[3] += '<li> La Libertad Alcalde Municipal: Miguel Ángel Jiménez Aguilera </li>';
contenedor[3] += '<li> Nuevo Cuscatlán Alcalde Municipal: Irma Michelle Sol de Castro </li>';
contenedor[3] += '<li> Quezaltepeque Alcalde Municipal: Elio Valdemar Lemus Osorio</li>';
contenedor[3] += '<li> Sacacoyo Alcalde Municipal: Pedro Leopoldo Montoya </li>';
contenedor[3] += '<li> San José Villanueva Alcalde Municipal: Pedro Alfonso Durán Ruano </li>';
contenedor[3] += '<li> San Juan Opico Alcalde Municipal: Ramón Antonio Trigueros Alvarado </li>';
contenedor[3] += '<li> San Matías Alcalde Municipal: Virgilio Martínez Barillas </li>';
contenedor[3] += '<li> San Pablo Tacachico Alcalde Municipal: Mario Alberto Castillo Villanueva </li>';
contenedor[3] += '<li> Santa Tecla Alcalde Municipal: Roberto José D`Aubuisson Munguía </li>';
contenedor[3] += '<li> Talnique Alcalde Municipal: Juan Antonio Fuentes Escobar</li>';
contenedor[3] += '<li> Tamanique Alcalde Municipal: Ruth Aida Beltrán</li>';
contenedor[3] += '<li> Teotepeque Alcalde Municipal: Alfonso Arévalo Guillén</li>';
contenedor[3] += '<li> Tepecoyo Alcalde Municipal: Ana Janet González Sermeño</li>';
contenedor[3] += '<li> Zaragoza Alcalde Municipal: Carlos Javier Guevara Turcios</li>';
contenedor[3] += '<h3>Fiestas patronales</h3>';
contenedor[3] += '<li>Santa Tecla: (cabecera),del 1 al 31 de diciembre, en honor al nacimiento del Niño Jesús.</li>';
contenedor[3] += '<li>Tepecoyo: del 1 al 6 de enero, en honor de San Esteban Mártir.</li>';
contenedor[3] += '<li>Colón: del 1 al 15 de enero en honor al Cristo de Esquipulas y del 1 al 11 de febrero en honor a Nuestra Señora de Lourdes.</li>';
contenedor[3] += '<li>San Matías: del 14 al 24 de febrero, en honor de San Matías.</li>';
contenedor[3] += '<li>Nuevo Cuscatlán: 19 de marzo en honor de San José.</li>';
contenedor[3] += '<li>Chiltiupán: del 23 al 25 de abril, en honor a San Marcos Evangelista, y del 3 al 5 de agosto, en honor a Santo Domingo de Guzmán.</li>';
contenedor[3] += '<li> Teotepeque: del 27 al 29 de junio, en honor de San Pedro Apóstol.</li>';
contenedor[3] += '<li>Jayaque: del 15 al 20 de enero en honor a san Sebastián Mártir y del 21 al 26 de julio en honor a San Cristóbal.</li>';
contenedor[3] += '<li>Talnique: 3era semana de febrero, fiesta titular a San Antonio de Padua y del 23 al 25 de agosto, en honor de San Luis Rey de Francia.</li>';
contenedor[3] += '<li>Comasagua: 15 al 21 de septiembre, en honor de San Mateo.</li>';
contenedor[3] += '<li>Huizúcar: del 17 al 29 de septiembre, en honor de San Miguel Arcángel.</li>';
contenedor[3] += '<li>Zaragoza: del 8 al 12 de octubre, en honor de Nuestra Señora del Pilar.</li>';
contenedor[3] += '<li>Jicalapa: del 19 al 21 de octubre, en honor de Santa Úrsula.</li>';
contenedor[3] += '<li>Ciudad Arce: 1 al 8 de diciembre, en honor de la Inmaculada Virgen de Concepción.</li>';
contenedor[3] += '<li>Ciudad de La Libertad: 23 y 24 de octubre en honor a San Rafael Arcángel y del 1 al 8 de diciembre en honor de la Inmaculada Virgen de Concepción</li>';
contenedor[3] += '<li>Sacacoyo: del 14 al 21 de diciembre, en honor de San Simón.</li>';
contenedor[3] += '<li>San Pedro Tacachico: del 1 al 13 de diciembre, en honor de San Pablo Apóstol.</li>';
contenedor[3] += '<li>Quezaltepeque: del 10 al 19 de diciembre en honor de San José.</li>';
contenedor[3] += '<li>Tamanique: del 19 al 21 de noviembre en honor de la Virgen de la Paz.</li>';
contenedor[3] += '<li>San Juan Opico: del 17 al 27 de diciembre, en honor de San Juan Evangelista.</li>';
contenedor[3] += '<li>Antiguo Cuscatlán: 27 y 28 de diciembre, en honor de los Niños Inocentes.</li>';
contenedor[3] += '</ul></div>';
fotos[3] = '<img class="mySlides" src="images/libertad0.jpg"/>';
fotos[3] +='<img class="mySlides" src="images/libertad1.jpg" />';
fotos[3] +='<img class="mySlides" src="images/libertad2.jpg" />';
document.getElementById("logo").innerHTML = departamento[3];
document.getElementById("contenedor").innerHTML = contenedor[3];
document.getElementById("sidebar").innerHTML = barra[3];
document.getElementById("slider").innerHTML = fotos[3];
slider();
}

function Chalatenango() {
document.getElementById("formularios").innerHTML="";
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(14.0880056,-89.3373776),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[4] = '<h1>Chalatenango</h1>';
barra[4] = '<ul><li><h2>Municipios</h2>';
barra[4] += '<ul><li>Chalatenango</li><li>Comalapa</li>  <li>San Antonio Los Ranchos</li>  <li>Concepción Quezaltepeque</li>  <li>Nueva Concepción</li>  <li>Santa Rita</li>  <li>La Palma</li>  <li>Azacualpa</li>  <li>Potonico</li>  <li>La Reina</li>  <li>Ojos de Agua</li>  <li>Agua Caliente</li>  <li>San José Cancasque</li>  <li>San José Las Flores</li>  <li>San Fernando</li>  <li>San Isidro Labrador</li>  <li>La Laguna</li>  <li>San Ignacio</li>  <li>Nombre de Jesús</li>  <li>Arcatao</li>  <li>San Miguel de Mercedes</li>  <li>San Francisco Morazán</li>  <li>San Rafael</li>  <li>San Francisco Lempa</li>  <li>San Antonio de la Cruz</li>  <li>Citalá</li>  <li>El Carrizal</li>  <li>Nueva Trinidad</li> <li>Dulce Nombre de María</li>  <li>Tejutla</li> <li>San Luis del Carmen</li><li>El Paraíso</li> <li>Las Vueltas</li></ul></li>';
barra[4] += '<h2> Centros Turisticos</h2>';
barra[4] += '<ul><li>El cerro el pital</li><li>Parque Nacional Montecristo</li><li>Turicentro Agua fria</li><li>Parque Acuatico las Palmeras</li><li>El Manzano</li></ul>';
contenedor[4] = '<div class="post"><h1 class="tittle">Historia, Chalatenango</h1>';
contenedor[4] += '<p class="descr"> Datos Historicos: El 16 de febrero de 1847 se concedió al pueblo el Título de villa, otorgada en reconocimiento a los importantes servicios prestados en el proceso de la independencia y en la contienda armada de 1827 a 1829 que cumplió con el restablecimiento del orden constitucional en Centroamérica. Chalatenango se convirtió en un importante centro del cultivo del añil y se mantuvo como tal durante todo el período colonial (Browning 1989), esto ocasionó que el municipio junto a todo el departamento se posicionara como un productor añilero, por supuesto esto facilitó el desarrollo industrial del cultivo de Jiquilite, y en especial la producción de la preciosa tinta azul en Chalatenango durante la colonia.<br/>Su Poblacion: 21.102, el departamento de Chalatenango fue impactado mucho por la Guerra Civil. Muchas personas del municipio tuvieron que abandonar su hogar. Pero a inicios de los años 1990 y después de los Acuerdos de Paz, la gente ha repoblado la región de Chalatenango. Extensión 779 mi² </p>';
contenedor[4] += '<br/><br/>';
//contenedor[4] += '</div><div class="post">';
contenedor[4] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de Chalatenango son:</p><ul><li>Escritor: Matias Romero</li><li>Poeta: Pedro Valle</li>';
contenedor[4] += '<h2>Alcaldes</h2>';
contenedor[4] += '<li>Agua Caliente Alcalde Municipal: Edwin Edmundo Cisneros Gutiérrez</li>';
contenedor[4] += '<li>Arcatao Alcalde Municipal: José Alberto Avelar Avelar </li>'; 
contenedor[4] += '<li>Azacualpa Alcalde Municipal: Pablo Antonio Martínez Molina</li>';
contenedor[4] += '<li> Colón Alcalde Municipal: Guillermo Guevara Huezo </li>';
contenedor[4] += '<li>Chalatenango Alcalde Municipal: José Rigoberto Mejía Menjivar</li>';
contenedor[4] += '<li>Citalá Alcalde Municipal: José Lorenzo Valdivieso Galdámez</li>';
contenedor[4] += '<li>Comalapa Alcalde Municipal: Moisés Antonio Marín Santamaría </li>';
contenedor[4] += '<li>Concepción Quezaltepeque Alcalde Municipal: Miguel Angel Funes Mena</li>';
contenedor[4] += '<li>Dulce Nombre de María Alcalde Municipal: Elizandro León Rivera</li>';
contenedor[4] += '<li>El Carrizal Alcalde Municipal: Tulio Ernesto Casco Robles </li>';
contenedor[4] += '<li>El Paraíso Alcalde Municipal: Emilio Ortiz Carbajal</li>';
contenedor[4] += '<li>La Laguna Alcalde Municipal: Baltazar Elías Galdámez Díaz</li>';
contenedor[4] += '<li>La Palma Alcalde Municipal: Roberto Efraín Méndez Flores </li>';
contenedor[4] += '<li>La Reina Alcalde Municipal: Roberto Andrés Lemus Flores</li>';
contenedor[4] += '<li>Las Vueltas Alcalde Municipal: Rosa Cándida Alas de Menjivar</li>';
contenedor[4] += '<li>Nombre de Jesús Alcalde Municipal: Guillermo Rodríguez Chávez</li>';
contenedor[4] += '<li>Nueva Concepción Alcalde Municipal: Raúl Andrés Peña Landaverde</li>';
contenedor[4] += '<li>Nueva Trinidad Alcalde Municipal: Teófilo Córdova Delgado</li>';
contenedor[4] += '<li>Ojos de Agua Alcalde Municipal: Franklin Antonio Márquez Melgar</li>';
contenedor[4] += '<li>Potonico Alcalde Municipal: Héctor Arnoldo Recinos Orellana</li>';
contenedor[4] += '<li>San Antonio de la Cruz Alcalde Municipal: Lucio Edwin Ayala Flores</li>';
contenedor[4] += '<li>San Antonio Los Ranchos Alcalde Municipal: Miguel Serrano Ayala</li>';
contenedor[4] += '<li>San Fernando Alcalde Municipal: Carlos Josué Álvarez Rivera</li>';
contenedor[4] += '<li>San Francisco Lempa Alcalde Municipal: Carlos Arturo Valdés Ochoa</li>';
contenedor[4] += '<li>San Francisco Morazán Alcalde Municipal: Marvin Alexander Cardoza Quijada</li>';
contenedor[4] += '<li>San Ignacio Alcalde Municipal: Alfredo Reyes Gutiérrez</li>';
contenedor[4] += '<li>San José Cancasque Alcalde Municipal: Velis Ismael Peña Alas</li>';
contenedor[4] += '<li>San Isidro Labrador Alcalde Municipal: Antonio Serrano Serrano</li>';
contenedor[4] += '<li>San José Las Flores Alcalde Municipal: José Felipe Tobar Arce</li>';
contenedor[4] += '<li>San Luis del Carmen Alcalde Municipal: William Sigfredo Guerra Moreno</li>';
contenedor[4] += '<li>San Miguel de Mercedes Alcalde Municipal: Milton Guadalupe Serrano Ramírez</li>';
contenedor[4] += '<li>San Rafael Alcalde Municipal: Roberto Alirio Guardado Oliva</li>';
contenedor[4] += '<li>Santa Rita Alcalde Municipal: Ismael Romero Gutiérrez</li>';
contenedor[4] += '<li>Tejutla Alcalde Municipal: Rafael Antonio Tejada Ponce</li>';
contenedor[4] += '<h3>Fiestas patronales</h3>';
contenedor[4] += '<li>Chalatenango (cabecera): 1 y 2 de noviembre dedicadas a los Santos, y del 18 al 25 de diciembre en honor del Nacimiento del Niño Dios.</li>';
contenedor[4] += '<li>Comalapa: del 1 al 4 de octubre y la segunda semana de enero, en honor a San Francisco de Asís.</li>';
contenedor[4] += '<li>San Antonio Los Ranchos: 13 de junio en honor a San Antonio de Padua.</li>';
contenedor[4] += '<li>Concepción Quezaltepeque: 19 y 20 de enero, en honor de San Sebastián Mártir, y del 6 al 8 de diciembre, en honor de la Inmaculada Virgen de Concepción.</li>';
contenedor[4] += '<li>Nueva Concepción: del 25 de enero al 2 de febrero en honor de la Santísima Virgen de Candelaria.</li>';
contenedor[4] += '<li>Santa Rita: del 8 al 10 de febrero, en honor de San Caralampio y del 25 al 28 de diciembre en honor a Santa Rita.</li>';
contenedor[4] += '<li>La Palma: del 17 y 18 de febrero dedicadas a la Virgen del Dulce Nombre de María.</li>';
contenedor[4] += '<li>Azacualpa: del 24 al 28 de febrero dedicadas a San José.</li>';
contenedor[4] += '<li>Potonico: del 24 al 26 de febrero dedicadas a la Inmaculada Concepción.</li>';
contenedor[4] += '<li>La Reina: del 25 al 28 de febrero en honor a la Reina de los Ángeles.</li>';
contenedor[4] += '<li>Ojos de Agua: del 16 al 19 de marzo dedicadas a San José.</li>';
contenedor[4] += '<li>Agua Caliente: del 15 al 19 de marzo, en honor a San José.</li>';
contenedor[4] += '<li>San José Cancasque: el 17 al 19 de marzo, en honor a San José.</li>';
contenedor[4] += '<li>San José Las Flores: 19 de marzo dedicadas a San José y el 19 de junio por aniversario de Repoblación.</li>';
contenedor[4] += '<li>San Fernando: del 26 al 30 de mayo, en honor a San Fernando.</li>';
contenedor[4] += '<li>San Isidro Labrador: 14 y 15 de mayo dedicadas a San Isidro Labrador.</li>';
contenedor[4] += '<li> La Laguna: del 20 al 26 de julio, en honor de Santiago Apóstol.</li>';
contenedor[4] += '<li>San Ignacio: del 23 al 31 de julio, en honor de San Ignacio de Loyola.</li>';
contenedor[4] += '<li>Nombre de Jesús: 31 de diciembre y 1 de enero en honor al Dulce nombre de Jesús.</li>';
contenedor[4] += '<li>Arcatao: del 23 y 24 de agosto en honor de San Bartolomé Apóstol.</li>';
contenedor[4] += '<li>San Miguel de Mercedes: 24 y 26 de septiembre en honor de la Virgen de las Mercedes.</li>';
contenedor[4] += '<li>San Francisco Morazán: 4 de octubre y del 22 al 28 de diciembre dedicadas a San Francisco de Asís.</li>';
contenedor[4] += '<li>San Rafael: 24 de octubre dedicadas a San Rafael Arcángel.</li>';
contenedor[4] += '<li>San Francisco Lempa: del 25 al 28 de octubre, en honor a San Francisco de Asís y al Co Patrono San Rafael Arcángel.</li>';
contenedor[4] += '<li>San Antonio de la Cruz: del 27 al 29 de noviembre en honor a San Miguel Arcángel.</li>';
contenedor[4] += '<li>Citalá: 30 de noviembre al 8 de diciembre en honor a la Inmaculada Concepción.</li>';
contenedor[4] += '<li>El Carrizal: del 1 al 8 de diciembre, en honor de la Inmaculada Virgen de Concepción.</li>';
contenedor[4] += '<li>Nueva Trinidad: del 6 al 8 de diciembre dedicadas a la Inmaculada Concepción.</li>';
contenedor[4] += '<li>Dulce Nombre de María: del 7 al 12 de diciembre, en honor al Dulce Nombre de María.</li>';
contenedor[4] += '<li>Tejutla: del 12 al 21 del diciembre dedicadas a Santo Tomás Apóstol.</li>';
contenedor[4] += '<li>San Luis del Carmen: segunda semana de diciembre, en honor de la Virgen del Carmen.</li>';
contenedor[4] += '<li>El Paraíso: del 29 de noviembre al 8 de diciembre en honor a la Inmaculada Virgen de Concepción de María.</li>';
contenedor[4] += '<li>Las Vueltas: 8 de diciembre dedicadas a la Inmaculada Virgen de Concepción.</li>';
contenedor[4] += '</ul></div>';
fotos[4] = '<img class="mySlides" src="images/cha0.jpg"/>';
fotos[4] +='<img class="mySlides" src="images/cha1.jpg" />';
fotos[4] +='<img class="mySlides" src="images/cha2.jpg" />';
document.getElementById("logo").innerHTML = departamento[4];
document.getElementById("contenedor").innerHTML = contenedor[4];
document.getElementById("sidebar").innerHTML = barra[4];
document.getElementById("slider").innerHTML = fotos[4];
slider();
}

function Cuscatlan() {
document.getElementById("formularios").innerHTML="";
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.85421,-89.1567509),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[5] = '<h1>Cuscatlan</h1>';
barra[5] = '<ul><li><h2>Municipios</h2>';
barra[5] += '<ul><li>Candelaria</li><li>Cojutepeque</li><li>El carmen</li><li>El rosario</li><li>Monte San Juan</li><li>Oratorio de Concepcion</li><li>San Bartolome Perulapia</li><li>San Cristobal</li><li>San Jose Guayabal</li><li>San Pedro Perulapan</li><li>San Rafael Cedros</li><li>San Ramon</li><li>Santa Cruz Analquito</li><li>Santa Cruz Michapa</li><li>Suchitoto</li><li>Tenancingo</li></ul>'
barra[5] += '<h2> Centros Turisticos</h2>';
barra[5] += '<ul><li>Lago de Ilopango</li><li>Lago Suchitlan</li><li>Parque Ecoturístico Tehuacan.</li><li>Cerro Guazapa</li><li>Turicentro Apulo</li><li>Centro Arte para la Paz</li><li>Cerro "El Campanario"</li></ul>';
contenedor[5] = '<div class="post"><h1 class="tittle">Historia, Cuscatlan</h1>';
contenedor[5] += '<p class="descr">Cuscatlán fue fundado como departamento por decreto del Supremo Gobierno el 22 de mayo de 1835, su Poblacion 216 446 hab y lo componían los distritos de Suchitoto, Cojutepeque, Ilobasco, Chalatenango, Tejutla y Opico, comprendiendo un total de 64 pueblos.<br/>El decreto de 14 de febrero de 1855 dividió el departamento en dos: Chalatenango y el actual departamento de Cuscatlán. Finalmente, el 10 de febrero de 1873, se decretó la erección del departamento de Cabañas, a expensas del de Cuscatlán y de San Vicente.La cabecera fue en un principio la ciudad de Suchitoto, pero el 12 de noviembre de 1861 se trasladó a Cojutepeque. Extension 292 mi²</p>';
contenedor[5] += '<br/><br/>';
//contenedor[5] += '</div><div class="post">';
contenedor[5] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de Cuscatlan son:</p><ul><li>Escritor: Raul Contreras</li><li>Poeta: Filadelfo Cruz </li></ul>';
contenedor[5] += '<h2>Alcaldes</h2>';
contenedor[5] += '<li>Candelaria Alcalde Municipal: José Adalberto Perdomo Beltrán</li>';
contenedor[5] += '<li>Cojutepeque Alcalde Municipal: Rosa Guadalupe Serrano de Martínez</li>'; 
contenedor[5] += '<li>El Carmen Alcalde Municipal: Leticia de Jesús Hernández Sánchez</li>';
contenedor[5] += '<li>El Rosario Alcalde Municipal: Odilio de Jesús Portillo Ramírez</li>';
contenedor[5] += '<li>Monte San Juan Alcalde Municipal: Hugo Balmore Juárez Sánchez</li>';
contenedor[5] += '<li>Oratorio de Concepción Alcalde Municipal: José Baltazar Ramos Castro</li>';
contenedor[5] += '<li>San Bartolomé Perulapía Alcalde Municipal: Cristian Marvin Sermeño Arias</li>';
contenedor[5] += '<li>San Cristobal Alcalde Municipal: Pedro Antonio Vásquez Pérez</li>';
contenedor[5] += '<li>San José Guayabal Alcalde Municipal: Mauricio Arturo Vilanova Vaquero</li>';
contenedor[5] += '<li>San Pedro Perulapán Alcalde Municipal: Lázaro Antonio Flores Paredes </li>';
contenedor[5] += '<li>San Rafael Cedros Alcalde Municipal: René Molina Cornejo</li>';
contenedor[5] += '<li>San Ramón Alcalde Municipal: Fredy Alexander Alvarado</li>';
contenedor[5] += '<li>Santa Cruz Analquito Alcalde Municipal: Luis Napoleón Servellón Vanegas</li>';
contenedor[5] += '<li>Santa Cruz Michapa Alcalde Municipal: Andrés Santos Valle</li>';
contenedor[5] += '<li>Suchitoto Alcalde Municipal: Pedrina Rivera Hernández </li>';
contenedor[5] += '<li>Tenancingo Alcalde Municipal: Juan Alberto Flores Fuentes</li>';
contenedor[5] += '<h3>Fiestas patronales</h3>';
contenedor[5] += '<li>Cojutepeque (cabecera): Durante la 3era y 4a semana de enero, en honor San Sebastián Mártir y a la Inmaculada Virgen de Concepción. También durante la 3era y 4a semana de agosto en honor a San Juan Bautista.</li>';
contenedor[5] += '<li>Tenancingo: 15 al 25 de julio, en honor a Santiago Apostol.</li>';
contenedor[5] += '<li>Candelaria: del 5 al 14 de noviembre en honor a la Virgen de del dulce Nombre de María.</li>';
contenedor[5] += '<li>San José Guayabal: del 20 de enero al 2 de febrero Romería en honor al Jesús del Rescate y del 15 al 20 de diciembre en honor al Patrono San José.</li>';
contenedor[5] += '<li>Santa Cruz Analquito: del 24 de abril al 3 de mayo, en honor del Señor de Veracruz.</li>';
contenedor[5] += '<li>Santa Cruz Michapa: del 1 al 3 de mayo, en honor de la Santa Cruz</li>';
contenedor[5] += '<li>Monte de San Juan: del 17 al al 24 de junio en honor de San Juan Bautista.</li>';
contenedor[5] += '<li>San Rafael Cedros: del 16 al 24 de octubre en honor a San Rafael Arcángel.</li>';
contenedor[5] += '<li>San Pedro Perulapán: del 20 al 28 de junio, en honor de San Pedro Apóstol.</li>';
contenedor[5] += '<li>Villa del Carmen: del 1 al 16 de julio, en honor de Nuestra Señora del Carmen.</li>';
contenedor[5] += '<li>Tenancingo: del 15 al 25 de julio, en honor de Santiago Apóstol.</li>';
contenedor[5] += '<li>San Bartolomé Perulapía: del 1 al 15 de enero, Romería en honor al Cristo Negro y del 12 al 25 de agosto en honor a San Bartolo.</li>';
contenedor[5] += '<li>San Ramón: del 25 al 31 de agosto, en honor de San Ramón.</li>';
contenedor[5] += '<li>El Rosario: el 6 y 7 de octubre, en honor a la Virgen Nuestra Señora del Rosario.</li>';
contenedor[5] += '<li>Oratorio de Concepción: del 1 al 8 de diciembre, en honor de la Virgen de Concepción.</li>';
contenedor[5] += '<li>Suchitoto: 6 al 13 de diciembre, en honor a Santa Lucía .</li>';
contenedor[5] += '<li>San Cristóbal: del 8 al 17 de diciembre, en honor de San Cristóbal.</li>';
contenedor[5] += '</ul></div>';
fotos[5] = '<img class="mySlides" src="images/cus0.jpg"/>';
fotos[5] +='<img class="mySlides" src="images/cus1.jpg" />';
fotos[5] +='<img class="mySlides" src="images/cus2.jpg" />';
document.getElementById("logo").innerHTML = departamento[5];
document.getElementById("contenedor").innerHTML = contenedor[5];
document.getElementById("sidebar").innerHTML = barra[5];
document.getElementById("slider").innerHTML = fotos[5];
slider();
}

function SanVicente() {
document.getElementById("formularios").innerHTML="";
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.6406079,-88.7926762),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[6] = '<h1>San Vicente</h1>';
barra[6] = '<ul><li><h2>Municipios</h2>';
barra[6] += '<ul><li>San Vicente</li><li>Guadalupe</li><li>Apastepeque</li><li>San Idelfonso</li><li>San Sebastian</li><li>Verapaz</li><li>Santo Domingo</li><li>San Cayetano</li><li>Tecoluca</li><li>Santa Clara</li><li>Tepetitan</li><li>San Lorenzo</li>>San Sebastian Catarina</li></ul>';
barra[6] += '<h2> Centros Turisticos</h2>';
barra[6] += '<ul><li><li>Volcan de San Vicente</li><li>Amapulapa</li><li>Parque Ecoturístico Tehuacan.</li><li>Rio Acahuapa.</li></ul>';
contenedor[6] = '<div class="post"><h1 class="tittle">Historia, San Vicente</h1>';
contenedor[6] += '<p class="descr">A mediados del siglo XVII, varias familias de españoles dedicadas al cultivo del añil residían en las poblaciones de Apastepeque, Tepetitán e Ixtepeque. Esta situación era prohibida por las Leyes de Indias, que dictaminaban el impedimento de convivir en pueblos de indios, su Poblacion 53.213 (2012) . Precisamente, el Presidente, Gobernador y Capitán General del Reino de Guatemala, don Álvaro de Quiñónez y Osorio, estipuló el 7 de julio de 1634 que los alcaldes mayores echasen “de dichos pueblos a los españoles, mestizos, negros y mulatos” de dichas localidades. Esto motivó a los vecinos desplazados a fundar una nueva colonia en 1635, decisión comunicada al Alcalde Mayor de San Salvador<br/>don Juan Sarmiento de Valderrama.De esta manera, el 26 de diciembre de 1635, medio centenar de familias fundaron bajo un árbol de Tempisque y a orillas del río Acahuapa la aldea que tuvo por nombre San Vicente de Lorenzana, en honor de San Vicente abad o San Vicente de León, superior del monasterio de San Claudio en León y quien pertenecía a la Casa de Lorenzana, la misma del Capitán General del Reino. Tiene una extension de 457 mi²</p>';
contenedor[6] += '<br/><br/>';
//contenedor[6] += '</div><div class="post">';
contenedor[6] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de San Vicente son:</p><ul><li>Escritor de San Vicente: Ricardo Martell Caminos</li><li>Poeta de San Vicente: Miguel Tomás Murillo</li><li>Cantantes Hermanos Flores</li></ul>';
contenedor[6] += '<h2>Alcaldes</h2>';
contenedor[6] += '<li>Apastepeque  Alcalde Municipal: Galileo Hernández Alvarado</li>';
contenedor[6] += '<li>Guadalupe Alcalde Municipal: Roberto Carlos Renderos Pineda</li>'; 
contenedor[6] += '<li>San Cayetano Istepeque Alcalde Municipal: Raúl Juventino Mejía Hernández</li>';
contenedor[6] += '<li>San Esteban Catarina Alcalde Municipal: Marcial Antonio Bolaños Rivas</li>';
contenedor[6] += '<li>San Ildefonso Alcalde Municipal: Carlos Alfonso Rodríguez</li>';
contenedor[6] += '<li>San Lorenzo Alcalde Municipal: Fidencio Adilio Guzmán Acevedo</li>';
contenedor[6] += '<li>San Sebastián Alcalde Municipal: Trinidad Josefina Rivas de González</li>';
contenedor[6] += '<li>San Vicente Alcalde Municipal: Medardo Hernández Lara</li>';
contenedor[6] += '<li>Santa Clara Alcalde Municipal: Oscar Raúl Córtez López</li>';
contenedor[6] += '<li>Santo Domingo Alcalde Municipal: Dora del Carmen García</li>';
contenedor[6] += '<h3>Fiestas patronales</h3>';
contenedor[6] += '<li>San Vicente: Del 12 al 31 de diciembre en honor a San Vicente Abad.</li>';
contenedor[6] += '<li>Apastepeque: del 15 al 25 de julio en honor a Santiago Apóstol.</li>';
contenedor[6] += '<li>Guadalupe: del 1 al 13 de diciembre en honor a la virgen de Guadalupe.</li>';
contenedor[6] += '<li>San Idelfonso: Del 15 al 23 de enero en honor a San Idelfonso.</li>';
contenedor[6] += '<li>San Sebastián: Del 17 al 30 de enero en honor a San Sebastián.</li>';
contenedor[6] += '<li>Verapaz: Del 11 al 19 de marzo en honor a San José.</li>';
contenedor[6] += '<li>Santo Domingo: Del 28 de julio al 4 de agosto en honor a Santo Domingo.</li>';
contenedor[6] += '<li>San Cayetano: Del 1 al 7 de agosto en honor a San Cayetano.</li>';
contenedor[6] += '<li>Tecoluca: Del 1 al 10 de agosto en honor a San Lorenzo Abad y Mártir.</li>';
contenedor[6] += '<li>Santa Clara: Del 1 al 12 de agosto en honor a Santa Clara.</li>';
contenedor[6] += '<li>Tepetitán: Del 1 al 15 de agosto en honor a la Virgen de Asunción.</li>';
contenedor[6] += '<li>San Lorenzo: Del 2 al 10 de diciembre en honor a San Lorenzo.</li>';
contenedor[6] += '<li>San Esteban Catarina: Del 22 al 28 de diciembre en honor a San Esteban y Santa Catarina.</li>';
contenedor[6] += '</ul></div>';
fotos[6] = '<img class="mySlides" src="images/san-vicente.jpg"/>';
fotos[6] +='<img class="mySlides" src="images/san-vicente1.jpg" />';
fotos[6] +='<img class="mySlides" src="images/sanvi23.jpg" />';
document.getElementById("logo").innerHTML = departamento[6];
document.getElementById("contenedor").innerHTML = contenedor[6];
document.getElementById("sidebar").innerHTML = barra[6];
document.getElementById("slider").innerHTML = fotos[6];
slider();
}

function SanMiguel() {
document.getElementById("formularios").innerHTML="";
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.4785149,-88.2041089),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[7] = '<h1>San Miguel</h1>';
barra[7] = '<ul><li><h2>Municipios</h2>';
barra[7] += '<ul><li>Carolina </li><li>Chapeltique </li><li>Chinameca </li><li>Chirilagua </li><li>Ciudad Barrios </li><li>Comacarán </li><li>El Tránsito </li><li>Lolotique </li><li>Moncagua </li><li>Nueva Guadalupe </li><li>Nuevo Edén de San Juan </li><li>Quelepa </li><li>San Antonio del Mosco </li><li>San Gerardo </li><li>San Jorge </li><li>San Luis de la Reina </li><li>San Miguel </li><li>San Rafael Oriente </li><li>Sesori </li><li>Uluazapa </li></ul>';
barra[7] += '<h2> Centros Turisticos</h2>';
barra[7] += '<ul><li>catedral basilica reina de la paz</li><li>turicentro altos de la cueva</li><li>balneario la aventura del mono</li><li>casino colonial</li><li>museo regional de oriente</li></ul>';
contenedor[7] = '<div class="post"><h1 class="tittle">Historia, San Miguel</h1>';
contenedor[7] += '<p class="descr">La conquista del actual territorio salvadoreño inició en el año 1525, cuando las tropas de Pedro de Alvarado atravesaron el río Paz, su Poblacion 247 119 hab(2014) . Cuatro años después, Pedrarias Dávila —quien tenía bajo su control el territorio de Nicaragua— comisionó a Martín de Estete con fines de exploración y anexión del territorio ubicado al oriente del río Lempa. Aunque la misión de Estete fracasó, Alvarado decidió contrarrestar las pretensiones de Dávila, y por ello delegó a Luis de Moscoso para que fundase una villa.</br>Moscoso se trasladó con 120 soldados españoles y —probablemente el 8 de mayo de 1530, festividad del Arcángel Miguel— estableció la villa de San Miguel de la Frontera,11​en las cercanías del poblado indígena de Usulután, en una región llamada por los naturales «Popocatépet». Sin embargo, se dice que Pedro de Alvarado contribuyó al despoblamiento del sitio, cuando embarcó a varios individuos para su expedición al Perú; por lo que se volvió a restablecer en 1535 por Cristóbal de la Cueva y bajo la advocación de Nuestra Señora de la Victoria. El acta fundacional de ese villorrio es la única existente para una ciudad fundada en la colonia española en El Salvador, y fue incluida en un juicio de residencia de De la Cueva.12​13​A finales del año 1536, el poblado sufrió el embate de huestes indígenas, en medio de un alzamiento lenca liderado por Lempira y a la que sobrevivió con el auxilio de las tropas de San Salvador.12​</br>Para 1572, Juan López de Velasco describía a San Miguel como una «comarca más caliente que fría», de buena producción agrícola de maíz y cacao; así como contaba entre sus recursos a las minas de plata que eran difíciles de explotar por la escasez de agua. Tenía además «650 habitantes, pues residían en ella 130 vecinos españoles o jefes de familia, de los cuales 60 eran encomenderos». Según Jorge Lardé y Larín, adquirió el título de ciudad en 1574.11​</br>A principios de 1586, la ciudad fue destruida por un incendio que redujo también a escombros el convento de San Francisco que había sido erigido en 1574. Por este motivo, los habitantes se trasladaron a su actual asiento, que para junio de aquel año tenía una población de 150 habitantes.11​</br>Para el año 1682, las zonas del golfo de Fonseca y la bahía del Espíritu Santo eran asediadas por piratas. San Miguel tomó las providencias necesarias, y pese a que no sufrió ningún ataque, sí lo fueron poblados de la costa. Suceso notable de 1699 fue la erupción del volcán vecino, llamado en ese entonces «Poshotlán».</br></p>';
contenedor[7] += '<br/><br/>';
//contenedor[7] += '</div><div class="post">';
contenedor[7] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de San Miguel son:</p><li>Escritor de San Miguel : Manlio Argueta</li><li>el compositor : Juan José Cañas</li><li>el escritor  : Francisp Gavidia</li>';
contenedor[7] += '<h2>Alcaldes</h2>';
contenedor[7] += '<li>Carolina Alcalde Municipal: José Armando Hernández Chicas </li>';
contenedor[7] +='<li>Chapeltique Alcalde Municipal: Carlos Ernesto Méndez Luna  </li>';
contenedor[7] +='<li>Chinameca Alcalde Municipal: Roger Merlos  </li>';
contenedor[7] +='<li>Chirilagua Alcalde Municipal: Manuel Antonio Vásquez Blanco  </li>';
contenedor[7] +='<li>Ciudad Barrios Alcalde Municipal: Heris Neftalí Romero Carballo  </li>';
contenedor[7] +='<li>Comacarán:Alcalde Municipal: Enris Antonio Arias  </li>';
contenedor[7] +='<li>El Tránsito Alcalde Municipal: Roel Werner Martínez Romero  </li>';
contenedor[7] +='<li>Lolotique Alcalde Municipal: Colombo Carballo Vargas  </li>';
contenedor[7] +='<li>Moncagua Alcalde Municipal: Sergio Antonio Solórzano Santos  </li>';
contenedor[7] +='<li>Nueva Guadalupe Alcalde Municipal: Ever Salvador Brizuela Aparicio  </li>';
contenedor[7] += '<h3>Fiestas patronales</h3>';
contenedor[7] += '<li>San Miguel (cabecera),21 de noviembre dedicadas a Nuestra Señora de la Paz.</li>';
contenedor[7] += '<li>Ciudad Barrios,del 20 al 29 de junio en honor de San Pedro Apóstol.</li>';
contenedor[7] += '<li>Chapeltique,del 23 al 26 de julio en honor de Nuestra Señora de Santa Ana y del 12 al 22 de diciembre en honor a La Virgen de Santa Lucía.</li>';
contenedor[7] += '<li>Chinameca,del 28 de julio al 6 de agosto en honor del Salvador del Mundo.</li>';
contenedor[7] += '<li>Sesori,7 de marzo en honor del Sagrado Corazón de Jesús, y el 21 de septiembre en honor a San Mateo Apostol.</li>';
contenedor[7] += '<li>Chirilagua,del 1 al 13 de diciembre en honor a la Virgen de Guadalupe.</li>';
contenedor[7] += '<li>Moncagua,del 15 de enero al 3 de febrero, en honor a la Virgen de Candelaria.</li>';
contenedor[7] += '<li>Uluazapa,del 13 al 26 de enero en honor a la Inmaculada Concepción.</li>';
contenedor[7] += '<li>Quelepa,25 de junio en honor de Santiago Apóstol y 7 de diciembre en honor a La Virgen de Concepción.</li>';
contenedor[7] += '<li>Lolotique,2 de febrero en honor a la Virgen de Candelaria.</li>';
contenedor[7] += '<li>San Rafael,del 23 de octubre al 2 de noviembre, en honor a San Rafael.</li>';
contenedor[7] += '<li>El tránsito,del 10 al 15 de agosto en honor a la Virgen del Tránsito.    </li>';
contenedor[7] += '<li>Carolina,del 22 al 28 de agosto en honor a San Agustín.</li>';
contenedor[7] += '<li>San Gerardo,2 y 3 de octubre en honor a San Gerardo.</li>';
contenedor[7] += '<li>San Luis de la Reina,24 y 25 de agosto en honor a San Luis.</li>';
contenedor[7] += '<li>Nueva Guadalupe,del 22 al 27 de febrero en honor a la Virgen de Guadalupe.</li>';
contenedor[7] += '<li>Comacarán,del 15 al 20 de enero en honor a San Sebastián Mártir.</li>';
contenedor[7] += '<li>San Jorge,del 8 al 11 de abril en honor a La Virgen de Lourdes.</li>';
contenedor[7] += '<li>Nuevo Edén de San Juan,del 21 al 25 de junio en honor de San Juan Bautista.</li>';
contenedor[7] += '<li>San Antonio del Mosco,del 10 al 13 de junio en honor de San Antonio de Padua y del 25 al 30 de enero al Señor de Los Milagros.</li>';
contenedor[7] += '</ul></div>';
fotos[7] = '<img class="mySlides" src="images/sanm1.jpg" >';
fotos[7] += '<img class="mySlides" src="images/san miguel.jpg">';
fotos[7] += '<img class="mySlides" src="images/san-miguel.jpg">';
document.getElementById("logo").innerHTML = departamento[7];
document.getElementById("contenedor").innerHTML = contenedor[7];
document.getElementById("sidebar").innerHTML = barra[7];
document.getElementById("slider").innerHTML = fotos[7];
slider();
}

function La_union(){
document.getElementById("formularios").innerHTML="";
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.3376564,-87.8662064),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[8] = '<h1>La union</h1>';
barra[8] = '<ul><li><h2>Municipios</h2>';
barra[8] += '<ul><li>Anamoros</li><li>Bolívar</li><li>Concepción de Oriente</li><li>Conchagua</li><li>El Carmen</li><li>El Sauce</li><li>Intipucá</li><li>La union</li><li>Lilisque</li><li>Meanguera del Golfo</li><li>Nueva Esparta</li><li>Pasaquina</li><li>Polorós</li><li>San Alejo</li><li>San José</li><li>Santa Rosa de Lima</li><li>Yayantique</li><li>Yucuaiquín</li></ul>';
barra[8] += '<h2> Centros Turisticos</h2>';
barra[8] += '<ul><li>Golfo de Fonseca</li><li>Conchagua</li><li>Volcán Conchagua</li><li>Playas Las Tunas</li><li>Punta Chiquirín</li></ul>';
contenedor[8] = '<div class="post"><h1 class="tittle">Historia, La union</h1>';
contenedor[8] += '<p class="descr">El territorio de lo que hoy es la Ciudad de La Unión, fue divisado por primera vez, desde las aguas del Océano Pacífico, cuando a principios del año 1522, el piloto Andrés Niño llegó al Golfo de Conchagua (Golfo Chorotega), y lo bautizó con el nombre de GOLFO DE FONSECA, en honor al Obispo de Burgos y Presidente del Consejo de Indias, Fraile Juan Rodrigo de Fonseca.<br/>Andrés Niño desembarcó en la Isla de Meanguera del Golfo frente a las actuales playas del Departamento de La Unión, la conquista no se inició, sino dos años más tarde, en 1524 cuando llegó al territorio salvadoreño el Capitán Hernán Cortes, su 29 733 hab.(2012). En 1588 el pirata Drake amenazó a los habitantes del Golfo de Fonseca; así mismo para el año de 1596 los Frailes Seráficos Españoles fundaron la Guardianía de Nuestra Señora de las Nieves de Amapala en el lugar que hoy se conoce como Pueblo Viejo.<br/>Para los años de 1682 llegó una tropa de piratas ingleses al Golfo de Fonseca; se dice que estos causaron destrucción y muerte en los pueblos lencas, los habitantes fueron despojados de sus bienes, razón por la cual emigraron hacia el norte de Honduras y Amapala.<br/>A fines del siglo XVII, por rivalidades entre neoconchaguas y amapalas, los primeros establecieron en el Litoral de la Bahía de Fonseca, el Puerto Perigolfeño denominado "El embarcadero de los conchaguas". A finales del siglo XVIII, Amapala era caserío en franca decadencia, ya sin autoridades militares, civiles y religiosas; por cuya causa se ordenó que sus vecinos se trasladaran a "El embarcadero de los conchaguas", que recibió el nombre de "PUERTO DE SAN CARLOS", en homenaje al Rey de España Carlos III. En 1807 el Puerto de San Carlos, figura incluido como pueblo del partido de San Alejo en la intendencia de San Salvador por el corregidor Antonio Gutiérrez y Ulloa.</p>';
contenedor[8] += '<br/><br/>';
//contenedor[8] += '</div><div class="post">';
contenedor[8] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de La union son:</p><li>Escritor de la union : Napoleón Viera Altamirano</li><li>novelista de la union: Américo Ochoa</li><li>orador del pasado siglo : Juan José Guzmán</li>';
contenedor[8] += '<h2>Alcaldes</h2>';
contenedor[8] += '<li> Anamorós Alcalde Municipal: Salvador Peña Hernández </li>';
contenedor[8] += '<li> Bolívar Alcalde Municipal: Jorge Alberto Lazo Perla </li>';
contenedor[8] +='<li> Concepción de Oriente Alcalde Municipal: Héctor Adán Canales Maldonado </li>';
contenedor[8] +='<li> Conchagua Alcalde Municipal: Jesús Abelino Medina Flores </li>';
contenedor[8] +='<li> El Carmen Alcalde Municipal: Francis Edgardo Zelaya </li>';
contenedor[8] +='<li> El Sauce Alcalde Municipal: Enrique Ovidio Villatoro Paz </li>';
contenedor[8] +='<li> Intipucá Alcalde Municipal: Enrique Méndez Berríos </li>';
contenedor[8] +='<li> La Unión Alcalde Municipal: Ezequiel Milla Guerra </li>';
contenedor[8] +='<li> Lislique Alcalde Municipal: Margarito Pérez Pérez </li> ';
contenedor[8] +='<li> Meanguera del Golfo Alcalde Municipal: Luis Antonio Dheming Almendáres </li> ';
contenedor[8] += '<h3>Fiestas patronales</h3>';
contenedor[8] += '<li>La Unión (Cabecera):del 1 al 15 de diciembre en honor a La Imaculada Concepción de María.</li>';
contenedor[8] += '<li>Anamorós:14 y 15 de agosto, en honor de la Virgen de la Asunción.</li>';
contenedor[8] += '<li>Bolivar:24 al 30 de octubre, en honor a San Simón Apóstol.</li>';
contenedor[8] += '<li>Concepción de Oriente:8 de diciembre en honor a la Virgen de Concepción y 5-6 de enero en honor de los Reyes Magos.</li>';
contenedor[8] += '<li>Conchagua:del 12 al 20 de enero, en honor de San Sebastián Mártir y del 20 al 25 de julio en honor a Santiago Apóstol.</li>';
contenedor[8] += '<li>El Carmen:del 13 al 16 de julio en honor a Nuestra Señora del Carmen.</li>';
contenedor[8] += '<li>El Sauce:del 11 al 13 de junio en honor de San Antonio de Padua.</li>';
contenedor[8] += '<li>Intipucá:del 28 de febrero al 12 de marzo en honor de San Nicolás Tolentino.</li>';
contenedor[8] += '<li>Lislique:del 21 al 25 de julio en honor a Santiago Apóstol.</li>';
contenedor[8] += '<li>Meanguera del Golfo:del 17 al 19 de marzo, en honor al Patrono Sna José.</li>';
contenedor[8] += '<li>Nueva Esparta:28 de junio en honor de San Pedro.</li>';
contenedor[8] += '<li>Pasaquina:del 11 al 21 de enero, en honor de San Sebastián Mártir.</li>';
contenedor[8] += '<li>Polorós:24 de junio en honor a San Juan Bautista.</li>';
contenedor[8] += '<li>San Alejo:16 de julio en honor al Patrón San Alejo.</li>';
contenedor[8] += '<li>Santa Rosa de Lima:del 17 al 31 de Agosto en honor de Santa Rosa de Lima.</li>';
contenedor[8] += '<li>Yayantique:23 y 24 de junio, en honor a San Juan Bautista.</li>';
contenedor[8] += '<li>San José la Fuente:15 al 20 de marzo en honor de San José.</li>';
contenedor[8] += '<li>Yucuaiquín:28 de septiembre al 06 de octubre en honor de San Francisco de Asís.</li>';
contenedor[8] += '</ul></div>';
fotos[8] = '<img class="mySlides" src="images/uni.jpg" >';
fotos[8] += '<img class="mySlides" src="images/la union.jpg">';
fotos[8] += '<img class="mySlides" src="images/la-union.jpg">';
document.getElementById("logo").innerHTML = departamento[8];
document.getElementById("contenedor").innerHTML = contenedor[8];
document.getElementById("sidebar").innerHTML = barra[8];
document.getElementById("slider").innerHTML = fotos[8];
slider();
}

function Usulutan() {
document.getElementById("formularios").innerHTML="";
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.4220199,-88.448334),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[9] = '<h1>Usulutan</h1>';
barra[9] = '<ul><li><h2>Municipios</h2>';
barra[9] += '<ul><li>Alegría</li> <li>Berlín </li><li>California </li><li>Concepción </li><li>Batres </li><li>El Triunfo </li><li>Ereguayquín </li><li>Estanzuelas </li><li>Jiquilisco </li><li>Jucuapa </li><li>Jucuarán </li><li>Mercedes </li><li>Umaña Nueva </li><li>Granada </li><li>Ozatlán </li><li>Puerto El Triunfo </li><li>San Agustín </li><li>San Buenaventura </li><li>San Dionisio </li><li>San Francisco Javier </li><li>Santa Elena </li><li>Santa María </li><li>Santiago de María </li> <li>Tecapán </li><li>Usulután</li></ul>';
barra[9] += '<h2> Centros Turisticos</h2>';
barra[9] += '<ul><li>Playa El espino</li><li>Volvan Tecapa</li><li>Bosque de Nancuchiname</li><li>Parque ecologico de Santa Maria</li><li>balneario la montañitita park </li></ul>';
contenedor[9] = '<div class="post"><h1 class="tittle">Historia, Usulután</h1>';
contenedor[9] += '<p class="descr">Usulután fue habitado originalmente por grupos lencas, su Poblacion 73 064 hab.(2012). Hacia el siglo XV, sin embargo, fueron conquistados por pipiles. Durante la época de la conquista, los residentes repelieron durante un mes a las milicias españolas en el año 1529, quienes estaban bajo el mando de Diego de Rojas. Asimismo, en 1539 hostigaron a una avanzada de Pedro de Alvarado en la zona de la actual Bahía de Jiquilisco. No fue hasta 1553 que Diego de Holguin logró la pacificación del sitio.</br>Centro público de educación media de la ciudad.De acuerdo al arzobispo Pedro Cortés y Larraz, en 1770 la aldea era cabeza de curato y tenía una población 2 047 habitantes. Debido al establecimiento de la Intendencia de San Salvador en 1786, Usulután fue uno de sus Partidos. Con los intentos de emancipación de 1811, Gregorio Melara lideró una serie de disturbios que llegaron a deponer a las autoridades locales, pero al final fue encarcelado. Nuevamente se involucró en los conatos libertarios de 1814, pero también fue apresado y terminó sus días en la Fortaleza de San Fernando en Omoa.</br>En el año 1827 al poblado le fue conferido el título de «villa» y bajo la administración de Gerardo Barrios, el de «ciudad» (1860). Cinco años después fue organizado el departamento de Usulután, y la ciudad como su cabecera. En 1890 habitaban 6 856 personas.</p>';
contenedor[9] += '<br/><br/>';
//contenedor[9] += '</div><div class="post">';
contenedor[9] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de San Vicente son:</p><ul><li>Escritor de Usulután: <ul><li>De esta ciudad es originario Elías Antonio Saca, expresidente de la República de El Salvador  </li><li>el político Schafik Jorge Handal Handal</li><li>el cantautor Álvaro Torres es también de origen usuluteco.</li></ul>';
contenedor[9] += '<h2>Alcaldes</h2>';
contenedor[9] += '<li>Alegría Alcalde Municipal: René Saúl Sánchez Funes </li>';
contenedor[9] += '<li>Berlín Alcalde Municipal: Jesús Antonio Cortéz Mendoza</li>'; 
contenedor[9] += '<li>California Alcalde Municipal: Gregorio Arnulfo Morales Cosme </li>';
contenedor[9] += '<li>Concepción Batres Alcalde Municipal: Walter Antonio Aparicio Henríquez</li>';
contenedor[9] += '<li>Ereguayquín Alcalde Municipal: Melba de Jesús Méndez de Funes</li>';
contenedor[9] += '<li>EstanzuelaS Alcalde Municipal: José Efraín Guzmán Torres</li>';
contenedor[9] += '<li>Jiquilisco Alcalde Municipal: David Barahona Marroquín</li>';
contenedor[9] += '<li>Jucuapa Alcalde Municipal: Juan Antonio Chevez Castillo</li>';
contenedor[9] += '<li>Jucuarán Alcalde Municipal: José Boanerge Carranza Coreas</li>';
contenedor[9] += '<h3>Fiestas patronales</h3>';
contenedor[9] += '<li>Usulután (cabecera): del 17 al 26 de noviembre, dedicadas a Santa Catarina de Alejandría</li>';
contenedor[9] += '<li>Santa María: del 2 al 6 de enero, Romería a la Virgen de los Remedios.</li>';
contenedor[9] += '<li>San Buenaventura: del 10 al 15 de julio en honor del San Bienaventura.</li>';
contenedor[9] += '<li>Ereguayquín: del 12 al 17 de mayo en honor a San Benito de Palermo.</li>';
contenedor[9] += '<li>Estanzuelas: del 8 al 14 de febrero dedicadas a La Señora del Rosario de Fátima y del 8 al 13 de junio en honor a San Antonio de Padua.</li>';
contenedor[9] += '<li>Santiago de María: del 20 al 25 de julio en honor de Santiago Apóstol.</li>';
contenedor[9] += '<li>San Agustín: del 11 al 15 de marzo en honor de San Agustín.</li>';
contenedor[9] += '<li>Berlín: del 15 al 20 de marzo en honor de San José.</</li>';
contenedor[9] += '<li>Ciudad El Triunfo: del 18 al 25 de marzo en honor del Divino Rostro de Jesús.</li>';
contenedor[9] += '<li>Nueva Granada: del 17 al 28 de julio en honor a La Señora Santa Ana.</li>';
contenedor[9] += '<li>Jucuapa: del 20 al 28 de octubre en honor a Nuestro Patrono San Simón Apostol</li>';
contenedor[9] += '<li>Santa Elena: del 10 al 18 de agosto en honor de Santa Elena.</li>';
contenedor[9] += '<li>Jiquilisco: del 25 al 30 de agosto en honor de la Virgen del Tránsito.</li>';
contenedor[9] += '<li>Mercedes Umaña: del 19 al 24 de septiembre en honor a Nuestra Señora de las Mercedes.</li>';
contenedor[9] += '<li>Alegría: del 26 al 29 de junio en honor a San Pedro y del 26 al 30 de septiembre en honor de San Miguel Arcángel.</li>';
contenedor[9] += '<li>San Francisco Javier: del 1 al 4 de diciembre en honor de San Francisco Javier.</li>';
contenedor[9] += '<li>Ozatlán: del 1 al 9 de diciembre en honor de la Inmaculada Concepción.</li>';
contenedor[9] += '<li>Tecapán: del 20 al 25 de julio en honor a Santiago Apostol.</li>';
contenedor[9] += '<li>Concepción Batres: del 11 al 14 de febrero  en honor al Jesusito del Rescate, y del 1 al 8 de diciembre, dedicadas a la Inmaculada Virgen de Concepción.</li>';
contenedor[9] += '<li>San Dionisio: del 17 al 21 de diciembre en honor de San Dionisio.</li>';
contenedor[9] += '<li>California: del 20 al 25 de diciembre en honor a la natividad del Niño Jesús.</li>';
contenedor[9] += '<li>Puerto El Triunfo del 4 al 5 de mayo en honor a la Virgen de Fátima. del 10 al 21 de diciembre, en honor de Santo Tomás Apóstol.</li>';
contenedor[9] += '<li>Quezaltepeque: del 10 al 19 de diciembre en honor de San José.</li>';
contenedor[9] += '<li>Tamanique: del 19 al 21 de noviembre en honor de la Virgen de la Paz.</li>';
contenedor[9] += '<li>San Juan Opico: del 17 al 27 de diciembre, en honor de San Juan Evangelista.</li>';
contenedor[9] += '<li>Antiguo Cuscatlán: 27 y 28 de diciembre, en honor de los Niños Inocentes.</li>';
contenedor[9] += '</ul></div>';
fotos[9] = '<img class="mySlides" src="images/usulutan.jpg"/>';
fotos[9] +='<img class="mySlides" src="images/usulutan 2.jpg" />';
fotos[9] +='<img class="mySlides" src="images/usu1.jpg" />';
document.getElementById("logo").innerHTML = departamento[9];
document.getElementById("contenedor").innerHTML = contenedor[9];
document.getElementById("sidebar").innerHTML = barra[9];
document.getElementById("slider").innerHTML = fotos[9];
slider();
}

function Morazan() {
document.getElementById("formularios").innerHTML="";
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.746818,-88.1418039),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[10] = '<h1>Morazaán</h1>';
barra[10] = '<ul><li><h2>Municipios</h2>';
barra[10] += '<ul><li> Arambala </li><li>Cacaopera </li><li>Chilanga </li><li>Corinto </li><li>Delicias de Concepción </li><li>El Divisadero </li><li>El Rosario </li><li>Gualococti </li><li>Guatajiagua</li><li>Joateca </li><li>Jocoaitique </li><li>Jocoro </li><li>Lolotiquillo</li> <li>Meanguera </li><li>Osicala </li><li>Perquín </li><li>San Carlos </li><li>San Fernando </li><li>San Francisco </li><li>Gotera </li><li>San Isidro </li><li>San Simón </li><li>Sensembra </li><li>Sociedad </li><li>Torola </li><li>Yamabal </li><li>Yoloaiquín</li></ul>';
barra[10] += '<h2> Centros Turisticos</h2>';
barra[10] += '<ul><li>Llano del muerto</li><li>Parque de Bolívar</li><li>Salto El Perol</li><li>Cueva del Espíritu Santo</li></ul>';
contenedor[10] = '<div class="post"><h1 class="tittle">Historia, Morazán</h1>';
contenedor[10] += '<p class="descr">En el departamento todavía se conservan rastros de la presencia de los paleoindios —primeros pobladores de El Salvador— en la Cueva del Espíritu Santo. Su Poblacion 251,447 hab.(2006), un sitio arqueológico con pinturas rupestres en las cercanías del municipio de Corinto. En la época previa a la conquista española, Morazán estuvo habitado por indígenas lencas.</br>En la época colonial, el territorio estuvo subdivido en los partidos de Gotera y Osicala. Fue creado con el nombre de departamento de Gotera el 14 de julio de 1875, por disposición del presidente Santiago González. Por decreto de la Asamblea Legislativa recibió su nombre actual el 14 de marzo de 1887, en homenaje al unionista centroamericano general Francisco Morazán.</br>Durante la Guerra Civil de El Salvador, Morazán fue una de las zonas más disputadas del territorio nacional. El Ejército Revolucionario del Pueblo, una de las organizaciones integrantes del FMLN, concentró una numerosa tropa insurgente en varios campamentos de la zona norte del departamento. Asimismo, cerca de Perquín estuvo instalada la base de operaciones de Radio Venceremos. En 1981, una unidad de la Fuerza Armada de El Salvador perpetró cerca de Arambala la Masacre de El Mozote, en la que murieron unos 1 000 campesinos.</br></p>';
contenedor[10] += '<br/><br/>';
//contenedor[10] += '</div><div class="post">';
contenedor[10] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de San Vicente son:</p><ul><li>el educador :Joaquín Rodezno</li><li>el ex presidente de la República : Fidel Sánchez Hernández.</li><li>poeta nacido en Morazan : Renán Alcides Orellana, </li></ul>';
contenedor[10] += '<h2>Alcaldes</h2>';
contenedor[10] += '<li>Arambala Alcalde Municipal: Mariano Blanco Díaz  </li>';
contenedor[10] += '<li>Cacaopera Alcalde Municipal: José Pablo Amaya González </li>'; 
contenedor[10] += '<li>Chilanga Alcalde Municipal: Victoriano Márquez Cruz  </li>';
contenedor[10] += '<li>Corinto Alcalde Municipal: Gilberto Antonio Sorto Castro </li>';
contenedor[10] += '<li>Delicias de Concepción Alcalde Municipal: Rogelio Arturo Argueta Sorto</li>';
contenedor[10] += '<li>El Divisadero Alcalde Municipal: Ángel Rubén Benítez Andrade</li>';
contenedor[10] += '<li>El Rosario Alcalde Municipal: Loida Celina Claros de Urbina</li>';
contenedor[10] += '<li>Gualococti Alcalde Municipal: Carlos Antonio Díaz Díaz</li>';
contenedor[10] += '<li>Guatajiagua Alcalde Municipal: Lucio Velis Canales</li>';
contenedor[10] += '<li>Joateca Alcalde Municipal: José Osmín Ramos Bonilla</li>';
contenedor[10] += '<h3>Fiestas patronales</h3>';
contenedor[10] += '<li>San Francisco Gotera (cabecera): del 1 al 4 de octubre, en honor de San Francisco de Asís.</li>';
contenedor[10] += '<li>Arambala: del 20 al 24 de agosto, en honor de San Bartolomé.</li>';
contenedor[10] += '<li>Cacaopera: del 13 al 15 de agosto, en honor de la Virgen del Tránsito.</li>';
contenedor[10] += '<li>Corinto: del 27 al 29 de junio, en honor de San Pablo.</li>';
contenedor[10] += '<li>Chilanga: del 22 y 23 de julio, en honor a María Magdalena.</li>';
contenedor[10] += '<li>Delicias de Concepción: del 4 al 7 de diciembre, en honor de la Inmaculada Virgen de Concepción.</li>';
contenedor[10] += '<li>El Divisadero: del 9 al 16 de diciembre, en honor de la Virgen Santa Lucía.</li>';
contenedor[10] += '<li>El Rosario: primer domingo de octubre, en honor de la Virgen Nuestra Señora del Rosario.</li>';
contenedor[10] += '<li>Gualococti: del 26 al 29 de diciembre, en honor de San Miguel  Arcángel.</li>';
contenedor[10] += '<li>Guatajiagua: del 18 al 20 de enero, en honor de San Sebastián Mártir.</li>';
contenedor[10] += '<li>Joateca: del 11 al 15 de junio, en honor de San Antonio de Padua y del 10 al 16 de diciembre fiestas titulares en honor a La Virgen de Concepción.</li>';
contenedor[10] += '<li>ocoaitique: 18 y 19 de marzo, en honor de San José.</li>';
contenedor[10] += '<li>Jocoro: 2 de febrero, en honor de la Virgen de Candelaria.</li>';
contenedor[10] += '<li>Lolotiquillo: del 20 al 27 de enero y del 15 al 17 de septiembre en honor de San Francisco de las Llagas.</li>';
contenedor[10] += '<li>Meanguera: del 1 al 4 de octubre en honor a San Francisco de Asís, y del 22 al 25 de noviembre, en honor de Santa Catarina.</li>';
contenedor[10] += '<li>Osicala: del 19 al 24 de junio, en honor de San Juan Bautista.</li>';
contenedor[10] += '<li>Perquín: del 20 al 22 de enero en honor a San Sebastian.</li>';
contenedor[10] += '<li>San Carlos: del  1 al 5 de noviembre, en honor de San Carlos de Borromeo.</li>';
contenedor[10] += '<li>San Fernando: del 29 al 31 de mayo en honor de San Fernando.</li>';
contenedor[10] += '<li>San Isidro: del 12 al 15 de mayo, en honor de San Isidro Labrador y del 17 al 20 de diciembre en honor a La Virgen de Santa Lucía</li>';
contenedor[10] += '<li>San Simón: del 9 al 16 de enero, en honor al Señor de Los Milagros.</li>';
contenedor[10] += '<li>Sensembra: del 28 al 29 de junio, en honor de San Pedro Apóstol.</li>';
contenedor[10] += '<li>Sociedad: del 20 al 24 de junio, en honor San Juan Bautista.</li>';
contenedor[10] += '<li>Torola: del 23 al 25 de julio, en honor a Santiago Apóstol.</li>';
contenedor[10] += '<li>Yamabal: del 26 al 30 de noviembre, en honor de San Andrés.</li>';
contenedor[10] += '<li>Yoloaiquín: del 21 al 26 de abril en honor de San Marcos Evangelista.</li>';
contenedor[10] += '</ul></div>';
fotos[10] = '<img class="mySlides" src="images/mor1.jpg"/>';
fotos[10] +='<img class="mySlides" src="images/morazan.jpg" />';
fotos[10] +='<img class="mySlides" src="images/morazan2.jpg" />';
document.getElementById("logo").innerHTML = departamento[10];
document.getElementById("contenedor").innerHTML = contenedor[10];
document.getElementById("sidebar").innerHTML = barra[10];
document.getElementById("slider").innerHTML = fotos[10];
slider();
}

function sanSalvador() {
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.6927471, -89.2192422),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[11] = '<h1>San Salvador</h1>';
barra[11] = '<ul><li><h2>Municipios</h2>';
barra[11] += '<ul> <li>Aguilares</li><li>Apopa</li> <li>Ayutuxtepeque</li> <li>Cuscatancingo</li><li>Delgado</li><li>El Paisnal</li><li>Guazapa</li><li>Ilopango</li><li>Mejicanos</li><li>Nejapa</li><li>Panchimalco</li><li>Rosario de Mora</li><li>San Marcos</li><li>San Martín</li><li>San Salvador</li><li>Santiago Texacuangos</li><li>Santo Tomás</li><li>Soyapango</li><li>Tonacatepeque</li>';
barra[11] += '<h2> Centros Turisticos</h2>';
barra[11] += '<ul><li>Museo de la Palabra y La Imagen. </li><li>Museo de Arte Popular. </li><li>Museo de Arte de El Salvador. </li><li>Museo Nacional de Antropología. </li><li>Museo de Historia Militar. </li><li> Café del Volcán</li><li>Las Brumas Grill y Café</li> <li>La Pampa El Volcán</li><li>Plaza Volcán</li><li>Parque el Boqueron</li>';
contenedor[11] = '<div class="post"><h1 class="tittle">Historia de San Salvador </h1>';
contenedor[11] += '<p class="descr">Su nombre antiguo fue Quetzalcoatitán, su Poblacion 2 266 387 hab.(2006)., cuyo significado es “tierra de quetzales”, posiblemente porque en la antigüedad esta zona estaba bastante poblada de esas bellas aves. Es el departamento más antiguo de El Salvador; fue fundado como capital de la República en 1525, o sea hace más de 400 años. </br>Tres siglos después, el 12 de junio de 1824, fue elevado a la categoría de departamento. Otro de los nombres que los conquistadores le pusieron fue “Valle de las hamacas” por la constante actividad volcánica. Muchas desgracias han ocurrido durante la historia por ello. Como los pipiles acechaban a los colonizadores, Diego de Alvarado tuvo que trasladar la capital al “Valle de la Bermuda”, ubicado en las cercanías de Suchitoto (Cuscatlán) en 1528. </br>Ese lugar era árido y frecuentemente castigado por tormentas eléctricas, lo que obligó a los españoles a regresar al valle de Quetzalcoatitán en 1545. Pero ya no se asentaron en el valle anterior, sino que construyeron una nueva villa en las orillas del río Acelhuate, poniéndola bajo la advocación del Divino Salvador del Mundo, en honor de quien se celebran las fiestas patronales a principios de agosto cada año en la actualidad. San Salvador posee una extensión territorial de 886,15 kilómetros cuadrados y su población es de al rededor de dos millones y medio de personas. </br></p>';
contenedor[11] += '<br/><br/>';
//contenedor[11] += '</div><div class="post">';
contenedor[11] += '<h2>Departamento de San Salvador</h2>';
contenedor[11] += '<p> Alrededor del lo. de abril de 1525, fundaron la villa de San Salvador. A mediados del 27 de septiembre de 1546, partieron rumbo a España el Procurador de Guatemala don Hernán Méndez de Sotomayor y el Procurador de San Salvador don Alfonso de Oliveros, quienes llevaban instrucciones del cabildo de la villa para que gestionaran en la Corte el título de ciudad para esta Colonia. El 12 de junio de 1824, el Primer Congreso Constituyente Salvadoreño, decretó que el nombre de la antigua Intendencia de San Salvador, a la que se unió el territorio de la antigua Alcaldía Mayor de Sonsonate, sería Estado de El Salvador.San Salvador fue designada capital de ese Estado y del departamento de igual nombre. El 31 de julio de 1824, apareció en esta ciudad el primer periódico salvadoreño de nombre El Seminario Político Mercantil. El 28 de enero de 1835 fue declarada la ciudad de San Salvador capital de la República Federal de Centro América. Allí residieron las autoridades federales hasta su completa disolución el 30 de julio de 1839.De 1840 a 1854 San Salvador fue capital de El Salvador; de 1854 a 1858 la capital estuvo interinamente en Cojutepeque y desde este año hasta la fecha, San Salvador ha sido ininterrumpidamente la capital de la República.   </p>';
contenedor[11] += '<h3>Fiestas patronales</h3>';
contenedor[11] += '<li>Santa Ana (cabecera),Del 17 al 26 de julio, en honor de Nuestra Señora de Santa Ana..</li>';
contenedor[11] += '<li>San Salvador (Cabecera)del 1 al 6 de agosto, en honor del Divino Salvador del Mundo.</li>'
contenedor[11] += '<li> Aguilares,del 6 al 15 de enero, en honor del Señor de las Misericordias.</li>'
contenedor[11] += '<li> Ayutuxtepeque,del 20 al 30 de enero, en honor de San Sebastián Mártir.</li>'
contenedor[11] += '<li> El Paisnal,del 11 al 19 de marzo, en honor de San José Patriarca.</li>'
contenedor[11] += '<li> San Marcos,del 19 al 30 de abril, en honor de San Marcos Evangelista.</li>'
contenedor[11] += '<li> Ciudad Delgado,del 12 al 25 de julio en honor a Santiago Apóstol.</li>'
contenedor[11] += '<li> Santiago Texacuangos,del 20 al 25de julio en honor de Santiago Apóstol.</li>'
contenedor[11] += '<li> Mejicanos,del 7 al 15 de agosto en honor de la Virgen del Tránsito.</li>'
contenedor[11] += '<li> Panchimalco,del 1 al 15 de septiembre, en honor de la Santa Cruz de Roma.</li>'
contenedor[11] += '<li> Guazapa,del 25 al 29 de septiembre, en honor de San Miguel Arcángel.</li>'      
contenedor[11] += '<li> Nejapa,del 20 al 30 de septiembre, en honor de San Jerónimo Doctor.</li>'
contenedor[11] += '<li> Rosario de Mora,del 1 al 7 de octubre, en honor de Nuestra Señora del Rosario.</li>'
contenedor[11] += '<li> Soyapango,6 de junio en honor a San Antonio de Padua y la 1era semana de octubre en honor a Nuestra Señora del Rosario.</li>'
contenedor[11] += '<li> San Martín,del 1 al 12 de noviembre, en honor de San Martín Obispo.</li>'
contenedor[11] += '<li>Ilopango,del 1 al 16 de noviembre, en honor de San Cristóbal.</li>'
contenedor[11] += '<li> Apopa,del 19 al 25 de noviembre, en honor de Santa Catarina.</li>'
contenedor[11] += '<li> Tonacatepeque,del 27 de noviembre al 6 de diciembre, en honor de San Nicolás Obispo.</li>'
contenedor[11] += '<li>Cuscatancingo,del 21 de noviembre al 10 de diciembre, en honor de la Inmaculada Virgen de Concepción.</li>'
contenedor[11] += '<li> Santo Tomás,del 10 al 21 de diciembre, en honor de Santo Tomás Apóstol.</li>'
contenedor[11] += '<li> Quezaltepeque:del 10 al 19 de diciembre en honor de San José.</li>'
contenedor[11] += '<li> Tamanique:del 19 al 21 de noviembre en honor de la Virgen de la Paz.</li>'
contenedor[11] += '<li>San Juan Opico:del 17 al 27 de diciembre, en honor de San Juan Evangelista.</li>'
contenedor[11] += '<li>Antiguo Cuscatlán:27 y 28 de diciembre, en honor de los Niños Inocentes.</li>'
contenedor[11] += '</ul></div>';
fotos[11] = '<img class="mySlides" src="images/san.jpg"/>';
fotos[11] +='<img class="mySlides" src="images/san1.jpg" />';
fotos[11] +='<img class="mySlides" src="images/san2.jpg" />';
fotos[11] +='<img class="mySlides" src="images/san3.jpg" />';
document.getElementById("logo").innerHTML = departamento[11];
document.getElementById("contenedor").innerHTML = contenedor[11];
document.getElementById("sidebar").innerHTML = barra[11];
document.getElementById("slider").innerHTML = fotos[11];
slider();
}

function laPaz() {
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.5,-88.86666),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[12] = '<h1>La Paz </h1>';
barra[12] = '<ul><li><h2>Municipios</h2>';
barra[12] += '<ul><li>Zacatecoluca</li><li>San Emigdio</li><li>Cuyultitán</li><li>El Rosario</li><li>Jerusalén</li><li>Mercedes La Ceiba</li><li>Olocuilta</li><li>Paraiso De Osorio</li><li>San Antonio Masahuat</li><li>San Francisco Chinameca</li><li>San Pedro Masahuat</li><li>San Juan Nonualco</li><li>San Juan Talpa</li><li>San Juan Tepezontes</li><li>San Luis La Herradura</li><li>San Luis Talpa</li><li>San Miguel Tepezontes</li><li>San Pedro Nonualco</li><li>San Rafael Obrajuelo</li><li>Santa María Ostuma</li><li>Santiago Nonualco</li><li>Tapalhuaca</li>';
barra[12] += '<h2> Centros Turisticos</h2>';
barra[12] += '<ul><li>Turicentro Costa del Sol</li><li>Bocana Estero de Jaltepeque</li><li>Turicentro ICHANMICHEN</li><li>Volcan  CHICHONTEPEC</li>';
contenedor[12] = '<div class="post"><h1 class="tittle">Historia de La Paz </h1>';
contenedor[12] += '<p class="descr">El territorio del departamento tiene una Poblacion 288 022 hab.(2007), de acuerdo con los restos arqueológicos hallados en el sector comprendido entre los ríos Lempa y Jiboa, estuvo poblado por comunidades mayances o mayas-quichés hasta fines del siglo XI. Por entonces se produjo la primera oleada invasora de pueblos nahuas mesoamericanos. Tras la ocupación tolteca, en cuyo proceso de asentamiento tendieron a mezclarse con las tribus mayas locales, se establecieron cuatro siglos más tarde los nonualcos, pertenecientes al grupo pipil azteca.</br> A ellos se debe la fundación o repoblación de núcleos urbanos como los de Cuyultitán, Analco, Tecoluca, Santiago, San Pedro, San Juan Nonualco, Santa María Ostuma y Zacatecoluca. Esta última población era, en tiempos de la colonia, una de las cuatro urbes precolombinas de mayor importancia del país y, como tal, fue designada cabecera de partido en 1786. En 1814, la ciudad de Zacatecoluca protagonizó uno de los episodios más significativos del movimiento independentista salvadoreño, cuando los nonualcos se alzaron en armas, tomaron la población y obligaron a su intendente a proclamar la emancipación. Una vez lograda ésta, la creciente población y riqueza de Zacatecoluca determinó que en 1823 la población fuera elevada a la categoría de villa, alcanzando la de ciudad en 1844. En 1852, el gobierno de Francisco Dueñas creó el departamento a partir de territorio que desde 1824 era parte del departamento de San Vicente. </p>';
contenedor[12] += '<br/><br/>';
//contenedor[12] += ' </div><div class="post">';
contenedor[12] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de La paz son:<li>José Simeón Cañas</li><li>José Damián Villacorta</li><li>Dionisio Villacorta</li><li>Juan Vicente Villacorta Díaz</li><li>Camilo Minero</li><li>Julio Adalberto Rivera</li><li>Ángel Guirola</li>';
contenedor[12] += '<h2>Departamento de la Paz</h2>';
contenedor[12] += '<p class="descr"> La Paz es un departamento de El Salvador que se ubica en la zona central del país. Sus límites geográficos son los siguientes: al norte con Cuscatlán, al este con San Vicente, al sur con el Océano Pacífico y al oeste con San Salvador. </br>Anuncios El departamento de La Paz se encuentra a una altitud de 220 metros sobre el nivel del mar y posee una extensión territorial de 1,223 kilómetros cuadrados. Fue fundado como departamento el 21 de febrero de 1852, con base a los distritos de Olocuilta y Zacatecoluca, denominando a este último como cabecera del departamento. Es la cuna de hombres y mujeres que son parte de la historia nacional, como el indio Anastasio Aquino, quien se proclamó “rey de los nonualcos”, y el presbítero y doctor José Simeón Cañas y Villacorta, libertador de los esclavos en Centro América. . </p>';
contenedor[12] += '<h3>Fiestas patronales</h3>';
contenedor[12] +='<li>Zacatecoluca:del 13 al 27 de diciembre en honor de Santa Lucía, Nuestra Señora de los Pobres</li>'
contenedor[12] +='<li> Cuyultitán:del 16 al 25 de noviembre en honor de Santa Catarina Mártir.</li>'
contenedor[12] +='<li>Mercedes de la Ceiba:El último fin de semana de noviembre dedicadas a Nuestra Señora de las Mercedes.</li>'
contenedor[12] +='<li> Olocuilta:del 19 al 24 de junio, en honor a San Juan Bautista y del 27 de septiembre al 7 de octubre en honor a la Virgen del Rosario.</li>'
contenedor[12] +='<li> Paraíso de Osorio:del 11 al 13 de marzo dedicadas a la Santa Cruz.</li>'
contenedor[12] +='<li> Rosario de la Paz:del 1 al 7 de octubre y del 11 al 19 de diciembre en honor de Nuestra Señora del Rosario.</li>'
contenedor[12] +='<li> San Juan Tepezontes:del 23 al 27 de diciembre en honor de San Juan Evangelista.</li>'
contenedor[12] +='<li> San Miguel Tepezontes:del 25 al 29 de septiembre, dedicadas a San Miguel Arcángel.</li>     '
contenedor[12] +='<li> San Juan Talpa:del 9 al 18 de diciembre en honor a la Virgen de María de la O.</li>'
contenedor[12] +='<li> San Luis Talpa:del 18 al 28 de noviembre dedicadas a San Luis rey de Francia.</li>'
contenedor[12] +='<li> Santa María Ostuma:del 23 de enero al 2 de febrero en honor de la Virgen de Candelaria.</li>'
contenedor[12] +='<li> San Luis la Herradura:del 17 al 25 de febrero en honor de Luis Gonzaga.</li>'
contenedor[12] +='<li> San Antonio Masahuat:del 2 al 13 de junio en honor de San Antonio de Padua.</li>'
contenedor[12] +='<li> San Pedro Masahuat:del 8 al 15 de enero en honor del Cristo Negro y del 25 al 29 de junio, en honor a San Pedro Apóstol.</li>'
contenedor[12] +='<li> San Pedro Nonualco:del 21 al 30 de junio dedicadas a San Pedro Apóstol, y del 1 al 6 de febrero en honor del Dulce Nombre de Jesús.</li>'
contenedor[12] +='<li> San Francisco Chinameca:del 1 al 5 de octubre en honor de San Francisco de Asís.</li>     '
contenedor[12] +='<li> Santiago Nonualco:del 17 al 24 de julio en honor de Santiago Apóstol.</li>'
contenedor[12] +='<li> San Emigdio:del 9 al 18 de agosto en honor a San Emigdio.</li>'
contenedor[12] +='<li>San Juan Nonualco:del 26 de abril al 3 de Mayo en honor del Señor de la Caridad y el 24 de junio en honor a San Juan Bautista.</li>'
contenedor[12] +='<li> San Rafael Obrajuelo:del 14 al 24 de octubre en honor de San Rafael Arcángel</li>'
contenedor[12] +='<li>Tapalhuaca:del 13 al 22 de julio en honor de María Magdalena.</li>'
contenedor[12] +='<li>Jerusalén:del 15 al 30 de mayo en honor a Jesús del Triunfo.</li>'
contenedor[12] += '</ul></div>';
fotos[12] = '<img class="mySlides" src="images/lapaz.jpg"/>';
fotos[12] +='<img class="mySlides" src="images/lapaz2.jpg" />';
fotos[12] +='<img class="mySlides" src="images/lapaz3.png" />';
fotos[12] +='<img class="mySlides" src="images/lapaz4.jpg" />';
document.getElementById("logo").innerHTML = departamento[12];
document.getElementById("contenedor").innerHTML = contenedor[12];
document.getElementById("sidebar").innerHTML = barra[12];
document.getElementById("slider").innerHTML = fotos[12];
slider();
}

function cabañas() {
var mapita;
mapita='<div id="googleMap" class = "google" style=""></div>';
document.getElementById("prueba").innerHTML="";
document.getElementById("prueba").innerHTML=mapita;
var mapProp= {center:new google.maps.LatLng(13.8643972, -88.7509086),zoom:10,};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
departamento[13] = '<h1>Cabañas</h1>';
barra[13] = '<ul><li><h2>Municipios</h2>';
barra[13] += '<ul><li>Cinquera</li><li>Dolores </li><li>Guacotecti </li><li>Ilobasco </li><li>Jutiapa </li><li>San Isidro </li><li>Sensuntepeque </li><li>Tejutepeque </li><li>Victoria</li>';
barra[13] += '<h2> Centros Turisticos</h2>';
barra[13] += '<ul> <li>Cascada Los Tercios-Suchitoto </li><li>La Casa de La Hacienda</li><li>el parque de agilares cabañas</li><li>Parque Central Enrique Hoyos</li>';
contenedor[13] = '<div class="post"><h1 class="tittle">Historia de Cabañas </h1>';
contenedor[13] += '<p class="descr"> Según uno de sus biógrafos, el general hondureño José Trinidad Cabañas; "era centroamericano por sus ideales y aspiraciones a las que dedicó su vida." Esto inspiró a los legisladores del país quienes, queriendo honrar la memoria de este valeroso soldado bautizaron con su nombre este departamento el 10 de febrero de 1873 por medio de Decreto Legislativo. </br>Los historiadores afirman que el General Cabañas, peleó al lado del General Francisco Morazán, a quien logró rescatar el 14 de septiembre de 1842, cuando se encontraba situado en San José, Costa Rica. En 1852, el Gral. Cabañas asumió la presidencia de Honduras y luego fue derrocado. Estuvo también al servicio del Gral. Gerardo Barrios, de quien era cuñado.</br>Después de la trágica muerte del patriota Barrios, en 1865, José Trinidad Cabañas se retiró en condiciones precarias, pero con dignidad a Honduras, donde murió el año de 1871.</br>El actual gobernador departamental es el médico Vicente Rovira Guzmán nombrado en julio de 2009, por el presidente de El Salvador, Mauricio Funes.</br>El ex gobernador departamental por los años 1994-2003, José Arturo Vásquez Machado, fue asesinado el 9 de noviembre de 2009 en la capital San Salvador.</br> </p>';
contenedor[13] += '<br/><br/>';
//contenedor[13] += ' </div><div class="post">';
contenedor[13] += '<h2>Personajes sobresalientes</h2><p>Algunos de los personajes sobresalientes del Departamento de Cabañas son:<li>Laura Hernández de Salazar : Nació en Tejutepeque el 24 de octubre de 1930. Recibió su título de maestra en 1951.Obras inéditas “Cantos primaverales”, “Narraciones en verso”, “Los niños desheredados” y “Árbol genealógico”.</li></br></br><li>Maura Echeverría :Poeta nacida en Sensuntepeque. Ganó el primer lugar en la rama poesía en los Primeros Juegos Florales de su ciudad natal, en 1975.Ganó el primer lugar en el certamen magisterial de cuento del Ministerio de Educación en 1976. Obras publicadas “Voces bajo mi piel” (1980), “Sándalo” (1982), “Ritual del silencio” (1984) “Cundeamor” (1985), “Con la vida a cuestas” (1989).</li></br></br><li>José Ángel Castillo: Nació el uno de octubre de 1931 en Sensuntepeque. Se graduó de profesor en 1947.Ha alcanzado notoriedad en las letras, escribiendo poemas y prosas. Se ha distinguido en el arte de la oratoria.</li>';
contenedor[13] += '<h2>Departamento de Cabañas</h2>';
contenedor[13] += '<p class="descr">	Cabañas es un departamento de El Salvador que pertenece a la zona central del país. Sus límites geográficos son: al norte y noreste por el río Lempa, que sirve como linea divisoria entre El Salvador y Honduras, al este por San Miguel, al sur por San Vicente y al oeste por Cuscatlán. Anuncios En realidad este es uno de los departamentos más jóvenes de El Salvador.</br> Su creación data del 10 de febrero de 1873, siendo su cabecera Sensuntepeque. Otra ciudad importantes es Ilobasco, cuna de los muñecos y de las figuras de barro. Sensuntepeque fue el lugar donde se rompió definitivamente el pacto de unión que constituían los Estados Unidos de Centro América. Esto sucedió el 18 de noviembre de 1898. El departamento tiene una extensión territorial de 1,103 kilómetros cuadrados y se divide en dos distritos: Sensuntepeque e Ilobasco. Poblacion 214 150 hab.(2012) </p>';
contenedor[13] += '<h3>Fiestas patronales</h3>';
contenedor[13] +='<li>Sensuntepeque (cabecera):del 25 de noviembre al 5 de diciembre, en honor de Santa Bárbara. </li>' 
contenedor[13] +='<li> Guacotecti:del 11 al 22 de enero, en honor a la Señora de Las Misericordias.</li>'
contenedor[13] +='<li> Dolores:marzo o abril es fecha movible, en honor de la Virgen de Dolores.</li>'
contenedor[13] +='<li> San Isidro:del 7 al 15 de mayo, en honor de San Isidro Labrador.</li>'
contenedor[13] +='<li> Ilobasco:del 20 al 29 de septiembre, en honor de San Miguel Arcángel.</li>'
contenedor[13] +='<li> Tejutepeque:del 16 al 24 de octubre, en honor de San Rafael Arcángel.</li> '    
contenedor[13] +='<li> Victoria:del 12 al 21 de noviembre, en honor de la Virgen de Las Victorias.</li>'
contenedor[13] +='<li> Jutiapa:del 18 al 20 de noviembre, en honor a San Cristóbal.</li>'
contenedor[13] +='<li> Cinquera:del 5 al 9 de diciembre, en honor de San Nicolás Obispo y el 18 de febrero en honor a La Virgen de Los Remedios.</li>'
contenedor[13] += '</ul></div>';
fotos[13] = '<img class="mySlides" src="images/caba.jpg"/>';
fotos[13] +='<img class="mySlides" src="images/caba1.jpg" />';
fotos[13] +='<img class="mySlides" src="images/caba2.jpg" />';
fotos[13] +='<img class="mySlides" src="images/caba3.jpg" />';
document.getElementById("logo").innerHTML = departamento[13];
document.getElementById("contenedor").innerHTML = contenedor[13];
document.getElementById("sidebar").innerHTML = barra[13];
document.getElementById("slider").innerHTML = fotos[13];
slider();
}

function contactanos (){
var contactanos
contactanos='<h3>Aqui puedes Contactarnos</h3>'
contactanos+= '<h4>Nombre completo:<h4><input type="text" name="nombre" id="nombre" pattern="^[a-zA-Z\s]+$" title="Solo se aceptan letras" class="control" placeholder="Nombre"  required><br>'
contactanos+='<h4>Correo Electronico:<h4> <input type="text" id="correo" title="Formato de correo: NombreCorreo@dominio" class="control" placeholder="Correo Electronico" required><br>'       
contactanos+='<h4>Escribenos tu comentario:<h4><input id="coment" type="text" id="nombre"  pattern="^[a-zA-Z\s]+$" title="Solo se aceptan letras" class="control" required maxlength="700" minlength="20" >'
contactanos+='<h4><h4> <input type="button" id="boton" value="enviar">'
document.getElementById("formularios").innerHTML = contactanos;
document.getElementById("formularios").innerHTML = contactanos;
document.getElementById("logo").innerHTML = "";
document.getElementById("contenedor").innerHTML = "";
document.getElementById("sidebar").innerHTML = "";
document.getElementById("slider").innerHTML = "";
document.getElementById("prueba").innerHTML="";
document.getElementById("boton").onclick=function(){comentariosf();}
}

function comentariosf() {
var name=document.getElementById("nombre").value;
sessionStorage.setItem("nombre",name);
var cor=document.getElementById("correo").value;
sessionStorage.setItem("correo",cor);
var com=document.getElementById("coment").value;
sessionStorage.setItem("coment",com);

for (var i = 0; i < comentarios.length; i++) {
if (comentarios[i]=="") {
comentarios[i]='<div><p>nombre :'+sessionStorage.getItem("nombre")+'<p>';
comentarios[i]+='<p>correo :'+sessionStorage.getItem("correo")+'<p>';
comentarios[i]+='<p>comentario :'+sessionStorage.getItem("coment")+'<p><div>';
break;};
};
localStorage.setItem('datos', JSON.stringify(comentarios));
}

function comentariost(){
document.getElementById("logo").innerHTML = "";
document.getElementById("contenedor").innerHTML = "";
document.getElementById("sidebar").innerHTML = "";
document.getElementById("slider").innerHTML = "";
document.getElementById("prueba").innerHTML="";
document.getElementById("formularios").innerHTML = "";
var guardado = localStorage.getItem('datos');
var guardado = JSON.parse(guardado);
document.getElementById("formularios").innerHTML= guardado;
}

function miembros() {
var miem;
miem='<h1>Slider Del Grupo :</h1><div id="slider">';
miem+='<a href="#" class="control_next">></a>';
miem+='<a href="#" class="control_prev"><</a>';
miem+='<ul>';
miem+='<li><img src="images/jorge.jpg"></li>';
miem+='<li style="background: #aaa;"><img src="images/manuel.jpg"></li>';
miem+='<li><img src="images/mario.jpg"></li>';
miem+='<li style="background: #aaa;"><img src="images/willian.jpg"></li>';
miem+='</ul>';
miem+='</div>';
miem+='<div class="slider_option">';
miem+='<input type="checkbox" id="checkbox">';
miem+='<label for="checkbox">Autoplay Slider</label>';
document.getElementById("logo").innerHTML = "";
document.getElementById("contenedor").innerHTML = "";
document.getElementById("sidebar").innerHTML = "";
document.getElementById("slider").innerHTML = "";
document.getElementById("prueba").innerHTML="";
document.getElementById("formularios").innerHTML = "";
document.getElementById("formularios").innerHTML= miem;
efecto();
efectos();
}

function efecto(){
;(function($) {

$.fn.letterDrop = function() {
  // Chainability
  return this.each( function() { 
  
  var obj = $( this );
  
  var drop = {
    arr : obj.text().split( '' ),
    
    range : {
      min : 1,
      max : 9
    },
    
    styles : function() {
      var dropDelays = '\n', addCSS;
      
       for ( i = this.range.min; i <= this.range.max; i++ ) {
         dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';  
       }
      
        addCSS = $( '<style>' + dropDelays + '</style>' );
        $( 'head' ).append( addCSS );
    },
    
    main : function() {
      var dp = 0;
      obj.text( '' );
      
      $.each( this.arr, function( index, value ) {

        dp = dp.randomInt( drop.range.min, drop.range.max );
        
        if ( value === ' ' )
          value = '&nbsp'; //Add spaces
        
          obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );
        
      });
          
    }
  };
   
  Number.prototype.randomInt = function ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  };
  
  
  // Create styles
  drop.styles();


    // Initialise
    drop.main();
  });

};

}(jQuery));


// USAGE
$( 'h1' ).letterDrop();

}

function efectos(){
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });
  
  var slideCount = $('#slider ul li').length;
  var slideWidth = $('#slider ul li').width();
  var slideHeight = $('#slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('#slider').css({ width: slideWidth, height: slideHeight });
  
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});    

}

function slider() {
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}}




