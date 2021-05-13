import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import './transaction_list.dart';
import './chart.dart';

import '../models/transaction.dart';

class UsingMediaQuery extends StatefulWidget {
  final List<Transaction> userTransactions;
  final List<Transaction> recentTransactions;
  final Function deleteTransaction;
  final AppBar appBar;

  UsingMediaQuery({
    @required this.userTransactions,
    @required this.recentTransactions,
    @required this.deleteTransaction,
    @required this.appBar,
  });

  @override
  _UsingMediaQueryState createState() => _UsingMediaQueryState();
}

class _UsingMediaQueryState extends State<UsingMediaQuery> {
  bool _showChart = false;

  @override
  Widget build(BuildContext context) {
    final mediaQuery = MediaQuery.of(context);
    final isLandscape = mediaQuery.orientation == Orientation.landscape;
    final _onlyScreenSize = mediaQuery.size.height - widget.appBar.preferredSize.height - mediaQuery.padding.top;

    final txListWidget = Container(
      height: _onlyScreenSize * 0.7,
      child: TransactionList(widget.userTransactions, widget.deleteTransaction),
    );
    // Builder Method
    Widget chartWidget(double height) {
      return Container(
        height: _onlyScreenSize * height,
        child: Chart(widget.recentTransactions),
      );
    }

    // Builder Method -- Better Readability
    List<Widget> _buildLandscapeContent() {
      return [
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
        _showChart ? chartWidget(0.7) : txListWidget
      ];
    }

    // ListView is the better alternative of SingleChildScrollView
    return ListView(
      //   SingleChildScrollView(
      //     child: Column(
      //   mainAxisAlignment: MainAxisAlignment.start,
      //   crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        // we can return only 1 Widget...but we have Spread Operator
        if (isLandscape) ..._buildLandscapeContent(),
        if (!isLandscape) ...[
          chartWidget(0.3),
          txListWidget
        ],
      ],
    );
  }
}
