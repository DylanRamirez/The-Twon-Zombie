#pragma strict
//Script donde asignaremos muchos de los scripts y el componente Animator
var PA : PlayerAnim;
var CA : ControlArma;
var SV : SV;
var SY : SY;
var PC : PlayerCam;
var CSD : ControlScriptDisparo;
var CV : ComunVar;
var PR : PlayerRotation;
var PCl : PlayerClimb;
var MA : ManoArma;
var AM : ArmaMano;

@HideInInspector
var anim : Animator;

function Start() {
anim = GetComponent.<Animator>();
}