using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Leaderboard : MonoBehaviour
{
    public Text[] highScores;           //Array para la cantidad de puntajes que se mostraran en pantalla (y puedo definir a gusto en el inspector el tamaño del aray)
    int[] highScoreValues;              //Array de los puntajes que se muestran en cada posición
    string[] highScoreNames;            //Array del nombre del jugador que logró un pantaje


    void Start ()
    {
        highScoreValues = new int[highScores.Length];
        highScoreNames = new string[highScores.Length];

        for (int x = 0; x < highScores.Length; x++)
        {
            //Se cargan los nombres de cada jugador y sus puntajes logrados, en la posicion de x para que correspondan los nombres y puntajes respectivamente
            highScoreValues[x] = PlayerPrefs.GetInt("highScoreValues" + x);
            highScoreNames[x] = PlayerPrefs.GetString("highScoreNames" + x);
        }
        EscribirPuntaje();  //LLama el método EscribirPuntaje
    }

    void GuardarPuntajes()
    {
        //Este método setea o guarda los nombres y puntajes de los jugadores en la posición de x para que correspondan
        for (int x = 0; x < highScores.Length; x++)
        {
            PlayerPrefs.SetInt("highScoreValues" + x, highScoreValues[x]);
            PlayerPrefs.SetString("highScoreNames" + x, highScoreNames[x]);
        }
    }

    public void VerificarPuntajes(int _value, string _userName)
    {
        //Este método organizará los puntajes
        for (int x = 0; x < highScores.Length; x++)
        {
            if (_value > highScoreValues [x])
            {
                for(int y = highScores.Length -1; y > x; y--)
                {
                    highScoreValues[y] = highScoreValues[y - 1];
                    highScoreNames[x] = _userName;

                    EscribirPuntaje();
                    GuardarPuntajes();
                    break;
                }
            }
        }
    }

    void EscribirPuntaje()
    {
        for (int x = 0; x < highScores.Length; x++)
        {
            highScores[x].text = highScoreNames[x] + "------------------" + highScoreValues[x].ToString();
        }
    }
}
