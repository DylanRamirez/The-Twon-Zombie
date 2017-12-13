#pragma strict
//Script ATAQUE CON PUÑO

//Asignamos el script llamado "Scripts"
var S : Scripts;

//La distancia a la que afecta el golpe
var Distancia : float;

//Daño que hacemos con el ataque
var Dano : int;

//variables boolean que se encargan de cuando se quita la vida al enemigo
var b : boolean;
var bb : boolean;

function Start () {//Cuando le demos al play

b = false;
bb = true;
}

function Update () {

//ATAQUE
//Si el animator esta en el estado llamado "Ataque*" y la variable b == false
if(S.anim.GetCurrentAnimatorStateInfo(0).IsName("Ataque*") && b == false){
b = true;
Invoke("f1", 0.1);//Invocamos function "f1" cuando pasen 0.1
           //0.1 tiempo que pasa en hacer el daño una vez clicamos la tecla
}
}

function f1 () {
var R : RaycastHit;//Creamos el raycast
var P = transform.position;//El R sale des de la posicion en la que este este objeto
var D = transform.TransformDirection(Vector3.forward);//La direccion del R es hacia adelante

Debug.DrawRay(transform.position, D * Distancia, Color.red);//Para poder ver el Raycast

if(Physics.Raycast(P,D,R,Distancia)){       
//var rotation = Quaternion.FromToRotation(Vector3.up, R.normal);//////////////////////////////////

if(R.collider.tag == "Enemy") {//Si el R toca un collider con el tag "Enemy"

//Enviamos un mensaje a la funcion "FV" del script Enemigo
R.collider.SendMessage("FV", Dano, SendMessageOptions.DontRequireReceiver);
}
}

Invoke("f2", 0.3);//Cuando passen 0.3 invocamos la funcion "f2"
           //0.3 tiempo que tarda en acabar animacion
}

function f2 () {
//Las 2 variables boolean las volvemos a poner como al principio para poder volver hacer el ataque
b = false;
bb = true;
}

