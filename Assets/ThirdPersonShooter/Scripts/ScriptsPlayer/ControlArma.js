#pragma strict

//VARIABLES PUBLICAS
var UIConArma : Canvas;   // canvas para cuando vamos con arma
var UISinArma : Canvas;   // canvas para cuando vamos sin arma

@HideInInspector
var ArmaPS: boolean;      // true ArmaPrincipal  false ArmaSecundaria

@Range(-1, 2)
var ArmaPrincipal : int;  // cual es la arma principal que tengo? (-1(no tengo arma principal))
@Range(-1, 2)                                         
var ArmaSecundaria : int; // cual es la arma secundaria que tengo? (-1(no tengo arma secundaria))

//VARIABLES PRIVADAS
private var S : Scripts;  // asignamos script llamado "Scripts"


function Start () {
S = GetComponent(Scripts);// S sera igual al compoonente(script) llamado "Scripts"
}


function Update () {

//Si clicamos clic medio(rueda)/ Si tenemos arma principal/ Si estamos con arma/ Si tenemos arma secundaria/ Si no estamos recargando/ Si no estamos saltando
if(Input.GetButtonDown("Fire3") && ArmaPS == true && S.PA.EstadoConArma == true && ArmaSecundaria != -1 && S.CV.BloqueoDelDisparo ==  true && S.PCl.ControlSalto == false){
ArmaPS = false;// pasamos a arma secundaria
}else if(Input.GetButtonDown("Fire3") && ArmaPS == false && S.PA.EstadoConArma == true && ArmaPrincipal != -1 && S.CV.BloqueoDelDisparo ==  true && S.PCl.ControlSalto == false){
ArmaPS = true;// pasamos a arma principal
}

//NO TENEMOS ARMA PRINCIPAL? QUE HACEMOS?
if(ArmaPS == true && ArmaPrincipal == -1){    //Si tenemos arma Principal, pero por qualquier razon la perdemos, pasara lo siguiente
if(ArmaSecundaria != -1){                     //Si arma secundaria no es -1 nos pondremos el arma secundaria
ArmaPS = false;
}
if(ArmaSecundaria == -1){                     //Si el arma secundaria es igual a -1 pasaremos a la animacion sin arma
S.PA.EstadoConArma = false;
}
}

//NO TENEMOS ARMA SECUNDARIA? QUE HACEMOS?
if(ArmaPS == false && ArmaSecundaria == -1){  //Si tenemos arma Secundaria, pero por qualquier razon la perdemos, pasara lo siguiente
if(ArmaPrincipal != -1){                      //Si arma principal no es -1 nos pondremos el arma principal
ArmaPS = true;
}
if(ArmaPrincipal == -1){                      //Si el arma principal es igual a -1 pasaremos a la animacion sin arma
S.PA.EstadoConArma = false;
}
}

//CANVAS CON ARMA O SIN ARMA
if(S.PA.EstadoConArma == true){ // Si tenemos arma
UIConArma.enabled = true;       // Activamos el canvas UIConArma
UISinArma.enabled = false;      // Desactivamos el canvas UISinArma
}else{
UIConArma.enabled = false;      // Desactivamos el canvas UIConArma
UISinArma.enabled = true;       // Activamos el canvas UISinArma
}
}

//COGER ARMAS DEL SUELO
function OnTriggerStay (other : Collider) {

if(Input.GetKeyDown("e") && S.PA.EstadoConArma == true && S.CV.BloqueoDelDisparo == true){// si hacemos clic a la tecla E/ si estamos con arma/ si no estamos recargando

  if(other.name == "Caja0*"){  //CAJA ARMA0 si entramos en un collider con el nombre "Caja0*"
    if(ArmaPS == true){        // si tenemos arma principal

      if(ArmaPrincipal != 0){  // si ArmaPrincipal no es igual a 0
        ArmaPrincipal = 0;     // obtendremos arma principal 0
      }
      if(ArmaPrincipal == 0){  // si ArmaPrincipal es igual 0
        S.CSD.d0.Cargador = S.CSD.d0.MaximoBalasCargador;      // el Cargador sera igual a MaximoBalasCargador
        S.CSD.d0.MunicionTotal = S.CSD.d0.MaximoBalasTotales;  // la MunicionTotal sera igual a MaximoBalasTotales
        S.CSD.d0.SistemaCarga = 0;
      }
    }else{                      // si tenemos arma secundaria

      if(ArmaSecundaria != 0){  // si ArmaSecundaria no es igual a 0
        ArmaSecundaria = 0;     // obtendremos arma secundaria 0
      }
      if(ArmaSecundaria == 0){  // si ArmaSecundaria es igual 0
        S.CSD.d00.Cargador = S.CSD.d00.MaximoBalasCargador;      // el Cargador sera igual a MaximoBalasCargador
        S.CSD.d00.MunicionTotal = S.CSD.d00.MaximoBalasTotales;  // la MunicionTotal sera igual a MaximoBalasTotales
        S.CSD.d00.SistemaCarga = 0;
      }
    }
    }


  if(other.name == "Caja1*"){//CAJA ARMA1
    if(ArmaPS == true){

      if(ArmaPrincipal != 1){
        ArmaPrincipal = 1;
      }
      if(ArmaPrincipal == 1){
        S.CSD.d1.Cargador = S.CSD.d1.MaximoBalasCargador;
        S.CSD.d1.MunicionTotal = S.CSD.d1.MaximoBalasTotales;
        S.CSD.d1.SistemaCarga = 0;
      }

    }else{

      if(ArmaSecundaria != 1){
        ArmaSecundaria = 1;
      }
      if(ArmaSecundaria == 1){
        S.CSD.d11.Cargador = S.CSD.d11.MaximoBalasCargador;
        S.CSD.d11.MunicionTotal = S.CSD.d11.MaximoBalasTotales;
        S.CSD.d11.SistemaCarga = 0;
      }
    }
    }


  if(other.name == "Caja2*"){//CAJA ARMA2
    if(ArmaPS == true){

      if(ArmaPrincipal != 2){
        ArmaPrincipal = 2;
      }
      if(ArmaPrincipal == 2){
        S.CSD.d2.Cargador = S.CSD.d2.MaximoBalasCargador;
        S.CSD.d2.MunicionTotal = S.CSD.d2.MaximoBalasTotales;
        S.CSD.d2.SistemaCarga = 0;
      }

    }else{

      if(ArmaSecundaria != 2){
        ArmaSecundaria = 2;
      }
      if(ArmaSecundaria == 2){
        S.CSD.d22.Cargador = S.CSD.d22.MaximoBalasCargador;
        S.CSD.d22.MunicionTotal = S.CSD.d22.MaximoBalasTotales;
        S.CSD.d22.SistemaCarga = 0;
      }
    }
    }
  }
}