
  import 'package:flutter/cupertino.dart';
  import './question.dart';
    import './answer.dart';


class Quiz extends StatelessWidget {

final List<Map<String, Object>> questions;
final int questionsIndex;
final Function answerQuestion;

Quiz({
  @required this.questions,
  @required this.answerQuestion,
  @required this.questionsIndex
  });

    @override
    Widget build (BuildContext context) {
      return Column(
          children: [
            Question(
              questions[questionsIndex]['qusetionText'],
            ),
           ...(questions[questionsIndex]['answers'] as List<String>)
              .map((answer) {
              return Answer(answerQuestion, answer);
            }).toList()
          ], 
      );
   
  }
}
