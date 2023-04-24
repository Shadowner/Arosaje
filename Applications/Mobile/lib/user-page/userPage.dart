import 'package:application_arosaje/user-page/user.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class UserPage extends StatefulWidget {
  final User user;
  final User currentUser;

  UserPage({required this.user, required this.currentUser});

  @override
  _UserPageState createState() => _UserPageState();
}
class _UserPageState extends State<UserPage> {
  final _formKey = GlobalKey<FormState>();
  bool _isEditable = false;
  bool _hasChanges = false;
  late TextEditingController _name;
  late TextEditingController _age;
  late TextEditingController _adresse;
  late TextEditingController _description;

  @override
  void initState() {
    super.initState();
    _name = TextEditingController(text:widget.user.name);
    _age = TextEditingController(text: "${widget.user.age}");
    _adresse = TextEditingController(text: widget.user.adresse);
    _description = TextEditingController(text: widget.user.description);
  }

  @override
  Widget build(BuildContext context) {
    bool isOwner = widget.user.id == widget.currentUser.id;
    print(isOwner);

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green,
        title: Text(widget.user.name),
      ),
      body:  Container(
        decoration: const BoxDecoration(
            image: DecorationImage(
                image: AssetImage("assets/plantes/background_arosaje_2_1.jpg"),
                fit: BoxFit.cover
            )
        ),
        child:Center(
          child: SingleChildScrollView(
            child: Container(
              margin: EdgeInsets.symmetric(vertical: 0,horizontal: 10),
              child:Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(0),
                      child: Container(
                        child: Container(
                          padding: EdgeInsets.all(10),
                          decoration: BoxDecoration(
                              border: Border.all(color: Colors.black,width: 4)
                          ),
                          child: Image.asset("assets/plantes/background_login_2.png",width: 150,height: 100),
                        ),
                      ),
                    ),
                    /*CircleAvatar(
                    radius: 50.0,
                    backgroundColor: Colors.black,
                    child: CircleAvatar(
                      backgroundImage: NetworkImage(widget.user.imageUrl),
                      radius: 48,
                    ),
                  ),*/
                    margin: EdgeInsets.symmetric(horizontal: 0,vertical: 0),
                  ),
                  if(!_isEditable)
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        Align(
                          alignment: Alignment.center,
                          child: Container(
                            margin: const EdgeInsets.symmetric(horizontal: 0,vertical:20 ),
                            child: Text(
                              widget.user.name,
                              style: const TextStyle(
                                  fontFamily: "Poppins",
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.black
                              ),
                            ),
                          ),
                        ),
                        Container(
                          child: Text(
                            "Age : ${widget.user.age} ans",
                            style: TextStyle(
                                fontFamily: "Poppins",
                                fontSize: 20,
                                fontWeight: FontWeight.bold,
                                color: Colors.black
                            ),
                          ),
                          margin: EdgeInsets.symmetric(horizontal: 0,vertical:10 ),
                        ),
                        Container(
                          child: const Text("Adresse Postale :",style: TextStyle(fontFamily: "Poppins",fontSize: 20,fontWeight: FontWeight.bold,color: Colors.black),),
                          margin: EdgeInsets.only(bottom: 10,top: 30),
                        ),
                        Container(
                          margin: EdgeInsets.symmetric(horizontal: 0,vertical:0 ),
                          child: Text(
                            "${widget.user.adresse}",
                            style: const TextStyle(
                                fontFamily: "Poppins",
                                fontSize: 20,
                                fontWeight: FontWeight.bold,
                                color: Colors.black
                            ),
                          ),
                        ),
                        Container(
                          child: const Text("Description :",style: TextStyle(fontFamily: "Poppins",color: Colors.black,fontSize: 20,fontWeight: FontWeight.bold),),
                          margin: EdgeInsets.only(bottom: 10,top: 30),
                        ),
                        Container(
                          child: Text(
                            widget.user.description,
                            style: const TextStyle(fontSize: 20,fontWeight:FontWeight.bold,color: Colors.black,fontFamily: "Poppins"),
                          ),
                          margin: EdgeInsets.symmetric(horizontal: 0,vertical:0 ),
                        ),
                        if (isOwner)
                          Container(
                            margin: const EdgeInsets.symmetric(vertical: 20,horizontal: 0),
                            child:SizedBox(
                              width: 150,
                              child:  ElevatedButton(
                                style: ElevatedButton.styleFrom(primary: Colors.green),
                                onPressed: isOwner
                                    ? () {
                                  setState(() {
                                    _isEditable = !_isEditable;
                                  });
                                }
                                    : null,
                                child: Text(_isEditable ? "Annuler" : "Modifier"),
                              ),
                            ),
                          ),
                      ],
                    ),
                  if (_isEditable)
                    Form(
                      key: _formKey,
                      child:Column(
                        children: [
                          Container(
                            margin: EdgeInsets.symmetric(horizontal: 50,vertical: 20),
                            child:TextField(
                              style: TextStyle(color: Colors.black,fontFamily: "Poppins"),
                              controller:_name ,
                              decoration: const InputDecoration(
                                  filled: true,
                                  fillColor: Colors.white,
                                  border: OutlineInputBorder(),
                                  labelText: "Nom d'utilisateur",
                                  labelStyle: TextStyle(fontWeight: FontWeight.bold,fontSize: 20,fontFamily: "Poppins",color: Colors.black)
                              ),
                              onChanged: (value) {
                                setState(() {
                                  _hasChanges = true;
                                });
                              },
                            ),
                          ),
                          Container(
                            margin: EdgeInsets.symmetric(horizontal: 50,vertical: 10),
                            child:TextField(
                              style: TextStyle(color: Colors.black,fontFamily: "Poppins"),
                              decoration: const InputDecoration(
                                  filled: true,
                                  fillColor: Colors.white,
                                  border: OutlineInputBorder(),
                                  labelText: "Age",
                                  labelStyle: TextStyle(fontWeight: FontWeight.bold,fontSize: 20,fontFamily: "Poppins",color: Colors.black)
                              ),
                              controller: _age,
                              onChanged: (value) {
                                setState(() {
                                  _hasChanges = true;
                                });
                              },
                            ),
                          ),
                          Container(
                            margin: EdgeInsets.symmetric(horizontal: 50,vertical: 10),
                            child:TextField(
                              style: TextStyle(color: Colors.black,fontFamily: "Poppins"),
                              decoration: const InputDecoration(
                                  filled: true,
                                  fillColor: Colors.white,
                                  border: OutlineInputBorder(),
                                  labelText: "Adresse",
                                  labelStyle: TextStyle(fontWeight: FontWeight.bold,fontSize: 20,fontFamily: "Poppins",color: Colors.black)
                              ),
                              controller: _adresse,
                              onChanged: (value) {
                                setState(() {
                                  _hasChanges = true;
                                });
                              },
                            ),
                          ),
                          Container(
                            margin: EdgeInsets.symmetric(horizontal: 50,vertical: 20),
                            child:TextField(
                              style: TextStyle(color: Colors.black,fontFamily: "Poppins"),
                              decoration: const InputDecoration(
                                  filled: true,
                                  fillColor: Colors.white,
                                  border: OutlineInputBorder(),
                                  labelText: "Description",
                                  labelStyle: TextStyle(fontWeight: FontWeight.bold,fontSize: 20,fontFamily: "Poppins",color: Colors.black)
                              ),
                              controller: _description,
                              onChanged: (value) {
                                setState(() {
                                  _hasChanges = true;
                                  print(_hasChanges);
                                });
                              },
                            ),
                          ),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Container(
                                margin: EdgeInsets.symmetric(vertical: 0,horizontal: 5),
                                child: ElevatedButton(
                                  style: ElevatedButton.styleFrom(primary: Colors.green),
                                  onPressed: _hasChanges
                                      ? () {
                                    setState(() {
                                      _hasChanges = false;
                                      _isEditable = false;
                                      widget.user.name = _name.text;
                                      widget.user.age = int.parse(_age.text);
                                      widget.user.description = _description.text;
                                      widget.user.adresse = _adresse.text;
                                    });
                                    ScaffoldMessenger.of(context).showSnackBar(
                                      const SnackBar(
                                        content: Text("Modifications enregistrées."),
                                      ),
                                    );
                                  }
                                      : null,
                                  child: Text("Enregistrer"),
                                ),
                              ),
                              Container(
                                margin: EdgeInsets.symmetric(vertical: 0,horizontal: 5),
                                child: ElevatedButton(
                                    onPressed: (){
                                      setState(() {
                                        _isEditable = false;
                                      });},
                                    child: Text('Annuler')),
                              )
                            ],
                          )
                        ],
                      ), ),

                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}