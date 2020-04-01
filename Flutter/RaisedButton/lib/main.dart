import 'package:flutter/material.dart';

void main() => runApp(MyApp());


class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    var quest = [
      'what\'your favorite color?',
      'what\'your favorite second color?'
      'what\'your favorite sport?'

    ];

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            'NavBar',
          ),
        ),
        body: Column(
          children: [
            Text('The question!'),
            RaisedButton
            (child: Text('Answer 1'),
            onPressed:null ,),
            RaisedButton
            (child: Text('Answer 2'),
            onPressed:null ,),
            RaisedButton
            (child: Text('Answer 3'),
            onPressed:null ,),
            RaisedButton
            (child: Text('Answer 4'),
            onPressed:null ,),
            RaisedButton
            (child: Text('Answer 5'),
            onPressed:null ,),
            RaisedButton
            (child: Text('Answer 6'),
            onPressed:null ,),
          ],
        ),
      ),
    );
  }
}
