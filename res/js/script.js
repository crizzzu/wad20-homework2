$(function() {

    $(".avatar").click(function(){
        var X=$(this).attr('id');
        if(X==1)
        {
    $(".avatar-menu").hide();
    $(this).attr('id', '0');
        }
        else
        {
    $(".avatar-menu").show();
        $(this).attr('id', '1');
        }
    });

    $(".avatar-menu").mouseup(function(){
        return false
    });

    $(".avatar").mouseup(function(){
        return false
    });

    $(document).mouseup(function(){
        $(".avatar-menu").hide();
        $(".avatar").attr('id', '');
        });


$(function() {
    $.ajax({
        url: "https://private-anon-a4f3faf488-wad20postit.apiary-mock.com/users/1"
    }).then(function(data) {
       $('.user-name').append(data.firstname + " ");
        $('.user-name').append(data.lastname);
       $('.user-email').append(data.email);
        $('.avatar').attr(data.avatar);
        //picture responsed 404
    });
});

    
    
    
    
var settings = {
    "url": "https://private-anon-a4f3faf488-wad20postit.apiary-mock.com/posts"
};
    
$.ajax(settings).done(function (response) {
    console.log(response);
    var avatar = response[3].author.avatar;
    $('<img>').attr('src', "" + avatar + "").appendTo($('.profile'))
    
    var firstname = response[3].author.firstname;
    $('#name').append(firstname + " ");
    
    var lastname = response[3].author.lastname;
    $('#name').append(lastname);
    
    var createtime = response[3].createTime;
    $('#createTime').append(createtime);
    
    var text = response[3].text;
    $('#title').append(text);
    
    var media = response[3].media.url;
    var type = response[3].media.type;
    if(type == 'image'){
        $('<img />').attr('src', "" + media + "").appendTo($('.post-image'))}
    else {
        if(type == 'video'){
        $('#video').attr('src', media)}
    }
           
    var likes = response[3].likes;
    $('#likes').append(likes);
    
});


$(function() {
   $('.like-button').click(function(){
      $(this).css('background-color','blue');
    });
});   
    
   var settings = {
    "url": "https://private-anon-a4f3faf488-wad20postit.apiary-mock.com/profiles"
};
    
$.ajax(settings).done(function (response) {
    console.log(response);

    var sub_firstname = response[2].firstname;
    $('#sub-name').append(sub_firstname + " ");
    
    var sub_lastname = response[2].lastname;
    $('#sub-name').append(sub_lastname);
    
    var sub_avatar = response[2].avatar;
    $('<img>').attr('src', "" + sub_avatar + "").appendTo($('.subs-image'))
    
});
    
 
 $(function() {
   $('.follow-button').click(function(){
      $(this).css('background-color','white');
    $(this).css('color','#c8006e');
    $(this).css('border-color','#c8006e');
    $('h3').text('Followed');
    });
}); 
}); 
    



