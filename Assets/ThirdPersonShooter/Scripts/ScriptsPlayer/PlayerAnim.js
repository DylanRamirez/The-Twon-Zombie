#pragma strict

//VARIABLES PUBLICAS
//Podemos tener arma?
@HideInInspector
var EstadoConArma : boolean;// false = sin arma|true = con arma

//VARIABLES PRIVADAS
private var S : Scripts;  // asignamos el script llamado "Scripts"
private var A : Animator; // assignamos el componente Animator del player

private var H : float;
private var V : float;
private var Q : float;


function Start () {
//Empezamos sin la arma en la mano
EstadoConArma = false;

//Le asignamos a la variable A al Animator
A = GetComponent.<Animator>();

//Le asignamos a la variable S el script llamado "Scripts" 
S = GetComponent(Scripts);
}


function FixedUpdate () {

//HACIA ADELANTE
if(Input.GetKey("w") || Input.GetKey("a") || Input.GetKey("s") || Input.GetKey("d")){
A.SetBool("caminar", true);
}else{
A.SetBool("caminar", false);
}

//ATAQUE CUERPO A CUERPO
if(EstadoConArma == false && Input.GetButtonDown("Fire1")){
A.SetBool("ataque", true);
Invoke("AF", 0.5);
S.AM.bb = false;
}
}

function Update () {

//APUNTAR/DISPARAR
if(Input.GetButton("Fire1") || Input.GetButton("Fire2")){
A.SetBool("apuntando", true);	
}else{
A.SetBool("apuntando", false);	
}

//HORIZONTAL
H = Input.GetAxis("Horizontal");//Caminar hacia Derecha/Izquierda
A.SetFloat("H",H);
H *= Time.deltaTime;

//VERTICAL
V = Input.GetAxis("Vertical");//Caminar hacia Adelante/Atras
A.SetFloat("V",V);
V *= Time.deltaTime;

//ESPRINTAR
Q = Input.GetAxis("Q");
A.SetFloat("Q",Q);
Q *= Time.deltaTime;

//CONTROL SIN CON ARMA
if(Input.GetKeyDown("f") && EstadoConArma == true && S.CV.BloqueoDelDisparo ==  true && S.PCl.ControlSalto == false && S.AM.bb == true){//Si clicamos la tecla f|Si tengo arma|Si no estoy recargando
EstadoConArma = false;//El arma se desactivara
}else if(Input.GetKeyDown("f") && EstadoConArma == false && S.PCl.ControlSalto == false && S.AM.bb == true){//Si clicamos la tecla f|Si no tenemos arma
if(S.CA.ArmaSecundaria != -1 || S.CA.ArmaPrincipal != -1){//Si ArmaSecundaria/Principal no son -1
EstadoConArma = true;//Se nos activa el arma
}
}

//ESTADOS DE LOS IDLE
if(EstadoConArma == false){
A.SetBool("INSA", true);//Estado sin arma true
A.SetBool("INCA", false);
}else{
A.SetBool("INCA", true);//Estado con arma true
A.SetBool("INSA", false);
}
}


function AF () { //Ataque cuerpo a cuerpo false
A.SetBool("ataque", false);
}