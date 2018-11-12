
var imgTalleres = ["ameliaRuiz","alexanderTorres","diegoPaz","fernandaMelgar","jorgeFlores","luciaDavila","mariaFe","sebastianRojas"];
var titleTalleres = ["Plumas y papel","Influyentes","Diseñando Pictogramas","El Cómic","Food Styling","POP-UP","¿Cómo generar Ideas?","Creatividad 2.0"];
var subTitleTalleres = ["Amelia Ruiz","Alexander Torres","Diego Paz","Fernanda Melgar","Jorge Flores","Lucía Davila","María Fé Sol","Sebastian Rojas"];
var textTalleres = ["Workshop de caligrafia Graffiti, donde aprendemos a descodificar y Abstraer la estructuras de las letras coló la cultura del graffiti lo ha hecho al rededor del mundo, de donde nació este estilo caligráfico y review del caso barraLima",
"Poner en marcha una estrategia de contenido que incluya recursos digitales y redes sociales para construir una marca personal influyente o un negocio de emprendimiento. Cada participante terminará el taller con el modelo de su plan con objetivos precisos",
"Charla – taller. Se dará a conocer los principios básicos para el diseño de pictogramas. Estos forman parte de nuestras actividades diarias e influyen en nuestro comportamiento, transmiten mensajes sin necesidad de palabras.",
"Esta charla permitirá a la audiencia abrir sus mentes y oídos, haciéndolos, realmente, valorar el sonido y las sensaciones que les produce, para después ayudarlos a crear “imágenes” auditivas a la hora de escuchar música.",
"En el taller los asistentes podrán experimentar diferentes técnicas fotográficas para capturar imágenes profesionales de alimentos y platos de comida",
"Se desarrollaran técnicas de corte, calado, plegado y encuadernado, usando papel, cartón y herramientas básicas, trabajaremos primero maquetas y luego se adecuaran a la historia corta que los participantes quieran contar.",
"En el taller se conocerán herramientas para desarrollar la creatividad mediante las técnicas del pensamiento lateral: Brainstorming; Técnicas de provocación: Palabra Aleatoria, el escape, la piedra en el camino; SCAMPER, etc.",
"Crear un guion de radio donde se incluya los tres pasos para lograr un comercial divertido; situación, problema y satisfacción. Como darle vuelta al brief para lograr una idea que encaje con las necesidades de la marca."];

var imgMasterL = ["FranciscoRuiz.png","AlejandroCespedes.png"];
var imgMasterR = ["SandraFuentes.png","SusanaCastillo.png"];

var titleMasterL1 = ["INTELIGENCIA AIII","SOCIAL MEDIA"]
var titleMasterL2 = ["Francisco Ruiz", "Alejandro C."];
var titleMasterR1 = ["IDEAS QUE MARCAN","EN LA RADIO"];
var titleMasterR2 = ["Sandra Fuentes","Susana Castillo"];
var contentMasterText = ["No es lo mismo trabajar en la industria de la publicidad que en la industria de la creatividad que mejoran la vida del usuario",
"Esta charla es acerca de como Instagram, con un billón de usuarios activos diarios,y que pronto se convertirá en la red social más importante"];
var contentMasterText2 = ["Una marca es tan buena como la idea que representa, y ésta debe sorprender, intrigar y explicar con un lenguaje simple",
"Cada Mundial de Fútbol es una nueva ventana para encontrarnos con los avances tecnológicos que aportan en cada cobertura periodística"];
var contentMasterDay = ["Día: 18/08","Día: 19/08"];
var contentMasterDay2= ["Día: 18/08","Día: 19/08"];
var contentMasterHour = ["Hora: 7:00 pm","Hora: 7:00 pm"];
var titleMasterR = ["Sandra Fuentes","Susana Castillo"];
var ordenLunes = [0,1,2,3,4,5,6,7];
var ordenMartes = [2,3,1,4,7,0,5,6];
var ordenMiercoles = [1,4,3,6,5,7,2,0];
var ordenJueves = [3,1,2,5,4,7,6,0];
var ordenViernes = [4,3,1,2,6,7,5,0];

var dias = [ordenLunes,ordenMartes,ordenMiercoles,ordenJueves,ordenViernes];

