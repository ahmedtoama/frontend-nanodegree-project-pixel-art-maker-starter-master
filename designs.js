// Select color input
const colorPicker=$("#colorPicker");
// Select size input
const input_height=$("#input_height");
const input_width=$("#input_width");
// invoke makeGrid on submit
$("#sizePicker").submit(function(e){
  //invoke makeGrid
  makeGrid();
  //invoke function to set color if you not choose color
  choose_color();
  //so this page no reload
  e.preventDefault();
});
//invoke function to set color if you choose color after submit
colorPicker.change(choose_color);
// function makeGrid
function makeGrid() {
  var width=input_width.val();
  var height=input_height.val();
  var table="<table>";
  for(let i=0;i<height;i++){
    table+="<tr>";
    for(let j=0;j<width;j++){
      table+="<td> </td>";
    }
    table+="</tr>";
  }
  table+="</table>";
  $("#pixel_canvas").html(table);
}
//function for choose color
function choose_color(){
  var color=colorPicker.val();
  $("td").click(function(){
    $(this).css("background",color);
  });
  //when you dbclick remove this color by add color white
  $("td").dblclick(function(){
    $(this).css("background","white");
  });
}
