class Game {
    constructor(canvas) {
        this._canvas = document.querySelector('#' + canvas)
        this.context = this._canvas.getContext('2d')
    }

    _update() {
        this._world.update(this.context)
        this._draw()
    }

    _draw() {
        this._world.draw(this.context)
        window.requestAnimationFrame(this._update.bind(this))
    }

    start() {
        const WIDTH  = this._canvas.width
        const HEIGHT = this._canvas.height

        this._world  = new World('black', WIDTH, HEIGHT)

        let ball   = new Ball('white', 4, WIDTH/2, HEIGHT/2, 5, 5)
        let player = new Playable(10, 100, 'white', 0, HEIGHT/2 - 50, 5, ball)

        this._world.player = player
        this._world.ball   = ball
        this._world.init()

        window.requestAnimationFrame(this._update.bind(this))
    }
}