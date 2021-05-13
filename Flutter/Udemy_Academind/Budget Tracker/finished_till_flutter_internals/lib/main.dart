import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import './widgets/new_transaction.dart';
import './widgets/using_mediaQuery.dart';

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

// 1/4 -- MixIn
class _MyHomePageState extends State<MyHomePage> with WidgetsBindingObserver {
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

// 2/4 -- adding Listener
  @override
  void initState() {
    WidgetsBinding.instance.addObserver(this);
    super.initState();
  }

// 3/4
  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    print(state); // Suspended state isn't printed
  }

// 4/4 -- cleaning up to avoid memory leaks
  @override
  dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

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

    return Scaffold(
      appBar: appBar,
      body: UsingMediaQuery(
        appBar: appBar,
        recentTransactions: _recentTransactions,
        userTransactions: _userTransactions,
        deleteTransaction: _deleteTransaction,
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
