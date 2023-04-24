import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../user-page/user.dart';
import '../user-page/userPage.dart';

class SearchPage extends StatefulWidget {
  final List<User> users;
  final User currentUser;

  const SearchPage({Key? key, required this.users, required this.currentUser}) : super(key: key);

  @override
  _SearchPageState createState() => _SearchPageState();
}
class _SearchPageState extends State<SearchPage> {
  List<User> _filteredUsers = [];
  @override
  void initState() {
    super.initState();
    _filteredUsers = widget.users;
  }
  void _onUserSelected(User user) {
    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => UserPage(user: user, currentUser: widget.currentUser),
      ),
    );
  }

  void _filterUsers(String query) {
    List<User> filteredUsers = [];
    filteredUsers.addAll(widget.users.where((user) => user.name.toLowerCase().contains(query.toLowerCase())));
    setState(() {
      _filteredUsers = filteredUsers;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home:DefaultTabController(
          length: 2,
          child: Scaffold(
              appBar: AppBar(
                bottom: const TabBar(tabs: [
                  Tab(icon:Icon(Icons.person)),
                  Tab(icon:Icon(Icons.compost))
                ]),
                backgroundColor: Colors.green,
                title: const Text("Page de recherches",style: TextStyle(fontFamily: "Poppins"),),
              ),
              body:TabBarView(
                children: [
                  Column(
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: TextField(
                          decoration: InputDecoration(
                            hintText: 'Search by name',
                          ),
                          onChanged: (query) => _filterUsers(query),
                        ),
                      ),
                      Expanded(
                        child: ListView.builder(
                          itemCount: _filteredUsers.length,
                          itemBuilder: (context, index) {
                            final user = _filteredUsers[index];
                            return ListTile(
                              leading: CircleAvatar(
                                backgroundImage: NetworkImage(user.imageUrl),
                              ),
                              onTap: ()=> _onUserSelected(user),
                              title: Text(user.name),
                              subtitle: Text(user.email),
                            );
                          },
                        ),
                      ),
                    ],
                  ),
                  Column(
                    children: [
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: TextField(
                          decoration: InputDecoration(
                            hintText: 'Search by name',
                          ),
                          onChanged: (query) => _filterUsers(query),
                        ),
                      ),
                      Expanded(
                        child: ListView.builder(
                          itemCount: _filteredUsers.length,
                          itemBuilder: (context, index) {
                            final user = _filteredUsers[index];
                            return ListTile(
                              leading: CircleAvatar(
                                backgroundImage: NetworkImage(user.imageUrl),
                              ),
                              onTap: ()=> _onUserSelected(user),
                              title: Text(user.name),
                              subtitle: Text(user.email),
                            );
                          },
                        ),
                      ),
                    ],
                  ),
                ],
              )
          ),
        )
    );
  }
}