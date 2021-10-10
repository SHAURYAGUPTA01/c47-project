class Form {
    constructor() {
        //this.img = createImg("assets/title.png")
        this.title = createElement("h2")
        this.input = createInput("").attribute("placeholder", "ENTER YOUR NAME")
        this.button = createButton("PLAY")
        this.greeting = createElement("h2")
    }

    setElementPositions() {
        //this.img.position(0, 0)
        //this.img.size(width, height)
        this.title.position(width / 2 - 100, 0)
        this.input.position(width / 2 - 110, height / 2 - 80)
        this.button.position(width / 2 - 90, height / 2 - 20)
        this.greeting.position(width / 2 - 400, height / 2 - 100)
    }

    setElementStyle() {
        this.input.class("customInput")
        var message = `POWER BADMINTON`
        this.title.html(message)
        this.title.class("gameTitle")
        this.button.class("customButton")
        this.greeting.class("greeting")
    }

    hide() {
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }

    display() {
        this.setElementPositions()
        this.setElementStyle()
        this.handleMousePressed()
    }

    handleMousePressed() {
        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()
            var message = `HELLO ${this.input.value()} !
            <br>WAIT FOR ANOTHER PLAYER TO JOIN ...`
            this.greeting.html(message)
            playerCount += 1
            player.name = this.input.value()
            player.index = playerCount
            player.addPlayer()
            player.update(playerCount)
        })
    }
}