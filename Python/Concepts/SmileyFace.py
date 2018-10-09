import turtle    

    
def print_smiley():    
    myTurtle = turtle.Turtle()  

    myTurtle.penup()
    myTurtle.goto(0, -100) 
    myTurtle.pendown()

    myTurtle.color("yellow")
    myTurtle.begin_fill()
    myTurtle.circle(100)   
    myTurtle.end_fill()

    myTurtle.penup()
    myTurtle.setposition(-45,30)
    myTurtle.pendown()
    myTurtle.color("blue")
    myTurtle.begin_fill()
    myTurtle.circle(10)
    myTurtle.end_fill()

    myTurtle.penup()
    myTurtle.setposition(50,30)
    myTurtle.pendown()    
    myTurtle.color("blue")
    myTurtle.begin_fill()
    myTurtle.circle(10)
    myTurtle.end_fill()

    myTurtle.penup()
    myTurtle.setposition(-67,-40)
    myTurtle.setheading(-60)
    myTurtle.pendown()    
    myTurtle.color("blue")
    myTurtle.circle(80,120)

    turtle.getscreen()._root.mainloop()


print_smiley()