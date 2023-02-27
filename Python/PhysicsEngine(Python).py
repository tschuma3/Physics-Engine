import random
import pymunk
import pygame

WIN_WIDTH = 1200
WIN_HEIGHT = 800
COLOR_BG = (0, 0, 0)

class Mover():

    def __init__(self, x, y):
        self.mouse_pos = pygame.math.Vector2(pygame.mouse.get_pos())
        self.pos = pygame.math.Vector2(x, y)
        self.vel = pygame.math.Vector2(random.randrange(0, WIN_WIDTH), random.randrange(0, WIN_HEIGHT))
        self.acc = pygame.math.Vector2(self.mouse_pos - self.pos)
        self.mag = pygame.math.Vector2.magnitude(5)


        self.dimensions = pygame.math.Vector2(30, 30)
        self.color = (0, 255, 0)
        self.color_mouse = (0, 0, 255)

    def update(self):
        self.mouse_pos = pygame.mouse.set_pos(pygame.mouse.get_pos())
        
        self.vel += self.acc
        self.pos += self.vel
        

    def draw(self, win):
        self.pos = screen_wrapper(self.pos, self.dimensions)
        pygame.draw.ellipse(win, self.color, (self.pos, self.dimensions))

def screen_wrapper(position, dimension):
    if position.x < -dimension[0]:
        position.x = WIN_WIDTH + (dimension[0] // 4)
    elif position.x > WIN_WIDTH + (dimension[0] // 4):
        position.x = -dimension[0]
    if position.y < -dimension[1]:
        position.y = WIN_HEIGHT + (dimension[1] // 4)
    elif position.y > WIN_HEIGHT + (dimension[1] // 4):
        position.y = -dimension[1]
    return position  

def printer(mover):
    print(f"Magnitude: {mover.mag}")
    print(f"Acceleration: {mover.acc}")
    print(f"Velocity: {mover.vel}")
    print(f"Position: {mover.pos}")

def main():
    win = pygame.display.set_mode((WIN_WIDTH, WIN_HEIGHT))
    mover = Mover(WIN_WIDTH / 2, WIN_HEIGHT / 2)
    clock = pygame.time.Clock()
    run = True

    printer(mover)

    while run:
        clock.tick(30)
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
                pygame.quit()
                quit()
                break

        mover.update()

        printer(mover)        

        win.fill(COLOR_BG)

        mover.draw(win)

        pygame.display.update()

main()