#pragma strict

//VARIABLES PUBLICAS
//asignamos los gameobjects que se encargan de posicionar la mano Izquierda en el arma
var Punto : Transform[];

//asignamos objeto que esta dentro de la mano derecha llamado "PuntosArmaDisparo"
var ManoD : Transform;  

@HideInInspector
//nos indica el numero de la arma que tenemos 0, 1, 2, etc
var Arma : int; 

//VARIABLES PRIVADAS
private var anim : Animator;
private var S : Scripts;


function Start () {
anim = GetComponent.<Animator>();
S = GetComponent(Scripts);
}


function Update () {
//Que arma tenemos, con eso cambiamos el numero de la variable Arma
if(S.PA.EstadoConArma == true && S.PCl.ControlSalto == false){
if(S.CA.ArmaPS == true){
Arma = S.CA.ArmaPrincipal;
}else{
Arma = S.CA.ArmaSecundaria;
}
}else{
Arma = -1;
}
}

function OnAnimatorIK () {

//Si estamos en la animacion de "Saltos*" o Si estamos recargando
if(anim.GetCurrentAnimatorStateInfo(0).IsName("Saltos*") || S.CV.BloqueoDelDisparo == false){
//No pasa nada
}else{//Si no estamos en la animacion de "Saltos*"| Si no estamos recargando
if(Arma == 0){
	anim.SetIKPositionWeight(AvatarIKGoal.LeftHand,1);
	anim.SetIKPosition(AvatarIKGoal.LeftHand,Punto[Arma].position);
}

if(Arma == 1){
	anim.SetIKPositionWeight(AvatarIKGoal.LeftHand,1); 
	anim.SetIKPosition(AvatarIKGoal.LeftHand,Punto[Arma].position);
}

if(Arma == 2){
	anim.SetIKPositionWeight(AvatarIKGoal.LeftHand,1); 
	anim.SetIKPosition(AvatarIKGoal.LeftHand,Punto[Arma].position);
}

//Para mover el arma al disparar
//Si clicamos clic izquierdo raton| Si tenemos balas en el cargador
if(Input.GetButton("Fire1") && S.CV.BloqueoDelDisparo2 == true){
//Mover arma
ManoD.localPosition = Vector3(Mathf.Repeat(Time.time, 0.01), ManoD.localPosition.y, ManoD.localPosition.x);

anim.SetIKPositionWeight(AvatarIKGoal.RightHand,1);
anim.SetIKPosition(AvatarIKGoal.RightHand,ManoD.position);

}else{
ManoD.localPosition = Vector3(0, 0, 0);
}
}
}