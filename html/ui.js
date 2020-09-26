$(document).ready(function() {
    window.addEventListener('message', function(event) {
        var data = event.data;

        if(event.data.showhud == false){
            $('.container').fadeIn();
            $('.container2').fadeOut();
        }

        if(event.data.showhud == true){
            $('.container2').fadeIn();
            $('.container').fadeOut();
        }

        // $(".container").css("display", data.show? "none":"block");
        $("#boxStamina").css("width", data.stamina + "%");

        if (event.data.action == "updateStatus") {
            updateStatus(event.data.st);
        }

        if (data.armor > 0 ) {

            $("#boxHeal3").css("width", data.health + "%"); // SHOW NORMAL BAR
            $("#boxHeal2").css("width", data.health + "%"); // SHOW NORMAL BAR
            $("#boxArmor").css("width", data.armor + "%"); // SHOW NORMAL BAR
            $("#boxArmor2").css("width", data.armor + "%"); // SHOW NORMAL BAR
            $('#heal').show(); // HIDE 2ND BAR
            $('#boxHeal').show(); // HIDE 2ND BAR

            $('#heal2').show(); // HIDE 2ND BAR
            $('#boxHeal2').show(); // HIDE 2ND BAR

            $('#boxArmor2').show(); // HIDE 2ND BAR
            $('#armor2').show(); // HIDE 2ND BAR

            $('#boxArmor').show(); // HIDE 2ND BAR
            $('#armor').show(); // HIDE 2ND BAR
            $('.healthnumber').hide();

            if (data.healthtext == true) {
                $('.healthnumber2').show();
                $('.healthnumber2').text(event.data.health);
            }

            if (data.armortext == true) {
                $('.armornumber').show();
                $('.armornumber').text(event.data.armor);
            }
        } 
    else
        if (data.armor == 0 ) {
            $("#boxHeal3").css("width", data.health + "%"); // SHOW NORMAL BAR
            $("#boxHeal").css("width", data.health + "%"); // SHOW NORMAL BAR
            $('#boxHeal2').hide(); // HIDE 2ND BAR
            $('#heal2').hide(); // HIDE 2ND BAR

            $('#boxArmor').hide(); // HIDE 2ND BAR
            $('#armor').hide(); // HIDE 2ND BAR

            $('#boxArmor2').hide(); // HIDE 2ND BAR
            $('#armor2').hide(); // HIDE 2ND BAR

            $('#heal').show(); // HIDE 2ND BAR
            $('#boxHeal').show(); // HIDE 2ND BAR


            $('.armornumber').hide();
            $('.healthnumber2').hide();

            if (data.healthtext == true) {
                $('.healthnumber').show();
                $('.healthnumber').text(event.data.health);
                if (data.health < 0 ) {
                    $('.healthnumber').text(data.deadtext);
                }
            }


        }
    })
})

function updateStatus(status){
    $('#boxHunger').css('width', status[0].percent+'%')
    $('#boxThirst').css('width', status[1].percent+'%')
    $('#boxHunger2').css('width', status[0].percent+'%')
    $('#boxThirst2').css('width', status[1].percent+'%')
}
