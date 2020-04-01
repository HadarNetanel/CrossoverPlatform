import 'package:flutter/material.dart';
import './question.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState(){
    return _MyAppState();
  }
}
class _MyAppState extends State<MyApp> {
  var _questionindex = 0;

  void _answerQuestion() {
    setState(() {
      _questionindex  = _questionindex  + 1;
    });
    print(_questionindex);
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
            Question
            (questions[_questionindex]
            ),
            RaisedButton
            (child: Text('Answer 1'),
            onPressed: _answerQuestion,
            ),
            RaisedButton
            (child: Text('Answer 2'),
            onPressed:_answerQuestion,
            ),
            RaisedButton
            (child: Text('Answer 3'),
            onPressed:_answerQuestion,
            ),
            RaisedButton
            (child: Text('Answer 4'),
            onPressed:_answerQuestion,
            ),
            RaisedButton
            (child: Text('Answer 5'),
            onPressed:_answerQuestion,
            ),
            RaisedButton
            (child: Text('Answer 6'),
            onPressed:_answerQuestion
             ,),
          ],
        ),
      ),
    );
  }
}
