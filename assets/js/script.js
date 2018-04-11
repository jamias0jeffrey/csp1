// $(document).ready(function(){
//     $('[data-toggle="popover"]').popover(); 
// });

$('.popper').popover({
    placement: 'bottom',
    container: 'body',
    html: true,
    content: function () {
        return $(this).next('.popper-content').html();
    }
});