Template.postsList.todosLosPosts = function () {
    return Posts.find();
};

Template.postsList.events({

    'click #ADD-POST' : function (event) {
      $("#FORMULARIO").toggle("SLOW");

    },

    /*Aqui lo que capturamos es cuando le dan click al 
    boton enviar y obtenemos los valores de los campos de texto*/
    'click #ENVIAR' : function (event) {
      	var tituloPost = $("#TITULO-POST").val();
      	var urlPost = $("#URL-POST").val();
      	var authorPost = $("#AUTHOR-POST").val();
      	//alert(tituloPost + urlPost + authorPost + "obtuve los valors de los campos pero no se que hacer con ellos a quien los envio ? ");
      	/*Aqui llamamos una funcion javascript*/
      	insertarPost(tituloPost,authorPost,urlPost);
      	/*Esta es una manera de llamar una funcion y esta se encargar de trabajar con los dato que le enviamos*/
    }
});



function insertarPost(titulo,author,url){

	if (validar(titulo,author,url) == 1) {
		var estructura = {
			title: titulo,
			author : author,
			url: url

		}
		var insetar = Posts.insert(estructura);
	}else{
		alert("rellena los putos campos");
	};
}


function validar(campo, campo2 , campo3){
	if (campo != '' && campo2 != '' && campo3 != '') {
		return 1;
	}else{
		return 0;
	};
}