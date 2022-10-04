$(function () {
  
  $(".gnb>li").hover(function(){
    var childrenName = $(this).children().eq(1).attr("class");

    if(childrenName==="sub"){
      $(this).children(".sub").stop().fadeIn();
      $(".s_box").stop().fadeIn();
    }
    else{
          
    }
  },
  function(){
        $(this).children(".sub").stop().fadeOut();
        $(".s_box").stop().fadeOut();
  });
  $(document).ready(function () {
    var jbOffset = $("#header").offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $(window).scroll(function () {
      if ($(document).scrollTop() > 99) {//여기 지정된 길이 이후부터 적용됩니다
        $("#header").addClass("on");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
      else {
        $("#header").removeClass("on");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
    });
  });
});

$(document).ready(function () {

  //처음들어갔을때 모습 만들기...
  $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
  $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
  $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

  //On Click Event
  $("ul.tabs li").click(function () {

    $("ul.tabs li").removeClass("active"); //Remove any "active" class
    $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
    $(".tab_content").hide(); //모든 contents들 숨김

    var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
    /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
    .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
    $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
    return false;
  });
   
//마스크 색상선택 부분
$(".ctab_content").hide(); //tab_content 부분을 모두 숨김.
$("ul.ctabs li:first").addClass("active1").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
$(".ctab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

//On Click Event
$("ul.ctabs li").click(function () {

  $("ul.ctabs li").removeClass("active1"); //Remove any "active" class
  $(this).addClass("active1"); //선택한 탭에만 active클래스 붙임
  $(".ctab_content").hide(); //모든 contents들 숨김

  var activeTab1 = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
  /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
  .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
  $(activeTab1).fadeIn(1200); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
  return false;
});
});