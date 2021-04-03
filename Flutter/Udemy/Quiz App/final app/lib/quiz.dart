import 'package:flutter/material.dart';

import './questions.dart';
import './answers.dart';

class Quiz extends StatelessWidget {
  final List<Map<String, Object>> questions;
  final int questionIndex;
  final Function buttonOnPress;
  Quiz({@required this.questions, @required this.questionIndex, @required this.buttonOnPress});

  @override
  Widget build(BuildContext context) {
    return Container(
      // Full Screen Width
      width: double.infinity,
      padding: EdgeInsets.only(top: 20.0),
      child: Column(children: [
        Questions(questions[questionIndex]['questionText']),
        ...((questions[questionIndex]['answers'] as List<Map<String, Object>>).map((answer) {
          // If Pass a Argument in buttonOnPress --- use Anonymous Function
          return Answers(answer['text'], () => buttonOnPress(answer['score']));
        }).toList()),
        Padding(
          padding: EdgeInsets.all(20.0),
          child: Text(
            '${questionIndex + 1}/${questions.length}',
            style: TextStyle(
              fontSize: 22,
            ),
          ),
        ),
      ]),
    );
  }
}
