// Copyright (c) 2019, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:flutter/material.dart';

import './quiz.dart';
import './result.dart';
import './home.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  var _totalScore = 0;
  var _questionIndex = -1;
  final _questions = const [
    {
      'questionText': 'What\'s your favorite color?',
      'answers': [
        {
          'text': 'Black',
          'score': 10
        },
        {
          'text': 'Red',
          'score': 5
        },
        {
          'text': 'Green',
          'score': 3
        },
        {
          'text': 'White',
          'score': 1
        },
      ],
    },
    {
      'questionText': 'What\'s your favorite color?',
      'answers': [
        {
          'text': 'Black',
          'score': 10
        },
        {
          'text': 'Red',
          'score': 5
        },
        {
          'text': 'Green',
          'score': 3
        },
        {
          'text': 'White',
          'score': 1
        },
      ],
    },
    {
      'questionText': 'What\'s your favorite color?',
      'answers': [
        {
          'text': 'Black',
          'score': 10
        },
        {
          'text': 'Red',
          'score': 5
        },
        {
          'text': 'Green',
          'score': 3
        },
        {
          'text': 'White',
          'score': 1
        },
      ],
    },
    {
      'questionText': 'What\'s your favorite animal?',
      'answers': [
        {
          'text': 'Rabbit',
          'score': 3
        },
        {
          'text': 'Snake',
          'score': 11
        },
        {
          'text': 'dog',
          'score': 1
        },
        {
          'text': 'Lion',
          'score': 9
        },
      ],
    },
    {
      'questionText': 'Who\'s your favorite instructor?',
      'answers': [
        {
          'text': 'Naheen',
          'score': 1
        },
        {
          'text': 'Max',
          'score': 10
        },
        {
          'text': 'Maxima',
          'score': 6
        },
        {
          'text': 'Harry',
          'score': 2
        },
      ],
    },
  ];

  void _buttonOnPress(int score) {
    _totalScore += score;

    setState(() {
      // if (_questionIndex < _questions.length - 1) {
      _questionIndex++;
      // }
    });
    print(_questionIndex);
  }

  void _resetQuiz() {
    setState(() {
      _questionIndex = 0;
      _totalScore = 0;
    });
  }

  void _getStarted() {
    setState(() {
      _questionIndex = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
//       1
      title: '1st project',
//       2
      home: _questionIndex < 0
          ? Home(_getStarted)
          : Scaffold(
//         a
              appBar: AppBar(
                title: Text(
                  'Personality Test',
                ),
              ),
//         b
              body: _questionIndex < _questions.length ? Quiz(questions: _questions, questionIndex: _questionIndex, buttonOnPress: _buttonOnPress) : Result(_totalScore, _resetQuiz),
//         c
              backgroundColor: Colors.grey[100],
            ),
    );
  }
}
