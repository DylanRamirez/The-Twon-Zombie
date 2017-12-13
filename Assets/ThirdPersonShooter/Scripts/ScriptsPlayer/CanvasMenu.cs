using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class CanvasMenu : MonoBehaviour 
{
	public Canvas Principal;
	public Canvas Opciones;

	void Start () 
	{
		
	}
	public void cambiarEscena(string cambiar)
	{
		switch (cambiar)
		{
		case"ANIM":
			SceneManager.LoadScene ("ANIM");
			break;
			
		}
	}
		
}
