#pragma strict

//VARIABLES PUBLICAS
var S : Scripts;//Asignamos el script "Scripts"
var CC : CharacterController;//Asignamos el CharacterController del player

//Estoy en el suelo o en el aire
//true = en el aire o haciendo animacion de salto
//false = estoy tocando el suelo
@HideInInspector 
var ControlSalto : boolean;

//VARIABLES PRIVADAS
private var Salto : float;//Que salto tengo que hacer?|0=Salto bajo|1= Salto alto


function Start () {
//La posicion del objeto que tenga ese script sera
transform.localPosition = Vector3(0, 0.4, 0);
}

function FixedUpdate () {
//El numero del parametro llamado "salto" del animator sera igual a la variable "Salto" de este script
S.anim.SetFloat("salto",Salto);
}

function Update () {

//CAIDA LIBRE
//Cuando la var "F" del script PlayerMove sea mas grande de 2| variable "dist" del script "SY" se mas grande de 3
//Si no estamos tocando el suelo| Mientras no estemos recargando
if(S.PR.F > 2 && ControlSalto == true && S.SY.dist > 3 && S.CV.BloqueoDelDisparo == true){
S.anim.SetBool("caida", true);//Activamos la animacion de caida libre
}else if(S.PR.F < 0.5){//Cuando la variable "F" del script PlayerMove sea menor de 0.5
S.anim.SetBool("caida", false);//Desactivamos la animacion de caida libre
}

//El numero del parametro llamado "sv" del animator sera igual a la variable "F" del script PlayerMove
S.anim.SetFloat("sv", S.PR.F);

//Para saber si estamos en el suelo o saltando
if(CC.isGrounded || S.SV.B == true){
ControlSalto = false;
}else{
//Para que CS sea true, no podemos estar recargando
if(S.CV.BloqueoDelDisparo == true){
ControlSalto = true;
}
}
//Para que CS sea true, Character controller tiene que estar desactivado| No podemos estar recargando
if(CC.enabled == false && S.CV.BloqueoDelDisparo == true){
ControlSalto = true;
}

//SALTOS
//Si no estamos saltando|Si le damos clic a la tecla Space|Si el Raycast del script SY detecta un collider con el tag "Escalar"
if(ControlSalto == false && Input.GetButtonDown("Jump") && S.SY.R.collider.tag == "Escalar" && S.CV.BloqueoDelDisparo == true){

if(S.SY.dist <= 1.90 && S.SY.dist >= 1.30){
S.anim.SetBool("saltoB", true);
Salto = 0;//0=Salto bajo
ControlSalto = true;//Estamos saltando
Invoke("CS", 1);
Invoke("f", 0.15);
}

if(S.SY.dist <= 1.299 && S.SY.dist >= 0.30){//0.699  0.30
S.anim.SetBool("saltoB", true);
Salto = 1;//1= Salto alto
CC.enabled = false;
ControlSalto = true;//Estamos saltando
Invoke("CS", 1);
}
}

if(S.anim.GetCurrentAnimatorStateInfo(0).IsName("Saltos*") && Salto == 1){
S.anim.MatchTarget (S.SY.punto.position, S.SY.punto.rotation, AvatarTarget.Root, new MatchTargetWeightMask (Vector3.one, 1), 0, 1);
}
}

function f (){
CC.enabled = false;//Desactivamos el CharacterController del Player
}

//SALTO TERMINADO
function CS () {
CC.enabled = true;//Activamos el CharacterController del Player
S.anim.SetBool("saltoB", false);
ControlSalto = false;//Estamos en el suelo
}