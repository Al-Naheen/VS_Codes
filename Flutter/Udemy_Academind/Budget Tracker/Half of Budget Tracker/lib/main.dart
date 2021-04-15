import 'package:flutter/material.dart';

import './widgets/chart.dart';
import './widgets/userTransaction.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter App',
      home: HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Flutter App'),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch, // X axis
          mainAxisAlignment: MainAxisAlignment.start, // Y axis
          children: <Widget>[
            Chart(),
            UserTransaction(),
          ],
        ),
      ),
    );
  }
}