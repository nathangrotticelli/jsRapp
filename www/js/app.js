// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngTouch', 'ionic.contrib.ui.cards'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/",
      templateUrl: "templates/home.html"
    })
    //  .state('tab.test1', {
    //   url: '/test1',
    //       templateUrl: 'templates/test1.html',
    //       controller: 'CardsCtrl'

    // })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

})

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})


.controller('CardsCtrl', function($scope, $ionicModal, $timeout, $ionicSwipeCardDelegate) {
  var cardTypes = [
    // { title: 'Swipe down to clear the card', image: 'img/pic.png' },
    { title: 'What is Javascript?', level:'Beginner',num:'0'},
    { title: 'What is JQuery?', level:'Beginner',num:'1'},
     { title: 'What is 3333?', level:'Beginner',num:'2'},
    { title: 'Intermediate1 are these?', level:'Intermediate', num:'3'},
     { title: 'Intermediate2 are these?', level:'Intermediate', num:'4'},
      { title: 'Intermediate3?', level:'Intermediate', num:'5'},
       { title: 'What Advanced1 is this?',level:'Advanced', num:'6'},
        { title: 'What Advanced2 is this?',level:'Advanced', num:'7'},
         { title: 'What Advanced3 is this?',level:'Advanced', num:'8'},
     { title: 'Looks like your out of cards!',level:'End', num:'9'}
  ];
  $scope.tags = [
{
  text: 'Beginner',
  checked: true
},
{
  text: 'Intermediate',
  checked: true
},
{
  text: 'Advanced',
  checked: true
}];


//   $scope.cardCheck = function(card){
//     // counter++;
//     // alert(card.title);

// // alert($scope.tags[0].checked);
// // var cardNumbers = 0;
//  if(card.level == "Beginner"&&$scope.tags[0].checked!=true) {

// //
//           // alert('hi');
//           pleaseT = card.num +=1;
//           $scope.addCard(pleaseT);
//            // alert('ad card saved');




//       }
//       else if(card.level == "Intermediate"&&$scope.tags[1].checked!=true) {
// //         // alert("")

//            pleaseT = card.num +=1;
//           $scope.addCard(pleaseT);
//            // alert('ad card saved');



//       }
//     else if(card.level == "Advanced"&&$scope.tags[2].checked!=true) {
// //         // alert("")

//           pleaseT = card.num +=1;
//           $scope.addCard(pleaseT);
//           // alert('here');
//            // $scope.addCard(2);
//            // alert('ad card saved');




//       }
//       else{
//         // $scope.cardSwiped(4);
//         // counter = counter++;
//         // alert(counter);
//         // alert(card.num);
//         // flip('left');
//          $scope.turnedOver=false;
//         // alert(cardNum);
//         if (cardNum==-1){
//           // cardNum=0;
//           // cardNum++;
//         }
//         // alert(cardNum);
//        $scope.addCard(cardNum);
//          // var newCard = cardTypes[0];
//          // $scope.cards.push(angular.extend({}, newCard));
//       }

//   };
  // $scope.isChecked = true;
   // $scope.pushNotification = { checked: true };
// $scope.displayB = false;

  // $scope.ale1 = function(){
  //     alert($scope.displayB);

  //   $scope.displayB ^=true;
  // };
// $scope.value1 = false;

  // <li class="item item-toggle">
  //     <form>
  //     Beginner

  //     Value1: <input type="checkbox" ng-change="ale()" ng-model="value1"> <br/>
  //      <tt>value1 = {{value1}}</tt><br/>

  //    </form>
  // </li>

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('personal.html', function(modal) {
    $scope.personalModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
 $ionicModal.fromTemplateUrl('company.html', function(modal) {
    $scope.companyModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
  // Called when the form is submitted
  // $scope.createTask = function(task) {
  //   $scope.tasks.push({
  //     title: task.title
  //   });
  //   $scope.taskModal.hide();
  //   task.title = "";
  // };

    // <form ng-submit="createTask(task)">
    //     <div class="list">
    //       <label class="item item-input">
    //         <input type="text" placeholder="What do you need to do?" ng-model="task.title">
    //       </label>
    //     </div>
    //     <div class="padding">
    //       <button type="submit" class="button button-block button-positive">Create Task</button>
    //     </div>
    //   </form>

  // Open our new task modal
  $scope.openComp = function() {
    $scope.companyModal.show();
  };
    $scope.openPers= function() {
    $scope.personalModal.show();
  };

  // Close the new task modal
  $scope.closeComp = function() {
    $scope.companyModal.hide();
  };
  $scope.closePers = function() {
    $scope.personalModal.hide();
  };

  $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

$scope.cardNum=-1;
$scope.flipped=0;
  $scope.cardSwiped = function(index) {
    // alert
    // `rt(index);
    // alert(cardNum);
// alert( $scope.flipped);

    if($scope.cardNum==-1){
      // alert($scope.flipped);
      // alert($scope.flipped);
      if($scope.flipped==0&&$scope.tags[0].checked){



        $scope.turnedOver=false;
        // alert(cardNum);
        $scope.cardNum=0;
        // alert(cardNum);
       $scope.addCard(0);
       // $scope.flipped=0;
       // $scope.flipped=0;

     }
      // else if($scope.flipped==1){
      //  $scope.addCard(cardNum);
      //  $scope.flipped=0;
      // }
      else{
        // alert(cardNum);
        // $scope.flipped=0;
        $scope.addCard(0);
        $scope.flipped=0;


         // $scope.flipped=0;
        // alert(cardNum);
        // $scope.flipped=0;
        // cardNum++;
      }
      // $scope.addCard();
      // cardNum++;
    }
    else{
      // alert(cardNum);
      // cardNum=cardNum+cardNum;
      // alert(cardNum);
      if($scope.flipped==0){

        $scope.turnedOver=false;

        // alert(cardNum);
        $scope.cardNum++;
        // alert(cardNum);
        // alert(cardNum);
       $scope.addCard($scope.cardNum);


       // $scope.flipped=0;
      }
      else{
        // alert('her2222e');
        // $scope.flipped=0;
       $scope.addCard($scope.cardNum);
       $scope.flipped=0;


        // $scope.flipped=0;
       // $scope.flipped=0;
      }


      // cardNum++;
    }


        // alert(cardNum);

    // alert(newCard.id);
    // alert(index);
    // alert($scope.card.num);
    // $scope.num = this.cards[0].num;
  };




  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };
  $scope.ale = function() {
    // alert($scope.flipped);
  prompt('hi');

  // $scope.data = {}

  // // An elaborate, custom popup
  // var myPopup = $ionicPopup.show({
  //   template: '<input type="password" ng-model="data.wifi">',
  //   title: 'Enter Wi-Fi Password',
  //   subTitle: 'Please use normal things',
  //   scope: $scope,
  //   buttons: [
  //     { text: 'Cancel' },
  //     {
  //       text: '<b>Save</b>',
  //       type: 'button-positive',
  //       onTap: function(e) {
  //         if (!$scope.data.wifi) {
  //           //don't allow the user to close unless he enters wifi password
  //           e.preventDefault();
  //         } else {
  //           return $scope.data.wifi;
  //         }
  //       }
  //     },
  //   ]
  // });
  // myPopup.then(function(res) {
  //   console.log('Tapped!', res);
  // });
  // $timeout(function() {
  //    myPopup.close(); //close the popup after 3 seconds for some reason
  // }, 3000);

  };



$scope.turnedOver=false;


  $scope.flip = function(direction){
    // $scope.turnedOver^=true;
    // cardNum=cardNum-1;
     $scope.flipped=1;


      $timeout(function(){
         // $scope.turnedOver^=true;
         $scope.turnedOver^=true;
        }, 5);
    // alert
 // this.card.num= this.cards[cardNum].num;
    // alert(cardNum);
   // var cardNum2 = cardNum;

// setTimeout(function() {

//     // $scope.flip^=true;



//    // $scope.card.num = this.cards[cardNum2].num;

// }, 0);

   var duration = 0.5; // animation time in seconds
   // animation direction - left || right
    nativetransitions.flip(duration, direction,function(){
      $scope.flipped=0;
    });

    // alert($scope.turnedOver);
  };

//  ionic.onGesture('doubletap', function() {
//        var duration = 0.5, // animation time in seconds
//     direction = "right"; // animation direction - left || right
// nativetransitions.flip(duration, direction,
//   function(){ alert('done');
// }
//   );
//       }, this.el);


  $scope.addCard = function(cardNum) {
     // alert(
      if (cardNum >=0){
        // alert(typeof NaN);
         var newCard = cardTypes[cardNum];
         // $scope.flipped=0;
      }
      // alert(cardNum);
      // alert($scope.cardNum);

      // alert(cardNum);

    // newCard.id = Math.random();
    // var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    // newCard.id = Math.random();
    // alert(newCard.id);
    $scope.flipped=0;
    // $scope.level="Beginner";



    $scope.cards.push(angular.extend({}, newCard));
    starter=true;
if(starter){
  cardLimit=9;
}
    if(cardNum>cardLimit){
      $scope.cards.pop(angular.extend({}, newCard));
      $scope.addCard(cardLimit);
    }
    else if($scope.tags[0].checked!=true&&cardTypes[cardNum].level=="Beginner"){
      // alert(cardNum);
      // $scope.cards.splice(index, cardNum);
      $scope.cards.pop(angular.extend({}, newCard));
      cardNum++;
      // alert(cardNum);

       $scope.addCard(cardNum);
        // $scope.cards.splice(index, cardNum);
    }
    else if($scope.tags[1].checked!=true&&cardTypes[cardNum].level=="Intermediate"){
     // $scope.cards.splice(index, cardNum);
      $scope.cards.pop(angular.extend({}, newCard));
      cardNum++;
      // alert(cardNum);
        // alert(cardNum);

       $scope.addCard(cardNum);
        // $scope.cards.splice(index, cardNum);
    }
    else if($scope.tags[2].checked!=true&&cardTypes[cardNum].level=="Advanced"){
      // $scope.cards.splice(index, cardNum);
       $scope.cards.pop(angular.extend({}, newCard));
      cardNum++;
        // alert(cardNum);

       $scope.addCard(cardNum);

    }
    else{
      $scope.cardNum = cardNum;
    }



}
})
// .filter('matchAccessLevel', function() {
//   return function( cards, tags) {
//     var filtered = [];
//       var garbage = [];
//     angular.forEach(cards, function(card) {
//       // alert()
//       // alert(card.title);
//  if(card.level == "Beginner"&& tags[0].checked) {
// //
//           // alert('hi');
//            filtered.push(card);
//            // alert('ad card saved');




//       }
//       else if(card.level == "Intermediate"&&tags[1].checked) {
// //         // alert("")

//             filtered.push(card);
//            // alert('ad card saved');



//       }
//     else if(card.level == "Advanced"&&tags[2].checked) {
// //         // alert("")

//            filtered.push(card);
//           // alert('here');
//            // $scope.addCard(2);
//            // alert('ad card saved');




//       }
//       else{
//         // cardNum = card.num;
//         // card = cards[]
//         card.swipe();
//         // $scope.cardSwiped(4);
//         // counter = counter++;
//         // alert(counter);
//         // alert(card.num);

//         // flip('left');
// // garbage.push(    card);
//          // cardSwiped(2);
//          // var newCard = cardTypes[0];
//          // $scope.cards.push(angular.extend({}, newCard));
//       }


//     });
//     return filtered;
//   };
// })



.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
    card.swipe();
  };

});
