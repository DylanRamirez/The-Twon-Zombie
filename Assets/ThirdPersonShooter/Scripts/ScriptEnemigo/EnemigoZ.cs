using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemigoZ : MonoBehaviour
{
    public int scoreValue = 10;
    
    void OnDestroy()
    {
        ScoreManager.score += scoreValue;
    }
    
}
