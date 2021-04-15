import 'package:flutter/material.dart';

import './transactionCard.dart';
import './addTransaction.dart';
import '../models/transaction.dart';

class UserTransaction extends StatefulWidget {
  @override
  _UserTransactionState createState() => _UserTransactionState();
}

class _UserTransactionState extends State<UserTransaction> {
  final List<Transaction> _transactions = [
    Transaction(
      id: 't1',
      title: 'flutter practise',
      amount: 69.99,
      date: DateTime.now(),
    ),
    Transaction(
      id: 't2',
      title: 'Portfolio projects revise',
      amount: 29.01,
      date: DateTime.now(),
    ),
  ];

  void _addNewTransaction(String txTitle, double txAmount) {
    setState(() {
      _transactions.add(
        Transaction(
          //   id: DateTime.now().toString(),
          id: '${_transactions.length}',
          title: txTitle,
          amount: txAmount,
          date: DateTime.now(),
        ),
      );
    });
    //   print(titleController.text);
    //   print(amountController.text);
  }

  @override
  Widget build(BuildContext context) {
    return Column(children: [
      AddTransaction(_addNewTransaction),
      TransactionCard(_transactions),
    ]);
  }
}
