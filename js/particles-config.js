particlesJS("particles-js", {
    particles: {
      number: { value: 300, density: { enable: true, value_area: 1000 } },
      color: { value:"#fff" },
      shape: {
        type: "circle",
        polygon: { nb_sides: 6 },
      },
      opacity: { value: 0.5, random: false },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 140,
        color: "#ffffff",
        opacity: 0.1,
        width: 1
      },
      move: {
        enable: true,
        speed: 7,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

  
 


//   const brainShape = [
//     { x: 100, y: 200 }, { x: 120, y: 210 }, { x: 140, y: 220 }, // Pontos da esquerda
//     { x: 160, y: 230 }, { x: 180, y: 240 }, { x: 200, y: 250 }, // Centro
//     { x: 220, y: 240 }, { x: 240, y: 230 }, { x: 260, y: 220 }, // Pontos da direita
//     { x: 280, y: 210 }, { x: 300, y: 200 }
// ];

// function createBrainShape() {
//     const particles = window.pJSDom[0].pJS.particles.array;
//     particles.forEach((particle, index) => {
//         const point = brainShape[index % brainShape.length];
//         particle.x = point.x;
//         particle.y = point.y;
//     });
// }

// createBrainShape();

// window.addEventListener('scroll', () => {
//     const particles = window.pJSDom[0].pJS.particles.array;
//     const scrollY = window.scrollY;

//     particles.forEach((particle, index) => {
//         const point = brainShape[index % brainShape.length];
//         particle.x = point.x + scrollY * 0.1; // Move as partículas no eixo X
//         particle.y = point.y + scrollY * 0.05; // Move as partículas no eixo Y
//     });
// });
  