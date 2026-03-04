$(document).ready(function(){
    
    $("#gt").click(function(){

        $("#lk").toggleClass("col-md-2 col-md-1");
        $("#kl").toggleClass("col-md-10 col-md-11");
       
       
        $(".aa").toggle();
        $(".ii").toggleClass("ml-4 pl-1 fa-2x");
        $(".oo").toggleClass("ml-5 pl-2");
    })


    $(".bb").hide();
    $("#sel").change(function () {
        let v = $(this).val();
        if(v == " 4"){
            
            $(".bb").show("slow");
        } else {
            $(".bb").hide("slow");
        }
    }) 
    

    $("#cc").click(function(){

        $("#ff").toggle("slow");

    //$('#cc').css({
    //        'transition': 'transform 0.6s ease-out',
    //        'transform' : 'rotate(180deg) '
    //    });
       // $('#cc').css({
       //     'transition': 'transform 0.6s ease-out',
       //     'transform' : 'rotate(45deg) '
       // });
         
    })

   

    $("#dd").click(function(){
        $("#ee").hide("slow");
    })

    $("#pe").click(function(){
        $("#chpe").css({
            'transition':'transform 0.6s',
            'transform':'rotate(90deg)'
        });
    })
    
    $("#pr").click(function(){
        $("#chpr").css({
            'transition':'transform 0.6s',
            'transform':'rotate(90deg)'
        });
    })
    
    $("#tr").click(function(){
        $("#chtr").css({
            'transition':'transform 0.6s',
            'transform':'rotate(90deg)'
        });
    })
    

  $("#bot").click(function(){
        var e = $("#email").val();
        var p = $("#psw").val();
            if(e != "angemaeva@gmail.com"){
                 alert("veillez verifier l'email");
            }

          //  else if(e !== "@gmail.com"){
           //     alert("votre email doit contenir @gmail.com");
          // }
            else if(p != "123"){
                alert("veillez verifier le mot de passe");
           }
            else{
                 $("#bot").replaceWith('<a href="create.html"><button class="btn bg-success text-white" id="bot">connect</button></a>');
            }
    })

  
   
})