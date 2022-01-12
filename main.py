def pohyb():
    if input.button_is_pressed(Button.A):
        if led.point(4, 4):
            led.unplot(4, 4)
            led.plot(3, 4)
        elif led.point(3, 4):
            led.unplot(3, 4)
            led.plot(2, 4)
        elif led.point(2, 4):
            led.unplot(2, 4)
            led.plot(1, 4)
        elif led.point(1, 4):
            led.unplot(1, 4)
            led.plot(0, 4)
    if input.button_is_pressed(Button.B):
        if led.point(0, 4):
            led.unplot(0, 4)
            led.plot(1, 4)
        elif led.point(1, 4):
            led.unplot(1, 4)
            led.plot(2, 4)
        elif led.point(2, 4):
            led.unplot(2, 4)
            led.plot(3, 4)
        elif led.point(3, 4):
            led.unplot(3, 4)
            led.plot(4, 4)
led.plot(2, 4)
for index in range(4):
    led.plot(randint(0, 4), randint(0, 2))

def on_forever():
    basic.pause(1000)
    if led.point(0, 0):
        led.unplot(0, 0)
        led.plot(0, 1)
basic.forever(on_forever)

def on_forever2():
    basic.pause(1000)
    if led.point(0, 1):
        led.unplot(0, 1)
        led.plot(0, 2)
basic.forever(on_forever2)

def on_forever3():
    basic.pause(1000)
    if led.point(0, 2):
        led.unplot(0, 2)
        led.plot(0, 3)
basic.forever(on_forever3)

def on_forever4():
    basic.pause(1000)
    if led.point(1, 0):
        led.unplot(1, 0)
        led.plot(1, 1)
basic.forever(on_forever4)

def on_forever5():
    basic.pause(1000)
    if led.point(1, 1):
        led.unplot(1, 1)
        led.plot(1, 2)
basic.forever(on_forever5)

def on_forever6():
    basic.pause(1000)
    if led.point(1, 2):
        led.unplot(1, 2)
        led.plot(1, 3)
basic.forever(on_forever6)

def on_forever7():
    basic.pause(1000)
    if led.point(2, 0):
        led.unplot(2, 0)
        led.plot(2, 1)
basic.forever(on_forever7)

def on_forever8():
    basic.pause(1000)
    if led.point(2, 1):
        led.unplot(2, 1)
        led.plot(2, 2)
basic.forever(on_forever8)

def on_forever9():
    basic.pause(1000)
    if led.point(2, 2):
        led.unplot(2, 2)
        led.plot(2, 3)
basic.forever(on_forever9)

def on_forever10():
    basic.pause(1000)
    if led.point(3, 0):
        led.unplot(3, 0)
        led.plot(3, 1)
basic.forever(on_forever10)

def on_forever11():
    basic.pause(1000)
    if led.point(3, 1):
        led.unplot(3, 1)
        led.plot(3, 2)
basic.forever(on_forever11)

def on_forever12():
    basic.pause(1000)
    if led.point(3, 2):
        led.unplot(3, 2)
        led.plot(3, 3)
basic.forever(on_forever12)

def on_forever13():
    basic.pause(1000)
    if led.point(4, 0):
        led.unplot(4, 0)
        led.plot(4, 1)
basic.forever(on_forever13)

def on_forever14():
    basic.pause(1000)
    if led.point(4, 1):
        led.unplot(4, 1)
        led.plot(4, 2)
basic.forever(on_forever14)

def on_forever15():
    basic.pause(1000)
    if led.point(4, 2):
        led.unplot(4, 2)
        led.plot(4, 3)
basic.forever(on_forever15)
