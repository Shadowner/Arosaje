# Permet de récupérer les images associées à une plante.
SELECT file.path, file.name
FROM file, plant_picture
WHERE (plant_picture.id_file = file.id_file)
AND(plant_picture.id_plant = 1)

# Savoir si une plante est gardé à un l'instant T.
SELECT *
FROM guard
WHERE (DATE(NOW()) BETWEEN guard.start_date AND guard.end_date)
AND (guard.id_plant = 1);

# Permet à partir d'une plante de récupérer les messages associées à sa conversation.
SELECT message.content, message.send_date, message.id_user
FROM message, plant, conversation
WHERE (plant.id_conversation = conversation.id_conversation)
AND (conversation.id_conversation = message.id_conversation)
ORDER BY message.send_date ASC;

# Permet à partir d'une plante de récupérer les messages associées à sa conversation et en donnant
# le nom et prénom des personnes ayant envoyé les messages.
SELECT message.content, message.send_date, CONCAT(user.last_name, ' ', user.first_name) AS user
FROM message, plant, conversation, user
WHERE (plant.id_conversation = conversation.id_conversation)
AND (conversation.id_conversation = message.id_conversation)
AND(user.id_user = message.id_user)
ORDER BY message.send_date ASC;