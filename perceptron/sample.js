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
        }
    }
} 