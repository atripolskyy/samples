class Robot {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed === undefined ? 0 : speed;

        console.log(`new robot: ${this.name} with speed ${this.speed}`);

        this.move = this.move.bind(this);
        this.render = this.render.bind(this);
    }

    render() {
        const root = document.getElementById('root');
        let robotDiv = document.createElement('div');
        robotDiv.innerHTML = `
            <div>
                <h2>${this.name}</h2>
                <button class="_move">Move</button>
                <button class="_stop">Stop</button>
            </div>
        `;

        const moveBtn = robotDiv.querySelector('._move');
        moveBtn.addEventListener('click', () => {
            this.move(20);
        });

        const stopBtn = robotDiv.querySelector('._stop');
        stopBtn.addEventListener('click', () => {
            this.stop();
        });

        root.appendChild(robotDiv);
    }

    move(speed) {
        console.log(this);
        this.speed += speed;
        console.log(`Robot ${this.name} is moving with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`Robot ${this.name} is stoped`);
    }

}

let TransportRobot = new Robot('TransportRobot');
TransportRobot.render();

console.log(TransportRobot);