$('.modal-overlay').on('click',function(e){
    if($(e.target).closest('.modal').length==0){
        $(this).fadeOut()
    }
});

$('.close').on('click',function(){
    $(this).parents('.modal-overlay').fadeOut()
})

$('#open-modal').on('click',function(){
    $('.modal-overlay').fadeIn()
})


$('.modal-info-general').on('click',function(e){
    if($(e.target).closest('.modal').length==0){
        $(this).fadeOut()
    }
});

$('.close').on('click',function(){
    $(this).parents('.modal-info-general').fadeOut()
})

$('#open-modal-general').on('click',function(){
    $('.modal-info-general').fadeIn()
})




$('.modal-info-course_for_children').on('click',function(e){
    if($(e.target).closest('.modal').length==0){
        $(this).fadeOut()
    }
});

$('.close').on('click',function(){
    $(this).parents('.modal-info-course_for_children').fadeOut()
})

$('#open-modal-course_for_children').on('click',function(){
    $('.modal-info-course_for_children').fadeIn()
})




$('.modal-info-zno').on('click',function(e){
    if($(e.target).closest('.modal').length==0){
        $(this).fadeOut()
    }
});

$('.close').on('click',function(){
    $(this).parents('.modal-info-zno').fadeOut()
})

$('#open-modal-zno').on('click',function(){
    $('.modal-info-zno').fadeIn()
})

// big_science


$('.modal-info-big_science').on('click',function(e){
    if($(e.target).closest('.modal').length==0){
        $(this).fadeOut()
    }
});

$('.close').on('click',function(){
    $(this).parents('.modal-info-big_science').fadeOut()
})

$('#open-modal-big_science').on('click',function(){
    $('.modal-info-big_science').fadeIn()
})


// business

$('.modal-info-business').on('click',function(e){
    if($(e.target).closest('.modal').length==0){
        $(this).fadeOut()
    }
});

$('.close').on('click',function(){
    $(this).parents('.modal-info-business').fadeOut()
})

$('#open-modal-business').on('click',function(){
    $('.modal-info-business').fadeIn()
})


// adults


$('.modal-info-adults').on('click',function(e){
    if($(e.target).closest('.modal').length==0){
        $(this).fadeOut()
    }
});

$('.close').on('click',function(){
    $(this).parents('.modal-info-adults').fadeOut()
})

$('#open-modal-adults').on('click',function(){
    $('.modal-info-adults').fadeIn()
})
