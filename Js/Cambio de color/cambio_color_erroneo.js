function cambiarColor() {
    const colores = ["red", "blue", "green", "yellow", "purple"];
    const indice = Math.random() * colores.length; 
    document.body.style.backgroundColors = colores[indice]
}
