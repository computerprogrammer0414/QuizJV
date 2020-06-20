
/*********************************
 *********QUIZ CONTROLLER*********
******************************** */
var quizController = (function() {

   //*******Question Constructor */
   function Question(id, questionText, options, correctAnswer){
      this.id = id;
      this.questionText = questionText;
      this.options = options;
      this.correctAnswer = correctAnswer;
   }

    return {
        addQuestiononLocalStorage: function(newQuestText, opts){
          console.log('Hi');
        }
    }

})();

/*********************************
 *********UICONTROLLER*********
******************************** */
var UIController = (function(){

    var domItems = {
      //***********Admin Panel */
        questInsertBtn: document.getElementById("question-insert-btn"),
        newQuestionText: document.getElementById("new-question-text"),
        adminOptions: document.querySelectorAll(".admin-option")
    };

    return {
        getDomItems: domItems
    };

})();

/*********************************
 *********CONTROLLER*********
******************************** */
var controller = (function(quizCtrl, UICtrl) {

  var selectedDomItems = UICtrl.getDomItems;

   selectedDomItems.questInsertBtn.addEventListener('click', function(){

    quizCtrl.addQuestiononLocalStorage(selectedDomItems.newQuestionText, selectedDomItems.adminOptions);
    
   });

})(quizController, UIController);