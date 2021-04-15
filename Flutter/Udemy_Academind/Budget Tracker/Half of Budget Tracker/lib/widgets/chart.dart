import 'package:flutter/material.dart';

class Chart extends StatelessWidget {
  Chart();

  @override
  Widget build(BuildContext context) {
    return Container(
      // width: double.infinity,
      child: Card(
        color: Colors.blue,

        //   eikhane Container dileo same way te kaj korbe
        child: Text('CHART!',
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.white,
            )),
        elevation: 5,
      ),
    );
  }
}
