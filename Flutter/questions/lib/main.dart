import 'package:flutter/material.dart';

void main() => runApp(MyApp());


class MyApp extends StatelessWidget {
  var questionIndex = 0;

  void answerQuestion() {
    questionIndex = questionIndex + 1;
    print(questionIndex);
  } 
  
  @override
  Widget build(BuildContext context) {
    var questions = [
      'what\'your favorite color?',
      'what\'your favorite second color?'
      'what\'your favorite sport?'

    ];

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            'Question',
          ),
        ),
        body: Column(
          children: [
            Text(questions[questionIndex]),
            RaisedButton
            (child: Text('Answer 1'),
            onPressed: answerQuestion,
            ),
            RaisedButton
            (child: Text('Answer 2'),
            onPressed:answerQuestion,
            ),
            RaisedButton
            (child: Text('Answer 3'),
            onPressed:answerQuestion,
            ),
            RaisedButton
            (child: Text('Answer 4'),
            onPressed:answerQuestion,
            ),
            RaisedButton
            (child: Text('Answer 5'),
            onPressed:answerQuestion,
            ),
            RaisedButton
            (child: Text('Answer 6'),
            onPressed:answerQuestion
             ,),
          ],
        ),
      ),
    );
  }
}
