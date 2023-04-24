import 'package:application_arosaje/plant-page/plant-class.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class PlantProfilePage extends StatelessWidget {
  final Plante plante;
  PlantProfilePage({required this.plante});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.green,
        title: Text("Profil de la plante",style: TextStyle(fontFamily: "Poppins") ),
      ),
      body: Container(
        /*decoration: const BoxDecoration(
            image: DecorationImage(
                image: AssetImage("assets/plantes/background_arosaje_2_1.jpg"),
                fit: BoxFit.cover
            )
        ),*/
        child: Center(
          child:SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SizedBox(height: 20),
                ClipRRect(
                  borderRadius: BorderRadius.circular(0),
                  child: Container(
                    child: Container(
                      padding: EdgeInsets.all(10),
                      decoration: BoxDecoration(
                          border: Border.all(color: Colors.black,width: 4)
                      ),
                      child: Image.asset("assets/plantes/background_login_2.png",width: 200,height: 150),
                    ),
                  ),
                ),
                /*CircleAvatar(
                  radius: 80,
                  backgroundImage: NetworkImage(plante.imageUrl),
                ),*/
                SizedBox(height: 20),
                Container(
                  margin: EdgeInsets.all(10),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Text("Nom de la plante : ",style: TextStyle(fontSize: 20,fontFamily: "Poppins"),),
                      Text(
                        plante.nom,
                        style: TextStyle(fontSize: 20,fontFamily: "Poppins", fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(10),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Text("Espece de la plante : ",style: TextStyle(fontSize: 20,fontFamily: "Poppins"),),
                      Text(
                        plante.espece,
                        style: TextStyle(fontSize: 20,fontFamily: "Poppins", fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(10),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Text("Taille de la plante (cm) : ",style: TextStyle(fontSize: 20,fontFamily: "Poppins"),),
                      Text(
                        "${plante.taille}",
                        style: const TextStyle(fontSize: 20,fontFamily: "Poppins", fontWeight: FontWeight.bold),
                      ),
                    ],
                  ),
                ),
                Container(
                  margin: EdgeInsets.all(10),
                  child: const Text('Description',textAlign:TextAlign.start,style: TextStyle(fontFamily: "Poppins",fontSize: 20),),
                ),
                Container(
                  width: double.infinity,
                  margin: EdgeInsets.all(15),
                  padding: EdgeInsets.all(10),
                  decoration: BoxDecoration(
                      border: Border.all(width: 1)
                  ),
                  child: Text(
                    plante.description,
                    style: const TextStyle(fontSize: 20,fontFamily: "Poppins", fontWeight: FontWeight.bold),
                  ),
                ),
                Container(
                    decoration: BoxDecoration(
                        border: Border.all(width: 1)
                    ),
                    margin: const EdgeInsets.all(15),
                    width: double.infinity,
                    child:Column(
                      children: [
                        SizedBox(height: 10),
                        Text("Suivi de la plante",style: TextStyle(fontFamily: "Poppins",fontSize: 20,fontWeight: FontWeight.bold),),
                        SizedBox(height: 10),
                        Text("18/02/2023 - Titre actualité",style: TextStyle(fontFamily: "Poppins",fontSize: 18,fontWeight: FontWeight.bold),),
                        Container(
                          alignment: Alignment.topCenter,
                          child: Container(
                            width: 250,
                            padding: EdgeInsets.all(10),
                            child:Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit",style: TextStyle(fontFamily: "Poppins",fontSize: 18,fontWeight: FontWeight.bold),),),
                        )
                      ],
                    )
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