var indexTaller = 0;
var indexDay = 0; //0 lunes 1 martes 2 miercoles 3 jueves 4 viernes

var indexMasterL = 0;
var indexMasterR = 0;
window.onload = function () {ChangeLV(1); }
function ChangeTallerInfoLeft()
{
    if(indexTaller>0)
    {
        indexTaller --;
    }else{
        indexTaller = imgTalleres.length - 1;
    }

    ChangeTallerInfo();
}
function ChangeTallerInfoRight()
{
    if(indexTaller<imgTalleres.length -1)
    {
        indexTaller ++;
    }else{
        indexTaller = 0;
    }

    ChangeTallerInfo();
}
function ChangeTallerInfo()
{
    var imgTaller = document.getElementById("imgTaller");
    imgTaller.src = "images/talleres/" + imgTalleres[dias[indexDay][indexTaller]] + ".png";
    document.getElementById("titleTaller").innerHTML = titleTalleres[dias[indexDay][indexTaller]];
    document.getElementById("subTitleTaller").innerHTML = subTitleTalleres[dias[indexDay][indexTaller]];
    document.getElementById("textTaller").innerHTML = textTalleres[dias[indexDay][indexTaller]];
    return false;
}
function ChangeDay(x){
    indexDay = x;
    indexTaller = 0;
    ChangeTallerInfo();
}
function BtnLeftMasterL()
{
    if(indexMasterL>0)
    {
        indexMasterL --;
    }else{
        indexMasterL = imgMasterL.length - 1;
    }

    ChangeMasterImg();
}
function BtnLeftMasterR()
{
    if(indexMasterL>0)
    {
        indexMasterL --;
    }else{
        indexMasterL = imgMasterL.length - 1;
    }

    ChangeMasterImg();
}

function BtnRightMasterL()
{
    if(indexMasterR>0)
    {
        indexMasterR --;
    }else{
        indexMasterR = imgMasterL.length - 1;
    }

    ChangeMasterImg();
}
function BtnRightMasterR()
{
    if(indexMasterR>0)
    {
        indexMasterR --;
    }else{
        indexMasterR = imgMasterR.length - 1;
    }

    ChangeMasterImg();
}

function ChangeMasterImg()
{
    var imgeMasterL = document.getElementById("imgMasterLeft");
    var imgeMasterR = document.getElementById("imgMasterRight");

    document.getElementById("masterTitleL1").innerHTML = titleMasterL1[indexMasterL];
    document.getElementById("masterTitleL2").innerHTML = titleMasterL2[indexMasterL];
    document.getElementById("masterTitleR1").innerHTML = titleMasterR1[indexMasterR];
    document.getElementById("masterTitleR2").innerHTML = titleMasterR2[indexMasterR];
    document.getElementById("masterText").innerHTML = contentMasterText[indexMasterL];
    document.getElementById("masterText2").innerHTML = contentMasterText2[indexMasterR];
    document.getElementById("masterDay").innerHTML = contentMasterDay[indexMasterL];
    document.getElementById("masterDay2").innerHTML = contentMasterDay2[indexMasterR];
    document.getElementById("masterHour").innerHTML = contentMasterHour[indexMasterL];

    imgeMasterL.src = "images/" + imgMasterL[indexMasterL];
    imgeMasterR.src = "images/" + imgMasterR[indexMasterR];
}

function ChangeLocation(x)
{
    var link;
    switch(x)
    {
        case 1:
            link = "images/mapa.jpg";
        break;
        case 2:
        link = "images/isilMiraflores.png";
        break;
        case 3:
        link = "images/isilMolina.png";
        break;
    }

    var img = document.getElementById("imgLocation");
    img.src = link;
}
function ChangeLV(x){
    $('#lvVideo').css('display','none');
    $('#lvQue').css('display','none');
    $('#lvMaster').css('display','none');
    $('#lvTaller').css('display','none');
    $('#lvHorario').css('display','none');
    switch(x){
        case 1:
            $('#lvVideo').show();
        break;
        case 2:
            $('#lvQue').show();
        break;
        case 3:
            $('#lvMaster').show();
        break;
        case 4:
            $('#lvTaller').show();
        break;
        case 5:
            $('#lvHorario').show();
        break;
    }
}