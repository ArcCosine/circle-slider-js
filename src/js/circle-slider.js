class CircleSlider {

    constructor (option){
        if( typeof option === 'undefined' ){
            option = {};
        }
        this.root = option.root || document.getElementById('circle-slider');
        this.radius = option.radius || 180;
        this.knobRadius= option.radius || 20;
        return this;
    }


    createCircle(option){
        const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
        for( let key in option ){
            circle.setAttribute(key, option[key]);
        }
        return circle;
    }


    createPath(option){
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "#000");
        path.setAttribute("stroke-width", "8");
        path.setAttribute("d", this.createD(option));
        return path;
    }

    createD(option){
        const parts = [];
        parts.push('M 200 20');
        parts.push('A');
        parts.push(this.radius);
        parts.push(this.radius);
        parts.push(0)
        parts.push(0);
        parts.push(1);
        parts.push(option.x);
        parts.push(option.y);
        return parts.join(' ')
    }


    createSVG(){
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 400 400");

        const circle = svg.appendChild(this.createCircle({
            cx: 200,
            cy: 200,
            r: this.radius,
            fill: "none",
            stroke: "blue",
            "stroke-width" : 2
        }));


        const path = svg.appendChild(this.createPath({
            x: 200,
            y: 380
        }));

        const knob = svg.appendChild(this.createCircle({
            cx: 200,
            cy: 380,
            r: this.knobRadius,
            fill: "blue"
        }));

        this.bindEvent(svg, circle, path, knob);

        return svg;
    }

    bindEvent(svg, circle, path, knob ){
        console.log(svg, circle, path, knob);
    }

    render(){
       if( this.root ){
       this.root.appendChild(this.createSVG()); 
       }
    }
}


export default CircleSlider;
