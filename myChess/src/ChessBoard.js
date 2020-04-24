// JavaScript Document
var ClearChessBoard;
var ThisMyChessBoard;
var ThisMyModalConversionPawns;
var ThisMyInfoText;
var SelectCell = "non";
var SelectCellMan = "non";
var ThisMySelectNewChessMan;
var ChessManSize;
var ColorPawn;
var CoordPawnX;
var CoordPawnY;
var RokirovkaShot = new Array (false, false);
var RokirovkaLong = new Array (false, false);
var FinalMove = false;
var WhiteMove = true;
var ChessManImage = new Array
(
//белые фигуры
  new Array 
  (
    0,  //король
    1,  //ферзь
    2,  //слон
    3,  //конь
    4,  //лодья
    5,  //пешка
    6   //пустая
  ),
//черные фигуры
  new Array 
  (
    0,  //король
    1,  //ферзь
    2,  //слон
    3,  //конь
    4,  //лодья
    5,  //пешка
    6   //пустая
  )
);
function CoordChessBoardStruct(NameCell, Coord_X, Coord_Y, ColorChessMan, ChessMan, ColorCell)
{
    this.NameCell = NameCell;
    this.Coord_X = Coord_X;
    this.Coord_Y = Coord_Y;
    this.ColorChessMan = ColorChessMan;
    this.ChessMan = ChessMan; 
    this.ColorCell = ColorCell;
}
var BufChesman = new CoordChessBoardStruct("a8",0,0,0,6,"#fff");
var CoordChessBoard =  new Array
(
  new Array 
  (
    new CoordChessBoardStruct("a8",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("a7",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("a6",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("a5",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("a4",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("a3",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("a2",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("a1",0,0,0,6,"#c0c0c0")
  ),
  new Array 
  (
    new CoordChessBoardStruct("b8",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("b7",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("b6",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("b5",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("b4",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("b3",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("b2",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("b1",0,0,0,6,"#fff")
  ),
  new Array 
  (
    new CoordChessBoardStruct("c8",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("c7",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("c6",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("c5",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("c4",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("c3",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("c2",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("c1",0,0,0,6,"#c0c0c0")
  ),
  new Array 
  (
    new CoordChessBoardStruct("d8",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("d7",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("d6",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("d5",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("d4",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("d3",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("d2",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("d1",0,0,0,6,"#fff")
  ),
  new Array 
  (
    new CoordChessBoardStruct("e8",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("e7",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("e6",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("e5",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("e4",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("e3",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("e2",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("e1",0,0,0,6,"#c0c0c0")
  ),
  new Array 
  (
    new CoordChessBoardStruct("f8",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("f7",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("f6",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("f5",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("f4",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("f3",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("f2",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("f1",0,0,0,6,"#fff")
  ),
  new Array 
  (
    new CoordChessBoardStruct("g8",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("g7",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("g6",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("g5",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("g4",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("g3",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("g2",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("g1",0,0,0,6,"#c0c0c0")
  ),
  new Array 
  (
    new CoordChessBoardStruct("h8",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("h7",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("h6",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("h5",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("h4",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("h3",0,0,0,6,"#fff"),
    new CoordChessBoardStruct("h2",0,0,0,6,"#c0c0c0"),
    new CoordChessBoardStruct("h1",0,0,0,6,"#fff")
  )
);
function DrawFrame(drawingCanvas, frame)
{
  var context = drawingCanvas.getContext('2d');
  var gradient = context.createLinearGradient(0, 0, 0, drawingCanvas.height);
  // Добавляем два цвета
  gradient.addColorStop(1, "#D0D0D0");
  gradient.addColorStop(0, "#A0A0A0");
  context.fillStyle = gradient;
  context.fillRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  context.fillStyle = "#f0f0f0";
  context.fillRect(frame, frame, drawingCanvas.width - 2 * frame, drawingCanvas.height - 2 * frame);
}
function InfoTextInit(myInfoText)
{
  ThisMyInfoText = myInfoText;
}
function ChessBoardInit(myChessBoard, ModalWindow, SelectNewChessManWindow, myWidth)
{
  if (myWidth < 480) myWidth = 480;
  myChessBoard.width = myWidth / 3;
  myChessBoard.height = myWidth / 3;
  ThisMyChessBoard = myChessBoard;
  ThisMyModalConversionPawns = ModalWindow;
  ThisMySelectNewChessMan = SelectNewChessManWindow;
  DrawFrame(myChessBoard, 4);
  ClearChessBoard = myChessBoard.getContext('2d');
  ThisMyChessBoard.addEventListener("click", ClickChessBoard, false);
  myChessBoard.style.cursor = "pointer";
  var i;
  var j;
  var count_j = 0;
  var count_i = 0;
  var myChessBoardWidth = myChessBoard.width / 9;
  ChessManSize = myChessBoardWidth;
  ClearChessBoard.strokeStyle = "#D0D0D0";
  ClearChessBoard.strokeRect(myChessBoardWidth - 4, 0, myChessBoard.width - myChessBoardWidth + 4, myChessBoard.height - myChessBoardWidth + 4);
  for (i = -4; i < myChessBoard.width; i += myChessBoardWidth)
  {
    count_j = 0;
    for (j = 4; j < myChessBoard.width; j += myChessBoardWidth)
    {
      if (count_j != 8 && count_i != 0)
      {
        if (count_j < 8 && count_i < 9)
        {
          ClearChessBoard.fillStyle = CoordChessBoard[count_i - 1][count_j].ColorCell;
          ClearChessBoard.fillRect(i, j, myChessBoardWidth, myChessBoardWidth);
          CoordChessBoard[count_i - 1][count_j].Coord_X = i;
          CoordChessBoard[count_i - 1][count_j].Coord_Y = j;
          //CoordChessBoard[count_i - 1][count_j].ColorChessMan = 0;
          //CoordChessBoard[count_i - 1][count_j].ChessMan = 6;
        }
      }
      count_j++;
    }
    count_i++;
  }
  var MyFontSize = myWidth / 160;
  if (MyFontSize < 4) MyFontSize = 4; 
  ClearChessBoard.fillStyle = "#000";
  ClearChessBoard.font = "italic " + MyFontSize + "pt Arial";
  var textX = myChessBoardWidth / 2 - (myChessBoardWidth / 8);
  var textY = myChessBoardWidth / 2 + myChessBoardWidth / 8;
  ClearChessBoard.fillText("8", textX, textY);
  textY += myChessBoardWidth;
  ClearChessBoard.fillText("7", textX, textY);
  textY += myChessBoardWidth;
  ClearChessBoard.fillText("6", textX, textY);
  textY += myChessBoardWidth;
  ClearChessBoard.fillText("5", textX, textY);
  textY += myChessBoardWidth;
  ClearChessBoard.fillText("4", textX, textY);
  textY += myChessBoardWidth;
  ClearChessBoard.fillText("3", textX, textY);
  textY += myChessBoardWidth;
  ClearChessBoard.fillText("2", textX, textY);
  textY += myChessBoardWidth;
  ClearChessBoard.fillText("1", textX, textY);
  textX += myChessBoardWidth;
  textY += myChessBoardWidth - 4;
  ClearChessBoard.fillText("a", textX, textY);
  textX += myChessBoardWidth;
  ClearChessBoard.fillText("b", textX, textY);
  textX += myChessBoardWidth;
  ClearChessBoard.fillText("c", textX, textY);
  textX += myChessBoardWidth;
  ClearChessBoard.fillText("d", textX, textY);
  textX += myChessBoardWidth;
  ClearChessBoard.fillText("e", textX, textY);
  textX += myChessBoardWidth;
  ClearChessBoard.fillText("f", textX, textY);
  textX += myChessBoardWidth;
  ClearChessBoard.fillText("g", textX, textY);
  textX += myChessBoardWidth;
  ClearChessBoard.fillText("h", textX, textY);
  ChessManImageInit();
}
function ThisMyLoadChessMan(myImage, myChessManColor, myChessMan, x, y)
{
  var ctx = myImage.getContext('2d');
  ctx.drawImage(ChessManImage[myChessManColor][myChessMan], x, y, ChessManSize, ChessManSize);  // Рисуем изображение
}
function CreatePawn(Element, Color)
{  
    Element.width = 100;
    Element.height = 100;
    Element.ctx = Element.getContext('2d'); 
    Element.ctx.fillStyle = Color;
    Element.ctx.lineWidth = 3;
    Element.ctx.beginPath();
    Element.ctx.arc(34, 95, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(66, 91);
    Element.ctx.arc(66, 95, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(34, 89);
    Element.ctx.quadraticCurveTo(28, 83, 34, 77);
    Element.ctx.quadraticCurveTo(41, 64, 44, 44);
    Element.ctx.lineTo(56, 44);
    Element.ctx.quadraticCurveTo(59, 64, 66, 77);
    Element.ctx.quadraticCurveTo(72, 83, 66, 89);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.arc(50, 25,11,0,Math.PI*2,true);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(37, 42);
    Element.ctx.arc(37, 39, 3,Math.PI/2,-Math.PI/2,false);
    Element.ctx.quadraticCurveTo(50, 35, 63, 36);
    Element.ctx.arc(63, 39, 3,-Math.PI/2,Math.PI/2,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
}
function CreateRook(Element, Color)
{  
    Element.width = 100;
    Element.height = 100;
    Element.ctx = Element.getContext('2d'); 
    Element.ctx.fillStyle = Color;
    Element.ctx.lineWidth = 3;
    Element.ctx.beginPath();
    Element.ctx.arc(30, 95, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(70, 91);
    Element.ctx.arc(70, 95, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(32, 89);
    Element.ctx.arc(32, 90, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(68, 86);
    Element.ctx.arc(68, 90, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(32, 85);
    Element.ctx.lineTo(36, 38);
    Element.ctx.lineTo(64, 38);
    Element.ctx.lineTo(68, 85);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(35, 42);
    Element.ctx.arc(35, 39, 3,Math.PI/2,-Math.PI/2,false);
    Element.ctx.quadraticCurveTo(50, 35, 65, 36);
    Element.ctx.arc(65, 39, 3,-Math.PI/2,Math.PI/2,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(35, 34);
    Element.ctx.quadraticCurveTo(23, 22, 23, 5);
    Element.ctx.lineTo(34, 5);
    Element.ctx.lineTo(34, 17);
    Element.ctx.lineTo(44, 17);
    Element.ctx.lineTo(44, 5);
    Element.ctx.lineTo(56, 5);
    Element.ctx.lineTo(56, 17);
    Element.ctx.lineTo(66, 17);
    Element.ctx.lineTo(66, 5);
    Element.ctx.lineTo(75, 5);
    Element.ctx.quadraticCurveTo(77, 22, 65, 34);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
}
function CreateHorse(Element, Color)
{  
    Element.width = 100;
    Element.height = 100;
    Element.ctx = Element.getContext('2d'); 
    Element.ctx.fillStyle = Color;
    Element.ctx.lineWidth = 3;
    Element.ctx.beginPath();
    Element.ctx.arc(30, 95, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(70, 91);
    Element.ctx.arc(70, 95, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(32, 89);
    Element.ctx.arc(32, 90, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(68, 86);
    Element.ctx.arc(68, 90, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(32, 85);
    Element.ctx.quadraticCurveTo(12, 48, 32, 20);
    Element.ctx.quadraticCurveTo(37, 10, 48, 8);
    Element.ctx.lineTo(58, 8); 
    Element.ctx.quadraticCurveTo(60, 2, 64, 1);
    Element.ctx.lineTo(64, 9);
    Element.ctx.quadraticCurveTo(70, 12, 70, 16);
    Element.ctx.quadraticCurveTo(73, 22, 85, 29);
    Element.ctx.quadraticCurveTo(85, 30, 84, 33);
    Element.ctx.quadraticCurveTo(83, 38, 78, 40);
    Element.ctx.quadraticCurveTo(69, 35, 62, 37);
    Element.ctx.quadraticCurveTo(53, 38, 57, 30);
    Element.ctx.lineTo(53, 38);
    Element.ctx.quadraticCurveTo(58, 50, 74, 63);
    Element.ctx.lineTo(68, 85);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
}
function CreateBishop(Element, Color)
{  
    Element.width = 100;
    Element.height = 100;
    Element.ctx = Element.getContext('2d'); 
    Element.ctx.fillStyle = Color;
    Element.ctx.lineWidth = 3;
    Element.ctx.beginPath();
    Element.ctx.arc(30, 95, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(70, 91);
    Element.ctx.arc(70, 95, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(32, 89);
    Element.ctx.arc(32, 90, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(68, 86);
    Element.ctx.arc(68, 90, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(32, 85);
    Element.ctx.lineTo(39, 63);
    Element.ctx.lineTo(61, 63);
    Element.ctx.lineTo(68, 85);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(37, 59);
    Element.ctx.quadraticCurveTo(30, 40, 38, 27);
    Element.ctx.quadraticCurveTo(40, 20, 50, 5);
    Element.ctx.quadraticCurveTo(60, 20, 62, 27);
    Element.ctx.quadraticCurveTo(70, 40, 63, 59);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(37, 65);
    Element.ctx.arc(37, 62, 3,Math.PI/2,-Math.PI/2,false);
    Element.ctx.quadraticCurveTo(50, 58, 63, 59);
    Element.ctx.arc(63, 62, 3,-Math.PI/2,Math.PI/2,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
}
function CreateQueen(Element, Color)
{  
    Element.width = 100;
    Element.height = 100;
    Element.ctx = Element.getContext('2d'); 
    Element.ctx.fillStyle = Color;
    Element.ctx.lineWidth = 3;
    Element.ctx.beginPath();
    Element.ctx.arc(30, 95, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(70, 91);
    Element.ctx.arc(70, 95, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(32, 89);
    Element.ctx.arc(32, 90, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(68, 86);
    Element.ctx.arc(68, 90, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.arc(50, 16,11,0,Math.PI*2,true);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(32, 85);
    Element.ctx.quadraticCurveTo(35, 56, 17, 41);
    Element.ctx.quadraticCurveTo(16, 32, 22, 32);
    Element.ctx.quadraticCurveTo(22, 30, 24, 32);
    Element.ctx.quadraticCurveTo(32, 36, 40, 28);
    Element.ctx.quadraticCurveTo(50, 36, 60, 28);
    Element.ctx.quadraticCurveTo(78, 36, 76, 32);
    Element.ctx.quadraticCurveTo(84, 32, 83, 41);
    Element.ctx.quadraticCurveTo(65, 56, 68, 85);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
}
function CreateKing(Element, Color)
{  
    Element.width = 100;
    Element.height = 100;
    Element.ctx = Element.getContext('2d'); 
    Element.ctx.fillStyle = Color;
    Element.ctx.lineWidth = 3;
    Element.ctx.beginPath();
    Element.ctx.arc(30, 95, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(70, 91);
    Element.ctx.arc(70, 95, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(32, 89);
    Element.ctx.arc(32, 90, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(68, 86);
    Element.ctx.arc(68, 90, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(34, 39);
    Element.ctx.arc(34, 40, 4,Math.PI,-Math.PI/2,false); 
    Element.ctx.lineTo(66, 36);
    Element.ctx.arc(66, 40, 4,-Math.PI/2,0,false);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.beginPath();
    Element.ctx.moveTo(47, 33);
    Element.ctx.lineTo(47, 22);
    Element.ctx.lineTo(36, 22);
    Element.ctx.lineTo(36, 16);
    Element.ctx.lineTo(47, 16);
    Element.ctx.lineTo(47, 5);
    Element.ctx.lineTo(53, 5);
    Element.ctx.lineTo(53, 16);
    Element.ctx.lineTo(64, 16);
    Element.ctx.lineTo(64, 22);
    Element.ctx.lineTo(53, 22)
    Element.ctx.lineTo(53, 33);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
    Element.ctx.moveTo(32, 85);
    Element.ctx.quadraticCurveTo(24, 71, 17, 56);
    Element.ctx.quadraticCurveTo(17, 45, 25, 43);
    Element.ctx.lineTo(75, 43);
    Element.ctx.quadraticCurveTo(83, 45, 83, 56);
    Element.ctx.quadraticCurveTo(76, 71, 68, 85);
    Element.ctx.closePath();
    Element.ctx.stroke();
    Element.ctx.fill();
}
function ChessManImageInit()
{
  ChessManImage[0][0] = document.createElement('canvas');
  ChessManImage[0][1] = document.createElement('canvas');
  ChessManImage[0][2] = document.createElement('canvas');
  ChessManImage[0][3] = document.createElement('canvas');
  ChessManImage[0][4] = document.createElement('canvas');
  ChessManImage[0][5] = document.createElement('canvas');
  ChessManImage[1][0] = document.createElement('canvas');
  ChessManImage[1][1] = document.createElement('canvas');
  ChessManImage[1][2] = document.createElement('canvas');
  ChessManImage[1][3] = document.createElement('canvas');
  ChessManImage[1][4] = document.createElement('canvas');
  ChessManImage[1][5] = document.createElement('canvas');
  CreatePawn(ChessManImage[0][5], "#fff");//белая пешка 
  CreatePawn(ChessManImage[1][5], "#000");//черная пешка 
  CreateRook(ChessManImage[0][4], "#fff");//белая лодья
  CreateRook(ChessManImage[1][4], "#000");//черная лодья 
  CreateHorse(ChessManImage[0][3], "#fff");//белая лошадь
  CreateHorse(ChessManImage[1][3], "#000");//черная лошадь
  CreateBishop(ChessManImage[0][2], "#fff");//белая лошадь
  CreateBishop(ChessManImage[1][2], "#000");//черная лошадь 
  CreateQueen(ChessManImage[0][1], "#fff");//белый ферзь
  CreateQueen(ChessManImage[1][1], "#000");//черный ферзь 
  CreateKing(ChessManImage[0][0], "#fff");//белый король
  CreateKing(ChessManImage[1][0], "#000");//черный король 
}
function ArrangeFigures()
{
  myLoadChessMan(ThisMyChessBoard, 1, 4, "h8");
  myLoadChessMan(ThisMyChessBoard, 1, 4, "a8");
  myLoadChessMan(ThisMyChessBoard, 1, 3, "g8");
  myLoadChessMan(ThisMyChessBoard, 1, 3, "b8");
  myLoadChessMan(ThisMyChessBoard, 1, 2, "c8");
  myLoadChessMan(ThisMyChessBoard, 1, 2, "f8");
  myLoadChessMan(ThisMyChessBoard, 1, 1, "d8");
  myLoadChessMan(ThisMyChessBoard, 1, 0, "e8");
  myLoadChessMan(ThisMyChessBoard, 1, 5, "a7");
  myLoadChessMan(ThisMyChessBoard, 1, 5, "b7");
  myLoadChessMan(ThisMyChessBoard, 1, 5, "c7");
  myLoadChessMan(ThisMyChessBoard, 1, 5, "d7");
  myLoadChessMan(ThisMyChessBoard, 1, 5, "e7");
  myLoadChessMan(ThisMyChessBoard, 1, 5, "f7");
  myLoadChessMan(ThisMyChessBoard, 1, 5, "g7");
  myLoadChessMan(ThisMyChessBoard, 1, 5, "h7");
  myLoadChessMan(ThisMyChessBoard, 0, 4, "h1");
  myLoadChessMan(ThisMyChessBoard, 0, 4, "a1");
  myLoadChessMan(ThisMyChessBoard, 0, 3, "b1");
  myLoadChessMan(ThisMyChessBoard, 0, 3, "g1");
  myLoadChessMan(ThisMyChessBoard, 0, 2, "c1");
  myLoadChessMan(ThisMyChessBoard, 0, 2, "f1");
  myLoadChessMan(ThisMyChessBoard, 0, 1, "d1");
  myLoadChessMan(ThisMyChessBoard, 0, 0, "e1");
  myLoadChessMan(ThisMyChessBoard, 0, 5, "a2");
  myLoadChessMan(ThisMyChessBoard, 0, 5, "b2");
  myLoadChessMan(ThisMyChessBoard, 0, 5, "c2");
  myLoadChessMan(ThisMyChessBoard, 0, 5, "d2");
  myLoadChessMan(ThisMyChessBoard, 0, 5, "e2");
  myLoadChessMan(ThisMyChessBoard, 0, 5, "f2");
  myLoadChessMan(ThisMyChessBoard, 0, 5, "g2");
  myLoadChessMan(ThisMyChessBoard, 0, 5, "h2");
  SelectCell = "non";
  FinalMove = false;
}
function SetChessManOnChessBoard(i,j)
{
    var ctx = ThisMyChessBoard.getContext('2d');
    ctx.drawImage(ChessManImage[CoordChessBoard[i][j].ColorChessMan][CoordChessBoard[i][j].ChessMan], CoordChessBoard[i][j].Coord_X, CoordChessBoard[i][j].Coord_Y, ChessManSize, ChessManSize);  // Рисуем изображение
}
function RefreshPosition()
{
    var i;
    var j;
    for (i = 0; i < 8; i++)
    {                                         
      for (j = 0; j < 8; j++)
      {
        if (CoordChessBoard[i][j].ChessMan != 6)
        {
            //в клетке установлена фигура
            SetChessManOnChessBoard(i,j);
        }
      }
    }
}
function myLoadChessMan(myImage, myChessManColor, myChessMan, myNameCell)
{
    var i;
    var j;
    for (i = 0; i < 8; i++)
    {                                         
      for (j = 0; j < 8; j++)
      {
        if (CoordChessBoard[i][j].NameCell == myNameCell)
        {
          ThisMyLoadChessMan(myImage, myChessManColor, myChessMan, CoordChessBoard[i][j].Coord_X, CoordChessBoard[i][j].Coord_Y);
          CoordChessBoard[i][j].ColorChessMan = myChessManColor;
          CoordChessBoard[i][j].ChessMan = myChessMan;
          return;
        }  
      }
    }
}
function ClickChessBoard(e) 
{
  var x;
  var y;
  var i;
  var j;
  if (e.pageX != undefined && e.pageY != undefined) 
  {
    x = e.pageX - ThisMyChessBoard.offsetLeft;
    y = e.pageY - ThisMyChessBoard.offsetTop;
    for (i = 0; i < 8; i++)
    { 
      if (CoordChessBoard[i][0].Coord_X < x && x < CoordChessBoard[i][0].Coord_X + ChessManSize) 
      {
        for (j = 0; j < 8; j++)
        {
          if (CoordChessBoard[i][j].Coord_Y < y && y < CoordChessBoard[i][j].Coord_Y + ChessManSize)
          {
            if (SelectCell == CoordChessBoard[i][j].NameCell)
            {
              DeSelectChessBoardCell(SelectCell);
              SelectCell = "non";
            }
            else
            {
              if (SelectCell != "non")
              {
                if (SelectCellMan != 6)
                {
                  //Установлена фигура, делаем ход
                  if (MoveChessMan(SelectCell,i,j) == true)
                  {
                    SelectCell = "non";
                  }
                  return;
                }      
                DeSelectChessBoardCell(SelectCell);
              }
              if (CoordChessBoard[i][j].ChessMan != 6)
              {
                SelectChessBoardCell(CoordChessBoard[i][j].Coord_X, CoordChessBoard[i][j].Coord_Y);
                SelectCell = CoordChessBoard[i][j].NameCell;
                SelectCellMan =  CoordChessBoard[i][j].ChessMan;
              }
            }
            return;
          }
        }
      }
    }                                       
  }
}
function SelectChessBoardCell(x, y)
{
  var ctx = ThisMyChessBoard.getContext('2d');
  if (ctx.setLineDash)
  {
      ctx.setLineDash([5,2]);
  }
  ctx.strokeStyle = "#f00"; // red
  ctx.lineWidth = 2;
  ctx.strokeRect(x + 2, y + 2, ChessManSize - 4, ChessManSize - 4);  
}
function DeSelectChessBoardCell(myCell)
{
  var ctx = ThisMyChessBoard.getContext('2d');
  var i;
  var j;
    for (i = 0; i < 8; i++)
    {                                         
      for (j = 0; j < 8; j++)
      {
        if (CoordChessBoard[i][j].NameCell == myCell)
        {
          ctx.fillStyle = CoordChessBoard[i][j].ColorCell;
          ctx.fillRect(CoordChessBoard[i][j].Coord_X, CoordChessBoard[i][j].Coord_Y, ChessManSize, ChessManSize);
          if (CoordChessBoard[i][j].ChessMan != 6)
          {
            ThisMyLoadChessMan(ThisMyChessBoard, CoordChessBoard[i][j].ColorChessMan, CoordChessBoard[i][j].ChessMan, CoordChessBoard[i][j].Coord_X, CoordChessBoard[i][j].Coord_Y);
          }
          return;
        }  
      }
    }
}
function ClearChessMan(x, y)
{
  var ctx = ThisMyChessBoard.getContext('2d');
  ctx.fillStyle = CoordChessBoard[x][y].ColorCell;
  ctx.fillRect(CoordChessBoard[x][y].Coord_X, CoordChessBoard[x][y].Coord_Y, ChessManSize, ChessManSize);
  CoordChessBoard[x][y].ColorChessMan = 0;
  CoordChessBoard[x][y].ChessMan = 6;
}
function OccupiedCell(Start_X, Start_Y, Stop_X, Stop_Y, Atack)
{
  var stepX = Start_X - Stop_X;
  var stepY = Start_Y - Stop_Y;
  var znakX = 0;
  var znakY = 0;
  var testStep;
  if (stepX != 0 )
  {
    if (stepX < 0) znakX = 1;
    else znakX = -1;
    testStep = Math.abs(stepX);
  }
  if (stepY != 0 )
  {
    if (stepY < 0) znakY = 1;
    else znakY = -1;
    testStep = Math.abs(stepY);
  }
  var i;
  if (Atack == true) testStep--; 
  for (i = 0; i < testStep; i++)
  {
    Start_X += znakX;
    Start_Y += znakY;
    if(CoordChessBoard[Start_X][Start_Y].ChessMan != 6) return(true); //занято! 
  }
  return(false);  
}
function ClickConversionPawns(e) 
{
  var x;
  var y;
  var i;
  if (e.pageX != undefined && e.pageY != undefined) 
  {
    x = e.pageX - ThisMyModalConversionPawns.offsetLeft;
    y = e.pageY - ThisMyModalConversionPawns.offsetTop;
    for (i = 0; i < 4; i++)
    {
      if (ChessManSize * i + 2 < x && x < (ChessManSize * i + 2 + ChessManSize))
      {
        ThisMyModalConversionPawns.style.display = 'none';
        ClearChessMan(CoordPawnX, CoordPawnY);
        ThisMyLoadChessMan(ThisMyChessBoard, ColorPawn, i + 1, CoordChessBoard[CoordPawnX][CoordPawnY].Coord_X, CoordChessBoard[CoordPawnX][CoordPawnY].Coord_Y);
        CoordChessBoard[CoordPawnX][CoordPawnY].ColorChessMan = ColorPawn;
        CoordChessBoard[CoordPawnX][CoordPawnY].ChessMan = i + 1;
        var ColorAlianKing;
        if (ColorPawn == 0) ColorAlianKing = 1;
        else ColorAlianKing = 0; 
        if (TheTestGameOver(ColorAlianKing) == true) 
        {
           if (TestFinalGameOver(ColorAlianKing) == true) 
           {
              alert ("Шах - Мат");
              FinalMove = true;
              ThisMyInfoText.innerHTML = "Игра закончена!";
              return(true);
            }
            else alert ("Шах");
        }
        return;        
      }
    }
  }
}
function ConversionPawns(ColorPawns, X, Y)
{
  //alert("Пешка прошла в дамки");//пешка прошла в дамки
  ThisMyModalConversionPawns.style.display = 'block';
  ThisMySelectNewChessMan.width = ChessManSize * 4 + 10;
  ThisMySelectNewChessMan.height = ChessManSize + 10;
  ColorPawn = ColorPawns;
  CoordPawnX = X;
  CoordPawnY = Y; 
  var i;
  for (i = 0; i < 4; i++)
  {
    ThisMyLoadChessMan(ThisMySelectNewChessMan, ColorPawns, i + 1, ChessManSize * i + 2, 5);
  }                                                           
  ThisMyModalConversionPawns.addEventListener("click", ClickConversionPawns, false);
}
//Проверка нахождения короля ColorKing под шахом
function TestKingShah(ColorKing, PosKingX, PosKingY)
{
  var i;
  var j;
  for (i = 0; i < 8; i++)
  {                                         
    for (j = 0; j < 8; j++)
    {
      if (CoordChessBoard[i][j].ColorChessMan != ColorKing)  
      {
        if (TestMoveChessMan(i, j, PosKingX, PosKingY, true) == true)
        {
          return(true);
        }
      }  
    }
  } 
  return(false);//королю ничего не угрожает
}
//Перемещение короля из клетки  (StartX , StartY) в (StopX, StopY) Virtual == true - вызов функции для просчета возможного положения фигур
function TestMoveKing(ColorKing, StartX , StartY, StopX, StopY, Virtual)
{
  if ((Math.abs(StopX - StartX) == Math.abs(StopY - StartY)) || (StartX == StopX) || (StartY == StopY)) //король ходит по диагонали или полинии
  {
    if ((Math.abs(StopX - StartX) > 1) || (Math.abs(StopY - StartY) > 1))//Проверка хода более одной клетки 
    { 
      if ((Math.abs(StopX - StartX) == 2) && (StartY == StopY)) //Проверка рокировки
      {
        var RookX;
        var RookStopX;
        var Between;
          if (OccupiedCell(StartX, StartY, StopX, StopY, false) == true) return(false); //ход невозможен - поля заняты другими фигурами
          if (StopX == 2) 
          {
            RookX = 0;
            RookStopX = 3;
            if (RokirovkaLong[ColorKing] == true) return(false);
          }
          else
          {
            RookX = 7;
            RookStopX = 5;
            if (RokirovkaShot[ColorKing] == true) return(false);
          }
          if (CoordChessBoard[RookX][StopY].ColorChessMan != ColorKing || CoordChessBoard[RookX][StopY].ChessMan != 4) return(false);
          if (TestKingShah(ColorKing, StartX, StartY) == false)
          {
            if (TestKingShah(ColorKing, StopX, StopY) == false)
            {
              if (TestKingShah(ColorKing, RookStopX, StopY) == false)
              {
                if (Virtual == false) //Перемещаем лодью
                {
                  ThisMyLoadChessMan(ThisMyChessBoard, ColorKing, 4, CoordChessBoard[RookStopX][StopY].Coord_X, CoordChessBoard[RookStopX][StopY].Coord_Y);
                  CoordChessBoard[RookStopX][StopY].ColorChessMan = ColorKing;
                  CoordChessBoard[RookStopX][StopY].ChessMan = 4;
                  ClearChessMan(RookX, StopY);
                  RokirovkaLong[ColorKing] = true;
                  RokirovkaShot[ColorKing] = true;
                }
                return(true); //ход разрешен
              }
            }
          }
      }
      return(false); //ход невозможен
    }
    if(CoordChessBoard[StopX][StopY].ChessMan != 6)//Проверка пустой клетки
    {
      if (CoordChessBoard[StopX][StopY].ColorChessMan != ColorKing)//проверка цвета установленной фигуры
      {
        //if (TestKingShah(ColorKing, StopX, StopY) == true) return(false); //проверка постановки короля под Шах
        return(true); //ход разрешен
      }
      else return(false);  //ход невозможен
    }
    //if (TestKingShah(ColorKing, StopX, StopY) == true) return(false); //проверка постановки короля под Шах
    return(true); //ход разрешен
  }
  return(false); //ход невозможен
}
//Перемещение ферзя
function TestMoveQueen(ColorQueen, StartX , StartY, StopX, StopY)
{
  if ((Math.abs(StopX - StartX) == Math.abs(StopY - StartY)) || (StartX == StopX) || (StartY == StopY)) //ферзь ходит по диагонали или полинии
  {
    if(OccupiedCell(StartX, StartY, StopX, StopY, true) == true) return(false);  //Если клетки заняты - ошибка
    if(CoordChessBoard[StopX][StopY].ChessMan != 6)  //Проверка пустой клетки
    {
      if (CoordChessBoard[StopX][StopY].ColorChessMan != ColorQueen) //проверка цвета установленной фигуры
      {
        return(true);  //ход разрешен
      }
      else return(false); //ход невозможен
    }
    return(true);   //ход разрешен
  }
  return(false);  //ход невозможен
}
//Перемещение слона
function TestMoveBishop(ColorBishop, StartX , StartY, StopX, StopY)
{
  if (Math.abs(StopX - StartX) == Math.abs(StopY - StartY)) //слон ходит по диагонали
  {
    if (OccupiedCell(StartX, StartY, StopX, StopY, true) == true) return(false);  //Если клетки заняты - ошибка
    if(CoordChessBoard[StopX][StopY].ChessMan != 6) //Проверка пустой клетки
    {
      if (CoordChessBoard[StopX][StopY].ColorChessMan != ColorBishop)   //проверка цвета установленной фигуры
      {
        return(true);  //ход разрешен
      }
      else return(false); //ход невозможен
    }
    return(true); //ход разрешен
  }
  return(false); //ход невозможен
}
//Перемещение коня
function TestMoveHorse(ColorHorse, StartX , StartY, StopX, StopY)
{
  if (((Math.abs(StopX - StartX) == 2) && (Math.abs(StopY - StartY) == 1)) || ((Math.abs(StopX - StartX) == 1) && (Math.abs(StopY - StartY) == 2))) //конь ходит буквой Г
  {
    if(CoordChessBoard[StopX][StopY].ChessMan != 6)      //Проверка пустой клетки
    {
      if (CoordChessBoard[StopX][StopY].ColorChessMan != ColorHorse)     //проверка цвета установленной фигуры
      {                     
        return(true);       //ход разрешен
      }
      else return(false);  //ход невозможен
    }
    return(true);          //ход разрешен
  }
  return(false);   //ход невозможен
}
//Перемещение лодьи
function TestMoveRook(ColorRook, StartX , StartY, StopX, StopY)
{
  if ((StartX == StopX) || (StartY == StopY)) //лодья ходит только по линии
  {
    if (OccupiedCell(StartX, StartY, StopX, StopY, true) == true) return(false);  //Если клетки заняты - ошибка
    if(CoordChessBoard[StopX][StopY].ChessMan != 6)
    {
      if (CoordChessBoard[StopX][StopY].ColorChessMan != ColorRook)
      {
        return(true);  //ход разрешен
      }
      else return(false);  //ход невозможен
    }
    return(true);     //ход разрешен
  }
  return(false);      //ход невозможен
}
//Атака пешки
function PawnsAttack(Start_X, Start_Y, Stop_X, Stop_Y, VirtualAtack)
{
  switch(CoordChessBoard[Start_X][Start_Y].ColorChessMan)   //Определяем цвет пешки, делающую ход
  {
    case 0: //белая
    {
      var stepX = Math.abs(Start_X - Stop_X); //величина шага
      if (stepX != 1) return(false);          //ход невозможен, тк шаг по Х больше 1
      var stepY = Start_Y - Stop_Y;
      if (stepY != 1) return(false);          //ход невозможен, тк шаг по Y больше 1
      if (VirtualAtack == false)
      {
        if(CoordChessBoard[Stop_X][Stop_Y].ChessMan != 6 && CoordChessBoard[Stop_X][Stop_Y].ColorChessMan != 0) 
        {
          return(true);
        }
        else return(false);
      }
      return(true);
    }
    case 1: //черная
    {
      var stepX = Math.abs(Stop_X - Start_X);
      if (stepX != 1) return(false);
      var stepY = Stop_Y - Start_Y;
      if (stepY != 1) return(false);
      if (VirtualAtack == false)
      {
        if(CoordChessBoard[Stop_X][Stop_Y].ChessMan != 6 && CoordChessBoard[Stop_X][Stop_Y].ColorChessMan != 1) 
        {
          return(true);
        }
        else return(false);
      }
      return(true);
    }
    default:
    {
      return(false);
    }
  }
}
//Перемещение пешки
function TestMovePawns(ColorPawn, StartX , StartY, StopX, StopY, OnlyAtack)
{
  if (StartX == StopX && OnlyAtack == false) //пешка ходит только по линии
  {
    if (OccupiedCell(StartX, StartY, StopX, StopY, false) == true) return(false);  //Если клетки заняты - ошибка
    switch(ColorPawn)   //Определяем цвет фигуры, делающую ход
    {
      case 0: //белая
      {
        if(StartY < StopY) return(false);  //Белые пешки ходят только вверх
        if (StartY != 6)
        {
          if ((StartY - StopY) > 1) return(false);
        }
        else if ((StartY - StopY) > 2) return(false);
        return(true);
      }
      case 1: //черная
      {
        if(StartY > StopY) return(false);  //Черные пешки ходят только вниз
        if (StartY != 1)
        {
          if ((StopY - StartY) > 1) return(false);
        }
        else if ((StopY - StartY) > 2) return(false);
        return(true);
      }
      default:
      {
        return(false);
      }
    }
    return(true);
  }
  else 
  {
    if (PawnsAttack(StartX, StartY, StopX, StopY, OnlyAtack) == false) return(false);//атака пешки
    else
    {
      return(true);
    }
    return(false);
  }
}
//Перемещение фигуры
function TestMoveChessMan(StartX, StartY, StopX, StopY, OnlyAtack, Virtual)
{
  switch(CoordChessBoard[StartX][StartY].ChessMan) //Определяем фигуру, делающую ход
  {
    case 0: //король
    {
      if (TestMoveKing(CoordChessBoard[StartX][StartY].ColorChessMan, StartX , StartY, StopX, StopY, Virtual) == true) break;
      return(false);
    }
    case 1:  //ферзь
    {
      if (TestMoveQueen(CoordChessBoard[StartX][StartY].ColorChessMan, StartX , StartY, StopX, StopY) == true) break;
      return(false);
    }
    case 2:  //слон
    {
      if (TestMoveBishop(CoordChessBoard[StartX][StartY].ColorChessMan, StartX , StartY, StopX, StopY) == true) break;
      return(false);
    }
    case 3:  //конь
    {
      if (TestMoveHorse(CoordChessBoard[StartX][StartY].ColorChessMan, StartX , StartY, StopX, StopY) == true) break;
      return(false);
    }
    case 4:  //лодья
    {
      if (TestMoveRook(CoordChessBoard[StartX][StartY].ColorChessMan, StartX , StartY, StopX, StopY) == true) break;
      return(false);
    }
    case 5://пешка
    {
      if (TestMovePawns(CoordChessBoard[StartX][StartY].ColorChessMan, StartX , StartY, StopX, StopY, OnlyAtack) == true) break;
      return(false);
    }
    default: //пустая
    {
      return(false);
    }  
  }          
  return(true); 
}
//Проверка атаки на короля
function TheTestGameOver(ColorKing)
{
  var i;
  var j;
  for (i = 0; i < 8; i++)
  {                                         
    for (j = 0; j < 8; j++)
    {
      if (CoordChessBoard[i][j].ChessMan == 0 && CoordChessBoard[i][j].ColorChessMan == ColorKing)
      {
        if (TestKingShah(ColorKing, i, j) == true) 
        {
          return(true);
        }
        else return(false); 
      }
    }
  }
}
//Проверка возможности защитить атакуемого короля
function TestVariantChessManDefence(ColorKing, StartX, StartY)
{
  var x;
  var y;

  for (x = 0; x < 8; x++)
  {                                         
    for (y = 0; y < 8; y++)
    {
        if (TestMoveChessMan(StartX, StartY, x, y, false, true) == true)
        {
          BufChesman.ColorChessMan = CoordChessBoard[x][y].ColorChessMan;
          BufChesman.ChessMan = CoordChessBoard[x][y].ChessMan;
          CoordChessBoard[x][y].ColorChessMan = CoordChessBoard[StartX][StartY].ColorChessMan;
          CoordChessBoard[x][y].ChessMan = CoordChessBoard[StartX][StartY].ChessMan;
          CoordChessBoard[StartX][StartY].ColorChessMan = 0;
          CoordChessBoard[StartX][StartY].ChessMan = 6;
          if (TheTestGameOver(ColorKing) == false)
          {
            //есть вариант защиты
            CoordChessBoard[StartX][StartY].ColorChessMan = CoordChessBoard[x][y].ColorChessMan;
            CoordChessBoard[StartX][StartY].ChessMan = CoordChessBoard[x][y].ChessMan;
            CoordChessBoard[x][y].ColorChessMan = BufChesman.ColorChessMan;
            CoordChessBoard[x][y].ChessMan = BufChesman.ChessMan;
            return(true);
          }
          CoordChessBoard[StartX][StartY].ColorChessMan = CoordChessBoard[x][y].ColorChessMan;
          CoordChessBoard[StartX][StartY].ChessMan = CoordChessBoard[x][y].ChessMan;
          CoordChessBoard[x][y].ColorChessMan = BufChesman.ColorChessMan;
          CoordChessBoard[x][y].ChessMan = BufChesman.ChessMan;
        } 
    }
  }
}
//Проверка окончания партии
function TestFinalGameOver(ColorKing)
{
  for (i = 0; i < 8; i++)
  {                                         
    for (j = 0; j < 8; j++)
    {
      if(CoordChessBoard[i][j].ColorChessMan == ColorKing)
      {
        if (TestVariantChessManDefence(ColorKing, i, j) == true)
        {
          return(false);  //есть варианты защиты
        }
      }
    }
  }
  return(true);
}
function ChessMove(out, there)
{
//out, there = "a1","a2" ... "h8"
  var i;
  var j;
  for (i = 0; i < 8; i++)
  {                                         
    for (j = 0; j < 8; j++)
    {
      if (CoordChessBoard[i][j].NameCell == myOldCell)  
      {
        return (MoveChessMan(out,i,j));
      }
    }
  }
  return(false);
}
function MoveChessMan(myOldCell,x,y)
{
  var i;
  var j;
  var ColorAlianKing;
  if (FinalMove == true) 
  {
    alert ("Игра закончена");
    return(false);
  }  
  for (i = 0; i < 8; i++)
  {                                         
    for (j = 0; j < 8; j++)
    {
      if (CoordChessBoard[i][j].NameCell == myOldCell)  
      {
        if ((WhiteMove == true && CoordChessBoard[i][j].ColorChessMan == 0) || (WhiteMove == false && CoordChessBoard[i][j].ColorChessMan == 1))
        {
          if (TestMoveChessMan(i, j, x, y, false, false) == true)
          {
            BufChesman.ColorChessMan = CoordChessBoard[x][y].ColorChessMan;
            BufChesman.ChessMan = CoordChessBoard[x][y].ChessMan;
            BufChesman.Coord_X = CoordChessBoard[i][j].Coord_X;
            BufChesman.Coord_Y = CoordChessBoard[i][j].Coord_Y;
            ClearChessMan(x, y);
            ThisMyLoadChessMan(ThisMyChessBoard, CoordChessBoard[i][j].ColorChessMan, CoordChessBoard[i][j].ChessMan, CoordChessBoard[x][y].Coord_X, CoordChessBoard[x][y].Coord_Y);
            CoordChessBoard[x][y].ColorChessMan = CoordChessBoard[i][j].ColorChessMan;
            CoordChessBoard[x][y].ChessMan = CoordChessBoard[i][j].ChessMan;
            ClearChessMan(i, j);
            if (TheTestGameOver(CoordChessBoard[x][y].ColorChessMan) == true)
            {
            //Создана опастность для своего короля: возващаем позицию
              ThisMyLoadChessMan(ThisMyChessBoard, CoordChessBoard[x][y].ColorChessMan, CoordChessBoard[x][y].ChessMan, BufChesman.Coord_X, BufChesman.Coord_Y);
              CoordChessBoard[i][j].ColorChessMan = CoordChessBoard[x][y].ColorChessMan;
              CoordChessBoard[i][j].ChessMan = CoordChessBoard[x][y].ChessMan;
              SelectChessBoardCell(BufChesman.Coord_X, BufChesman.Coord_Y);
              ClearChessMan(x, y);
              CoordChessBoard[x][y].ColorChessMan = BufChesman.ColorChessMan;
              CoordChessBoard[x][y].ChessMan = BufChesman.ChessMan;
              return(false);
            }
            if (CoordChessBoard[x][y].ChessMan == 5)
            {
              //пешка: превращение?
              switch(CoordChessBoard[x][y].ColorChessMan)   //Определяем цвет фигуры, делающую ход
              {
                case 0: //белая
                {
                  if(y == 0) ConversionPawns(0,x,y);//пешка прошла в дамки
                  break;
                }
                case 1: //черная
                {
                  if(y == 7) ConversionPawns(1,x,y); //пешка прошла в дамки
                  break;
                }
              }
            }
            if (CoordChessBoard[x][y].ChessMan == 0) 
            {
              RokirovkaLong[CoordChessBoard[x][y].ColorChessMan] = true;
              RokirovkaShot[CoordChessBoard[x][y].ColorChessMan] = true;
            }  
            if (CoordChessBoard[x][y].ChessMan == 4) 
            {
              switch(CoordChessBoard[x][y].ColorChessMan)   //Определяем цвет фигуры, делающую ход
              {
                case 0: //белая
                {
                  if (CoordChessBoard[0][7].ChessMan == 6) RokirovkaLong[0] = true;
                  if (CoordChessBoard[7][7].ChessMan == 6) RokirovkaShot[0] = true;
                  break;
                }
                case 1: //черная
                {
                  if (CoordChessBoard[0][0].ChessMan == 6) RokirovkaLong[1] = true;
                  if (CoordChessBoard[7][0].ChessMan == 6) RokirovkaShot[1] = true;
                  break;
                }
              }
            }  
            if (CoordChessBoard[x][y].ColorChessMan == 0) ColorAlianKing = 1;
            else ColorAlianKing = 0;
            if (TheTestGameOver(ColorAlianKing) == true) 
            {
              if (TestFinalGameOver(ColorAlianKing) == true) 
              {
                alert ("Шах - Мат");
                FinalMove = true;
                ThisMyInfoText.innerHTML = "Игра закончена!";
                return(true);
              }
              else alert ("Шах");
            }
            if (WhiteMove == true) 
            {
              WhiteMove = false;
              ThisMyInfoText.innerHTML = "Ход черных!";
            }
            else 
            {
              WhiteMove = true;
              ThisMyInfoText.innerHTML = "Ход белых!";
            }
            return(true);
          }
        }
      }  
    }
  } 
  return(false);
}