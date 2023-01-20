$(document).ready(function(){
    $("#button-news").on("click", function() {
        alert("Запрос отправлен. С вами свяжется менеджер.");
    })
    $("#button-form").on("click", function() {
        alert("Ваша заявка отправлена");
    })

    $("#button-openform").on("click", function() {
        alert("Ваша заявка отправлена");
    })

   /* // Кастомное контекстное меню
    $(document).on("contextmenu",function(){
      return false;
    })
  
    $(document).on("mousedown", function(event){
      //event.preventDefault();
      //console.log(event.which);
  
      if(event.which==3){
        $(".hidden").removeClass("shown");
  
        if($(event.target).is("img")){
          $(".hidden").addClass("shown");
        }
  
        console.log(event.pageX, event.pageY);
        $("#context").css({
          top: event.pageY,
          left: event.pageX
        })
        $("#context").fadeIn();
        return false;
      }
        $("#context").fadeOut();
  
      // switch(event.which){
      //   case 1:
      //     console.log("Нажата левая кнопка мыши");
      //     break;
      //   case 2:
      //     console.log("Нажата средняя кнопка мыши");
      //     break;
      //   case 3:
      //     console.log("Нажата правая кнопка мыши");
      //     break;
      // }
  
  
  
    })
  
  
    //  Переопределние стандартного поведения
    $("[href='http://www.google.ru']").on("click",function(event){
      console.log("Переходите на Google?");
      //event.preventDefault();
      return false;
    });
  
    // Множественный доступ к элементам
    $("#prepand, #append, #replace").on("click", function(e){
      var el = $(e.currentTarget);
      var action = el.attr("id");
  
      var content = $(".text").val();
  
      if(action == "prepand"){
        console.log("Prep");
        $("#main").prepend("<a href='#'>"+content+"</a>");
      }else if (action == "append"){
        console.log("App");
        $("#main").append(content);
      }else if (action == "replace"){
        console.log("Repl");
        $("#main").html(content);
      }
      $(".text").val("");
    });
  
  */
    // Выпадающее меню
    $("[data-trigger='dropdown']").on("mouseenter",function(){
      var submenu = $(this).parent().find(".submenu");
      //submenu.addClass("active");
      submenu.fadeIn(300);
  
      $(".profile-menu").on("mouseleave",function(){
        //submenu.removeClass("active");
        submenu.fadeOut(300);
      })
    });
  
  
  
  
    /*
    document.getElementById("text").innerHTML="Это мой текст";
    $("#text").html("Это тоже мой текст");
    document.getElementsByClassName("my-input")[0].value="Новое значение Input2";
    $(".my-input").val("Новое значение Input");
  
  
    var el = document.getElementById("text");
    console.log("EL в Vanilla JS", el);
    console.log("EL в jQuery",$(el));
  
    $("#go-button").on("mouseover",function(){
      console.log("jQ клик отработал!");
    })
  */  //Обращение к элементам
  
  
  })
  
  
  
  // =========================== JS ====================================
  /*
  class Animal {
    constructor(name,height,weight){
      console.log("Животное создано, его кличка",name);
      this.name=name;
      this.height=height;
      this.weight=weight;
    }
    nameLength(){
      return this.name.length;
    }
  }
  
    class Dog extends Animal{
      constructor(name,height,weight,barkVolume,leashColor){
        super (name,height,weight);
        this.barkVolume=barkVolume;
        this.leashColor=leashColor;
      }
  
      bark(){
        if(this.barkVolume>50){
          console.log(this.name, "лает громко, громкость равна",this.barkVolume);
        } else {
          console.log(this.name, "лает громко, громкость равна",this.barkVolume);
        }
      }
    }
  
    class Fish extends Animal{
      constructor(name,height,weight,swimSpeed){
        super (name,height,weight);
        this.swimSpeed=swimSpeed;
      }
  
      swim(pitWeight){
        if(this.swimSpeed>50){
          console.log(this.name, "плават быстро, скорость равно:",this.swimSpeed);
          console.log("Рыба уплыла");
        } else {
          console.log(this.name, "плават быстро, скорость равна:",this.swimSpeed);
          pitWeight +=this.weight;
          console.log("Рыба съедена, вес собаки стал",pitWeight);
        }
      }
    }
  
    var pitbull = new Dog("Пит",80,50,72,"красный");
    var goldie = new Fish("Голди",5,0.3,20);
  
    pitbull.bark();
    goldie.swim(pitbull.weight);
  */ // Классы - часть вторая
  
  /*
  class Animal {
    constructor(name,height,weight){
      console.log("Животное создано, его кличка",name);
      this.name=name;
      this.height=height;
      this.weight=weight;
    }
    nameLength(){
      return this.name.length;
    }
  }
  Animal.planet="Земля";
  
  var dog = new Animal("Джек",80,60);
  var fish = new Animal("Голди",5,0.2);
  
  console.log(fish.nameLength());
  console.log(fish.name);
  console.log(fish.constructor.planet);
  */ // Классы - начало
  
  /*
  function missingN(numbers){
    var missing = -1;
    var sorted = numbers.sort(function(a,b){return a-b})
    for (i=sorted[0];i<=numbers.length;i++){
      if(numbers.indexOf(i)===-1)
      missing = i;
    }
    return missing;
  }
  var numbers = [20,9,8,6,5,11,10,14,13,12,16,15,17,19,18,4];
  
  console.log(missingN(numbers))
  */ // Поиск пропавшего числа в массиве
  
  /*
  function saySomething(phrase){
    console.log("Вы сказали: "+phrase);
  }
  var p = "Привет, как дела?";
  saySomething(p);
  
  
  function getPhrase(params){
    var l = 0;
    if (params.phrase){
      l = params.phrase.length;
    }
    if(typeof params.another !== "undefined"){
      l+=params.another.length;
    }
  
    function printBoth(){
      console.log(phrase,another);
    }
    return l;
    //return printBoth();
  }
  
  var p1 = "Это немного длинное предложение";
  var p2 = "Это другая фраза";
  
  var computed = getPhrase({another:p2});
  
  console.log(computed);
  
  */ // Вложенные функции
  
  /*
  var btn = document.getElementById("go-button");
  
  function buttonClicked(){
    console.log("Кнопка была нажата");
    var customText = document.getElementsByClassName("my-input");
    var textArea = document.getElementsByClassName("my-textarea");
  
    var results = document.getElementById("text");
  //  console.log(customText);
    results.innerHTML = "Привет, " + customText[0].value + "<br />";
    results.innerHTML += "Сообщение:"+textArea[0].value;
  }
  
  btn.addEventListener("click",buttonClicked);
  */ // Взаимодействие с HTML
  
  /*
  
  
  // доступ к элементу массив
  // var indexNum = hobbies.indexOf("музыка");
  
  //удаляем по индексу
  //hobbies.splice(2,1);
  
  var hobbies = ["чтение","рисование","программирование","компьютерные игры"];
  console.log("Список моих хобби:",hobbies);
  console.log("Меня больше не интересует:",hobbies.pop());
  hobbies.push("фильмы");
  console.log(hobbies.shift());
  hobbies.unshift("фитнес");
  
  hobbies.forEach(function(i, ie){
    console.log("Мне нравится",i, ie)
  })
  
  console.log("");
  if(hobbies.indexOf("рисование")>-1){
    console.log("Я люблю рисовать");
  }
  
  if(hobbies.indexOf("бегать по утрам")===-1){
    console.log("Я не люблю бегать");
  }
  
  "1" == 1 //true
  "1" === 1 // false
  */ // Массивы
  
  /*
  
  var btn = document.getElementById("go-button");
  
  function buttonClicked(){
    console.log("Кнопка была нажата");
    btn.removeEventListener("click",buttonClicked);
    console.log(document.getElementById("text").innerHTML);
    document.getElementById("text").innerHTML="Не делай так";
    console.log(document.getElementById("text"));
    console.log(document.getElementById("text").innerHTML);
  }
  
  btn.addEventListener("click",buttonClicked);
  */ // Кнопки и innerHTML
  
  /*
  
  function myFunc() {
    console.log("Меня зовут Денис");
  }
  
  myFunc();
  
  function printName(name, age){
    console.log("Привет,",name,". Тебе",age,"лет.");
  }
  
  printName("Джон",37);
  printName("Чарльз");
  */ // Функции
  
  /*
  
  for (var i=0; i<10; i++){
    console.log("Переменная i = "+i);
  }
  
  
  var i=0;
  do {
    console.log("Значение переменной i =", i);
    i+=1;
  } while (i<5)
  */ // Циклы
  
  /*
  
  var isPremiumUser = false;
  if(isPremiumUser){
    console.log("Спасибо, что используете премиум подписку!");
  } else {
    console.log("Подпишитесь на нашу подписку!");
  }
  
  var myAge=28;
  if(myAge<1){
    console.log("Вы младенец");
  } else if(myAge<3){
    console.log("Вы малыш");
  } else if(myAge<=18){
    console.log("Вы подросток");
  } else if(myAge<40){
    console.log("Вы взрослый");
  } else {
    console.log("Вы очень взрослый");
  }
  
  var x=2;
  switch(x){
    case 2:console.log("Значение прееменной x = 2");
    break;
    case 3:console.log("Значение прееменной x = 3");
    break;
    default: console.log("Другое значение");
  }
  */ // Условные выражения
  
  /*
  
  var myAge = 28;
  console.log("Мой возраст "+ myAge);
  myAge += 2;
  
  console.log("Мой возраст через год: "+ myAge);
  
  var myName;
  console.log("Мое имя: "+myName);
  */ // Определение переменных
  
  // однострочный комментарий
  /* многострочный
  комментарий  */
  