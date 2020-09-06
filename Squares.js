var xCordinate,yCordinate,color
class Squares{
  constructor()
  {
    this.xCordinate=1
    this.yCordinate=1
    this.length=50
    this.height=50
    this.color = "black"
  }
  
  display()
  {
   this.x=this.xCordinate*50
    this.y=this.yCordinate*50
    fill(this.color);
    rect(this.x,this.y,this.length,this.height)
    
  }
}
    
    