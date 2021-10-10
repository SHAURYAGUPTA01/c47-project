class Game {
    constructor() {
        this.resetTitle = createElement("h2");
        this.resetButton = createButton("");
    }

    start() {
        player = new Player()
        player.getCount()

        form = new Form()
        form.display()

        player1 = createSprite(width / 2 - 400, height / 2 + 100)
        player1.addImage("player1", player1Img)
        player1.scale = 0.6

        player2 = createSprite(width / 2 + 400, height / 2 + 100)
        player2.addImage("player2", player2Img)

        players = [player1, player2]

        angle1 = PI
        badminton1 = Bodies.rectangle(player1.position.x + 20, player1.position.y - 70, 200, 100, angle1, { isStatic: true })
        World.add(world, badminton1)

        angle2 = PI
        badminton2 = Bodies.rectangle(player2.position.x - 200, player2.position.y - 70, 200, 100, angle2, { isStatic: true })
        World.add(world, badminton2)
    }

    getState() {
        database.ref("gameState").on("value", (data) => {
            gameState = data.val();
        })
    }

    handleElements() {
        form.hide()
        //form.img.hide()

        this.resetTitle.html("Reset Game");
        this.resetTitle.class("resetText");
        this.resetTitle.position(width / 2 + 200, 0);

        this.resetButton.class("resetButton");
        this.resetButton.position(width / 2 + 230, 50);
    }

    play() {
        this.handleElements()
        Player.getPlayersInfo()
        if (allPlayers !== undefined) {
            drawSprites()

            var index = 0
            for (var plr in allPlayers) {
                index += 1
                var x = allPlayers[plr].positionX
                var y = allPlayers[plr].positionY
                players[index - 1].position.x = x
                players[index - 1].position.y = y
                // if (player1.positionX > width / 2) {
                //     player1.positionX -= 5
                // }
            }
            image(badminton1Img, player1.position.x + 20, player1.position.y - 70, 200, 100)
            image(badminton2Img, player2.position.x - 200, player2.position.y - 70, 200, 100)
        }
        this.handleResetButton()
        this.handlePlayerControls();
        shuttle.display();
    }

    handleResetButton() {
        this.resetButton.mousePressed(() => {
            database.ref("/").set({
                gameState: 0,
                playerCount: 0,
                players: {}
            })
            window.location.reload()
        })
    }


    updateState(state) {
        database.ref("/").update({
            gameState: state
        })
    }

    handlePlayerControls() {
        if (keyIsDown(LEFT_ARROW) && player.positionX < 0) {
            player.positionX -= 5
            player.updateAll()
        }

        if (keyIsDown(RIGHT_ARROW) && player.positionX < 550) {
            player.positionX += 5
            player.updateAll()
        }

        if (keyIsDown(UP_ARROW)) {
            player.positionY -= 5
            player.updateAll()
        }

        if (keyIsDown(DOWN_ARROW) && player.positionY < 400) {
            player.positionY += 5
            player.updateAll()
        }
    }

    // handleBadmintonControls() {
    //     if (keyIsDown(U) && angle1 < 0.35) {
    //         angle1 += 0.02;
    //     }

    //     if (keyIsDown(D) && angle1 > -1.45) {
    //         angle1 -= 0.02;
    //     }
    // }
}