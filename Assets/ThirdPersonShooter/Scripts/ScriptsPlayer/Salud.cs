using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Salud : MonoBehaviour
{
    public int saludJugador;
    public int veneno;
    public int cura;
    static Animator anim;

    public Slider mainSlider;

    void Start()
    {
        anim = GetComponent<Animator>();
    }

    void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Salud"))
        {

            saludJugador += cura;
            mainSlider.value = saludJugador;
            Debug.Log("Salud del jugador" + saludJugador);

        }
        if(saludJugador > 1000)
        {
            saludJugador = 1000;
        }

        if (other.CompareTag("Daño"))
        {
            saludJugador -= veneno;
            mainSlider.value = saludJugador;
            Debug.Log("Salud del jugador" + saludJugador);

        }
        if(saludJugador <= 0)
        {
            anim.SetBool("muerte", true);
        }
     }
    public void ScheduleRestarLevel()
    {
        StartCoroutine(RestartLevel());
    }
    IEnumerator RestartLevel ()
    {
        yield return new WaitForSeconds(4);
        Application.LoadLevel (Application.loadedLevel);
    }
}