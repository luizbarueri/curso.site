function chamaGato(nome, sexo) {
    if (nome != "" && sexo != "") {
        console.log("Gato: " + nome + ", Sexo: " + sexo);
    }
}

chamaGato("Mia","Femea")

const chamaCat = (nome = "?", sexo = "?") => {
    if (nome != "" || sexo != "") {
        console.log("Gato: " + nome + ", sexo: " + sexo);
    } else {
        console.log("Erro! Informe nome ou Sexo do Gato.")
    }
}

chamaCat()
chamaCat("Gorda")
chamaCat("Nina", "Femea")