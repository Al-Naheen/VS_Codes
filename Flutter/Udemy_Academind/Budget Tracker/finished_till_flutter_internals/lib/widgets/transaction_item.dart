import 'dart:math';

import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

import '../models/transaction.dart';

class TransactionItem extends StatefulWidget {
  const TransactionItem({
    Key key,
    @required this.transaction,
    @required this.deleteTx,
  }) : super(key: key); // it's called Constructor-Initializer-List

  final Transaction transaction;
  final Function deleteTx;

  @override
  _TransactionItemState createState() => _TransactionItemState();
}

class _TransactionItemState extends State<TransactionItem> {
  Color _bgColor;

  @override
  void initState() {
    super.initState();

    const availableColors = [
      Colors.red,
      Colors.black,
      Colors.blue,
      Colors.purple,
    ];

    _bgColor = availableColors[Random().nextInt(4)];
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      margin: EdgeInsets.symmetric(
        vertical: 8,
        horizontal: 5,
      ),
      child: ListTile(
        // 1/4. Amount
        leading: CircleAvatar(
          backgroundColor: _bgColor,
          radius: 30,
          child: Padding(
            padding: const EdgeInsets.all(8),
            child: FittedBox(
              child: Text('\$${widget.transaction.amount}'),
            ),
          ),
        ),
        // 2/4. Title
        title: Text(
          widget.transaction.title,
          style: Theme.of(context).textTheme.title,
        ),
        // 3/4. PickedDate
        subtitle: Text(
          DateFormat.yMMMd().format(widget.transaction.date),
        ),
        // 4/4. Delete
        trailing: MediaQuery.of(context).size.width > 400
            ? FlatButton.icon(
                icon: const Icon(Icons.delete),
                label: const Text('Delete'),
                textColor: Theme.of(context).errorColor,
                onPressed: () => widget.deleteTx(widget.transaction.id),
              )
            : IconButton(
                icon: const Icon(Icons.delete),
                color: Theme.of(context).errorColor,
                onPressed: () => widget.deleteTx(widget.transaction.id),
              ),
      ),
    );
  }
}

// // Before ListTile
// Card(
//   child: Row(
//     children: <Widget>[
//       // 1/2. Amount
//       Container(
//         margin: EdgeInsets.symmetric(
//           vertical: 10,
//           horizontal: 15,
//         ),
//         decoration: BoxDecoration(
//           borderRadius: BorderRadius.circular(30),
//           border: Border.all(
//             color: Theme.of(context).primaryColor,
//             width: 2,
//           ),
//         ),
//         padding: EdgeInsets.all(10),
//         child: Text(
//           '\$${transactions[index].amount.toStringAsFixed(2)}',
//           style: TextStyle(
//             fontWeight: FontWeight.bold,
//             fontSize: 20,
//             color: Theme.of(context).primaryColor,
//           ),
//         ),
//       ),
//       //   2/2. Details
//       Column(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: <Widget>[
//           Text(
//             transactions[index].title,
//             style: Theme.of(context).textTheme.title,
//           ),
//           Text(
//             DateFormat.yMMMd().format(transactions[index].date),
//             style: TextStyle(
//               color: Colors.grey,
//             ),
//           ),
//         ],
//       ),
//     ],
//   ),
// );
