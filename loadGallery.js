var galleryjson={
    "images":[
    {
        "id":1,
        "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HuC-xixIqOONCd-FCQLRYgPWC8LUulNi_A&usqp=CAU",
        "alt":"FootPath among trees"
    },
    {
        "id":2,
        "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5UEleFzQhdZFTdlEja-BWxFty-Y7BSvga7Q&usqp=CAU",
        "alt":"Land in greyscale"
    },
    {
        "id":3,
        "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8tlwAima6lkJfbQA5VWMF6E7LDJJm3EpKoA&usqp=CAU",
        "alt":"Empty Road"
    },
    {
        "id":4,
        "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUrPWURavfFCxtt4uuyTPDRa6EYFw5SRuRSw&usqp=CAU",
        "alt":"Sea"
    },
    {
        "id":5,
        "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAi8IJ9SwKp1IPu6o0xcrfmBNY70se6XZh9A&usqp=CAU",
        "alt":"Beautiful Tree"
    },
    {
        "id":6,
        "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCjSXXwZMQS_v_3mfr5TcZpYZxC1KbJXVV5w&usqp=CAU",
        "alt":"Mountain covered with snow"
    }
]
}
var newOnj={
    "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHsfrN_tQ03XuEvtR8PBPUT9cL8sGdMCrJA&usqp=CAU",
    "alt":"Nature"
}
galleryjson.images.push(newOnj);
(function($){
    $(function(){
        var data=galleryjson.images;
        console.log(data);
        target = $('#img-gallery'),
        $.each(data, function (key, val) {
        html = '<div class="gallery">';
        html += '<img src ="' + val.src + '/>';
        html += '<p class="desc">' + val.alt + '</p>';
        html += '</div>';
        target.append(html);
        });
    })
}(jQuery))

