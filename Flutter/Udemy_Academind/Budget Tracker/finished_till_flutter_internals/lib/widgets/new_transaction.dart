import 'package:flutter/material.dart';
import 'package:intl/intl.dart'; // DateFormat

// without a stateful widget Modal can't get Input Values
class NewTransaction extends StatefulWidget {
  final Function addTx;

// 1/6 -- everytime Widget rebuilds
  NewTransaction(this.addTx) {
    print('Constructor NewTransaction Widget');
  }

// 2/6 -- calls only once(State is managed as a Separate Object)
  @override
  _NewTransactionState createState() {
    print('createState NewTransaction Widget');
    return _NewTransactionState();
  }
}

// call Super.something() first
// Start your initState with super.initState and end your dispose with super.dispose if you want to be on the easy and safe side adding mixins to your State.

class _NewTransactionState extends State<NewTransaction> {
  final _titleController = TextEditingController();
  final _amountController = TextEditingController();
  DateTime _selectedDate;

// 3/6 -- calls only once(State is managed as a Separate Object)
  _NewTransactionState() {
    print('Constructor NewTransaction State');
  }

// 4/6 -- calls only once(State is managed as a Separate Object)
  @override
  void initState() {
    // Fetching Data
    super.initState();
    print('initState()');
  }

// 5/6 -- widget connected with State replaced with new Widget
  @override
  void didUpdateWidget(NewTransaction oldWidget) {
    // widget vs oldWidget -- refetch/updating fetched data
    print('didUpdateWidget()');
    super.didUpdateWidget(oldWidget);
  }

// 6/6 -- element & render object is removed
  @override
  void dispose() {
    // cleaning up Data -- real-time chat app
    print('dispose()');
    super.dispose();
  }

  void submitData() {
    if (_amountController.text.isEmpty) {
      return;
    }
    // 1. store the Input Data
    final enteredTitle = _titleController.text;
    final enteredAmount = double.parse(_amountController.text);

    // 2. Check whether those are Empty or not
    if (enteredTitle.isEmpty || enteredAmount <= 0 || _selectedDate == null) {
      return;
    }

    // 3. Main Function
    widget.addTx(
      enteredTitle,
      enteredAmount,
      _selectedDate,
    );

    // 4. Close the Modal
    Navigator.of(context).pop();
  }

  void _presentDatePicker() {
    showDatePicker(
      context: context, // didn't understand
      initialDate: DateTime.now(),
      firstDate: DateTime(2000),
      lastDate: DateTime.now(),
    ).then((pickedDate) {
      if (pickedDate == null) {
        return;
      }
      setState(() {
        _selectedDate = pickedDate;
      });
    });
    print('...');
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5, // Modal use korle eita dorkar nai
      child: Container(
        padding: EdgeInsets.only(
          top: 10,
          right: 10,
          left: 10,
          bottom: MediaQuery.of(context).viewInsets.bottom + 10,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: <Widget>[
            TextField(
              decoration: InputDecoration(labelText: 'Title'),
              controller: _titleController,
              onSubmitted: (_) => submitData(),
              // onChanged: (val) {
              //   titleInput = val;
              // },
            ),
            TextField(
              decoration: InputDecoration(labelText: 'Amount'),
              controller: _amountController,
              keyboardType: TextInputType.number,
              onSubmitted: (_) => submitData(),
              // onChanged: (val) => amountInput = val,
            ),
            Container(
              height: 70,
              child: Row(
                children: <Widget>[
                  Expanded(
                    child: Text(
                      _selectedDate == null ? 'No Date Chosen!' : 'Picked Date: ${DateFormat.yMd().format(_selectedDate)}',
                    ),
                  ),
                  FlatButton(
                    textColor: Theme.of(context).primaryColor,
                    child: Text(
                      'Choose Date',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    onPressed: _presentDatePicker,
                  ),
                ],
              ),
            ),
            RaisedButton(
              child: Text(
                'Add Transaction',
                // style: TextStyle(
                //   color: Color.fromRGBO(255, 255, 255, 1),
                // ),
              ),
              textColor: Theme.of(context).textTheme.button.color,
              color: Theme.of(context).primaryColor,
              onPressed: submitData,
            ),
          ],
        ),
      ),
    );
  }
}
