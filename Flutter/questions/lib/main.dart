import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState(){
    return MyAppState();
  }
}
class MyAppState extends State<MyApp> {
  var questionindex = 0;

  void answerQuestion() {
    setState(() {
      questionindex  = questionindex  + 1;
    });
    print(questionindex);
  }

  @override
  Widget build(BuildContext context) {
    var questions = [
      'what\'your age ?',
      'what\'your favorite color?',
      'what\'your favorite second color?',
      'what\'your favorite sport?',

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
            Text(questions[questionindex]),
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
