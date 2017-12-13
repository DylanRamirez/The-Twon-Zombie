#pragma strict

var S : Scripts;                           // asignamos el script llamado "Scripts"

@HideInInspector
var Cargador : int;                        // balas actuales en el cargador
@HideInInspector     
var MunicionTotal : int;                   // balas actuales en la municiontotal

var MaximoBalasCargador : int;             // balas del cargador
var MaximoBalasTotales  : int;             // balas totales

var Distancia : int;                       // la distancia a la que llega el arma
var Dano : int;                            // el daño que hace el arma

var TiempoEntreBala : float;               // tiempo que tarda en salir la siguiente bala
var TiempoDestello : float;                // tiempo que tarda en desactivarse el destello


//VARIABLES PRIVADAS
private var TiempoDisparo : float;         
private var TiempoDisparoB : boolean;

private var RecargaAutomatica : boolean;   // para que la recarga automatica funcione bien

private var ControlBalas : boolean;

@HideInInspector
var SistemaCarga : int;            // municion con contador al reves


// si la suma del cargador y la municion total es menor que la variable MaximoBalasCarador se pondra en true
private var ControlSistemaCarga : boolean;
private var MaximoCargadorMenos1 : int;    // balas de cargador -1


function OnEnable () {
MaximoCargadorMenos1 = MaximoBalasCargador;
MaximoCargadorMenos1 -= 1;
Cargador = MaximoBalasCargador;  // cargador empieza con 30 balas
MunicionTotal = MaximoBalasTotales;  // la municion total empieza con 90 balas
SistemaCarga = 0;
TiempoDisparoB = true;
S.CV.Mira.enabled = true; 
S.CV.MiraImpacto.enabled = false; 
S.CV.Destello[0].SetActive(false);
S.CV.BloqueoDelDisparo = true;  
RecargaAutomatica = true; 
ControlSistemaCarga = false;
}

function Start () {
MaximoCargadorMenos1 = MaximoBalasCargador;
MaximoCargadorMenos1 -= 1;
Cargador = MaximoBalasCargador;  // cargador empieza con 30 balas
MunicionTotal = MaximoBalasTotales;  // la municion total empieza con 90 balas
SistemaCarga = 0; 
TiempoDisparoB = true; 
S.CV.Mira.enabled = true; 
S.CV.MiraImpacto.enabled = false;  
S.CV.Destello[0].SetActive(false);
S.CV.BloqueoDelDisparo = true; 
RecargaAutomatica = true; 
ControlSistemaCarga = false;
}

