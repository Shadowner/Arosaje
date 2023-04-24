class User {
  String name;
  final String email;
  final String password;
  final String imageUrl;
  String description;
  String adresse;
  int age;
  final int id;

  User({
    required this.name,
    required this.email,
    required this.password,
    required this.adresse,
    required this.imageUrl,
    required this.description,
    required this.age,
    required this.id,
  });

}
