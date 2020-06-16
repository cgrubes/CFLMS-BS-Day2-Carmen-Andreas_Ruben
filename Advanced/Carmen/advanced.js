$(document).ready(function () {

    var actor_array = JSON.parse(actors);

    for (i = 0; i < actor_array.length; i++) {

        let actor = `<div class="row>
        
        <div class = "actor col-8 offset-2 alert alert-warning d-flex justify-content-center">
            <div class = "picture">
            <img src="${actor_array[i].image}"></div>
                </div>
            
            <div class="info col-8 offset-2 alert alert-warning d-flex justify-content-center">
            <div class = "name">
             <p><h3>${actor_array[i].name}</h3></p>
             </div>
             
             <div class = "desc col-8 offset-2 alert alert-warning d-flex justify-content-center">
             <br>
             <p>${actor_array[i].description}</p>
             </div>
        
             

         </div>`;


        $(".tile").replaceWith(actor);
}

$(".actor").hide();

$("#link2").on("click", function(){
    for (let i=0; i<actor.length; i++){
        $("#" + this.id)
    }

})



});

























/* $(document).ready(function () {

    var actor_array = JSON.parse(actors);

    for (let i = 0; i < actor_array.length; i++) {

      let actor = `<div class = "image">
      <img src="${actor_array[i].image}">
  
      <div class="row">
      <div class = "col-8 offset-2  alert alert-warning d-flex justify-content-center name">
       ${actor_array[i].name}</div>
   
      <div class = "col-8 offset-2 alert alert-warning desc">
      ${actor_array[i].description}
      </div>
      </div>`

    }

    $(".tile").append(actor);
  });  */