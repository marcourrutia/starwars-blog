import { useEffect } from "react";

const BackgroundStar = (props) => {
  useEffect(() => {
    // GLOBALS
    const STAR_COLOR = "#fff";
    const STAR_SIZE = 3;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

    // setup canvas
    const canvas = document.querySelector("#canvas-1");
    const context = canvas.getContext("2d");

    // aux variables
    let scale = 1;
    let width;
    let height;
    let stars = [];
    let pointerX = null;
    let pointerY = null;
    let velocity = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      z: 0.04,
    }; /* 0.0004 */
    let touchInput = false;
    // Functions
    if (props.hyper) {
      velocity.z = 0.004;
      setTimeout(() => {
        upVelocity();
      }, 500);
      setTimeout(() => {
        props.setHyper(false);
        props.setMouse(true);
      }, 3500);
    } else {
      reduceVelocity();
      const step1 = () => {
        context.clearRect(0, 0, width, height);
        requestAnimationFrame(step1);
      };
      step1();
    }

    function upVelocity() {
      if (velocity.z < 0.06) {
        velocity.z += (0.06 + 0.0004) / 100;
        requestAnimationFrame(upVelocity);
      }
    }
    function reduceVelocity() {
      if (velocity.z > 0.0004) {
        velocity.z -= (0.06 - 0.0004) / 100;
        requestAnimationFrame(reduceVelocity);
      } else if (velocity.z < 0.0004) {
        velocity.z = 0.0004;
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

    function movePointer(x, y) {
      if (pointerX === null || pointerY === null) {
        pointerX = x;
        pointerY = y;
        return;
      }
      let ox = x - pointerX;
      let oy = y - pointerY;
      velocity.tx = velocity.tx + (ox / 8) * scale * (touchInput ? 1 : -1);
      velocity.ty = velocity.ty + (oy / 8) * scale * (touchInput ? 1 : -1);
      pointerX = x;
      pointerY = y;
    }

    // handlers
    function onMouseMove(event) {
      touchInput = false;
      movePointer(event.clientX, event.clientY);
    }

    function onTouchMove(event) {
      event.preventDefault();
      touchInput = true;
      movePointer(event.touches[0].clientX, event.touches[0].clientY);
    }

    function onMouseLeave() {
      pointerX = null;
      pointerY = null;
    }

    // listeners
    generate();
    resize();
    step();

    window.onresize = resize;
    props.mouse && (canvas.onmousemove = onMouseMove);
    canvas.ontouchmove = onTouchMove;
    canvas.ontouchend = onMouseLeave;
    canvas.onmouseleave = onMouseLeave;

    // Limpiar cuando el componente se desmonte
    return () => {
      window.onresize = null;
      canvas.onmousemove = null;
      canvas.ontouchmove = null;
      canvas.ontouchend = null;
      canvas.onmouseleave = null;
    };
  }, [props.hyper, props.mouse]);

  return <canvas className="star-background" id="canvas-1" />;
};

export default BackgroundStar;
