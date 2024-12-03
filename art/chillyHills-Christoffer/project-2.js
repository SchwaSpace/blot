/*
@title: chillyHills
@author: christoffer (SchwaSpace)
@snapshot: hillsPic.png
*/

const width = 125;
const height = 125;

setDocDimensions(width, height);

const groundLine = [
  [0, 15],
  [125, 15]
]

let finalLines1 = [];
finalLines1.push(groundLine)
drawLines(finalLines1);

const cloudLine = new bt.Turtle()
  .jump([0, 115])
  .arc(90, 7).right(180).arc(180, 6).right(180).arc(180, 7)
  .right(180).arc(180, 6).right(180).arc(180, 7)
  .right(180).arc(180, 6).right(180).arc(180, 7)
  .right(180).arc(180, 6).right(180).arc(180, 7)
  .right(180).arc(180, 6).right(180).arc(45, 7)

let finalLines2 = cloudLine.path;
drawLines(finalLines2);

const breezyHills = new bt.Turtle()
  .jump([0, 15])
  .setAngle(90)

let xPos = 0;
let hArray = [];

for (let i = 0; i < 10; i++) {
  let randNum1 = bt.randIntInRange(25, 60);
  hArray.push(randNum1)
  
  //Initial Hill
  breezyHills.forward(randNum1).arc(-180, 6.25).forward(randNum1)
  //Chilly Faces
  xPos = xPos + 12.5;
  breezyHills.jump([xPos-8.5, 15+randNum1]).left(45).forward(5*Math.cos(45)).right(90).forward(5*Math.cos(45))
  breezyHills.jump([xPos-4, 15+randNum1]).forward(5*Math.cos(45)).left(90).forward(5*Math.cos(45))
  breezyHills.setAngle(90)
  breezyHills.jump([xPos-8.8, 9+randNum1]).arc(-180, 0.5).arc(180, 0.5).arc(-180, 0.5).arc(180, 0.5).arc(-180, 0.5)
  //Snow-Cap
  breezyHills.setAngle(0).jump([xPos-12.5, 16+randNum1])
  breezyHills.arc(90, 4).right(180).arc(180, 2.5).right(180).arc(90, 3.65)
  .jump([xPos, 15]).setAngle(90)
  };

const breezyHillsPath = breezyHills.path;

drawLines(breezyHillsPath);

const snowy = new bt.Turtle()
  .setAngle(90)
  .forward(3).right(180).forward(6).right(180).forward(3)
  .setAngle(30)
  .forward(3).right(180).forward(6).right(180).forward(3)
  .setAngle(-30)
  .forward(3).right(180).forward(6).right(180).forward(3)

let snowflake = snowy.path;
xPos = 2;
bt.scale(snowflake, 1/3, [0,0])

for (let j = 0; j<10; j++) {
  bt.rotate(snowflake, bt.randIntInRange(0,360), [0,0])
  bt.translate(snowflake, [xPos, bt.randIntInRange(hArray[j]+40,hArray[j]*1.75)])
  drawLines(snowflake);
  xPos = xPos + 3;
  bt.originate(snowflake)
  bt.rotate(snowflake, bt.randIntInRange(0,360), [0,0])
  bt.translate(snowflake, [xPos, bt.randIntInRange(hArray[j]*1.75,110)])
  drawLines(snowflake);
  xPos = xPos + 3;
  bt.originate(snowflake)
  bt.rotate(snowflake, bt.randIntInRange(0,360), [0,0])
  bt.translate(snowflake, [xPos, bt.randIntInRange(hArray[j]+40,hArray[j]*1.75)])
  drawLines(snowflake);
  xPos = xPos + 3;
  bt.originate(snowflake)
  bt.rotate(snowflake, bt.randIntInRange(0,360), [0,0])
  bt.translate(snowflake, [xPos, bt.randIntInRange(hArray[j]*1.75,110)])
  drawLines(snowflake);
  xPos = xPos + 3.5;
  bt.originate(snowflake)
}


