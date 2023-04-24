import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../home-page/homePage.dart';
import '../user-page/user.dart';

class RegistrationPage extends StatefulWidget {
  @override
  _RegistrationPageState createState() => _RegistrationPageState();
}
class _RegistrationPageState extends State<RegistrationPage> {
  final TextEditingController _usernameController = TextEditingController();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
          decoration: const BoxDecoration(
              image: DecorationImage(
                  image: AssetImage("assets/plantes/background_login_3.1_mobile.jpg"),
                  fit: BoxFit.cover
              )
          ),
          child: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                Container(margin: const EdgeInsets.symmetric(vertical: 10,horizontal: 50),
                  child: TextField(
                    style: const TextStyle(
                        fontFamily: "Poppins",
                        fontSize: 15,
                        color: Colors.black
                    ),
                    controller: _usernameController,
                    decoration: const InputDecoration(
                      filled: true,
                      fillColor: Colors.white,
                      border: OutlineInputBorder(),
                      hintText: 'Enter your username',
                    ),
                  ),
                ),
                Container(
                  margin: const EdgeInsets.symmetric(vertical: 10,horizontal: 50),
                  child:TextField(
                    style: const TextStyle(
                        fontFamily: "Poppins",
                        fontSize: 15,
                        color: Colors.black
                    ),
                    controller: _passwordController,
                    obscureText: true,
                    decoration: const InputDecoration(
                      filled: true,
                      fillColor: Colors.white,
                      border: OutlineInputBorder(),
                      hintText: 'Enter your password',
                    ),
                  ),
                ),
                Container(
                  margin: const EdgeInsets.symmetric(vertical: 10,horizontal: 0),
                  child:SizedBox(
                    width: 310,
                    child: ElevatedButton(
                      style: ElevatedButton.styleFrom(
                          minimumSize: const Size.fromHeight(50),
                          backgroundColor: Colors.green
                      ),
                      child: const Text('Se connecter',style: TextStyle(fontSize: 25,fontFamily: 'Poppins'),),
                      onPressed: () {
                        _register();
                      },
                    ),
                  ),
                )
              ],
            ),
          ),
        )
    );
  }
  void _register() {
    // Add this line to navigate to the home page after registration
    User user = User(
      id:1,
      age: 20,
      adresse: "41 impasse Rene Etiemble",
      name: _usernameController.text,
      email: _emailController.text,
      password: _passwordController.text,
      imageUrl: "https://imgs.search.brave.com/hcKPrjT6nqGq1QYyyP8U0cQj_Kxw3XmY1gnKsx6NLIE/rs:fit:512:512:1/g:ce/aHR0cHM6Ly93d3cu/c2hhcmVpY29uLm5l/dC9kYXRhLzUxMng1/MTIvMjAxNi8wNS8y/NC83NzAxMTdfcGVv/cGxlXzUxMng1MTIu/cG5n",
      description: "coucou je suis nouveau",
    );
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => HomePage(user: user,currentUser: user),
      ),
    );
  }
}