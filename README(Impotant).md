# Skelet_BD_Server_Client

Версия: 2
Дата создания: 19.11.2024

Мой шаблон для будущих проектов: БД + Сервер + Клиент (аутентификация настроена локал)

Тут я могу вносить дополнительные описания....

УЖЕ РЕАЛИЗОВАНО:
- БД (модель юзера, миграция юзера, сид юзера(нет))
- Подключена библиотека стилей: https://nextui.org/
- Гит игнор
- Связб бд -> сервер -> клиент и обратно
- Форма регистрации (JWT, защищенный роут, локал хранение (куки надо реализоввывать)
- Страница входа, страница регистрации, страница которая будет после авторизации (без логики, пустая)

Команды:
- перенакатить БД. На сервере в терминал команда: npm run db:reset

Адаптировать под новый проект:
- Шаг 1. Создать новую БД в .env под задачи нового проекта
- Шаг 2. Перенакатить БД
- Шаг 3. Создать Роуты под новый проект
- Шаг 4. Добавить все роуты в Клиетна
- Шаг 5. Начать реализовывать клиента по ТЗ


Мне нужен гайд список как работают все маршруты в этих файлах после того как ты простишь все маршрута но при этом чтобы функционал остался рабочим чтобы у меня все маршрута можно было прописывать В одном файле. То есть я хочу чтобы у меня все маршрута который я изначально съездили на сервере я просто смог их скопировать закинуть два клиента и уже оттуда обращаться по этим маршрутом подъёбы компонент или объясни мне логику как мне сделать так чтобы не запутаться потом в правильности маршрутах. Также мне не нужна страница ошибки