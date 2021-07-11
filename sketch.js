const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;



function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);



  right = new Base(700,250,250,150);
 left = new Base(100,250,250,150)
  ground = new Base(400,480,800,80)
  bridge = new Bridge(12, {x: 200, y: 150})
Composite.add(bridge.body, right)

jointLink = new Link (bridge.body, right.body)

}

function draw() {
  background("green");

  Engine.update(engine);

  bridge.show()

  fill ("brown");
  right.display();
  left.display();

  fill("lightblue")
  ground.display();



  
}
