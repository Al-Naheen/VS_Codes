import 'package:flutter/material.dart';

import './transaction_item.dart';
import '../models/transaction.dart';

class TransactionList extends StatelessWidget {
  final List<Transaction> transactions;
  final Function deleteTx;

  TransactionList(this.transactions, this.deleteTx);

  @override
  Widget build(BuildContext context) {
    return transactions.isEmpty
        ? LayoutBuilder(builder: (ctx, constraints) {
            return Column(
              //   mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Text(
                  'No transactions added yet!',
                  style: Theme.of(context).textTheme.title,
                ),
                // SizedBox -- without any required CHILD named argument
                SizedBox(
                  height: constraints.maxHeight * .07,
                ),
                Container(
                  height: constraints.maxHeight * .6,
                  child: Image.asset(
                    'assets/images/waiting.png',
                    fit: BoxFit.cover, // Similar to object-fit:contain
                  ),
                ),
              ],
            );
          })
        // : ListView.builder(
        //     itemBuilder: (ctx, index) {
        : ListView(children: [
            ...transactions
                .map((tx) => TransactionItem(
                      key: ValueKey(tx.id),
                      transaction: tx,
                      deleteTx: deleteTx,
                    ))
                .toList(),
          ]);
    //     },
    //     itemCount: transactions.length,
    //   );
  }
}
