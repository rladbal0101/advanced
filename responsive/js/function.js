/**
 * Created by Administrator on 2017-07-27.
 */

$(function(){

  $('.gnb-toggle').data({'open' : false}).on('click', function(){

    if( $(this).data().open ){
      $('.gnb').removeClass('on');
      $(this).data({open : false});
    }else{
      $('.gnb').addClass('on');
      $(this).data({open : true});
    }

  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bmN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImZ1bmN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA3LTI3LlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLmduYi10b2dnbGUnKS5kYXRhKHsnb3BlbicgOiBmYWxzZX0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYoICQodGhpcykuZGF0YSgpLm9wZW4gKXtcclxuICAgICAgJCgnLmduYicpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgICAkKHRoaXMpLmRhdGEoe29wZW4gOiBmYWxzZX0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICQoJy5nbmInKS5hZGRDbGFzcygnb24nKTtcclxuICAgICAgJCh0aGlzKS5kYXRhKHtvcGVuIDogdHJ1ZX0pO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pOyJdfQ==
