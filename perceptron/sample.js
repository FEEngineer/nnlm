// used for sample half moon

class Point {
    /**
     * Point with its coordinate
     * 
     * @param {double} x 
     * @param {double} y 
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class DoubleMoon {
    /**
     * constructor of double moon
     * 
     * @param {double} radius redius of each moon
     * @param {double} width width of each moon
     * @param {double} dist distance between two moons
     */
    constructor(radius, width, dist) {
        this.radius = radius;
        this.width = width;
        this.dist = dist;

        this.samples = [];
    }

    /**
     * sampling
     * 
     * @param {int} n indicates count of samples, samples will be generated randomly, data will be stored to this.samples
     */
    sample(n) {
        let eachSampleCount = n >> 1;
        let gap = this.radius * 2;

        // sample up single moon
        // first randomly sample x, then based on this x, get scope of y, and randomly pick one value
        for (let index = 0; index < eachSampleCount; index++) {
            let x = Math.random() * gap - this.radius;

            let rMax = this.radius;
            let rMin = this.radius - this.width;


            let yMax = Math.sqrt(Math.pow(rMax, 2) - Math.pow(x, 2));
            let yMin = 0;

            if (Math.abs(rMin) > Math.abs(x)) {
                yMin = Math.sqrt(Math.pow(rMin, 2) - Math.pow(x, 2));
            }

            let y = yMin + (yMax - yMin) * Math.random();

            console.log("x is ", x, " and y is ", y);
        }
    }
}

let doubleMoon = new DoubleMoon(10, 2, 0);

doubleMoon.sample(10);