Ciao ragazzi,
esercizio di oggi: (insicurissimo) password generator
nome repo: js-pwdgen-wannabe
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito23
Come prima cosa da oggi realizzate un file README.md in cui scrivete il testo dell'esercizio e la sua scomposizione in sotto problemi. Alla realizzazione del file README.md corrisponde un push obbligatorio.
Oggi non avete un numero minimo di push da eseguire ma da domani sì.
Bonus: se volete potete dare uno stile alla pagina.
Buon lavoro!




<!-------------------
    PSEUDOCODICE 
-------------------->
All'avvio della pagina:
  Inizializza le variabili 'name', 'surname', 'favColor' e 'password'

Quando viene premuto il pulsante con ID "gen_password":
    Richiedi all'utente di inserire il suo nome tramite un prompt e salva il risultato nella variabile 'name'
    Richiedi all'utente di inserire il suo cognome tramite un prompt e salva il risultato nella variabile 'surname'
    Richiedi all'utente di inserire il suo colore preferito tramite un prompt e salva il risultato nella variabile 'favColor'

    Componi la password concatenando 'name', 'surname', 'favColor' e aggiungendo '23' alla fine
    Salva questa combinazione nella variabile 'password'

    Mostra la password all'utente tramite un messaggio a schermo
    Stampa il valore di 'password'