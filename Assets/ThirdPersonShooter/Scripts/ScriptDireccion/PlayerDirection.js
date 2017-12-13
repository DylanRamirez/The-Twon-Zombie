#pragma strict

//VARIABLES PUBLICAS
var S : Scripts;//Asignamos script llamado "Scripts"

function Start(){
//para que el objeto empiece con la rotacion a x>0 y>0 z>0
transform.rotation = Quaternion.Euler(0, 0, 0);
}

function Update () {
//La rotacion en Y de este objeto sera igual a la rotacion en Y del objeto que lleve el script PlayerCam
transform.rotation = Quaternion.Euler(0, S.PC.yRotation, 0);
}