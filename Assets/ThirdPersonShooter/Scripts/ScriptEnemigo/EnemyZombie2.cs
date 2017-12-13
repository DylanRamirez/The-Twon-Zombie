using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyZombie2 : MonoBehaviour
{

    public GameObject Player;
    public Transform target;
    public float speed;
    public float distanciaZombie;
    static Animator anim;

    void Start()
    {
        Player = GameObject.FindGameObjectWithTag("Player");

        target = Player.transform;

        anim = GetComponent<Animator>();
    }

    void Update()
    {
        float dist = Vector3.Distance(target.position, transform.position);

        if (dist > distanciaZombie)
        {
            float step = speed * Time.deltaTime;
            transform.position = Vector3.MoveTowards(transform.position, target.position, step);
        }

        if (Vector3.Distance(target.position, this.transform.position) < 3)
        {
            Vector3 direction = target.position - this.transform.position;

            this.transform.rotation = Quaternion.Slerp(this.transform.rotation,
                                      Quaternion.LookRotation(direction), 0.1f);

            anim.SetBool("isRunning", false);
            if (direction.magnitude < 2)
            {
                this.transform.Translate(0, 0, 0.2f);
                anim.SetBool("isAttacking", true);
            }
            else
            {
                anim.SetBool("isAttacking", true);
                anim.SetBool("isRunning", false);
            }
        }
        else
        {
            anim.SetBool("isAttacking", false);
            anim.SetBool("isRunning", true);
        }

    }
}
