input.onButtonPressed(Button.A, function () {
    if (GameState != 0) {
        if (curser_x == 4) {
            curser_x = 0
        } else {
            curser_x += 1
        }
        for (let index = 0; index < 4; index++) {
            if (zListe[curser_x][0] != 0) {
                if (curser_x == 4) {
                    curser_x = 0
                } else {
                    curser_x += 1
                }
            }
        }
        GameState = 0
        Draw()
    }
})
input.onButtonPressed(Button.B, function () {
    if (zListe[curser_x][0] == 0) {
        GameState = 0
        for (let Index = 0; Index <= 5; Index++) {
            if (zListe[curser_x][Index] != 0) {
                zListe[curser_x][Index - 1] = pHell
                break;
            }
        }
        if (pHell == p1Hell) {
            pHell = p2Hell
        } else {
            pHell = p1Hell
        }
    }
    Draw()
})
function Draw () {
    GameState = 0
    basic.clearScreen()
    for (let Index = 0; Index <= 4; Index++) {
        Drawlist = Index
        for (let Index = 0; Index <= 4; Index++) {
            DrawValue = Index
            led.plotBrightness(Drawlist, DrawValue, zListe[Drawlist][DrawValue])
        }
    }
    led.plotBrightness(curser_x, 0, pHell)
    GameState = 1
}
let DrawValue = 0
let Drawlist = 0
let pHell = 0
let curser_x = 0
let p2Hell = 0
let p1Hell = 0
let zListe: number[][] = []
let GameState = 0
GameState = 0
let z1 = [
0,
0,
0,
0,
0,
1
]
let z2 = [
0,
0,
0,
0,
0,
1
]
let z3 = [
0,
0,
0,
0,
0,
1
]
let z4 = [
0,
0,
0,
0,
0,
1
]
let z5 = [
0,
0,
0,
0,
0,
1
]
zListe = [
z1,
z2,
z3,
z4,
z5
]
p1Hell = 250
p2Hell = 100
basic.showString("\"A\"")
curser_x = 0
basic.clearScreen()
pHell = p1Hell
led.plotBrightness(0, 0, pHell)
GameState = 1
basic.forever(function () {
    for (let index = 0; index < 3; index++) {
        music.playMelody("C5 - C5 - C5 B G A ", 150)
    }
    music.playMelody("G F G F D A C D ", 150)
})
