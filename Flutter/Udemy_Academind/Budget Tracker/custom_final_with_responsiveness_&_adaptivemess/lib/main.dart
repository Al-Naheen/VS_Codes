import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import './widgets/new_transaction.dart';
import './widgets/transaction_list.dart';
import './widgets/chart.dart';

import './models/transaction.dart';

void main() {
//   // Don't allow LandScape Mode
//   WidgetsFlutterBinding.ensureInitialized();
//   SystemChrome.setPreferredOrientations([
//     DeviceOrientation.portraitUp,
//     DeviceOrientation.portraitDown,
//   ]);

  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // final curScaleFactor = MediaQuery.of(context).textScaleFactor; // if user changes font settings on his device(by default is 1) -- not working

    return
        // MediaQuery(
        //   data: MediaQueryData(),
        //   child:
        MaterialApp(
      title: 'Personal Expenses',
      //  1. theme - Global Default Styles
      theme: ThemeData(
        //   There is primaryColor...But without primarySwatch we can't access all of the SHADES of a color.
        primarySwatch: Colors.green,
        accentColor: Colors.amber, // Secondary Color
        // errorColor: Colors.red,  // Default
        fontFamily: 'Quicksand',

        // 2. Globally Accessible Styles with Inheritance(with existing/default style...just overwrite some styles)
        textTheme: ThemeData.light().textTheme.copyWith(
              title: TextStyle(
                fontFamily: 'OpenSans',
                fontWeight: FontWeight.bold,
                fontSize: 18,
              ),
              button: TextStyle(color: Colors.white),
            ),
        appBarTheme: AppBarTheme(
          textTheme: ThemeData.light().textTheme.copyWith(
                title: TextStyle(
                  color: Colors.white,
                  fontFamily: 'OpenSans',
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                ),
              ),
        ),
      ),

      //   darkTheme: ThemeData(
      //     brightness: Brightness.dark,
      //     /* dark theme settings */
      //   ),
      //     themeMode: ThemeMode.dark,

      home: MyHomePage(),
      //   ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final List<Transaction> _userTransactions = [
    // Transaction(
    //   id: 't1',
    //   title: 'New Shoes',
    //   amount: 69.99,
    //   date: DateTime.now(),
    // ),
    // Transaction(
    //   id: 't2',
    //   title: 'Weekly Groceries',
    //   amount: 16.5,
    //   date: DateTime.now(),
    // ),
  ];

  bool _showChart = false;

  List<Transaction> get _recentTransactions {
    final List<Transaction> recentTransactionsList = _userTransactions.where((tx) {
      return tx.date.isAfter(
        DateTime.now().subtract(
          Duration(days: 7),
        ),
      );
    }).toList();

    return recentTransactionsList;
  }

  void _addNewTransaction(String txTitle, double txAmount, DateTime chosenDate) {
    setState(() {
      _userTransactions.add(
        Transaction(
          title: txTitle,
          amount: txAmount,
          date: chosenDate,
          id: DateTime.now().toString(),
          //   id: _userTransactions.length,
        ),
      );
    });
  }

  void _startAddNewTransaction(BuildContext ctx) {
    showModalBottomSheet(
      isScrollControlled: true,
      context: ctx, // for some MetaData
      builder: (_) {
        //  GestureDetector / InkWell -- Avoids that the sheet gets closed if you tap on the sheeet
        //   1. GestureDetector allows you to wrap ANY widget with touch listeners (e.g. double tap, long tap)
        //   2. InkWell does the same but adds a visual ripple effect upon touches (effect can be configured)
        //   3. You can build your own buttons / touchable widgets with these widget
        return GestureDetector(
          onTap: () {},
          child: NewTransaction(_addNewTransaction),
          behavior: HitTestBehavior.opaque, // catch the event & avoid the tap
        );
      },
    );
  }

  void _deleteTransaction(String id) {
    setState(() {
      _userTransactions.removeWhere((tx) => tx.id == id);
    });
  }

  @override
  Widget build(BuildContext context) {
    final mediaQuery = MediaQuery.of(context);
    final isLandscape = mediaQuery.orientation == Orientation.landscape;
    final appBar = AppBar(
      title: Text(
        'Personal Expenses',
      ),
      actions: <Widget>[
        IconButton(
          icon: Icon(Icons.add),
          onPressed: () => _startAddNewTransaction(context),
        ),
        //   Text('naheeen'),
      ],
    );
    final _onlyScreenSize = mediaQuery.size.height - appBar.preferredSize.height - mediaQuery.padding.top;
    final txListWidget = Container(
      height: _onlyScreenSize * 0.7,
      child: TransactionList(_userTransactions, _deleteTransaction),
    );

    Widget chartWidget(double height) {
      return Container(
        height: _onlyScreenSize * height,
        child: Chart(_recentTransactions),
      );
    }

    return Scaffold(
      appBar: appBar,
      // ListView is the better alternative of SingleChildScrollView
      body: ListView(
        //   SingleChildScrollView(
        //     child: Column(
        //   mainAxisAlignment: MainAxisAlignment.start,
        //   crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          // we can return only 1 Widget
          if (isLandscape)
            Container(
              height: _onlyScreenSize * .12,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Text('Show Chart'),
                  Switch.adaptive(
                    value: _showChart,
                    onChanged: (val) {
                      setState(() {
                        _showChart = val;
                      });
                    },
                  ),
                ],
              ),
            ),
          if (isLandscape) _showChart ? chartWidget(0.7) : txListWidget,
          if (!isLandscape) chartWidget(0.3),
          if (!isLandscape) txListWidget,
        ],
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
      floatingActionButton:
          //   Platform.isIOS
          //       ? Container() :
          FloatingActionButton(
        child: Icon(
          Icons.add,
          color: Colors.blue[900],
        ),
        onPressed: () => _startAddNewTransaction(context),
      ),
    );
  }
}
