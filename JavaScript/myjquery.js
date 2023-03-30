$(document).ready(function(){
    // $('selector').action()
    // S('p').click();
    // $('p').click(function(){
    //     console.log('You clicked on P')
    //     $('p').hide();//it will hide all paragraph
    // });
    $('p').click(function () {
        console.log('You clicked on P')
        $(this).hide();//it will hide only clicked one
    });
// console.log($);
})
