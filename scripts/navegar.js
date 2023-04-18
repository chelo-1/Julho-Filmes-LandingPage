function navegar(x) {
    if (x == 1) {
        document.getElementById("modoContato").style.display = "none";
        document.getElementById("modoOrcamento").style.display = "none";
        document.getElementById("paginaInicial").style.display = "block";

        document.getElementById("-inicial").className = "active";
        document.getElementById("-contato").className = "#";
        document.getElementById("-orcamento").className = "#";
    }
    if (x == 2) {
        document.getElementById("modoContato").style.display = "block";
        document.getElementById("modoOrcamento").style.display = "none";
        document.getElementById("paginaInicial").style.display = "none";

        document.getElementById("-inicial").className = "#";
        document.getElementById("-contato").className = "active";
        document.getElementById("-orcamento").className = "#";
    }
    if (x == 3) {
        document.getElementById("modoContato").style.display = "none";
        document.getElementById("modoOrcamento").style.display = "block";
        document.getElementById("paginaInicial").style.display = "none";

        document.getElementById("-inicial").className = "#";
        document.getElementById("-contato").className = "#";
        document.getElementById("-orcamento").className = "active";
    }
}

// ik.sys / Eduardo Gomes