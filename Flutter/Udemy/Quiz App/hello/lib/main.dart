// Copyright (c) 2019, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  void buttonOnPress() {
    print('yoo everybody');
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
//       1
      title: '1st project',
//       2
      home: Scaffold(
//         a
        appBar: AppBar(
          title: Text(
            'Hello World',
          ),
        ),
//         b
        body: Center(
          child: Column(children: [
            Padding(
              padding: EdgeInsets.only(top: 16.0),
              child: Text(
                'fuck off',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontSize: 25,
                ),
              ),
            ),
            ButtonTheme(
              minWidth: 200.0,
              height: 50.0,
              child: Padding(
                padding: EdgeInsets.all(16.0),
                child: RaisedButton(
                  child: Text(
                    'Click Me',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                    ),
                  ),
                  onPressed: buttonOnPress,
                ),
              ),
            ),
            ButtonTheme(
              minWidth: 200.0,
              height: 50.0,
              child: Padding(
                padding: EdgeInsets.all(16.0),
                child: RaisedButton(
                  child: Text(
                    'Click Me',
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 18,
                    ),
                  ),
                  onPressed: buttonOnPress,
                ),
              ),
            ),
            ButtonTheme(
              minWidth: 200.0,
              height: 50.0,
              child: Padding(
                padding: EdgeInsets.all(16.0),
                child: RaisedButton(
                    child: Text(
                      'Click Me',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 18,
                      ),
                    ),
                    onPressed: () => print('mara kha 3')),
              ),
            ),
          ]),
        ),
//         c
        backgroundColor: Colors.redAccent,
      ),
    );
  }
}
