#to give Python access to Turtle library
import turtle
# def greeting():
#     # print("Hello World!")
#     # print("python is awesome")

# #greeting()

def draw_a_line():
    """to draw a line 50 Pixels long"""

    turtle.forward(50)

#draw_a_line()
def draw_a_L ():
    """Draw a backwards L."""
    turtle.forward (50)
    turtle.left(90)
    turtle.forward(100)

#draw_a_L()
def draw_a_funky_S():
    """Draw a funnky S"""
    turtle.forward(50)
    turtle.left(90)
    turtle.forward(100)
    turtle.right(90)
    turtle.forward(50)

#draw_a_funky_S()
def draw_a_square():
    """Draw a square"""
    sqr_length=40
    sqr_left_angle=90   
    
    turtle.forward(sqr_length)
    turtle.left(sqr_left_angle)
    turtle.forward(sqr_length)
    turtle.left(sqr_left_angle)
    turtle.forward(sqr_length)
    turtle.left(sqr_left_angle)
    turtle.forward(sqr_length)

#draw_a_square()

def draw_a_rectangle():
    """Draw a rectangle"""
    turtle.forward(80)
    turtle.left(90)
    turtle.forward(20)
    turtle.left(90)
    turtle.forward(80)
    turtle.left(90)
    turtle.forward(20)

#draw_a_rectangle()

def draw_a_triangle():
    """Draw a triangle"""
    turtle.forward(50)
    turtle.left(120)
    turtle.forward(50)
    turtle.right(240)
    turtle.forward(50)    

#draw_a_triangle()
def draw_a_line_w_var():
    """Draw a line 50 pixels long using a variable."""
    length = 50
    turtle.forward(length)
#draw_a_line_w_var()
def draw_a_spiral():
    """Draw a spiral."""

    right_angle = 90
    length = 5
    turtle_color="green"

    turtle.color(turtle_color)

    turtle.forward(length)
    turtle.left(right_angle)
    length = length + 0

    turtle.forward(length)
    turtle.left(right_angle)
    length = length + 5

    turtle.forward(length)
    turtle.left(right_angle)
    length = length + 5

    turtle.forward(length)
    turtle.left(right_angle)
    length = length + 10

    turtle.forward(length)
    turtle.left(right_angle)
    length = length + 15

    turtle.forward(length)
    turtle.left(right_angle)
    length = length + 25

    turtle.forward(length)
    turtle.left(right_angle)
    length = length + 40

    turtle.forward(length)
    turtle.left(right_angle)
    length = length + 65

    turtle.forward(length)
    turtle.left(right_angle)


#draw_a_spiral()

def draw_a_square_with_while():
    """Draw a square"""
    sqr_length=40
    sqr_left_angle=90
    num_sides=0
    turtle_color="blue"    

    while num_sides<4:
        if num_sides==3:
            turtle_color="red"
        
        turtle.color(turtle_color)
        turtle.forward(sqr_length)
        turtle.left(sqr_left_angle)
        num_sides=num_sides+1


#draw_a_square_with_while()

def draw_a_rectanlge_with_if_mod():
    """Draw a rectangle using mof and if condition"""
    num_sides=0
    longer_side=100
    shorter_side=40
    turn_angle=90

    while num_sides<4:
        if (num_sides%2)==0:
            turtle.forward(longer_side)
        else:
            turtle.forward(shorter_side)
        turtle.left(turn_angle)
        num_sides=num_sides+1

#draw_a_rectanlge_with_if_mod()

def draw_a_shape():
    """Draw a shape by entering num of sides"""
    """change num of sides to draw diff shapes like pentagon, hexagon etc"""
    num_sides=8
    side_angle=360/num_sides
    length=100
    i=0

    while (i<num_sides):
        turtle.forward(length)
        turtle.left(side_angle)
        i=i+1

#draw_a_shape()


def draw_a_fibo_spiral_with_while():
    """Draw a fibo spiral with while loop."""

    right_angle = 90
    previous_length=0
    length = 5
    turtle_color="green"
    i=0

    turtle.color(turtle_color)

    while (i<11):
        turtle.forward(length)
        turtle.left(right_angle)
        temp=length
        length = length + previous_length
        previous_length=temp
        i=i+1  



#draw_a_fibo_spiral_with_while()

def draw_a_star():
    num_sides=5
    length=80
    angle=144
    i=0

    while i<num_sides:
        turtle.forward(length)
        turtle.left(angle)
        i=i+1;

draw_a_star()
