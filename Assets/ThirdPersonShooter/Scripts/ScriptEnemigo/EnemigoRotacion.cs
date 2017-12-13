using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemigoRotacion : MonoBehaviour
{

    public GameObject Player;
    public Transform target;


    void Start()
    {
        Player = GameObject.FindGameObjectWithTag("Player");

        target = Player.transform;

    }

    void Update()
    { 
    
        if(Vector3.Distance(target.position, this.transform.position) < 100)
        {
            Vector3 direction = target.position - this.transform.position;

            this.transform.rotation = Quaternion.Slerp(this.transform.rotation,
                                      Quaternion.LookRotation(direction), 0.1f);
        }
    }
}