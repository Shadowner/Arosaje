import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../user-page/user.dart';
import '../user-page/userPage.dart';
import 'conversation.dart';
import 'message.dart';

class ConversationScreen extends StatefulWidget {
  final Conversation conversation;
  final User currentUser;
  final User user2;

  ConversationScreen({required this.conversation, required User user, required this.user2, required this.currentUser});

  @override
  _ConversationScreenState createState() => _ConversationScreenState();
}
class _ConversationScreenState extends State<ConversationScreen> {
  TextEditingController messageController = TextEditingController();
  List<Message> messages = [];

  @override
  void initState() {
    super.initState();
    messages = widget.conversation.messages;
  }

  void sendMessage() {
    String text = messageController.text.trim();
    if (text.isNotEmpty) {
      setState(() {
        messages.add(Message(
          sender: widget.conversation.user1,
          text: text,
          time: DateTime.now(),
        ));
        messageController.clear();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.conversation.user2),
        actions: [
          IconButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => UserPage(user: widget.user2,currentUser: widget.currentUser),
                ),
              );
            },
            icon: Icon(Icons.person),
          ),
        ],
      ),
      body: Column(
        children: [
          Expanded(
            child: ListView.builder(
              itemCount: messages.length,
              itemBuilder: (BuildContext context, int index) {
                Message message = messages[index];
                return Padding(
                  padding: EdgeInsets.symmetric(vertical: 10, horizontal: 8),
                  child: Row(
                    mainAxisAlignment: message.sender == widget.conversation.user1
                        ? MainAxisAlignment.end
                        : MainAxisAlignment.start,
                    children: [
                      Container(
                        padding: EdgeInsets.all(12),
                        decoration: BoxDecoration(
                          color: message.sender == widget.conversation.user1
                              ? Colors.green[300]
                              : Colors.grey[300],
                          borderRadius: BorderRadius.circular(20),
                        ),
                        child: Text(
                          message.text,
                          style: TextStyle(fontSize: 16),
                        ),
                      ),
                    ],
                  ),
                );
              },
            ),
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: messageController,
                    decoration: InputDecoration(
                      hintText: "Type your message here",
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(20),
                      ),
                    ),
                  ),
                ),
                SizedBox(width: 10),
                ElevatedButton(
                  onPressed: sendMessage,
                  child: Text("Send"),
                  style: ElevatedButton.styleFrom(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}