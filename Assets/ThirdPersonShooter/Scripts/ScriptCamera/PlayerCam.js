#pragma strict

//VARIABLES PUBLICAS
var Player : Transform; //Asignamos el player
var lookSensivity : float; //sensibilidad de la camera (5)
var Min : float;// La rotacion maxima de la camera hacia arriba (20)
var Max : float;// La rotacion maxima de la camera hacia abajo (70)
var smoothTime : float; // Cuando mas bajo sea este numero mas rapido seguira la camera al player (0.05)

@HideInInspector
var yRotation : float;//La rotacion en el ejeY del objeto

//VARIABLES PRIVADAS
private var lookSensivity1 : float;//Nos guardara el numero que hemos puesto en la variable "lookSensivity"
private var xRotation : float;//La rotacion en el ejeX del objeto
private var velocity = Vector3.zero;


function Start () {
lookSensivity1 = lookSensivity;// "lookSensivity1" sera igual a l avariable "lookSensivity"
}


function Update () {

//La variable xRotacion es igual a la rotacion en x de del objeto que lleve este script
//La variable yRotacion es igual a la rotacion en y de del objeto que lleve este script
transform.rotation = Quaternion.Euler(xRotation, yRotation, 0);

//Para mover la camera con el Mouse
//En el eje y
if(Time.timeScale == 1.0)
{
yRotation += Input.GetAxis("Mouse X") * lookSensivity;
//En el eje x
xRotation -= Input.GetAxis("Mouse Y") * lookSensivity;

}


//Le ponemos limite a la variable xRotacion
xRotation = Mathf.Clamp(xRotation, -Min, Max);

//para que este objeto siga al player
var targetPosition : Vector3 = Player.TransformPoint(Vector3(0, 1.5, -0.5));
transform.position = Vector3.SmoothDamp(transform.position, targetPosition,velocity, smoothTime);

if(Input.GetButton("Fire2")){// Si estoy apuntando
lookSensivity = 1;//La sensibilidad de la camera bajara a 1
}else{//Cuando dejemos de apuntar
lookSensivity = lookSensivity1;//La sensibilidad volvera a ser la del principio
}

}