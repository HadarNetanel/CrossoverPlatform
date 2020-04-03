import 'package:flutter/material.dart';
import './quiz.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState(){
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  final _questions = const [
    {
      'qusetionText': 'what\'your age ?',
      'answers':[
        'Under 10','Uper 10 Under 15','Uper 15 Under 20','Uper 20 Under 25','Uper 25 Under 30', 'Uper 30']
    },
    {'qusetionText': 'what\'your favorite color?', 'answers':[
      'Black', 'Blue', 'Red', 'Orange', 'Yellow', 'Pink'
    ]},
    {'qusetionText': 'what\'your favorite second color?', 'answers':[
      'Black', 'Blue', 'Red', 'Orange', 'Yellow', 'Pink'
    ]},
    {'qusetionText': 'what\'your favorite sport?', 'answers':[
      'Football','BaskeBall','Soccer','Tennis','Golf', 'Wrestling'
    ]},


  ];

  var _questionsIndex = 0;

  void _answerQuestion() {

    setState(() {
      _questionsIndex  = _questionsIndex  + 1;
    });
    print(_questionsIndex);
    if (_questionsIndex < _questions.length) {
      print("_questionindex");
    }else {
      print("_questionindex");
    }
  }



  @override
  Widget build(BuildContext context) {


    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: Text(
              'Question',
            ),
          ),
          body: _questionsIndex < _questions.length
              ? Quiz(answerQuestion: _answerQuestion, questionsIndex: _questionsIndex, questions:_questions )
              : Center(
              child:
              Text(
                  'start'
              )
          )
      ),
    );
  }
}