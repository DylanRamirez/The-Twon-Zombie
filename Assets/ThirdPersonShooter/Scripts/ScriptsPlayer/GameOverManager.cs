using UnityEngine;

public class GameOverManager : MonoBehaviour
{
    public Salud salud;


    Animator anim;


    void Awake()
    {
        anim = GetComponent<Animator>();
    }


    void Update()
    {
        if (salud.saludJugador <= 0)
        {
            anim.SetTrigger("GameOver");
        }
    }
}