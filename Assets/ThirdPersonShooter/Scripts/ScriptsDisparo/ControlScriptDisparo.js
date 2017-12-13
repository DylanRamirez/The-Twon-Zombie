#pragma strict

var S : Scripts;//Asignamos el script "Scripts"

//ScriptsArmas Principales
var d0 : D0;        // script disparos arma principal0
var d0b : boolean;  // tengo el arma principal?

var d1 : D1;        // script disparos arma principal1
var d1b : boolean;  // tengo arma principal?

var d2 : D2;        // script disparos arma principal1
var d2b : boolean;  // tengo arma principal?

//ScriptsArmas Secundarias
var d00 : D00;       // script disparos arma secundaria00
var d00b : boolean;  // tengo arma secundaria?

var d11 : D11;       // script disparos arma secundaria11
var d11b : boolean;  // tengo arma secundaria?

var d22 : D22;       // script disparos arma secundaria22
var d22b : boolean;  // tengo arma secundaria?

function Start (){
transform.rotation = Quaternion.Euler (0, -5, 0);
}

function Update () {

if(S.PA.EstadoConArma == true){  //Cuando estemos con arma
  if(S.CA.ArmaPS == true){       //si tenemos el arma principal
  //ponemos en false los activaodres de disparo de las armas secundarias
  d00b = false;
  d11b = false;
  d22b = false;

  if(S.PCl.ControlSalto == false){//Si no estamos saltando ponemos en true el activador de disparos que toque

    if(S.CA.ArmaPrincipal == 0){
    d0.enabled = true;
    d0b = true;
    }else{
    d0.enabled = false;
    d0b = false;
    }
    if(S.CA.ArmaPrincipal == 1){
    d1.enabled = true;
    d1b = true;
    }else{
    d1.enabled = false;
    d1b = false;
    }
    if(S.CA.ArmaPrincipal == 2){
    d2.enabled = true;
    d2b = true;
    }else{
    d2.enabled = false;
    d2b = false;
    }


    if(S.CA.ArmaSecundaria == 0){
    d00.enabled = true;
    }else{
    d00.enabled = false;
    }
    if(S.CA.ArmaSecundaria == 1){
    d11.enabled = true;
    }else{
    d11.enabled = false;
    }
    if(S.CA.ArmaSecundaria == 2){
    d22.enabled = true;
    }else{
    d22.enabled = false;
    }

    }else{//Si estamos saltando ponemos en false los activaodres de disparo
      d0b = false;
      d1b = false;
      d2b = false;
    }
  }else{//si tenemos el arma secundaria
  //ponemos en false los activaodres de disparo de las armas principales
  d0b = false;
  d1b = false;
  d2b = false;

  if(S.PCl.ControlSalto == false){//Si no estamos saltando, activamos el activador de disparos que toque

    if(S.CA.ArmaSecundaria == 0){
    d00.enabled = true;
    d00b = true;
    }else{
    d00.enabled = false;
    d00b = false;
    }   
    if(S.CA.ArmaSecundaria == 1){
    d11.enabled = true;
    d11b = true;
    }else{
    d11.enabled = false;
    d11b = false;
    }  
    if(S.CA.ArmaSecundaria == 2){
    d22.enabled = true;
    d22b = true;
    }else{
    d22.enabled = false;
    d22b = false;
    }


    if(S.CA.ArmaPrincipal == 0){
    d0.enabled = true;
    }else{
    d0.enabled = false;
    }
    if(S.CA.ArmaPrincipal == 1){
    d1.enabled = true;
    }else{
    d1.enabled = false;
    }
    if(S.CA.ArmaPrincipal == 2){
    d2.enabled = true;
    }else{
    d2.enabled = false;
    }
    }else{//Si estamos saltando desactivamos los activaodres de disparo
      d00b = false;
      d11b = false;
      d22b = false;
    }                                                                                                                                                                                     
  }
}else{//si estamos sin arma
//desactivamos los activadores de disparo
d0b = false;
d1b = false;
d2b = false;

d00b = false;
d11b = false;
d22b = false;

    //scripts disparo
    if(S.CA.ArmaPrincipal == 0){
    d0.enabled = true;
    }else{
    d0.enabled = false;
    }
    if(S.CA.ArmaPrincipal == 1){
    d1.enabled = true;
    }else{
    d1.enabled = false;
    }
    if(S.CA.ArmaPrincipal == 2){
    d2.enabled = true;
    }else{
    d2.enabled = false;
    }


    if(S.CA.ArmaSecundaria == 0){
    d00.enabled = true;
    }else{
    d00.enabled = false;
    }
    if(S.CA.ArmaSecundaria == 1){
    d11.enabled = true;
    }else{
    d11.enabled = false;
    }
    if(S.CA.ArmaSecundaria == 2){
    d22.enabled = true;
    }else{
    d22.enabled = false;
    }
}
}