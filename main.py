PlanetX_AILens.init_module()
PlanetX_AILens.switchfunc(PlanetX_AILens.FuncList.FACE)

def on_forever():
    PlanetX_AILens.camera_image()
    if PlanetX_AILens.check_face():
        if input.button_is_pressed(Button.A):
            basic.show_string("" + str((PlanetX_AILens.face_data(PlanetX_AILens.Facestatus.W))))
        if input.button_is_pressed(Button.B):
            basic.show_string("" + str((PlanetX_AILens.face_data(PlanetX_AILens.Facestatus.H))))
basic.forever(on_forever)
