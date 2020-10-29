import 'package:flutter/material.dart';
import 'package:flutter_app/transaction.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MediaQuery(
      data: MediaQueryData(),
      child: MaterialApp(
        home: Scaffold(
          appBar: AppBar(
            title: Text('Hello'),
            backgroundColor: Color(0xFF262537),
            actions: <Widget>[
              IconButton(
                  icon: Icon(Icons.access_alarms_rounded), onPressed: null)
            ],
          ),
          body: SingleChildScrollView(
            child: Container(
              width: double.infinity,
              height: MediaQuery.of(context).size.height,
              decoration: BoxDecoration(
                  image: DecorationImage(
                      image: AssetImage('images/wall.png'), fit: BoxFit.fill)),
              child: SafeArea(
                child: Container(
                  child: Column(
                    children: [
                      TextField(
                        decoration: InputDecoration(
                            labelText: 'Enter', focusColor: Colors.red),
                      ),
                      CircleAvatar(
                          radius: 50.0,
                          backgroundImage: AssetImage('images/Arnav.png')),
                      Text('Arnav Jain',
                          style: TextStyle(
                              color: Color(0xFF262537), fontSize: 30.0)),
                      Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(12),
                            border: Border(
                              top: BorderSide(
                                  width: 10.0, color: Color(0xFFFF000000)),
                              left: BorderSide(
                                  width: 10.0, color: Color(0xFFFF000000)),
                              right: BorderSide(
                                  width: 10.0, color: Color(0xFFFF000000)),
                              bottom: BorderSide(
                                  width: 10.0, color: Color(0xFFFF000000)),
                            ),
                            color: Color(0xFF262537),
                          ),
                          margin: EdgeInsets.symmetric(
                              vertical: 10.0, horizontal: 25.0),
                          padding: EdgeInsets.all(10.0),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Container(
                                child: Icon(
                                  Icons.phone,
                                  color: Colors.white,
                                ),
                              ),
                              SizedBox(
                                width: 10.0,
                              ),
                              Text('+44 941 22 11 658',
                                  style: TextStyle(color: Colors.white)),
                            ],
                          )),
                      Container(
                          color: Color(0xFF262537),
                          margin: EdgeInsets.symmetric(
                              vertical: 10.0, horizontal: 25.0),
                          padding: EdgeInsets.all(10.0),
                          child: Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Container(
                                child: Icon(
                                  Icons.email,
                                  color: Colors.white,
                                ),
                              ),
                              SizedBox(
                                width: 10.0,
                              ),
                              Text(
                                'arnavjainkht@gmail.com',
                                style: TextStyle(color: Colors.white),
                              ),
                            ],
                          )),
                      Display(),
                      Card(
                        color: Colors.blue,
                        child: Text(
                          'hello',
                          style: TextStyle(color: Colors.white),
                        ),
                        elevation: 5,
                      ),
                      Container(
                        color: Colors.red,
                        height: 200,
                        child: ListView(
                          children: [Home()],
                        ),
                      )
                    ],
                  ),
                ),
              ),
            ),
          ),
          floatingActionButtonLocation: FloatingActionButtonLocation.centerTop,
          floatingActionButton:
              FloatingActionButton(onPressed: null, child: Icon(Icons.add)),
        ),
      ),
    );
  }
}

class Display extends StatefulWidget {
  @override
  _DisplayState createState() => _DisplayState();
}

class _DisplayState extends State<Display> {
  var number1 = 0;
  var number2 = 0;
  void leftPressed() {
    setState(() {
      number1 = number1 + 1;
    });
  }

  void rightPressed() {
    setState(() {
      number2 = number2 + 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: FlatButton(
              onPressed: leftPressed,
              child: Container(
                color: Color(0xFF262537),
                child: Center(
                    child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    'press$number1',
                    style: TextStyle(color: Colors.white),
                  ),
                )),
              ),
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: FlatButton(
              onPressed: rightPressed,
              child: Container(
                color: Color(0xFF262537),
                child: Center(
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      'press$number2',
                      style: TextStyle(color: Colors.white),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

class Home extends StatelessWidget {
  final List<Transaction> transaction = [
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
    Transaction(
        id: 't1', title: 'New Shoes', amount: 69.99, date: DateTime.now()),
  ];
  @override
  Widget build(BuildContext context) {
    return Container(
        // child: Column(children: <Widget>[
        //   Card(),
        //   Card(),
        // ]),
        child: Column(
      children: transaction.map((tx) {
        return Card(
          child: Text('hello'),
        );
      }).toList(),
    ));
  }
}
