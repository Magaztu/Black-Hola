import p5 from "p5";

type Particula = { // ! Similar a interface, pero con sus propias propiedades
    x: number;
    y: number;
    vx: number;
    vy: number;
}

function sketch(p:p5){
    const particulas: Particula[] = [];
    const blackhole = {x: 400, y: 500, mass: 5000};

    p.setup = () => {
        p.createCanvas(800, 800);
        for(let i = 0; i < 300; i++){
            particulas.push({
                x: p.random(p.width);
                y: p.random(p.height);
                vx:0;
                vy:0;
            })
        }
    }
}