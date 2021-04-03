import 'package:flutter/material.dart';
// import 'package:google_fonts/google_fonts.dart';

import './answers.dart';

class Home extends StatelessWidget {
  final Function getStarted;

  Home(this.getStarted);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        // Full Screen Width
        width: double.infinity,
        padding: EdgeInsets.only(top: 70.0),
        child: Column(children: <Widget>[
          Text(
            'Disclaimer !',
            style: TextStyle(
              color: Colors.red,
              fontWeight: FontWeight.bold,
              fontSize: 40,
            ),
            textAlign: TextAlign.center,
          ),
          Padding(
            padding: EdgeInsets.all(25.0),
            child: Text(
              'The lower mark you get, the higher personality you have got.\n\n1-8 : You are awesome and innocent!\n8-15 : Pretty likeable!\n15-20 : You are ... strange?!\nAbove 20 : You are so bad!',
              style: TextStyle(
                color: Colors.white,
                fontSize: 25,
              ),
              textAlign: TextAlign.justify,
            ),
          ),
          Answers(
            'Get Started',
            getStarted,
            buttonBackgroundColor: Colors.red[700],
          ),
        ]),
      ),
      backgroundColor: Color(0xff0a0a22),
    );
  }
}
