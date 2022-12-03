# AdventJS

Resolución de los retos diarios del adventJS de 2022.

[RETOS adventJS](https://adventjs.dev/es)

## Reto #1: ¡Automatizando envolver regalos de navidad!

*Enunciado:*

Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.

A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.

El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:

    const gifts = ['cat', 'game', 'socks']
    const wrapped = wrapping(gifts)
    console.log(wrapped)

    /* [
    "*****\\n*cat*\\n*****",
    "******\\n*game*\\n******",
    "*******\\n*socks*\\n*******",
    ] */

Como ves, el papel de regalo envuelve el string. Por arriba y por abajo, para no dejar ningún hueco, las esquinas también están cubiertas por el papel de regalo.

![](https://imgur.com/a/itchLfd)

[Reto](https://adventjs.dev/es/challenges/2022/1)

## Reto #2: Nadie quiere hacer horas extra

*Enunciado:*

Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.

Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:

    const year = 2022
    const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

    // 01/06 es el 6 de enero, jueves. Cuenta.
    // 04/01 es el 1 de abril, un viernes. Cuenta.
    // 12/25 es el 25 de diciembre, un domingo. No cuenta.

    countHours(year, holidays) // 2 días -> 4 horas extra en el año


[Reto](https://adventjs.dev/es/challenges/2022/2)