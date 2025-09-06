import p5 from "p5";

function sketch(p){
    const particulas = [];
    const blackhole = {x: 400, y: 500, mass: 5000};

    p.setup = () => {
        p.createCanvas(800, 800);
        // for(let i = 0; i < 300; i++){
        //     particulas.push({
        //         x: p.random(p.width),
        //         y: p.random(p.height),
        //         vx:0,
        //         vy:0
        //     })
        // }
    }
    p.draw = () => {
        p.background(0);
    
        p.noStroke();
        p.fill(20);
        p.circle(blackhole.x, blackhole.y, 160);
        p.fill(0);
        p.circle(blackhole.x, blackhole.y, 60)

        // for (const particula of particulas){
        //     const dx = blackhole.x - particula.x;
        //     const dy = blackhole.y - particula.y;
        //     const distSq = dx * dx + dy * dy;
        //     const dist = Math.sqrt(distSq);

        
        //     const force = blackhole.mass / (distSq + 100);
        //     const ax = (force * dx) / dist;
        //     const ay = (force * dy) / dist;

        //     particula.vx += ax;
        //     particula.vy += ay;

        //     particula.x += particula.vx;
        //     particula.y += particula.vy;

        //     const velocidad = Math.sqrt(particula.vx ** 2 + particula.vy ** 2);
        //     const tono = p.map(velocidad, 0, 10, 200, 360);
        //     p.fill(tono, 200, 200);
        //     p.fill(355);
        //     p.circle(particula.x, particula.y,2);
        // }
    }
};

new p5(sketch);
