import 'package:flutter/material.dart';

void main() => runApp(
      MaterialApp(
        home: Scaffold(
          appBar: AppBar(
            title: Text('Hello'),
            backgroundColor: Colors.red,
          ),
          backgroundColor: Colors.red,
          body: Center(
            child: Image(
              // image: NetworkImage(
              //     'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg'),
              image: AssetImage('images/wall.png'),
              repeat: ImageRepeat.repeat,
            ),
          ),
        ),
      ),
    );
