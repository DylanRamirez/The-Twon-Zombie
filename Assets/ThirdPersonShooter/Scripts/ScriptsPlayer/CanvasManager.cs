using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class CanvasManager : MonoBehaviour
{

	public Canvas pausa;
	public Canvas Principal;
	public Canvas opciones;


	void Start ()
	{
		pausa.gameObject.SetActive (false);
		opciones.gameObject.SetActive (false);
	}
	public void Pausa (string CargarJuego)
	{
		switch (CargarJuego) 
		{
		case"Pausa":
			Pausarjuego ();
			Principal.gameObject.SetActive (false);
			pausa.gameObject.SetActive (true);
			break;

		case"Regresar":
			Pausarjuego ();
			pausa.gameObject.SetActive (false);
			Principal.gameObject.SetActive (true);
			opciones.gameObject.SetActive (false);
			break;

		case"Opciones":
			opciones.gameObject.SetActive (true);
			Principal.gameObject.SetActive (false);
			pausa.gameObject.SetActive (false);
			break;

		case"Regresar2":
			opciones.gameObject.SetActive (false);
			Principal.gameObject.SetActive (true);
			pausa.gameObject.SetActive (true);
			break;

		case"Menu":
			SceneManager.LoadScene ("Menu");
			Pausarjuego ();
			break;

		}
	}
	public void Pausarjuego()
	{
		if (Time.timeScale == 1.0F) {
			Time.timeScale = 0.0F;
		} 
		else
		{
			Time.timeScale = 1.0F;
		}
	}
}
