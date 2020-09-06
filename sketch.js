var sq1, sq2, sq3, sq4, sq5, sq6, sq7, sq8, sq9, sq10, sq11, sq12, sq13, sq14,
  sq15, sq16, sq17, sq18, sq19, sq20, sq21, sq22, sq23, sq24, sq25, sq26, sq27, sq28, sq29, sq30, sq31, sq32, sq33, sq34, sq35, sq36, sq37, sq38, sq39, sq40, sq41, sq42, sq43, sq45, sq46, sq47,
  sq48, sq49, sq50, sq51, sq52, sq53, sq54, sq55, sq56, sq57, sq58, sq59, sq60, sq61, sq62, sq63, sq64, sq65, pawn1, pawn1image, pawn2, pawn3, pawn4, pawn5, pawn6, pawn7, pawn8, elephant1, elephantimage, elephant2, horse1, horseimage, horse2, camel1, camelimage, camel2, king, kingimage, queen, queenimage, pawn10, pawnimage, pawn12, pawn13, pawn14, pawn15, pawn16, pawn17, pawn18, elephant10, elephantimage1, elephant12, horse10, horseimage1, horse12, camel10, camelimage1, camel12, king1, kingimage1, queen1, queenimage1, pressed, redsq, redsq1, round, turn;

function setup() {
  createCanvas(400, 400);
  sq1 = createSprite(25, 25, 50, 50)
  sq1.shapeColor = "white"
  sq2 = createSprite(75, 25, 50, 50)
  sq2.shapeColor = "black"
  sq3 = createSprite(125, 25, 50, 50)
  sq3.shapeColor = "white"
  sq4 = createSprite(175, 25, 50, 50)
  sq4.shapeColor = "black"
  sq5 = createSprite(225, 25, 50, 50)
  sq5.shapeColor = "white"
  sq6 = createSprite(275, 25, 50, 50)
  sq6.shapeColor = "black"
  sq7 = createSprite(325, 25, 50, 50)
  sq7.shapeColor = "white"
  sq8 = createSprite(375, 25, 50, 50)
  sq8.shapeColor = "black"
  sq9 = createSprite(25, 75, 50, 50)
  sq9.shapeColor = "black"
  sq10 = createSprite(75, 75, 50, 50)
  sq10.shapeColor = "white"
  sq11 = createSprite(125, 75, 50, 50)
  sq11.shapeColor = "black"
  sq12 = createSprite(175, 75, 50, 50)
  sq12.shapeColor = "white"
  sq13 = createSprite(225, 75, 50, 50)
  sq13.shapeColor = "black"
  sq14 = createSprite(275, 75, 50, 50)
  sq14.shapeColor = "white"
  sq15 = createSprite(325, 75, 50, 50)
  sq15.shapeColor = "black"
  sq16 = createSprite(375, 75, 50, 50)
  sq16.shapeColor = "white"
  sq17 = createSprite(25, 125, 50, 50)
  sq17.shapeColor = "white"
  sq18 = createSprite(75, 125, 50, 50)
  sq18.shapeColor = "black"
  sq19 = createSprite(125, 125, 50, 50)
  sq19.shapeColor = "white"
  sq20 = createSprite(175, 125, 50, 50)
  sq20.shapeColor = "black"
  sq21 = createSprite(225, 125, 50, 50)
  sq21.shapeColor = "white"
  sq22 = createSprite(275, 125, 50, 50)
  sq22.shapeColor = "black"
  sq23 = createSprite(325, 125, 50, 50)
  sq23.shapeColor = "white"
  sq24 = createSprite(375, 125, 50, 50)
  sq24.shapeColor = "black"
  sq25 = createSprite(25, 175, 50, 50)
  sq25.shapeColor = "black"
  sq26 = createSprite(75, 175, 50, 50)
  sq26.shapeColor = "white"
  sq27 = createSprite(125, 175, 50, 50)
  sq27.shapeColor = "black"
  sq28 = createSprite(175, 175, 50, 50)
  sq28.shapeColor = "white"
  sq29 = createSprite(225, 175, 50, 50)
  sq29.shapeColor = "black"
  sq30 = createSprite(275, 175, 50, 50)
  sq30.shapeColor = "white"
  sq31 = createSprite(325, 175, 50, 50)
  sq31.shapeColor = "black"
  sq32 = createSprite(375, 175, 50, 50)
  sq32.shapeColor = "white"
  sq33 = createSprite(25, 225, 50, 50)
  sq33.shapeColor = "white"
  sq34 = createSprite(75, 225, 50, 50)
  sq34.shapeColor = "black"
  sq35 = createSprite(125, 225, 50, 50)
  sq35.shapeColor = "white"
  sq36 = createSprite(175, 225, 50, 50)
  sq36.shapeColor = "black"
  sq37 = createSprite(225, 225, 50, 50)
  sq37.shapeColor = "white"
  sq38 = createSprite(275, 225, 50, 50)
  sq38.shapeColor = "black"
  sq39 = createSprite(325, 225, 50, 50)
  sq39.shapeColor = "white"
  sq40 = createSprite(375, 225, 50, 50)
  sq40.shapeColor = "black"
  sq41 = createSprite(25, 275, 50, 50)
  sq41.shapeColor = "black"
  sq42 = createSprite(75, 275, 50, 50)
  sq42.shapeColor = "white"
  sq43 = createSprite(125, 275, 50, 50)
  sq43.shapeColor = "black"
  sq44 = createSprite(175, 275, 50, 50)
  sq44.shapeColor = "white"
  sq45 = createSprite(225, 275, 50, 50)
  sq45.shapeColor = "black"
  sq46 = createSprite(275, 275, 50, 50)
  sq46.shapeColor = "white"
  sq47 = createSprite(325, 275, 50, 50)
  sq47.shapeColor = "black"
  sq48 = createSprite(375, 275, 50, 50)
  sq48.shapeColor = "white"
  sq49 = createSprite(25, 325, 50, 50)
  sq49.shapeColor = "white"
  sq50 = createSprite(75, 325, 50, 50)
  sq50.shapeColor = "black"
  sq51 = createSprite(125, 325, 50, 50)
  sq51.shapeColor = "white"
  sq52 = createSprite(175, 325, 50, 50)
  sq52.shapeColor = "black"
  sq53 = createSprite(225, 325, 50, 50)
  sq53.shapeColor = "white"
  sq54 = createSprite(275, 325, 50, 50)
  sq54.shapeColor = "black"
  sq55 = createSprite(325, 325, 50, 50)
  sq55.shapeColor = "white"
  sq56 = createSprite(375, 325, 50, 50)
  sq56.shapeColor = "black"
  sq57 = createSprite(25, 375, 50, 50)
  sq57.shapeColor = "black"
  sq58 = createSprite(75, 375, 50, 50)
  sq58.shapeColor = "white"
  sq59 = createSprite(125, 375, 50, 50)
  sq59.shapeColor = "black"
  sq60 = createSprite(175, 375, 50, 50)
  sq60.shapeColor = "white"
  sq61 = createSprite(225, 375, 50, 50)
  sq61.shapeColor = "black"
  sq62 = createSprite(275, 375, 50, 50)
  sq62.shapeColor = "white"
  sq63 = createSprite(325, 375, 50, 50)
  sq63.shapeColor = "black"
  sq64 = createSprite(375, 375, 50, 50)
  sq64.shapeColor = "white"
  piecesGroup = createGroup()

  pawn1 = createSprite(125, 325, 10, 10);
  pawn2 = createSprite(25, 325, 10, 10)
  pawn3 = createSprite(75, 325, 10, 10)
  pawn4 = createSprite(175, 325, 10, 10)
  pawn5 = createSprite(225, 325, 10, 10)
  pawn6 = createSprite(275, 325, 10, 10)
  pawn7 = createSprite(325, 325, 10, 10)
  pawn8 = createSprite(375, 325, 10, 10)
  elephant1 = createSprite(25, 375, 10, 10)
  elephant2 = createSprite(375, 375, 10, 10)
  horse1 = createSprite(75, 375, 10, 10)
  horse2 = createSprite(325, 375, 10, 10)
  camel1 = createSprite(125, 375, 10, 10)
  camel2 = createSprite(275, 375, 10, 10)
  king = createSprite(175, 375, 10, 10)
  queen = createSprite(225, 375, 10, 10)

  pawn10 = createSprite(125, 75, 10, 10);
  pawn12 = createSprite(25, 75, 10, 10)
  pawn13 = createSprite(75, 75, 10, 10)
  pawn14 = createSprite(175, 75, 10, 10)
  pawn15 = createSprite(225, 75, 10, 10)
  pawn16 = createSprite(275, 75, 10, 10)
  pawn17 = createSprite(325, 75, 10, 10)
  pawn18 = createSprite(375, 75, 10, 10)
  elephant10 = createSprite(25, 25, 10, 10)
  elephant12 = createSprite(375, 25, 10, 10)
  horse10 = createSprite(75, 25, 10, 10)
  horse12 = createSprite(325, 25, 10, 10)
  camel10 = createSprite(125, 25, 10, 10)
  camel12 = createSprite(275, 25, 10, 10)
  king1 = createSprite(175, 25, 10, 10)
  queen1 = createSprite(225, 25, 10, 10)
  pressed = 0
  round = 0
  turn = 0

}

