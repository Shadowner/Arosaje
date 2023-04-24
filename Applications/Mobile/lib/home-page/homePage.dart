import 'package:camera/camera.dart';
import 'package:carousel_slider/carousel_controller.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../conversation-page/conversationPage.dart';
import '../plant-page/plant-class.dart';
import '../plant-page/plantPage.dart';
import '../search-page/searchPage.dart';
import '../take-picture-screen/takePicureScreen.dart';
import '../user-page/user.dart';
import '../user-page/userPage.dart';

class HomePage extends StatelessWidget {
  final CarouselController _controller = CarouselController();
  final User currentUser;
  final User user;

  void _nextPage() {
    _controller.nextPage();
  }

  void _previousPage() {
    _controller.previousPage();
  }


  HomePage({required this.user, required this.currentUser});

  @override
  Widget build(BuildContext context) {
    late CameraController controller;
    late List<CameraDescription> cameras;

    availableCameras().then((cams) {
      cameras = cams;
      controller = CameraController(
        cameras[0],
        ResolutionPreset.high,
      );
    });
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green,
        title: Text("Accueil",style: TextStyle(fontFamily: "Poppins"),),
        actions: [
          IconButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => UserPage(currentUser: currentUser,user: user),
                ),
              );
            },
            icon: Icon(Icons.person),
          ),
        ],
      ),
      body: Container(
        decoration:const BoxDecoration(
            image:  DecorationImage(
                image:  AssetImage('assets/plantes/background_arosaje_2_1.jpg'),
                fit:BoxFit.cover
            )
        ),
        child:      Center(
          child:SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  margin: const EdgeInsets.symmetric(vertical: 20,horizontal: 0),
                  child: const Text("Bienvenu chez A'ROSAJE",style: TextStyle(fontFamily: "Poppins",fontSize: 25,color: Colors.black),),
                ),
                Container(
                  margin: const EdgeInsets.symmetric(vertical: 20,horizontal: 0),
                  child: const Text('Mes Plantes',style: TextStyle(fontFamily: "Poppins",fontSize: 25,fontWeight: FontWeight.bold,color: Colors.black),),
                ),
                Container(
                  margin: EdgeInsets.all(5),
                  child: ElevatedButton(
                    onPressed: () { Navigator.push(context, MaterialPageRoute(builder: (context) => TakePictureScreen(
                      // Pass the appropriate camera to the TakePictureScreen widget.
                      camera: cameras[0],
                    ),)); },
                    child: Text("Prendre une photo"),

                  ),
                ),
                // Carousel
                CarouselSlider(
                  items: [
                    // Plant images
                    GestureDetector(
                      child: Column(
                        children: [
                          Expanded(child:Container(
                            decoration: BoxDecoration(border:Border.all(width: 3)),
                            child: Container(
                                margin: EdgeInsets.all(30),
                                child: Image.asset('assets/plantes/plant.png', height: 250,width: 200, colorBlendMode: BlendMode.darken)
                            ),
                          )),
                          const Padding(
                              padding: EdgeInsets.all(20),
                              child: Text("Tulipe ",style: TextStyle(fontFamily: "Poppins",fontSize: 20,color: Colors.black),)
                          )
                        ],
                      ),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => PlantProfilePage(plante:Plante(nom: "Tulipe", espece: "Tulipex", description: "C'est une tulipe", taille: 15, imageUrl: 'https://imgs.search.brave.com/-rPr05d6qafZWUaIR7yhGssYCCfZeeuuR6f2Ux5fXcM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nZXQu/cHhoZXJlLmNvbS9w/aG90by9wbGFudC1m/bG93ZXItcGV0YWwt/dHVsaXAtc3ByaW5n/LWhvbGxhbmQtZHV0/Y2gtdHVsaXBzLWZs/b3Jpc3RyeS1zcHJp/bmctZmxvd2VyLWJs/b3Nzb21lZC10dWxw/ZW5ibHVldGUtZmxv/d2VyaW5nLXBsYW50/LXR1bGlwLWZpZWxk/cy1jdXQtZmxvd2Vy/cy1saWx5LWZhbWls/eS1zdGF0ZS1nYXJk/ZW4tc2hvdy10dWxp/cC1maWVsZC1zZWVk/LXBsYW50LWFubnVh/bC1wbGFudC1wbGFu/dC1zdGVtLWNvbXB1/dGVyLXdhbGxwYXBl/ci1mbG93ZXItYXJy/YW5naW5nLTE0MDk5/MDQuanBn')),
                          ),
                        );
                      },
                    ),
                    GestureDetector(
                      child: Column(
                        children: [
                          Expanded(child:Container(
                            decoration: BoxDecoration(border:Border.all(width: 3)),
                            child: Container(
                                margin: EdgeInsets.all(30),
                                child: Image.asset('assets/plantes/plant.png', height: 250,width: 200, colorBlendMode: BlendMode.darken)
                            ),
                          )),
                          const Padding(
                              padding: EdgeInsets.all(20),
                              child: Text("Absinthe",style:TextStyle(fontFamily: "Poppins",fontSize: 20,color: Colors.black))
                          )
                        ],
                      ),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => PlantProfilePage(plante:Plante(nom: "Absinthe", espece: "Alvoera", description: "C'est une Absinthe", taille: 15, imageUrl: 'https://imgs.search.brave.com/-rPr05d6qafZWUaIR7yhGssYCCfZeeuuR6f2Ux5fXcM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nZXQu/cHhoZXJlLmNvbS9w/aG90by9wbGFudC1m/bG93ZXItcGV0YWwt/dHVsaXAtc3ByaW5n/LWhvbGxhbmQtZHV0/Y2gtdHVsaXBzLWZs/b3Jpc3RyeS1zcHJp/bmctZmxvd2VyLWJs/b3Nzb21lZC10dWxw/ZW5ibHVldGUtZmxv/d2VyaW5nLXBsYW50/LXR1bGlwLWZpZWxk/cy1jdXQtZmxvd2Vy/cy1saWx5LWZhbWls/eS1zdGF0ZS1nYXJk/ZW4tc2hvdy10dWxp/cC1maWVsZC1zZWVk/LXBsYW50LWFubnVh/bC1wbGFudC1wbGFu/dC1zdGVtLWNvbXB1/dGVyLXdhbGxwYXBl/ci1mbG93ZXItYXJy/YW5naW5nLTE0MDk5/MDQuanBn')),
                          ),
                        );
                      },
                    ),
                    GestureDetector(
                      child: Column(
                        children: [
                          Expanded(child:Container(
                            decoration: BoxDecoration(border:Border.all(width: 3)),
                            child: Container(
                                margin: EdgeInsets.all(30),
                                child: Image.asset('assets/plantes/plant.png', height: 250,width: 200, colorBlendMode: BlendMode.darken)
                            ),
                          )),
                          const Padding(
                              padding: EdgeInsets.all(20),
                              child: Text("Rose",style: TextStyle(fontSize: 25,fontFamily: 'Poppins',color: Colors.black),)
                          )
                        ],
                      ),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => PlantProfilePage(plante:Plante(nom: "Rose", espece: "Rosaria", description: "C'est une rose", taille: 15, imageUrl: 'https://imgs.search.brave.com/-rPr05d6qafZWUaIR7yhGssYCCfZeeuuR6f2Ux5fXcM/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9nZXQu/cHhoZXJlLmNvbS9w/aG90by9wbGFudC1m/bG93ZXItcGV0YWwt/dHVsaXAtc3ByaW5n/LWhvbGxhbmQtZHV0/Y2gtdHVsaXBzLWZs/b3Jpc3RyeS1zcHJp/bmctZmxvd2VyLWJs/b3Nzb21lZC10dWxw/ZW5ibHVldGUtZmxv/d2VyaW5nLXBsYW50/LXR1bGlwLWZpZWxk/cy1jdXQtZmxvd2Vy/cy1saWx5LWZhbWls/eS1zdGF0ZS1nYXJk/ZW4tc2hvdy10dWxp/cC1maWVsZC1zZWVk/LXBsYW50LWFubnVh/bC1wbGFudC1wbGFu/dC1zdGVtLWNvbXB1/dGVyLXdhbGxwYXBl/ci1mbG93ZXItYXJy/YW5naW5nLTE0MDk5/MDQuanBn')),
                          ),
                        );
                      },
                    ),
                  ],
                  carouselController: _controller,
                  options: CarouselOptions(
                    autoPlay: true,
                    height: 200.0,
                    enlargeCenterPage: true,
                    enableInfiniteScroll: true,
                  ),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    ElevatedButton(
                      style: ElevatedButton.styleFrom(primary: Colors.green),
                      onPressed: _previousPage,
                      child: const Icon(
                          Icons.arrow_left
                      ),
                    ),
                    const SizedBox(width: 10),
                    ElevatedButton(
                      style: ElevatedButton.styleFrom(primary: Colors.green),
                      onPressed: _nextPage,
                      child: const Icon(
                          Icons.arrow_right
                      ),
                    ),
                  ],
                ),
                // Other content
              ],),
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'Home',
              backgroundColor: Colors.black
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.person),
              label: 'Recherches',
              backgroundColor: Colors.black
          ),
          BottomNavigationBarItem(
              icon: Icon(Icons.message),
              label: 'Messages',
              backgroundColor: Colors.black
          ),
        ],
        currentIndex: 0,
        onTap: (index) {
          if (index == 1){
            Navigator.push(context, MaterialPageRoute(
                builder: (context) => SearchPage(users: [
                  User(
                    adresse: "25 Avenue du Kovir",
                    id: 2,
                    name: "Alice",
                    age: 25,
                    email: "alice@example.com",
                    imageUrl: "https://via.placeholder.com/150",
                    description: "Hello, I'm Alice!", password: '',
                  ),
                  User(
                    adresse: "112 Impasse Kaedwen",
                    id: 3,
                    name: "Bob",
                    age: 30,
                    email: "bob@example.com",
                    imageUrl: "https://via.placeholder.com/150",
                    description: "Hi, I'm Bob!", password: '',
                  ),
                  User(
                    adresse: "1 boulevard de la Cintra",
                    id: 4,
                    name: "Charlie",
                    age: 35,
                    email: "charlie@example.com",
                    imageUrl: "https://via.placeholder.com/150",
                    description: "Hey, I'm Charlie!", password: '',
                  ),
                ],currentUser:currentUser)
            ));
          }
          if(index == 2){
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => ConversationsPage(
                  users: [
                    User(
                      adresse: "25 Avenue du Kovir",
                      id: 2,
                      name: "Alice",
                      age: 25,
                      email: "alice@example.com",
                      imageUrl: "https://via.placeholder.com/150",
                      description: "Hello, I'm Alice!", password: '',
                    ),
                    User(
                      adresse: "112 Impasse Kaedwen",
                      id: 3,
                      name: "Bob",
                      age: 30,
                      email: "bob@example.com",
                      imageUrl: "https://via.placeholder.com/150",
                      description: "Hi, I'm Bob!", password: '',
                    ),
                    User(
                      adresse: "1 boulevard de la Cintra",
                      id: 4,
                      name: "Charlie",
                      age: 35,
                      email: "charlie@example.com",
                      imageUrl: "https://via.placeholder.com/150",
                      description: "Hey, I'm Charlie!", password: '',
                    ),
                  ],
                  currentUser: currentUser)),
            );
          }
        },
      ),
    );
  }
}