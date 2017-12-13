
//VARIABLES PUBLICAS
@HideInInspector//Para que la variable no salga en el inspector
var F : float;// variable para el sistema de caida libre

//poner los objetos que estan dentro del objeto Direccion
var DirectW : Transform;
var DirectS : Transform;
var DirectA : Transform;
var DirectD : Transform;

var smooth = 0.1; // velocidad a la que rota el player. Lo recomiendo a 0.1

//VARIABLES PRIVADAS
private var S : Scripts;

private var Apuntando : boolean; // estoy apuntando? true or false
private var Disparando : boolean; // estoy disparando? true or false

//Para rotar el personaje
private var yVelocityW = 0.0;
private var yAngleW : float;

private var yVelocityS = 0.0;
private var yAngleS : float;

private var yVelocityA = 0.0;
private var yAngleA : float;

private var yVelocityD = 0.0;
private var yAngleD : float;

private var moveDirection : Vector3 = Vector3.zero;

//Estas variables las utilizamos para saber cual de las 4 teclas(w,a,s,d) estamos clicando.
private var XW : boolean;//estoy clicando tecla W?
private var XA : boolean;//estoy clicando tecla A?
private var XS : boolean;//estoy clicando tecla S?
private var XD : boolean;//estoy clicando tecla D?

private var controller : CharacterController;//CharacterController

function Start() {
Apuntando = false;//No empezaremos apuntando
Disparando = false;//No empezaremos disparando

S = GetComponent(Scripts);//la variable S sera igual al script "Scripts"

//Configuracion CharacterController
controller = GetComponent.<CharacterController>();//Asignamos el CharacterController del Player a la variable controller
controller.radius = 0.3;
controller.height = 1.8;
controller.center = Vector3(0, 0.9, 0);
}

function Update() {

//F = Nos calcula cuanta distancia llevamos de caida
F = controller.velocity.y;
F *= -1;

//Estamos tocando el suelo?
if (S.PCl.ControlSalto == false) {

			moveDirection = DirectW.TransformDirection(moveDirection);


			yAngleW = Mathf.SmoothDampAngle(transform.eulerAngles.y,DirectW.eulerAngles.y, yVelocityW, smooth);

			if(Input.GetButton("Fire1") || Input.GetButton("Fire2")){  // Si disparo o apunto
			if(S.PA.EstadoConArma == true){                            // Con el arma
			// El player rotara hacia donde este mirando el objeto de la variable DirectW
			transform.rotation = Quaternion.Euler(0, yAngleW, 0);
			}
			}

			if(Input.GetKey("w") && XS == false && S.AM.bb == true){ 
			 // El player rotara hacia donde este mirando el objeto de la variable DirectW
			transform.rotation = Quaternion.Euler(0, yAngleW, 0);     
			XW = true;
            }else{
            XW = false;	
			}

			if(Input.GetButton("Fire1") && S.AM.bb == false && S.PA.EstadoConArma == false){
			// El player rotara hacia donde este mirando el objeto de la variable DirectW
			transform.rotation = Quaternion.Euler(0, yAngleW, 0);	
			}


			yAngleS = Mathf.SmoothDampAngle(transform.eulerAngles.y,DirectS.eulerAngles.y, yVelocityS, smooth);

			if(Input.GetKey("s") && Disparando == false && Apuntando == false && XW == false && S.AM.bb == true){
			// El player rotara hacia donde este mirando el objeto de la variable DirectS
			transform.rotation = Quaternion.Euler(0, yAngleS, 0);
			XS = true;
            }else{
            XS = false;
			}



			yAngleA = Mathf.SmoothDampAngle(transform.eulerAngles.y,DirectA.eulerAngles.y, yVelocityA, smooth);

			if(Input.GetKey("a") && Disparando == false && Apuntando == false && XD == false && S.AM.bb == true){
			// El player rotara hacia donde este mirando el objeto de la variable DirectA
			transform.rotation = Quaternion.Euler(0, yAngleA, 0);
			XA = true;
            }else{
            XA = false;
			}


			yAngleD = Mathf.SmoothDampAngle(transform.eulerAngles.y,DirectD.eulerAngles.y, yVelocityD, smooth);

			if(Input.GetKey("d") && Disparando == false && Apuntando == false && XA == false && S.AM.bb == true){
			// El player rotara hacia donde este mirando el objeto de la variable DirectD
			transform.rotation = Quaternion.Euler(0, yAngleD, 0);
			XD = true;
            }else{
            XD = false;
			}
			}
			



//Estamos Apuntando?
//Si clicamos el Fire2 la variable Apuntando se pondra en true
if(Input.GetButton("Fire2")){
Apuntando = true;
} else {//Si no estamos clicando Fire2 la variable Apuntando estara en false
Apuntando = false;
}

//Estamos Disparando?
//Si clicamos el Fire1 la variable Disparando se pondra en true
if(Input.GetButton("Fire1")){
Disparando = true;
} else {//Si no estamos clicando Fire1 la variable Disparando estara en false
}
}