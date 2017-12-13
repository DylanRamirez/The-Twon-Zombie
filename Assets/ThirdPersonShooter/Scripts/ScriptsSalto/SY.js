
//VARIABLES PUBLICAS
var Distancia : float;//Ponemos la distancia del Raycast
var R : RaycastHit;//Raycast 
var punto : Transform;//Asignamos el objeto llamdo PuntoSalto

//Para saber la distancia desde donde sale el raycast al collider que toque
@HideInInspector
var dist : float;


function Start () {
//Este objeto estara en la posicion local x>0 y>1.6 z>0.5
transform.localPosition = Vector3(0, 1.6, 0.5);
}


function Update () {

var P = transform.position;  //Posicion desde donde sale el Raycast
var D = transform.TransformDirection(Vector3.down);  //La dirrecion del raycast, hacia abajo

//Para representar el raycast
Debug.DrawRay(transform.position, D * Distancia, Color.blue);

if(Physics.Raycast(P,D,R,Distancia)){//Si tocamos un collider       

//Para saber la distancia desde donde sale el raycast al collider que toque
dist = Vector3.Distance(P, R.point);

if(Input.GetButtonDown("Jump")){// Si le doy clic a la tecla Space
//La posicion del objeto punto sera igual a la posicion del R.point
punto.position = R.point;//R.point, es la posicion donde el R esta colisionando con otro collider
//La rotacion del objeto punto sera igual a la rotacion de este objeto
punto.rotation = transform.rotation;
}
}
}