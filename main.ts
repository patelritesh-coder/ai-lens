PlanetX_AILens.initModule()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.Face)
basic.forever(function on_forever() {
    PlanetX_AILens.cameraImage()
    if (PlanetX_AILens.checkFace()) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("" + ("" + PlanetX_AILens.faceData(PlanetX_AILens.Facestatus.W)))
        }
        
        if (input.buttonIsPressed(Button.B)) {
            basic.showString("" + ("" + PlanetX_AILens.faceData(PlanetX_AILens.Facestatus.H)))
        }
        
    }
    
})
