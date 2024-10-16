import { useEffect } from "react";

const HyperSpace = () => {
  useEffect(() => {
    // GLOBALS
    const STAR_COLOR = "#fff";
    const STAR_SIZE = 3;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

    // setup canvas
    const canvas = document.querySelector("#canvas-2");
    const context = canvas.getContext("2d");

    // aux variables
    let scale = 1;
    let width;
    let height;
    let stars = [];
    let velocity = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      z: 0.003,
    }; /* 0.0004 */
    // Functions
    function upVelocity() {
      if (velocity.z < 0.01) {
        velocity.z += (0.01 + 0.003) / 100;
        requestAnimationFrame(upVelocity);
      }
    }

    function generate() {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: 0,
        y: 0,
        z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
      }));
    }

    function placeStar(star) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function recycleStar(star) {
      let direction = "z";
      let vx = Math.abs(velocity.x);
      let vy = Math.abs(velocity.y);
      if (vx > 1 || vy > 1) {
        let axis;
        if (vx > vy) {
          axis = Math.random() < vx / (vx + vy) ? "h" : "v";
        } else {
          axis = Math.random() < vy / (vx + vy) ? "v" : "h";
        }
        if (axis === "h") {
          direction = velocity.x > 0 ? "l" : "r";
        } else {
          direction = velocity.y > 0 ? "t" : "b";
        }
      }
      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
      if (direction === "z") {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else if (direction === "l") {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === "r") {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === "t") {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      } else if (direction === "b") {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
      }
    }

    function resize() {
      scale = window.devicePixelRatio || 1;
      width = window.innerWidth * scale;
      height = window.innerHeight * scale;

      canvas.width = width;
      canvas.height = height;
      stars.forEach(placeStar);
    }

    function step() {
      update();
      render();
      requestAnimationFrame(step);
    }

    function update() {
      velocity.tx *= 0.8; /* 0.96 */
      velocity.ty *= 0.8;

      velocity.x += (velocity.tx - velocity.x) * 0.5;
      velocity.y += (velocity.ty - velocity.y) * 0.5;

      stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        // Reciclamos cuando salga de los límites
        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    }

    function render() {
      stars.forEach((star) => {
        context.beginPath();
        context.lineCap = "round";
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = 0.5 + 0.5 * Math.random();
        context.strokeStyle = STAR_COLOR;

        context.beginPath();
        context.moveTo(star.x, star.y);

        let tailX = velocity.x * 2;
        let tailY = velocity.y * 2;

        // Evitamos que sea invisible
        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

        context.lineTo(star.x + tailX, star.y + tailY);
        context.stroke();
      });
    }

    // listeners
    setTimeout(() => {
      upVelocity();
    }, 800);
    resize();
    generate();
    step();

    // Limpiar cuando el componente se desmonte
    return () => {
      window.onresize = null;
      canvas.onmousemove = null;
      canvas.ontouchmove = null;
      canvas.ontouchend = null;
      canvas.onmouseleave = null;
    };
  }, []);

  return <canvas className="hyper-space" id="canvas-2" />;
};
export default HyperSpace;
