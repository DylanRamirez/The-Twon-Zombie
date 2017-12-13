#pragma strict

//VARIABLES PUBLICAS
@HideInInspector
var Distancia : float;
@HideInInspector
var B : boolean;

function Start (){ 
Distancia = 0.7;//Distancia del Raycast0.7
}

function Update () {

//Raycast 
var R : RaycastHit;  

//Posicion desde donde sale el Raycast
var P = transform.position;  

//Direccion hacia donde va el Raycast
var D = transform.TransformDirection(Vector3.down);  

//En la ventana de Scene podremos ver el raycast representado en una linea azul
Debug.DrawRay(transform.position, D * Distancia, Color.blue);

//Si el Raycast toca un collider
if(Physics.Raycast(P,D,R,Distancia)){       

B = true;//La variable B se pondra en true
}else{//Si el R no toca ningun collider 

B = false;//La variable B se pone en false
}
}