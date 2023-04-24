import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../user-page/user.dart';
import 'conversation.dart';
import 'conversationScreen.dart';
import 'message.dart';

class ConversationsPage extends StatefulWidget {
  final List<User> users;
  final User currentUser;
  const ConversationsPage({Key? key, required this.users, required this.currentUser}) : super(key: key);


  @override
  _ConversationsPageState createState() => _ConversationsPageState();
}
class _ConversationsPageState extends State<ConversationsPage> {

  List<User> _filteredUsers = [];
  @override
  void initState() {
    super.initState();
    _filteredUsers = widget.users;
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
    return Scaffold(
      appBar: AppBar(
        title: Text('Conversation'),
      ),
      body: Column(
        children: [
          // Barre de recherche pour rechercher des utilisateurs
          // et commencer de nouvelles conversations
          TextField(
            decoration: InputDecoration(
              hintText: 'Rechercher un utilisateur...',
            ),
            onChanged: (query) => _filterUsers(query),
          ),
          // Liste des conversations précédentes de l'utilisateur
          Expanded(
            child: ListView.builder(
              itemCount: _filteredUsers.length,
              itemBuilder: (BuildContext context, int index) {
                final user = _filteredUsers[index];
                return ListTile(
                  leading: CircleAvatar(
                    child: Text('U'),
                  ),
                  title: Text(user.name),
                  subtitle: Text('Dernier message de ${user.name}'),
                  trailing: Text('12:34'),
                  onTap: () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(
                        builder: (context) => ConversationScreen(user: widget.currentUser,currentUser: widget.currentUser, user2:user, conversation: Conversation(user1: widget.currentUser.name, user2: user.name, messages: [
                          Message(sender: widget.currentUser.name, text: "Salut", time: DateTime.now()),
                          Message(sender: user.name, text: "Hey salut ${widget.currentUser.name} comment ça va ?", time: DateTime.now()),
                        ]) ,),
                      ),
                    );
                  },
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}