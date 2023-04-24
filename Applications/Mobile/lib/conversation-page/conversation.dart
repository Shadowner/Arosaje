import 'message.dart';

class Conversation {
  final String user1;
  final String user2;
  final List<Message> messages;

  Conversation({
    required this.user1,
    required this.user2,
    required this.messages,
  });
}
