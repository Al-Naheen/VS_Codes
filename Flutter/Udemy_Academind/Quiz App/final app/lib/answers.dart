import 'package:flutter/material.dart';

class Answers extends StatelessWidget {
  final String buttonText;
  final Color buttonBackgroundColor;
  final Function buttonOnPress;

  Answers(this.buttonText, this.buttonOnPress, {this.buttonBackgroundColor = Colors.blue});

  @override
  Widget build(BuildContext context) {
    return ButtonTheme(
      minWidth: 250.0,
      height: 55.0,
      child: Padding(
        padding: EdgeInsets.all(16.0),
        child: RaisedButton(
          child: Text(
            buttonText,
            style: TextStyle(
              color: Colors.white,
              fontSize: 20,
            ),
          ),
          color: buttonBackgroundColor,
          onPressed: buttonOnPress,
        ),
      ),
    );
  }
}
