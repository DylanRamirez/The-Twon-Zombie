using UnityEngine;
using UnityEngine.UI;
using System.Collections;

public class ScoreManager : MonoBehaviour
{
    public Leaderboard leaderboard;
    public InputField playerName;
    public Button botonAceptar;
    public static int score;


    Text text;


    void Awake()
    {
        text = GetComponent<Text>();
        score = 0;
    }


    void Update()
    {
        text.text = "Score: " + score;
    }
    public void NombreJugador()
    {
        leaderboard.VerificarPuntajes(score, playerName.text);
        
    }
}
