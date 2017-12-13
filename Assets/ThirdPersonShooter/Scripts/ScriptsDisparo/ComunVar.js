#pragma strict

var S : Scripts;//Asiganamos script llamado "Scripts"

var TextoRojo : int;//A partir de que color queremos que se ponga en rojo el texto de la municion
var ColorTextoMenosBalas : Color;  // el color del texto del cargador al tener menos de 10 balas
var ColorTextoMasBalas : Color;  // el color del texto del cargador al dener mas de 11 balas

var Mira : UI.Image;   // Mira
var MiraImpacto : UI.Image;  // mira al impacat contra enemigo

var CargadorText : UI.Text;   // texto de las balas del cargador
var MunicionTotalText : UI.Text;  // texto de las balas totales

var SonidoDisparar : AudioClip;  // audio al disparar
var SonidoRecargar : AudioClip;  // audio al recargar
var AudioImpacto : AudioClip;   //audio al impactar contra enemigo

var Impacto : GameObject[];//Asiganmos los impactos
var Destello : GameObject[];//Asignamos los destello de cada arma



@HideInInspector
var DuracionRecarga : float = 1.5; // el tiempo que dura la animcaion de recarga
@HideInInspector
var BloqueoDelDisparo : boolean; // para no poder disparar mientras recargas
@HideInInspector
var BloqueoDelDisparo2 : boolean; // para no poder disparar mientras recargas



function Update () {
if(BloqueoDelDisparo == false || S.PCl.ControlSalto == true){//Cuando estemos recargando, la mira desaparece
Mira.enabled = false;//desactivamos la mira
}else{
Mira.enabled = true;//activamos la mira
}
}

function Recargar(){
S.anim.SetBool("recargar", true);//Activamos animacion recargar
S.anim.SetLayerWeight(1, 1);
Invoke("r1", 0.1);//Invocamos la funcion "r1"
}

function r1 () {
//Ponemos en false el parametro recargar
S.anim.SetBool("recargar", false);
}