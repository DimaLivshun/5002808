$(document).ready(function() {

  $('textarea').keydown(function(e) {
    if (e.ctrlKey && e.keyCode == 13) {
      var text = document.getElementById('messagetext');
      if(text.value == ''){
      alert('Нельзя отправить пустой комментарий!');
      }
      else{
        var newdiv = document.createElement("div");
        newdiv.className='comment';
        var date = moment().format('LL');
        newdiv.innerHTML = "<ul><li><span class='name'>Дмитрий</span></li><li><span class='date'>"+ date +"</span></li></ul><div  class='comment_wrap'><p class='mycomment'>"+ text.value +"</p></div>";
        document.getElementById("comment_window").appendChild(newdiv);
        var clear = document.getElementById('messagetext').value = "";
      } 
    }
  });


  $( function() {
    $( "#progressbar" ).progressbar({
      value: 11,
      max: 15
    });
  });
  $( function() {
    $( "#progressbar_second" ).progressbar({
      value: 3,
      max: 15
    });
  });
  $( function() {
    $( "#progressbar_third" ).progressbar({
      value: 1,
      max: 15
    });
  });


});

var button = document.getElementById('btn');
moment.locale('ru');

button.onclick = function() {
  var text = document.getElementById('messagetext');
  if(text.value == ''){
    alert('Нельзя отправить пустой комментарий!');
  }
  else{
    var newdiv = document.createElement("div");
    newdiv.className='comment';
    var date = moment().format('LL');
    newdiv.innerHTML = "<ul><li><span class='name'>Дмитрий</span></li><li><span class='date'>"+ date +"</span></li></ul><div class='comment_wrap'><p class='mycomment'>"+ text.value +"</p></div>";
    document.getElementById("comment_window").appendChild(newdiv);
    var clear = document.getElementById('messagetext').value = "";
  }
};
