// $(document).ready(function(){
//   $("#btn1").click(function(){
//     $('#p').append("<div></div>");    ---- Adicionar elementos no inicio
//   });
  
//   $("#btn2").click(function(){
//     $('#div').prepend("<div></div>");  ---- Adicionar elementos no final
//   });
// });

// -------------------------------------------------------------------------------------

// $(document).ready(function(){
//   $("#btn1").click(function(){
//     $('#p').before("<b>Before</b>");   ---- Adicionar antes dos elementos
//   });

//   $("#btn2").click(function(){
//     $('#div').after("<i>After</i>");   ---- Adicionar após os elementos
//   });
// });

// -------------------------------------------------------------------------------------

// $(document).ready(function(){
//   $("#btn1").click(function(){
//     $('p').remove();
//     $('#div').remove();                ---- remove elementos
//   });
// });

// -------------------------------------------------------------------------------------

// $(document).ready(function(){
//   $("#btn3").click(function(){
//     $('#div2').empty();				  ---- remove elementos dentro do elemento
//   });
// });

// -------------------------------------------------------------------------------------

// $(document).ready(function(){
//   $("#btn1").click(function(){
//     alert("Text: " + $("#div2").text());  ---- mostra apenas o texto de alerta
//   });
//   $("#btn2").click(function(){
//     alert("HTML: " + $("#div2").html());  ---- mostra apenas o codigo com texto de alerta
//   });
// });

// $(document).ready(function(){
//   $("#btn3").click(function(){
//     alert("Value: " + $('#div2').val());  ---- mostra apenas o codigo value de alerta
//   });
// });

// $(document).ready(function(){
//   $("#btn3").click(function(){
//     alert($('#w3h').attr('id'));
//   });
// });

// -------------------------------------------------------------------------------------

// $(document).ready(function(){
//   $("#btn1").click(function(){
//     $('#p').text("Hello world!");
//   });
//   $("#btn2").click(function(){
//     $("#div").html("<b>Hello world!</b>");
//   });
//   $("#btn3").click(function(){
//     $("#div2").val("Dolly Duck");  ---- so quando tiver componente de expor o value
//   });
// });

// -------------------------------------------------------------------------------------

// $(document).ready(function(){
//   $("h2, h3, h4").parent().css({"color": "red", "border": "2px solid red"});
// });

// copia ou replica elementos

// $(document).ready(function(){
//   $("#btn1").click(function(){
//      $("h2, h3, h4").last().css({"color": "red", "border": "2px solid red"});
//   });
 
// });

// -------------------------------------------------------------------------------------

// mostra o valor de altura e largura do elemento

// $(document).ready(function(){
//   $("#btn1").click(function(){
//     var txt = "";
//     txt += "Width of div: " + $("#div").width() + "</br>";    
//     txt += "Height of div: " + $("#div2").height();
//     $("#div").html(txt);
//   });
// });

// comprimento com bordas para width e height

// $("#btn1").click(function(){
//   var txt = "";
//   txt += "Outer width: " + $("#div").outerWidth() + "</br>";
//   txt += "Outer height: " + $("#div").outerHeight();
//   $("#div").html(txt);
// });

// -------------------------------------------------------------------------------------

// Ajax

// $(document).ready(function(){
//   $("#btn1").click(function(){
//     $("#div").load("teste.txt");
//   });
// });

// -------------------------------------------------------------------------------------

$(document).ready(function(){
  $('#btn1').click(function(){
    $.get(function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});