function Update () {
if(S.CSD.d0b == true){
if(MunicionTotal == MaximoBalasTotales){
ControlBalas = false;
}

if(MunicionTotal < MaximoBalasTotales){
ControlBalas = true;
}


// En el texto de la variable CargadorText se mostrara el numero que haya en la variable Cargador
S.CV.CargadorText.text = Cargador.ToString();
// En el texto de la variable MunicionTotalText se mostrara el numero que haya en la variable MunicionTotal
S.CV.MunicionTotalText.text = MunicionTotal.ToString();

//TIEMPO DISPARO, DESTELLO, MIRAIMPACTO
if(TiempoDisparoB == false){
TiempoDisparo += Time.deltaTime;
}
if(TiempoDisparo >= TiempoEntreBala){ // Tiempo de disparo, tiempo entre disparo y disparo 
TiempoDisparo = 0;
TiempoDisparoB = true;
}

if(TiempoDisparo >= TiempoDestello){ // Tiempo que tarda a desactivarse el destello 
S.CV.Destello[0].SetActive(false);
S.CV.MiraImpacto.enabled = false;
}

//LIMITES DE CARGADOR
//que el cargador no baje de 0
if(Cargador <= 0){
Cargador = 0;
}
//que el cargador no pase de el numero que hay en la variable MaximoBalasCargador
if(Cargador >= MaximoBalasCargador){
Cargador = MaximoBalasCargador; 
}

//COLOR TEXTO BALAS cargador
if(Cargador < S.CV.TextoRojo){    //Cuando el numero de balas sea menor de 10
S.CV.CargadorText.color = S.CV.ColorTextoMenosBalas;
}else{   //Cuando el numero de balas sea mayor de 11
S.CV.CargadorText.color = S.CV.ColorTextoMasBalas;
}

//COLOR TEXTO BALAS municiontotal
if(MunicionTotal < S.CV.TextoRojo){    //Cuando el numero de balas sea menor de 10
S.CV.MunicionTotalText.color = S.CV.ColorTextoMenosBalas;
}else{   //Cuando el numero de balas sea mayor de 11
S.CV.MunicionTotalText.color = S.CV.ColorTextoMasBalas;
}

//LIMITES DE SISTEMA DE CARGA 
//SistemaCarga no baje de 0
if(SistemaCarga <= 0){
SistemaCarga = 0;
}
//SistemaCarga no suba de MaximoBalasCargador
if(SistemaCarga >= MaximoBalasCargador){ 
SistemaCarga = MaximoBalasCargador; 
}
//LIMITES DE MUNICION TOTAL
//MunicionTotal no baje de 0
if(MunicionTotal <= 0){
MunicionTotal = 0;
}


if(Input.GetButton("Fire1") && Cargador >= 1 && TiempoDisparoB == true && S.CV.BloqueoDelDisparo == true){// Disparar
TiempoDisparoB = false;
Cargador -= 1;
SistemaCarga += 1;
S.CV.Destello[0].SetActive(true);
GetComponent.<AudioSource>().PlayOneShot(S.CV.SonidoDisparar);

var R : RaycastHit;  // Raycast 
var P = transform.position;  //Posicion desde donde sale el Raycastvar P = transform.parent.position;
var D = transform.TransformDirection(Vector3.forward);  // Forward, las balas van hacia delante

if(Physics.Raycast(P,D,R,Distancia)){       
var rotation = Quaternion.FromToRotation(Vector3.up, R.normal);

if(R.collider.tag == "Pared"){      // Si el raycast esta tocando un collider con el tag Pared    
Instantiate(S.CV.Impacto[0],R.point,rotation);   // Se instancia el decal
}

if(R.collider.tag == "Enemy"){    // Si el raycast esta tocando un collider con el tag Enemy 
GetComponent.<AudioSource>().PlayOneShot(S.CV.AudioImpacto);  // El audio que se reproduce cuando estamos impactando contra el enemigo
S.CV.MiraImpacto.enabled = true;  // Mira impacto se activa
Instantiate(S.CV.Impacto[1],R.point,rotation);
}

if(R.collider.tag == "Enemy") {
R.collider.SendMessage("FV", Dano, SendMessageOptions.DontRequireReceiver);
}
}
}

if(Input.GetKeyDown("r") && MunicionTotal >= 1 && Cargador >= 1 && Cargador <= MaximoCargadorMenos1 && S.CV.BloqueoDelDisparo == true){

SendMessage("Recargar");
Invoke ("Recargar0", S.CV.DuracionRecarga);

S.CV.BloqueoDelDisparo = false; // no se puede disparar mientras recargas
GetComponent.<AudioSource>().PlayOneShot(S.CV.SonidoRecargar);
Invoke("controlreload", S.CV.DuracionRecarga);
}

if(Cargador <= 0 && MunicionTotal >= 1 && RecargaAutomatica == true){

SendMessage("Recargar");
Invoke ("Recargar0", S.CV.DuracionRecarga);

S.CV.BloqueoDelDisparo = false; // no se puede disparar mientras recargas
GetComponent.<AudioSource>().PlayOneShot(S.CV.SonidoRecargar);
RecargaAutomatica = false;
Invoke("controlreload", S.CV.DuracionRecarga);
}


if(MunicionTotal < SistemaCarga){
ControlSistemaCarga = true;
}

if(MunicionTotal > SistemaCarga){
ControlSistemaCarga = false;
}
}

if(S.PA.EstadoConArma == true){
if(Cargador == 0 && MunicionTotal == 0 && S.CSD.d0b == true){
S.CV.BloqueoDelDisparo2 = false;
}else if(Cargador != 0 && MunicionTotal != 0 && S.CSD.d0b == true){
S.CV.BloqueoDelDisparo2 = true;
}
}else{
S.CV.BloqueoDelDisparo2 = false;
}
}

//SISTEMA DE RECARGA
function Recargar0 () {
if(S.CSD.d0b == true){
if(ControlSistemaCarga == false){
Cargador += SistemaCarga;
MunicionTotal -= SistemaCarga;
}

if(SistemaCarga > MunicionTotal && ControlSistemaCarga == false){
Cargador += MunicionTotal;
}

if(ControlSistemaCarga == true){
Cargador += MunicionTotal;
SistemaCarga = MaximoBalasCargador;
SistemaCarga -= Cargador;
Invoke("Recargar2", 0.01);
}

if(ControlSistemaCarga == false){
Invoke("Recargar1", 0.01);
}
}
}

function Recargar1 () {
SistemaCarga = 0;
S.CV.BloqueoDelDisparo = true;
RecargaAutomatica = true;
}

function Recargar2 () {
MunicionTotal = 0;
S.CV.BloqueoDelDisparo = true;
RecargaAutomatica = true;
}


