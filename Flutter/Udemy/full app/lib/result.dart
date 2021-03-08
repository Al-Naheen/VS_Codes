import 'package:flutter/material.dart';

import './answers.dart';

class Result extends StatelessWidget {
  final int resultScore;
  final Function resetHandler;
  Result(this.resultScore, this.resetHandler);

  String get resultPhrase {
    String resultText;
    if (resultScore <= 8) {
      resultText = 'You are awesome and innocent!';
    } else if (resultScore <= 15) {
      resultText = 'Pretty likeable!';
    } else if (resultScore <= 20) {
      resultText = 'You are ... strange?!';
    } else {
      resultText = 'You are so bad!';
    }
    return resultText;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(15),
      child: Center(
        // 3 things
        child: Column(children: <Widget>[
          Text(
            'Total Score : ${resultScore}',
            style: TextStyle(
              color: Colors.grey[700],
              fontWeight: FontWeight.bold,
              fontSize: 30,
            ),
            textAlign: TextAlign.center,
          ),
          Text(
            resultPhrase,
            style: TextStyle(
              // color: Colors.white,
              fontWeight: FontWeight.bold,
              fontSize: 35,
            ),
            textAlign: TextAlign.center,
          ),
          Answers(
            'Restart Quiz!',
            resetHandler,
            buttonBackgroundColor: Colors.green,
          ),
        ]),
      ),
    );
  }
}
