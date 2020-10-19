import "../scss/style.scss";

import CircleSlider from "./circle-slider";

const init = () => {
    const circleSlider = new CircleSlider({
        root:document.getElementById('circle-slider')
    });
    circleSlider.render();
};
document.addEventListener('DOMContentLoaded', init, false);
