// This is a JavaScript file

$(document).on("click","#buscar",function(){
  $.ajax({
    type:"get",//como you enviar
    url:"https://viacep.com.br/ws/"+$("#cep").val()+"/json/",//para onde enviar
    sucess: function(data){//executar se der certo
      var conteudo;
      conteudo = "<p><strong>Logradouro: </strong>"+data.lougradouro+"</p>";
      conteudo += "<p><strong>Bairro: </strong>"+data.bairro+"</p>";
      conteudo += "<p><strong>Cidade: </strong>"+data.localidade+"</p>";
      conteudo += "<p><strong>Estado: </strong>"+data.uf+"</p>";

      $("#dados").html(conteudo);
    },
    error: function(){//executar se der erro
      alert("deu erro:");
    }
  });
});