function preload() {
  pawnimage = loadAnimation("luxury-chess-set-4.png")
  elephantimage = loadAnimation("elephant piece.png")
  horseimage = loadAnimation("horse piece.png")
  camelimage = loadAnimation("camel piece.png")
  kingimage = loadAnimation("king piece.png")
  queenimage = loadAnimation("queen piece.png")
  pawnimage1 = loadAnimation("pawn2 piece.png")
  elephantimage1 = loadAnimation("elephant2 piece.png")
  horseimage1 = loadAnimation("horse2 piece.png")
  camelimage1 = loadAnimation("camel2 piece.png")
  kingimage1 = loadAnimation("king2 piece.png")
  queenimage1 = loadAnimation("queen2 piece.png")
}

function draw() {
  background("green")
  drawSprites();
  pawn1.addAnimation("pawn", pawnimage)
  pawn1.scale = 0.1
  pawn2.addAnimation("pawn", pawnimage)
  pawn2.scale = 0.1
  pawn3.addAnimation("pawn", pawnimage)
  pawn3.scale = 0.1
  pawn4.addAnimation("pawn", pawnimage)
  pawn4.scale = 0.1
  pawn5.addAnimation("pawn", pawnimage)
  pawn5.scale = 0.1
  pawn6.addAnimation("pawn", pawnimage)
  pawn6.scale = 0.1
  pawn7.addAnimation("pawn", pawnimage)
  pawn7.scale = 0.1
  pawn8.addAnimation("pawn", pawnimage)
  pawn8.scale = 0.1
  elephant1.addAnimation("elephant", elephantimage)
  elephant1.scale = 0.1
  elephant2.addAnimation("elephant", elephantimage)
  elephant2.scale = 0.1
  horse1.addAnimation("horse", horseimage);
  horse1.scale = 0.09
  horse2.addAnimation("horse", horseimage);
  horse2.scale = 0.09
  camel1.addAnimation("camel", camelimage);
  camel1.scale = 0.09;
  camel2.addAnimation("camel", camelimage);
  camel2.scale = 0.09;
  king.addAnimation("king", kingimage);
  king.scale = 0.08;
  queen.addAnimation("queen", queenimage);
  queen.scale = 0.08;

  pawn10.addAnimation("pawn", pawnimage1)
  pawn10.scale = 0.2
  pawn12.addAnimation("pawn", pawnimage1)
  pawn12.scale = 0.2
  pawn13.addAnimation("pawn", pawnimage1)
  pawn13.scale = 0.2
  pawn14.addAnimation("pawn", pawnimage1)
  pawn14.scale = 0.2
  pawn15.addAnimation("pawn", pawnimage1)
  pawn15.scale = 0.2
  pawn16.addAnimation("pawn", pawnimage1)
  pawn16.scale = 0.2
  pawn17.addAnimation("pawn", pawnimage1)
  pawn17.scale = 0.2
  pawn18.addAnimation("pawn", pawnimage1)
  pawn18.scale = 0.2
  elephant10.addAnimation("elephant", elephantimage1)
  elephant10.scale = 0.2
  elephant12.addAnimation("elephant", elephantimage1)
  elephant12.scale = 0.2
  horse10.addAnimation("horse", horseimage1);
  horse10.scale = 0.2
  horse12.addAnimation("horse", horseimage1);
  horse12.scale = 0.2
  camel10.addAnimation("camel", camelimage1);
  camel10.scale = 0.18;
  camel12.addAnimation("camel", camelimage1);
  camel12.scale = 0.18;
  king1.addAnimation("king", kingimage1);
  king1.scale = 0.15;
  queen1.addAnimation("queen", queenimage1);
  queen1.scale = 0.16;
  if (turn % 2 === 0) {
    if (mousePressedOver(pawn1) && round === 0) {
      pressed = 1
      round = 1
    }
    if (pressed === 1) {
      redsq = createSprite(pawn1.x, pawn1.y - 100, 50, 50)
      redsq.shapeColor = "red";
      redsq1 = createSprite(pawn1.x, pawn1.y - 50, 50, 50)
      redsq1.shapeColor = "red";
      pressed = 1.5
    }
    if (mousePressedOver(redsq) && round === 1) {
      pawn1.y = redsq.y
      redsq.visible = false;
      redsq1.visible = false;
      round = 0
      turn = turn + 1
    }
    if (mousePressedOver(redsq1) && round === 1) {
      pawn1.y = redsq1.y
      redsq1.visible = false;
      redsq.visible = false;
      round = 0
      turn = turn + 1
    }

    if (mousePressedOver(pawn2) && round === 0) {
      pressed = 2
      round = 2
    }
    if (pressed === 2) {
      redsq = createSprite(pawn2.x, pawn2.y - 100, 50, 50)
      redsq.shapeColor = "red";
      redsq1 = createSprite(pawn2.x, pawn2.y - 50, 50, 50)
      redsq1.shapeColor = "red";
      pressed = 2.5
    }
    if (mousePressedOver(redsq) && round === 2) {
      pawn2.y = redsq.y
      redsq.visible = false;
      redsq1.visible = false;
      round = 0
      turn = turn + 1
    }
    if (mousePressedOver(redsq1) && round === 2) {
      pawn2.y = redsq1.y
      pressed = 0
      redsq1.visible = false;
      redsq.visible = false;
      round = 0
      turn = turn + 1
    }

    if (mousePressedOver(pawn3) && round === 0) {
      pressed = 3
      round = 3
    }
    if (pressed === 3) {
      redsq = createSprite(pawn3.x, pawn3.y - 100, 50, 50)
      redsq.shapeColor = "red";
      redsq1 = createSprite(pawn3.x, pawn3.y - 50, 50, 50)
      redsq1.shapeColor = "red";
      pressed = 3.5
    }
    if (mousePressedOver(redsq) && round === 3) {
      pawn3.y = redsq.y
      redsq.visible = false;
      redsq1.visible = false;
      round = 0
      turn = turn + 1
    }
    if (mousePressedOver(redsq1) && round === 3) {
      pawn3.y = redsq1.y
      pressed = 0
      redsq1.visible = false;
      redsq.visible = false;
      round = 0
      turn = turn + 1
    }
    if (mousePressedOver(pawn4) && round === 0) {
      pressed = 4
      round = 4
    }
    if (pressed === 4) {
      redsq = createSprite(pawn4.x, pawn4.y - 100, 50, 50)
      redsq.shapeColor = "red";
      redsq1 = createSprite(pawn4.x, pawn4.y - 50, 50, 50)
      redsq1.shapeColor = "red";
      pressed = 4.5
    }
    if (mousePressedOver(redsq) && round === 4) {
      pawn4.y = redsq.y
      redsq.visible = false;
      redsq1.visible = false;
      round = 0
      turn = turn + 1
    }
    if (mousePressedOver(redsq1) && round === 4) {
      pawn4.y = redsq1.y
      pressed = 0
      redsq1.visible = false;
      redsq.visible = false;
      round = 0
      turn = turn + 1
    }

    if (mousePressedOver(pawn5) && round === 0) {
      pressed = 5
      round = 5
    }
    if (pressed === 5) {
      redsq = createSprite(pawn5.x, pawn5.y - 100, 50, 50)
      redsq.shapeColor = "red";
      redsq1 = createSprite(pawn5.x, pawn5.y - 50, 50, 50)
      redsq1.shapeColor = "red";
      pressed = 5.5
    }
    if (mousePressedOver(redsq) && round === 5) {
      pawn5.y = redsq.y
      redsq.visible = false;
      redsq1.visible = false;
      round = 0
      turn = turn + 1
    }
    if (mousePressedOver(redsq1) && round === 5) {
      pawn5.y = redsq1.y
      pressed = 0
      redsq1.visible = false;
      redsq.visible = false;
      round = 0
      turn = turn + 1
    }

    if (mousePressedOver(pawn6) && round === 0) {
      pressed = 6
      round = 6
    }
    if (pressed === 6) {
      redsq = createSprite(pawn6.x, pawn6.y - 100, 50, 50)
      redsq.shapeColor = "red";
      redsq1 = createSprite(pawn6.x, pawn6.y - 50, 50, 50)
      redsq1.shapeColor = "red";
      pressed = 6.5
    }
    if (mousePressedOver(redsq) && round === 6) {
      pawn6.y = redsq.y
      redsq.visible = false;
      redsq1.visible = false;
      round = 0
      turn = turn + 1
    }
    if (mousePressedOver(redsq1) && round === 6) {
      pawn6.y = redsq1.y
      pressed = 0
      redsq1.visible = false;
      redsq.visible = false;
      round = 0
      turn = turn + 1
    }
    if (mousePressedOver(pawn7) && round === 0) {
      pressed = 7
      round = 7
    }
    if (pressed === 7) {
      redsq = createSprite(pawn7.x, pawn7.y - 100, 50, 50)
      redsq.shapeColor = "red";
      redsq1 = createSprite(pawn7.x, pawn7.y - 50, 50, 50)
      redsq1.shapeColor = "red";
      pressed = 7.5
    }
    if (mousePressedOver(redsq) && round === 7) {
      pawn7.y = redsq.y
      redsq.visible = false;
      redsq1.visible = false;
      round = 0
      turn = turn + 1
    }
    if (mousePressedOver(redsq1) && round === 7) {
      pawn7.y = redsq1.y
      pressed = 0
      redsq1.visible = false;
      redsq.visible = false;
      round = 0
      turn = turn + 1
    }

    if (mousePressedOver(pawn8) && round === 0) {
      pressed = 8
      round = 8
    }
    if (pressed === 8) {
      redsq = createSprite(pawn8.x, pawn8.y - 100, 50, 50)
      redsq.shapeColor = "red";
      redsq1 = createSprite(pawn8.x, pawn8.y - 50, 50, 50)
      redsq1.shapeColor = "red";
      pressed = 8.5
    }
    if (mousePressedOver(redsq) && round === 8) {
      pawn8.y = redsq.y
      redsq.visible = false;
      redsq1.visible = false;
      round = 0
      turn = turn + 1
    }
    if (mousePressedOver(redsq1) && round === 8) {
      pawn8.y = redsq1.y
      pressed = 0
      redsq1.visible = false;
      redsq.visible = false;
      round = 0
      turn = turn + 1
    }
  } else if (mousePressedOver(pawn10) && round === 0) {
    pressed = 30
    round = 30
  }
  if (pressed === 30) {
    redsq = createSprite(pawn10.x, pawn10.y + 100, 50, 50)
    redsq.shapeColor = "red";
    redsq1 = createSprite(pawn10.x, pawn10.y + 50, 50, 50)
    redsq1.shapeColor = "red";
    pressed = 30.5
  }
  if (mousePressedOver(redsq) && round === 30) {
    pawn10.y = redsq.y
    redsq.visible = false;
    redsq1.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(redsq1) && round === 30) {
    pawn10.y = redsq1.y
    pressed = 0
    redsq1.visible = false;
    redsq.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(pawn12) && round === 0 && turn % 2 != 0) {
    pressed = 31
    round = 31
  }
  if (pressed === 31) {
    redsq = createSprite(pawn12.x, pawn12.y + 100, 50, 50)
    redsq.shapeColor = "red";
    redsq1 = createSprite(pawn12.x, pawn12.y + 50, 50, 50)
    redsq1.shapeColor = "red";
    pressed = 31.5
  }
  if (mousePressedOver(redsq) && round === 31) {
    pawn12.y = redsq.y
    redsq.visible = false;
    redsq1.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(redsq1) && round === 31) {
    pawn12.y = redsq1.y
    pressed = 0
    redsq1.visible = false;
    redsq.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(pawn13) && round === 0 && turn % 2 != 0) {
    pressed = 32
    round = 32
  }
  if (pressed === 32) {
    redsq = createSprite(pawn13.x, pawn13.y + 100, 50, 50)
    redsq.shapeColor = "red";
    redsq1 = createSprite(pawn13.x, pawn13.y + 50, 50, 50)
    redsq1.shapeColor = "red";
    pressed = 32.5
  }
  if (mousePressedOver(redsq) && round === 32) {
    pawn13.y = redsq.y
    redsq.visible = false;
    redsq1.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(redsq1) && round === 32) {
    pawn13.y = redsq1.y
    pressed = 0
    redsq1.visible = false;
    redsq.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(pawn14) && round === 0 && turn % 2 != 0) {
    pressed = 33
    round = 33
  }
  if (pressed === 33) {
    redsq = createSprite(pawn14.x, pawn14.y + 100, 50, 50)
    redsq.shapeColor = "red";
    redsq1 = createSprite(pawn14.x, pawn14.y + 50, 50, 50)
    redsq1.shapeColor = "red";
    pressed = 33.5
  }
  if (mousePressedOver(redsq) && round === 33) {
    pawn14.y = redsq.y
    redsq.visible = false;
    redsq1.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(redsq1) && round === 33) {
    pawn14.y = redsq1.y
    pressed = 0
    redsq1.visible = false;
    redsq.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(pawn15) && round === 0 && turn % 2 != 0) {
    pressed = 34
    round = 34
  }
  if (pressed === 34) {
    redsq = createSprite(pawn15.x, pawn15.y + 100, 50, 50)
    redsq.shapeColor = "red";
    redsq1 = createSprite(pawn15.x, pawn15.y + 50, 50, 50)
    redsq1.shapeColor = "red";
    pressed = 34.5
  }
  if (mousePressedOver(redsq) && round === 34) {
    pawn15.y = redsq.y
    redsq.visible = false;
    redsq1.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(redsq1) && round === 34) {
    pawn15.y = redsq1.y
    pressed = 0
    redsq1.visible = false;
    redsq.visible = false;
    round = 0
    turn = turn + 1
  }

  if (mousePressedOver(pawn16) && round === 0 && turn % 2 != 0) {
    pressed = 35
    round = 35
  }
  if (pressed === 35) {
    redsq = createSprite(pawn16.x, pawn16.y + 100, 50, 50)
    redsq.shapeColor = "red";
    redsq1 = createSprite(pawn16.x, pawn16.y + 50, 50, 50)
    redsq1.shapeColor = "red";
    pressed = 35.5
  }
  if (mousePressedOver(redsq) && round === 35) {
    pawn16.y = redsq.y
    redsq.visible = false;
    redsq1.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(redsq1) && round === 35) {
    pawn16.y = redsq1.y
    pressed = 0
    redsq1.visible = false;
    redsq.visible = false;
    round = 0
    turn = turn + 1
  }

  if (mousePressedOver(pawn17) && round === 0 && turn % 2 != 0) {
    pressed = 36
    round = 36
  }
  if (pressed === 36) {
    redsq = createSprite(pawn17.x, pawn17.y + 100, 50, 50)
    redsq.shapeColor = "red";
    redsq1 = createSprite(pawn17.x, pawn17.y + 50, 50, 50)
    redsq1.shapeColor = "red";
    pressed = 36.5
  }
  if (mousePressedOver(redsq) && round === 36) {
    pawn17.y = redsq.y
    redsq.visible = false;
    redsq1.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(redsq1) && round === 36) {
    pawn17.y = redsq1.y
    pressed = 0
    redsq1.visible = false;
    redsq.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(pawn18) && round === 0 && turn % 2 != 0) {
    pressed = 37
    round = 37
  }
  if (pressed === 37) {
    redsq = createSprite(pawn18.x, pawn18.y + 100, 50, 50)
    redsq.shapeColor = "red";
    redsq1 = createSprite(pawn18.x, pawn18.y + 50, 50, 50)
    redsq1.shapeColor = "red";
    pressed = 37.5
  }
  if (mousePressedOver(redsq) && round === 37) {
    pawn18.y = redsq.y
    redsq.visible = false;
    redsq1.visible = false;
    round = 0
    turn = turn + 1
  }
  if (mousePressedOver(redsq1) && round === 37) {
    pawn18.y = redsq1.y
    pressed = 0
    redsq1.visible = false;
    redsq.visible = false;
    round = 0
    turn = turn + 1
  }

}