import { Skin } from "./componentes/skin.js"

export function gerarSlider() {
    const quantidadeLoop = 10;

    for (let i = 0; i < quantidadeLoop; i++) {
        const carrosselContainer = document.getElementById("carrossel");

        let s = new Skin(0, "AK", 459.89, "NEON REVOLUTION", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK NEON REVOLUTION PNG.png");
        carrosselContainer.append(s.gerarCardPequeno());
        s = new Skin(1, "AK47", 459.89, "PHANTOM", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK47 PHANTOM.png");
        carrosselContainer.append(s.gerarCardPequeno());
        s = new Skin(2, "AK", 459.89, "WILD LOTUS", "../assets/img/armas-inventario/SKINS COVERT/PNG/AK WILD LOTUS.png");
        carrosselContainer.append(s.gerarCardPequeno());
        s = new Skin(3, "AWP", 459.89, "DESERT HYDRA", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP DESERT HYDRA PNG.png");
        carrosselContainer.append(s.gerarCardPequeno());
        s = new Skin(4, "AWP", 459.89, "FADE", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP FADE PNG.png");
        carrosselContainer.append(s.gerarCardPequeno());
        s = new Skin(1, "AWP", 459.89, "MAN", "../assets/img/armas-inventario/SKINS COVERT/PNG/AWP MAN PNG.png");
        carrosselContainer.append(s.gerarCardPequeno());
        s = new Skin(1, "GLOCK-18", 459.89, "WASTELAND", "../assets/img/armas-inventario/SKINS COVERT/PNG/GLOCK-18 WASTELAND.png");
        carrosselContainer.append(s.gerarCardPequeno());
        s = new Skin(1, "M4A1S", 459.89, "CHATICOS", "../assets/img/armas-inventario/SKINS COVERT/PNG/M4A1S CHATICOS.png");
        carrosselContainer.append(s.gerarCardPequeno());
        s = new Skin(1, "USP", 459.89, "NEO NOIR", "../assets/img/armas-inventario/SKINS COVERT/PNG/USP NEO NOIR.png");
        carrosselContainer.append(s.gerarCardPequeno());
    }
}