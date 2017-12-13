#pragma strict

private var S : Scripts;//Asignamos el script "Scripts"

//Arma0 > Element0/ Arma1 > Element1/ Arma2 > Element2
var ArmaMano : GameObject[];           // asignaremos los modelos 3D de las armas que tenemos en la mano
var EspaldaPrincipal : GameObject[];   // asignaremos los modelos 3D de las armas principales que estan en la espalda
var EspaldaSecundaria : GameObject[];  // asignaremos los modelos 3D de las armas secundarias que estan en la espalda

var CargadoresArma : GameObject[];     // asignaremos los cargadores que estan en los modelos 3D de las armas que estan en las manos
var CargadoresMano : GameObject[];     // asignaremos los cargadores que hemos puesto en una de las manos

function Start () {
//Le asignamos a la variable S el script llamado "Scripts" 
S = GetComponent(Scripts);
}

function Update () {

      //Para que cuando cambiemos de arma, el arma que tenemos se desactive y se active a la espalda
      if(Input.GetButtonDown("Fire3")){// cambiamos de arma principal a secundaria o al reves
         if(S.CA.ArmaPrincipal == 0){
         ArmaMano[S.CA.ArmaPrincipal].SetActive(false);
         EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(true);
         }
         if(S.CA.ArmaPrincipal == 1){
         ArmaMano[S.CA.ArmaPrincipal].SetActive(false);
         EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(true);
         }
         if(S.CA.ArmaPrincipal == 2){
         ArmaMano[S.CA.ArmaPrincipal].SetActive(false);
         EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(true);
         }


         if(S.CA.ArmaSecundaria == 0){
         ArmaMano[S.CA.ArmaSecundaria].SetActive(false);
         EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(true);
         }
         if(S.CA.ArmaSecundaria == 1){
         ArmaMano[S.CA.ArmaSecundaria].SetActive(false);
         EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(true);
         }
         if(S.CA.ArmaSecundaria == 2){
         ArmaMano[S.CA.ArmaSecundaria].SetActive(false);
         EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(true);
         }
      }

      //Para que el arma que tenemos en la espalda se pueda cambiar
      if(S.CA.ArmaPrincipal == 0){
      EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(true);
      }else{
      EspaldaPrincipal[0].SetActive(false);
      }
      if(S.CA.ArmaPrincipal == 1){
      EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(true);
      }else{
      EspaldaPrincipal[1].SetActive(false);
      }
      if(S.CA.ArmaPrincipal == 2){
      EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(true);
      }else{
      EspaldaPrincipal[2].SetActive(false);
      }

      if(S.CA.ArmaSecundaria == 0){
      EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(true);
      }else{
      EspaldaSecundaria[0].SetActive(false);
      }
      if(S.CA.ArmaSecundaria == 1){
      EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(true);
      }else{
      EspaldaSecundaria[1].SetActive(false);
      }
      if(S.CA.ArmaSecundaria == 2){
      EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(true);
      }else{
      EspaldaSecundaria[2].SetActive(false);
      }




if(S.PA.EstadoConArma == true){//cuando este con arma

   if(S.CA.ArmaPS == true){//si tengo arma principal
      //ARMA PRINCIPAL 0
      if(S.CA.ArmaPrincipal == 0){//si tengo arma 0
      ArmaMano[S.CA.ArmaPrincipal].SetActive(true);
      EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(false);
      }else{//si no tengo arma 0
      ArmaMano[0].SetActive(false);
      }
      //ARMA PRINCIPAL 1
      if(S.CA.ArmaPrincipal == 1){
      ArmaMano[S.CA.ArmaPrincipal].SetActive(true);
      EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(false);
      }else{
      ArmaMano[1].SetActive(false);
      }
      //ARMA PRINCIPAL 2
      if(S.CA.ArmaPrincipal == 2){
      ArmaMano[S.CA.ArmaPrincipal].SetActive(true);
      EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(false);
      }else{
      ArmaMano[2].SetActive(false);
      }

   }else{//si tengo arma secundaria
      //ARMA SECUNDARIA 0
      if(S.CA.ArmaSecundaria == 0){
      ArmaMano[S.CA.ArmaSecundaria].SetActive(true);
      EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(false);
      }else{
      ArmaMano[0].SetActive(false);
      }
      //ARMA SECUNDARIA 1
      if(S.CA.ArmaSecundaria == 1){
      ArmaMano[S.CA.ArmaSecundaria].SetActive(true);
      EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(false);
      }else{
      ArmaMano[1].SetActive(false);
      }
      //ARMA SECUNDARIA 2
      if(S.CA.ArmaSecundaria == 2){
      ArmaMano[S.CA.ArmaSecundaria].SetActive(true);
      EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(false);
      }else{
      ArmaMano[2].SetActive(false);
      }
   }
}else{// cuando este sin arma
      //ARMA PRINCIPAL 0
      if(S.CA.ArmaPrincipal == 0){
      EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(true);
      }else{
      EspaldaPrincipal[0].SetActive(false);
      }
      //ARMA PRINCIPAL 1
      if(S.CA.ArmaPrincipal == 1){
      EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(true);
      }else{
      EspaldaPrincipal[1].SetActive(false);
      }
      //ARMA PRINCIPAL 2
      if(S.CA.ArmaPrincipal == 2){
      EspaldaPrincipal[S.CA.ArmaPrincipal].SetActive(true);
      }else{
      EspaldaPrincipal[2].SetActive(false);
      }

      //ARMA SECUNDARIA 0
      if(S.CA.ArmaSecundaria == 0){
      EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(true);
      }else{
      EspaldaSecundaria[0].SetActive(false);
      }
      //ARMA SECUNDARIA 1
      if(S.CA.ArmaSecundaria == 1){
      EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(true);
      }else{
      EspaldaSecundaria[1].SetActive(false);
      }
      //ARMA SECUNDARIA 2
      if(S.CA.ArmaSecundaria == 2){
      EspaldaSecundaria[S.CA.ArmaSecundaria].SetActive(true);
      }else{
      EspaldaSecundaria[2].SetActive(false);
      }

     // desactivamos los modelos 3D de las armas que estan en las manos
ArmaMano[0].SetActive(false);
ArmaMano[1].SetActive(false);
ArmaMano[2].SetActive(false);

}


//CARGADORES
if(S.CV.BloqueoDelDisparo ==  false){// cuando recarga
Invoke("c1", 0.3);
Invoke("c2", 1.5);
}
}

function c1 () {//en 0.3
CargadoresArma[S.MA.Arma].SetActive(false); // desactivamos el cargador de la arma 
CargadoresMano[S.MA.Arma].SetActive(true);  // activamos el cargador que esta en la mano
}

function c2 () {//en 1.5
CargadoresArma[S.MA.Arma].SetActive(true);  // activamos el cargador de la arma
CargadoresMano[S.MA.Arma].SetActive(false); // desactivamos el cargador de la mano
}