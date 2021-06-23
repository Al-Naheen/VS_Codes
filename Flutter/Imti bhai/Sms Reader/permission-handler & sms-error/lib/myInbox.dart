import 'package:flutter/material.dart';
// import 'package:sms/sms.dart';
import 'package:permission_handler/permission_handler.dart';

class MyInbox extends StatefulWidget {
  @override
  _MyInboxState createState() => _MyInboxState();
}

class _MyInboxState extends State<MyInbox> {
  // SmsQuery query = new SmsQuery();
  // List messages = new List();
  var smsPermission = Permission.sms.isGranted;

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
        appBar: AppBar(
          title: Text("SMS Inbox"),
          backgroundColor: Colors.pink,
        ),
        body: Column(
          children: [
            Text('$smsPermission'),
            RaisedButton(
              child: Text('Allow Permission'),
              onPressed: fetchSMS,
            )
          ],
        )
        // FutureBuilder(
        //   future: fetchSMS(),
        //   builder: (context, snapshot) {
        //     return ListView.separated(
        //       separatorBuilder: (context, index) => Divider(
        //         color: Colors.black,
        //       ),
        //       itemCount: messages.length,
        //       itemBuilder: (context, index) {
        //         return Padding(
        //           padding: const EdgeInsets.all(8.0),
        //           child: ListTile(
        //             leading: Icon(
        //               Icons.markunread,
        //               color: Colors.pink,
        //             ),
        //             title: Text(messages[index].address),
        //             subtitle: Text(
        //               messages[index].body,
        //               maxLines: 2,
        //               style: TextStyle(),
        //             ),
        //           ),
        //         );
        //       },
        //     );
        //   },
        // ),
        );
  }

  fetchSMS() async {
    if (await smsPermission) {
      // messages = await query.getAllSms;
      return;
    } else {
      Permission.sms.request();
    }
  }
}
