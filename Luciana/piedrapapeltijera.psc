Algoritmo PiedraPapelTijera
	Repetir
		Escribir 'Jugador1 elija piedra(1), papel(2) o tijera(3)'
		Leer p1
		Escribir 'Jugador2 elija piedra(1), papel(2) o tijera(3)' // Cada jugador elige entre 1 PIEDRA, 2 PAPEL, 3 TIJERA
		Leer p2
		Escribir 'Jugador3 elija piedra(1), papel(2) o tijera(3)'
		Leer p3
		Segun p1  Hacer // se analizan las 3 posibles respuestas de jugador1 y se compara con las demas posibilidades
			1:
				// SI JUGADOR 1 elige PIEDRA
				Si (p2=1 Y p3=1) O (p2=2 Y p3=3) O (p2=3 Y p3=2) Entonces
					Escribir 'Triple empate' // si empatan los 3 ninguno suma puntos esta ronda
				FinSi
				Si (p2=3 Y p3=3) Entonces
					Escribir 'Punto para Jugador 1' // punto directo para J1
					puntuacion1 <- puntuacion1+1 // suma de punto al contador de J1
				FinSi
				Si (p2=2 Y p3=1) Entonces
					Escribir 'Punto para Jugador 2' // punto directo para J2
					puntuacion2 <- puntuacion2+1 // suma de punto al contador de J2
				FinSi
				Si (p2=1 Y p3=2) Entonces
					Escribir 'Punto para Jugador 3' // punto directo para J3
					puntuacion3 <- puntuacion3+1 // suma de punto al contador de J3
				FinSi
				Si (p2=1 Y p3=3) Entonces
					Escribir 'Empate entre Jugador 1 y Jugador 2' // desempate entre J1 y J2
					Repetir
						Escribir 'Jugador 1 elija piedra(1), papel(2) o tijera(3)' // los jugadores a desempatar eligen nuevamente
						Leer p1
						Escribir 'Jugador 2 elija piedra(1), papel(2) o tijera(3)'
						Leer p2
					Hasta Que (p1!=p2)
					Si (p1=1 Y p2=2) O (p1=2 Y p1=3) O (p1=3 Y p2=1) Entonces
						Escribir 'Punto para Jugador 2' // desempate a favor de J2
						puntuacion2 <- puntuacion2+1
					FinSi
					Si (p2=1 Y p1=2) O (p2=2 Y p1=3) O (p2=3 Y p1=1) Entonces
						Escribir 'Punto para Jugador 1' // desempate a favor de J1
						puntuacion1 <- puntuacion1+1
					FinSi
				FinSi
				Si (p2=2 Y p3=2) Entonces
					Escribir 'Empate entre Jugador 2 y Jugador 3' // desempate entre J2 y J3
					Repetir
						Escribir 'Jugador 2 elija piedra(1), papel(2) o tijera(3)' // los jugadores a desempatar eligen nuevamente
						Leer p2
						Escribir 'Jugador 3 elija piedra(1), papel(2) o tijera(3)'
						Leer p3
					Hasta Que (p2!=p3)
					Si (p2=1 Y p3=2) O (p2=2 Y p3=3) O (p2=3 Y p3=1) Entonces
						Escribir 'Punto para Jugador 3' // desempate a favor de J3
						puntuacion3 <- puntuacion3+1 // suma de punto al contador de J3
					FinSi
					Si (p3=1 Y p2=2) O (p3=2 Y p2=3) O (p3=3 Y p2=1) Entonces
						Escribir 'Punto para Jugador 2' // desempate a favor de J2
						puntuacion1 <- puntuacion1+1 // suma de punto al contador de J2
					FinSi
				FinSi
				Si (p2=3 Y p3=1) Entonces
					Escribir 'Empate entre Jugador 1 y Jugador 3' // desempate entre J1 y J3
					Repetir
						Escribir 'Jugador 1 elija piedra(1), papel(2) o tijera(3)' // los jugadores a desempatar eligen nuevamente
						Leer p1
						Escribir 'Jugador 3 elija piedra(1), papel(2) o tijera(3)'
						Leer p3
					Hasta Que (p1!=p3)
					Si (p1=1 Y p3=2) O (p1=2 Y p3=3) O (p1=3 Y p3=1) Entonces
						Escribir 'Punto para Jugador 3' // desempate a favor de J3
						puntuacion3 <- puntuacion3+1 // suma de punto al contador de J3
					FinSi
					Si (p3=1 Y p1=2) O (p3=2 Y p1=3) O (p3=3 Y p1=1) Entonces
						Escribir 'Punto para Jugador 1' // desempate a favor de J1
						puntuacion1 <- puntuacion1+1 // suma de punto al contador de J1
					FinSi
				FinSi
			2:
				// SI JUGADOR 1 elige PAPEL
				Si (p2=1 Y p3=3) O (p2=2 Y p3=2) O (p2=3 Y p3=1) Entonces
					Escribir 'Triple empate' // si empatan los 3 ninguno suma puntos esta ronda
				FinSi
				Si (p2=1 Y p3=1) Entonces
					Escribir 'Punto para Jugador 1' // punto directo para J1
					puntuacion1 <- puntuacion1+1 // suma de punto al contador de J1
				FinSi
				Si (p2=3 Y p3=2) Entonces
					Escribir 'Punto para Jugador 2' // punto directo para J2
					puntuacion2 <- puntuacion2+1 // suma de punto al contador de J2
				FinSi
				Si (p2=2 Y p3=3) Entonces
					Escribir 'Punto para Jugador 3' // punto directo para J3
					puntuacion3 <- puntuacion3+1 // suma de punto al contador de J3
				FinSi
				Si (p2=1 Y p3=2) Entonces
					Escribir 'Empate entre Jugador 1 y Jugador 3' // desempate entre J1 y J3
					Repetir
						Escribir 'Jugador 1 elija piedra(1), papel(2) o tijera(3)' // los jugadores a desempatar eligen nuevamente
						Leer p1
						Escribir 'Jugador 3 elija piedra(1), papel(2) o tijera(3)'
						Leer p3
					Hasta Que (p1!=p3)
					Si (p1=1 Y p3=2) O (p1=2 Y p3=3) O (p1=3 Y p3=1) Entonces
						Escribir 'Punto para Jugador 3' // desempate a favor de J3
						puntuacion3 <- puntuacion3+1 // suma de punto al contador de J3
					FinSi
					Si (p3=1 Y p1=2) O (p3=2 Y p1=3) O (p3=3 Y p1=1) Entonces
						Escribir 'Punto para Jugador 1' // desempate a favor de J1
						puntuacion1 <- puntuacion1+1 // suma de punto al contador de J1
					FinSi
				FinSi
				Si (p2=2 Y p3=1) Entonces
					Escribir 'Empate entre Jugador 1 y Jugador2 ' // desempate entre J1 y J2
					Repetir
						Escribir 'Jugador1 elija piedra(1), papel(2) o tijera(3)' // los jugadores a desempatar eligen nuevamente
						Leer p1
						Escribir 'Jugador2 elija piedra(1), papel(2) o tijera(3)'
						Leer p2
					Hasta Que (p1!=p2)
					Si (p1=1 Y p2=2) O (p1=2 Y p1=3) O (p1=3 Y p2=1) Entonces
						Escribir 'Punto para Jugador 2' // desempate a favor de J2
						puntuacion2 <- puntuacion2+1 // suma de punto al contador de J2
					FinSi
					Si (p2=1 Y p1=2) O (p2=2 Y p1=3) O (p2=3 Y p1=1) Entonces
						Escribir 'Punto para Jugador 1' // desempate a favor de J1
						puntuacion1 <- puntuacion1+1 // suma de punto al contador de J1
					FinSi
				FinSi
				Si (p2=3 Y p3=3) Entonces
					Escribir 'Empate entre Jugador 2 y Jugador 3' // desempate entre J2 y J3
					Repetir
						Escribir 'Jugador 2 elija piedra(1), papel(2) o tijera(3)' // los jugadores a desempatar eligen nuevamente
						Leer p2
						Escribir 'Jugador 3 elija piedra(1), papel(2) o tijera(3)'
						Leer p3
					Hasta Que (p2!=p3)
					Si (p2=1 Y p3=2) O (p2=2 Y p3=3) O (p2=3 Y p3=1) Entonces
						Escribir 'Punto para Jugador 3' // desempate a favor de J3
						puntuacion3 <- puntuacion3+1 // suma de punto al contador de J3
					FinSi
					Si (p3=1 Y p2=2) O (p3=2 Y p2=3) O (p3=3 Y p2=1) Entonces
						Escribir 'Punto para Jugador 2' // desempate a favor de J2
						puntuacion2 <- puntuacion2+1 // suma de punto al contador de J2
					FinSi
				FinSi
			3:
				// SI JUGADOR 1 elige TIJERA
				Si (p2=1 Y p3=2) O (p2=2 Y p3=1) O (p2=3 Y p3=3) Entonces
					Escribir 'Triple empate' // si empatan los 3 ninguno suma puntos esta ronda
				FinSi
				Si (p2=2 Y p3=2) Entonces
					Escribir 'Punto para Jugador 1' // punto directo para J1
					puntuacion1 <- puntuacion1+1 // suma de punto al contador de J1
				FinSi
				Si (p2=3 Y p3=2) Entonces
					Escribir 'Punto para Jugador 2' // punto directo para J2
					puntuacion2 <- puntuacion2+1 // suma de punto al contador de J2
				FinSi
				Si (p2=2 Y p3=1) Entonces
					Escribir 'Punto para Jugador 3' // punto directo para J3
					puntuacion3 <- puntuacion3+1 // suma de punto al contador de J3
				FinSi
				Si (p2=2 Y p3=3) Entonces
					Escribir 'Empate entre Jugador 1 y Jugador 3' // desempate entre J1 y J3
					Repetir
						Escribir 'Jugador 1 elija piedra(1), papel(2) o tijera(3)' // los jugadores a desempatar eligen nuevamente
						Leer p1
						Escribir 'Jugador 3 elija piedra(1), papel(2) o tijera(3)'
						Leer p3
					Hasta Que (p1!=p3)
					Si (p1=1 Y p3=2) O (p1=2 Y p3=3) O (p1=3 Y p3=1) Entonces
						Escribir 'Punto para Jugador 3' // desempate a favor de J3
						puntuacion3 <- puntuacion3+1 // suma de punto al contador de J3
					FinSi
					Si (p3=1 Y p1=2) O (p3=2 Y p1=3) O (p3=3 Y p1=1) Entonces
						Escribir 'Punto para Jugador 1' // desempate a favor de J1
						puntuacion1 <- puntuacion1+1 // suma de punto al contador de J1
					FinSi
				FinSi
				Si (p2=3 Y p3=2) Entonces
					Escribir 'Empate entre Jugador 1 y Jugador 2' // desempate entre J1 y J2
					Repetir
						Escribir 'Jugador 1 elija piedra(1), papel(2) o tijera(3)' // los jugadores a desempatar eligen nuevamente
						Leer p1
						Escribir 'Jugador 2 elija piedra(1), papel(2) o tijera(3)'
						Leer p2
					Hasta Que (p1!=p2)
					Si (p1=1 Y p2=2) O (p1=2 Y p1=3) O (p1=3 Y p2=1) Entonces
						Escribir 'Punto para Jugador 2' // desempate a favor de J2
						puntuacion2 <- puntuacion2+1 // suma de punto al contador de J2
					FinSi
					Si (p2=1 Y p1=2) O (p2=2 Y p1=3) O (p2=3 Y p1=1) Entonces
						Escribir 'Punto para Jugador 1' // desempate a favor de J1
						puntuacion1 <- puntuacion1+1 // suma de punto al contador de J1
					FinSi
				FinSi
				Si (p2=1 Y p3=1) Entonces
					Escribir 'Empate entre Jugador 2 y Jugador 3' // desempate entre J2 y J3
					Repetir
						Escribir 'Jugador 2 elija piedra(1), papel(2) o tijera(3)' // los jugadores a desempatar eligen nuevamente
						Leer p2
						Escribir 'Jugador 3 elija piedra(1), papel(2) o tijera(3)'
						Leer p3
					Hasta Que (p2!=p3)
					Si (p2=1 Y p3=2) O (p2=2 Y p3=3) O (p2=3 Y p3=1) Entonces
						Escribir 'Punto para Jugador 3' // desempate a favor de J3
						puntuacion3 <- puntuacion3+1 // suma de punto al contador de J3
					FinSi
					Si (p3=1 Y p2=2) O (p3=2 Y p2=3) O (p3=3 Y p2=1) Entonces
						Escribir 'Punto para Jugador 2' // desempate a favor de J2
						puntuacion1 <- puntuacion1+1 // suma de punto al contador de J2
					FinSi
				FinSi
		FinSegun
	Hasta Que (puntuacion1=3 O puntuacion2=3 O puntuacion3=3)
	// cuando alguno de los jugadores sume 3 puntos la iteracion termina
	Si puntuacion1=3 Entonces
		Escribir 'Ganador Jugador 1' // se anuncia ganador
	FinSi
	Si puntuacion2=3 Entonces
		Escribir 'Ganador Jugador 2' // se anuncia ganador
	FinSi
	Si puntuacion3=3 Entonces
		Escribir 'Ganador Jugador 3' // se anuncia ganador
	FinSi
FinAlgoritmo

