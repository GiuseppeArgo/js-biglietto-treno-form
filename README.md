1. INPUT
    - [x] Chiediamo all'utente il numero di chilometri che vuole  percorrere
    - [x] Chiediamo all'utente l'età del passeggero

2. ESECUZIONE LOGICA 
    - [x] Calcoliamo il prezzo del biglietto in base ai km
        risultatoKm = prezzo in base ai km        
    
    Se il cliente è minorenne applichiamo uno sconto del 20 %
        sconto = risultatoKm * 0.20
    Altrimenti se il cliente è over 65 applichiamo uno sconto del 40%
        sconto = risultatoKm * 0.40
    Altrimenti non applichiamo uno sconto
        sconto = 0

    - [x] Se il cliente ha diritto a sconto calcoliamo il prezzo
        risultato = risultatoKm - sconto
    Altrimenti
        risultato = risultatoKm    

3. OUTPUT
    - [x] Stampiamo : risultato