#pragma strict

var S : Scripts;

@HideInInspector
var Cargador : int;
@HideInInspector
var MunicionTotal : int;
@HideInInspector
var SistemaCarga : int;

private var ControlSistemaCarga : boolean;

var MaximoBalasCargador : int;  
var MaximoBalasTotales  : int;  
private var MaximoCargadorMenos1 : int; 

private var TiempoDisparo : float;
private var TiempoDisparoB : boolean;
private var RecargaAutomatica : boolean; 

var Distancia : int;  
var Dano : int; 

var TiempoEntreBala : float;
var TiempoDestello : float;

private var ControlBalas : boolean;

function OnEnable () {
MaximoCargadorMenos1 = MaximoBalasCargador;
MaximoCargadorMenos1 -= 1;
Cargador = MaximoBalasCargador;  
MunicionTotal = MaximoBalasTotales; 
SistemaCarga = 0; 
TiempoDisparoB = true;
S.CV.Mira.enabled = true;  
S.CV.MiraImpacto.enabled = false; 
S.CV.Destello[2].SetActive(false);
S.CV.BloqueoDelDisparo = true;
RecargaAutomatica = true;  
ControlSistemaCarga = false;
}

function Start () {
MaximoCargadorMenos1 = MaximoBalasCargador;
MaximoCargadorMenos1 -= 1;
Cargador = MaximoBalasCargador;  
MunicionTotal = MaximoBalasTotales;  
SistemaCarga = 0; 
TiempoDisparoB = true; 
S.CV.Mira.enabled = true;  
S.CV.MiraImpacto.enabled = false;  
S.CV.Destello[2].SetActive(false);
S.CV.BloqueoDelDisparo = true;  
RecargaAutomatica = true; 
ControlSistemaCarga = false;
}

function Update () {
if(S.CSD.d22b == true){
if(MunicionTotal == MaximoBalasTotales){
ControlBalas = false;
}

if(MunicionTotal < MaximoBalasTotales){
ControlBalas = true;
}


S.CV.CargadorText.text = Cargador.ToString();
S.CV.MunicionTotalText.text = MunicionTotal.ToString();

if(TiempoDisparoB == false){
TiempoDisparo += Time.deltaTime;
}
if(TiempoDisparo >= TiempoEntreBala){
TiempoDisparo = 0;
TiempoDisparoB = true;

}

if(TiempoDisparo >= TiempoDestello){ 
S.CV.Destello[2].SetActive(false);
S.CV.MiraImpacto.enabled = false;
}

//LIMITES DE CARGADOR
if(Cargador <= 0){
Cargador = 0;
}
if(Cargador >= MaximoBalasCargador){
Cargador = MaximoBalasCargador;    
}
//COLOR TEXTO BALAS cargador
if(Cargador < S.CV.TextoRojo){    
S.CV.CargadorText.color = S.CV.ColorTextoMenosBalas;
}else{   
S.CV.CargadorText.color = S.CV.ColorTextoMasBalas;
}

//COLOR TEXTO BALAS municiontotal
if(MunicionTotal < S.CV.TextoRojo){    
S.CV.MunicionTotalText.color = S.CV.ColorTextoMenosBalas;
}else{   
S.CV.MunicionTotalText.color = S.CV.ColorTextoMasBalas;
}

//LIMITES DE SISTEMA DE CARGA 
if(SistemaCarga <= 0){
SistemaCarga = 0;
}
if(SistemaCarga >= MaximoBalasCargador){ 
SistemaCarga = MaximoBalasCargador; 
}
//LIMITES DE MUNICION TOTAL
if(MunicionTotal <= 0){
MunicionTotal = 0;
}


if(Input.GetButton("Fire1") && Cargador >= 1 && TiempoDisparoB == true && S.CV.BloqueoDelDisparo == true){
TiempoDisparoB = false;
Cargador -= 1;
SistemaCarga += 1;
S.CV.Destello[2].SetActive(true);
GetComponent.<AudioSource>().PlayOneShot(S.CV.SonidoDisparar);

var R : RaycastHit; 
var P = transform.position;  
var D = transform.TransformDirection(Vector3.forward);  

if(Physics.Raycast(P,D,R,Distancia)){       
var rotation = Quaternion.FromToRotation(Vector3.up, R.normal);

if(R.collider.tag == "Pared"){        
Instantiate(S.CV.Impacto[0],R.point,rotation);   
}

if(R.collider.tag == "Enemy"){   
GetComponent.<AudioSource>().PlayOneShot(S.CV.AudioImpacto); 
S.CV.MiraImpacto.enabled = true; 
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

S.CV.BloqueoDelDisparo = false;
GetComponent.<AudioSource>().PlayOneShot(S.CV.SonidoRecargar);
Invoke("controlreload", S.CV.DuracionRecarga);
}

if(Cargador <= 0 && MunicionTotal >= 1 && Cargador <=0 && RecargaAutomatica == true){

SendMessage("Recargar");
Invoke ("Recargar0", S.CV.DuracionRecarga);

S.CV.BloqueoDelDisparo = false;
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
if(Cargador == 0 && MunicionTotal == 0 && S.CSD.d22b == true){
S.CV.BloqueoDelDisparo2 = false;
}else if(Cargador != 0 && MunicionTotal != 0 && S.CSD.d22b == true){
S.CV.BloqueoDelDisparo2 = true;
}
}else{
S.CV.BloqueoDelDisparo2 = false;
}
}

function Recargar0 () {
if(S.CSD.d22b == true){
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