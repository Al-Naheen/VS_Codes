import 'package:flutter/material.dart';

class Questions extends StatelessWidget {
  final String questionText;
  // final -- when the app fully execute, that time we can define a value to that final variable...but we can't define a value while the app is running.

  Questions(this.questionText);

  @override
  Widget build(BuildContext context) {
    return Text(
      questionText,
      textAlign: TextAlign.center,
      style: TextStyle(
        // color: Colors.white,
        fontWeight: FontWeight.bold,
        fontSize: 30,
      ),
    );
  }
}
