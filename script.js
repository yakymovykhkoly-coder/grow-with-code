const modules = [
  {
    title:"Основи Java", subtitle:"JDK, JVM та перша програма", category:"JAVA CORE", group:"Java Core",
    intro:"Починаємо з фундаменту: що відбувається між написаним кодом і запуском Java-програми.",
    content:[
      "<strong>Java</strong> — це мова програмування, а JDK — набір інструментів розробника: компілятор, стандартні бібліотеки та утиліти.",
      "Код з файлу <strong>.java</strong> компілюється в bytecode. JVM виконує цей bytecode, тому одна й та сама Java-програма може працювати на різних ОС, якщо там є сумісна JVM.",
      "Точка входу звичайної консольної програми — <strong>public static void main(String[] args)</strong>. На старті тобі достатньо розуміти: усе, що викликається з main, запускається під час старту програми."
    ],
    points:["Різниця між JDK, JVM і JRE","Що робить метод main","System.out.println для виводу"],
    code:`public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}`,
    task:"Створи програму, яка виведе твоє ім'я, вік і фразу «Я вивчаю Java».",
    quiz:[
      {q:"Для чого потрібен JDK?", options:["Для написання й компіляції Java-коду","Тільки для браузера","Для зберігання HTML"], answer:0},
      {q:"Який метод є типовою точкою входу?", options:["start()","main()","open()"], answer:1}
    ]
  },
  {
    title:"Змінні і типи", subtitle:"int, double, boolean, String", category:"JAVA CORE", group:"Java Core",
    intro:"Змінні дають імена значенням, з якими працює програма.",
    content:[
      "Кожна змінна має <strong>тип</strong>, ім'я і значення. Наприклад, int зберігає цілі числа, double — дробові, boolean — true/false.",
      "<strong>String</strong> — клас для тексту. Рядки записуються в подвійних лапках. Java перевіряє типи під час компіляції, тому не можна просто покласти текст у int.",
      "Оператор <strong>%</strong> повертає остачу від ділення. Він часто використовується для перевірки парності або кратності чисел."
    ],
    points:["Примітивні типи","String для тексту","Оператори + - * / %"],
    code:`int age = 17;\ndouble price = 149.99;\nboolean learning = true;\nString name = "Alex";\n\nSystem.out.println(name + " " + age);`,
    task:"Створи 4 змінні: ім'я, вік, баланс і чи навчаєшся ти Java. Виведи їх.",
    quiz:[
      {q:"Який тип зручний для цілого віку?", options:["int","boolean","String[]"], answer:0},
      {q:"Що повертає оператор %?", options:["Остачу від ділення","Степінь","Рядок"], answer:0}
    ]
  },
  {
    title:"if / else", subtitle:"Умови та логіка", category:"JAVA CORE", group:"Java Core",
    intro:"Умови дозволяють програмі обирати різну поведінку залежно від даних.",
    content:[
      "Вираз усередині <strong>if (...)</strong> має дати boolean: true або false. Якщо true — блок виконується.",
      "Для порівняння значень використовуй <strong>==</strong>, а один знак = означає присвоєння. Для кількох умов є && (і) та || (або).",
      "Ланцюжок if / else if / else зручний, коли треба вибрати один із кількох взаємовиключних варіантів."
    ],
    points:["==, !=, >, <, >=, <=","&& та ||","if / else if / else"],
    code:`int age = 17;\n\nif (age >= 18) {\n    System.out.println("18+");\n} else {\n    System.out.println("Менше 18");\n}`,
    task:"Запитай число і виведи: додатне, від'ємне або нуль.",
    quiz:[
      {q:"Який оператор означає логічне «і»?", options:["||","&&","==="], answer:1},
      {q:"Що означає ==?", options:["Присвоєння","Порівняння","Ділення"], answer:1}
    ]
  },
  {
    title:"Цикли for / while", subtitle:"Повторення дій", category:"JAVA CORE", group:"Java Core",
    intro:"Цикли повторюють блок коду, доки виконується умова.",
    content:[
      "<strong>for</strong> зручний, коли відомо, скільки приблизно разів треба повторити дію. У ньому є старт, умова та зміна лічильника.",
      "<strong>while</strong> зручний, коли кількість повторів наперед невідома: цикл працює, поки його умова true.",
      "Стеж за напрямком лічильника. Якщо i <= 10, але ти робиш i-- від 1, умова ніколи не стане false — отримаєш нескінченний цикл."
    ],
    points:["Будова for","Коли використовувати while","break і continue"],
    code:`int sum = 0;\nfor (int i = 1; i <= 100; i++) {\n    if (i % 2 == 0 && i % 3 == 0) {\n        sum += i;\n    }\n}\nSystem.out.println(sum);`,
    task:"Порахуй суму чисел від 1 до 100, які одночасно діляться на 2 і на 3.",
    quiz:[
      {q:"Що робить i++?", options:["Збільшує i на 1","Зменшує i на 1","Множить i на i"], answer:0},
      {q:"Коли for особливо зручний?", options:["Коли є лічильник повторів","Тільки для String","Тільки в Spring"], answer:0}
    ]
  },
  {
    title:"Методи", subtitle:"Параметри та return", category:"JAVA CORE", group:"Java Core",
    intro:"Методи розбивають програму на невеликі повторно використовувані дії.",
    content:[
      "Метод має ім'я, параметри та тип результату. Параметри — це дані, які метод отримує ззовні.",
      "Якщо метод повертає значення, у сигнатурі вказується тип, наприклад int, а всередині використовується <strong>return</strong>.",
      "Якщо результат повертати не треба, використовуй <strong>void</strong>. Хороший метод зазвичай відповідає за одну зрозумілу дію."
    ],
    points:["Параметри","return","void"],
    code:`static int multiply(int a, int b) {\n    return a * b;\n}\n\npublic static void main(String[] args) {\n    System.out.println(multiply(5, 3));\n}`,
    task:"Створи метод multiply(int a, int b), який повертає результат множення.",
    quiz:[
      {q:"Що робить return?", options:["Повертає результат методу","Створює цикл","Видаляє клас"], answer:0},
      {q:"Що означає void?", options:["Метод не повертає значення","Метод приватний","Метод циклічний"], answer:0}
    ]
  },
  {
    title:"Масиви та ArrayList", subtitle:"Колекції даних", category:"JAVA CORE", group:"Java Core",
    intro:"Коли значень багато, їх зручніше зберігати в масиві або колекції.",
    content:[
      "Масив має фіксований розмір після створення. Елементи доступні за індексом, який починається з 0.",
      "<strong>ArrayList</strong> може змінювати розмір. Методи add, get, remove допомагають додавати, читати та видаляти елементи.",
      "Для перебору колекції часто використовують enhanced for: for (String name : names)."
    ],
    points:["Індекси масиву","ArrayList.add/get/remove","for-each"],
    code:`import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> users = new ArrayList<>();\n        users.add("Anna");\n        users.add("Max");\n        for (String user : users) System.out.println(user);\n    }\n}`,
    task:"Створи ArrayList з 5 іменами та виведи кожне ім'я циклом.",
    quiz:[
      {q:"З якого індексу починається масив?", options:["0","1","-1"], answer:0},
      {q:"Який метод додає елемент в ArrayList?", options:["push()","add()","putLine()"], answer:1}
    ]
  },
  {
    title:"ООП", subtitle:"Класи та об'єкти", category:"JAVA OOP", group:"OOP",
    intro:"ООП допомагає моделювати сутності програми через об'єкти.",
    content:[
      "<strong>Клас</strong> — це опис того, які дані та дії матимуть його об'єкти. Наприклад, User може мати name і age.",
      "Об'єкт створюється через <strong>new</strong>. Кожний об'єкт має власні значення полів.",
      "Методи класу описують поведінку. У реальному backend User, Order або Account зазвичай стають окремими моделями."
    ],
    points:["Клас і поля","new","Методи об'єкта"],
    code:`class Book {\n    String title;\n    double price;\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Book book = new Book();\n        book.title = "Java";\n        System.out.println(book.title);\n    }\n}`,
    task:"Створи клас Book з полями title, author і price. Створи 2 об'єкти.",
    quiz:[
      {q:"Що таке клас?", options:["Шаблон для об'єктів","Готова база даних","Цикл"], answer:0},
      {q:"Яке слово створює об'єкт?", options:["new","return","extendsOnly"], answer:0}
    ]
  },
  {
    title:"Конструктори", subtitle:"Ініціалізація об'єктів", category:"JAVA OOP", group:"OOP",
    intro:"Конструктор задає початковий стан нового об'єкта.",
    content:[
      "Конструктор має ту саму назву, що й клас, і не має типу повернення.",
      "Через параметри конструктора можна вимагати обов'язкові дані одразу під час new User(...).",
      "<strong>this.name = name</strong> означає: у поле поточного об'єкта name поклади значення параметра name."
    ],
    points:["Назва конструктора","this","Параметри під час new"],
    code:`class User {\n    String name;\n    int age;\n\n    User(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}`,
    task:"Додай до класу Book конструктор для title, author і price.",
    quiz:[
      {q:"Чи має конструктор тип return?", options:["Ні","Так, завжди void","Так, завжди int"], answer:0},
      {q:"Що означає this?", options:["Поточний об'єкт","Новий цикл","Імпорт"], answer:0}
    ]
  },
  {
    title:"Інкапсуляція", subtitle:"private, getters і setters", category:"JAVA OOP", group:"OOP",
    intro:"Інкапсуляція захищає стан об'єкта від неконтрольованих змін.",
    content:[
      "Поле з модифікатором <strong>private</strong> доступне безпосередньо тільки всередині свого класу.",
      "Getter повертає значення, setter змінює його. У setter можна додати перевірку, наприклад не дозволяти від'ємний баланс.",
      "Це не просто синтаксис: так клас сам контролює правила роботи зі своїми даними."
    ],
    points:["private","getter","setter з валідацією"],
    code:`class Account {\n    private double balance;\n\n    public double getBalance() { return balance; }\n\n    public void setBalance(double balance) {\n        if (balance >= 0) this.balance = balance;\n    }\n}`,
    task:"Зроби поля Book private і додай getters/setters.",
    quiz:[
      {q:"Навіщо private?", options:["Обмежити прямий доступ до поля","Запустити main","Створити таблицю БД"], answer:0},
      {q:"Де зручно перевіряти нове значення поля?", options:["У setter","У import","У package"], answer:0}
    ]
  },
  {
    title:"Введення в Spring Boot", subtitle:"Перший backend", category:"SPRING BOOT", group:"Spring Boot",
    intro:"Spring Boot бере на себе багато налаштувань і допомагає швидко запустити Java backend.",
    content:[
      "Spring Boot — це не заміна Java. Це набір інструментів поверх Spring, який автоматично налаштовує типові частини застосунку.",
      "Анотація <strong>@SpringBootApplication</strong> позначає головний клас. SpringApplication.run(...) запускає application context і вбудований сервер.",
      "Для REST API зазвичай додають Spring Web. Для бази — Spring Data JPA та драйвер конкретної БД."
    ],
    points:["Структура проєкту","@SpringBootApplication","Embedded server"],
    code:`// Цей приклад потребує Spring Boot dependencies\n@SpringBootApplication\npublic class DemoApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n}`,
    task:"Створи Spring Boot проєкт із Spring Web і запусти його.",
    quiz:[
      {q:"Spring Boot працює поверх чого?", options:["Java/Spring","HTML замість Java","Тільки SQL"], answer:0},
      {q:"Яка анотація типова для головного класу?", options:["@SpringBootApplication","@ForLoop","@DatabaseOnly"], answer:0}
    ]
  },
  {
    title:"Controller / REST API", subtitle:"GET, POST, JSON та HTTP", category:"SPRING BOOT", group:"Spring Boot",
    intro:"Controller — це точка, через яку HTTP-запит входить у backend.",
    content:[
      "<strong>@RestController</strong> говорить Spring, що методи класу обробляють HTTP-запити та повертають дані у відповідь.",
      "@GetMapping використовують для читання, @PostMapping — для створення. @RequestBody перетворює JSON із тіла запиту на Java-об'єкт.",
      "URL краще будувати навколо ресурсів: /users, /orders, /stocks. HTTP-метод визначає дію над ресурсом."
    ],
    points:["@RestController","@RequestMapping","GET / POST / @RequestBody"],
    code:`// Spring snippet\n@RestController\n@RequestMapping("/users")\nclass UserController {\n    @GetMapping\n    String getUsers() {\n        return "Users";\n    }\n}`,
    task:"Створи endpoint GET /hello, який повертає «Hello Spring».",
    quiz:[
      {q:"Що зазвичай робить @GetMapping?", options:["Обробляє GET-запит","Створює цикл","Створює таблицю"], answer:0},
      {q:"Для чого @RequestBody?", options:["Отримати тіло HTTP-запиту як Java-об'єкт","Змінити CSS","Створити JVM"], answer:0}
    ]
  },
  {
    title:"JPA та база даних", subtitle:"Entity та Repository", category:"SPRING DATA", group:"Spring Boot",
    intro:"Spring Data JPA зв'язує Java-моделі з таблицями реляційної бази даних.",
    content:[
      "Клас з <strong>@Entity</strong> представляє сутність, яка може зберігатися в БД. Поле @Id є ідентифікатором запису.",
      "Інтерфейс, що extends JpaRepository&lt;User, Long&gt;, отримує готові CRUD-операції: save, findAll, findById, deleteById.",
      "Repository працює з даними, Controller — з HTTP. У більших проєктах між ними часто додають Service для бізнес-логіки."
    ],
    points:["@Entity / @Id","JpaRepository","save / findAll / deleteById"],
    code:`// Spring Data snippet\ninterface UserRepository extends JpaRepository<User, Long> {\n}\n\n// repository.save(user);\n// repository.findAll();`,
    task:"Створи User Entity з id, name, email і UserRepository.",
    quiz:[
      {q:"Що позначає @Entity?", options:["Клас-сутність для persistence","CSS-компонент","Цикл"], answer:0},
      {q:"Що дає JpaRepository?", options:["Готові CRUD-методи","Тільки println","HTML-шаблон"], answer:0}
    ]
  },
  {
    title:"Перший проєкт", subtitle:"CRUD користувачів", category:"FINAL PROJECT", group:"Spring Boot",
    intro:"Фінал: збираємо модель, repository і REST controller в один невеликий застосунок.",
    content:[
      "Почни з User Entity: id, name, email. Потім створи UserRepository extends JpaRepository&lt;User, Long&gt;.",
      "У UserController реалізуй GET /users, POST /users, PUT /users/{id}, DELETE /users/{id}. Перевір кожен endpoint окремо.",
      "Після backend підключи просту HTML-форму через fetch. Це вже повний ланцюжок: frontend → REST API → Java → database."
    ],
    points:["User Entity","CRUD Controller","Repository + DB","Frontend fetch"],
    code:`GET    /users\nPOST   /users\nPUT    /users/{id}\nDELETE /users/{id}`,
    task:"Створи CRUD користувачів: додавання, список, редагування та видалення.",
    quiz:[
      {q:"Який HTTP-метод логічний для видалення?", options:["DELETE","GET","TRACE ONLY"], answer:0},
      {q:"Який шар працює з JpaRepository?", options:["Backend persistence/service","CSS","Зображення"], answer:0}
    ]
  }
];

const deepDive = [
 ["<strong>Як Java запускає програму.</strong> Файл .java — це вихідний код. Компілятор javac перевіряє його та створює .class із bytecode. JVM читає bytecode та виконує його на конкретній операційній системі. Тому Java-код не компілюється напряму лише під один Windows або Linux.","<strong>JDK, JRE, JVM.</strong> JDK потрібен розробнику: компілятор, стандартні бібліотеки та інструменти. JVM виконує bytecode. JRE — середовище запуску. На практиці для розробки встановлюють JDK.","<strong>Розбір main.</strong> public — доступний JVM; static — не треба створювати Main; void — результат не повертається; String[] args — аргументи запуску. Інструкції всередині виконуються зверху вниз.","<strong>Типові помилки.</strong> Java чутлива до регістру. Public-клас Main має бути у Main.java. Після звичайної інструкції ставиться ;, а текст береться у подвійні лапки."],
 ["<strong>Тип визначає можливі дані.</strong> int — цілі числа, long — великі цілі, double — дробові, boolean — true/false, char — один символ. String є класом, а не примітивним типом.","<strong>Присвоєння.</strong> int score = 10 створює змінну, score = 20 змінює її. score += 5 — скорочення для score = score + 5. Аналогічно працюють -=, *= та /=.","<strong>Важлива деталь ділення.</strong> 5 / 2 для int дасть 2. Щоб отримати 2.5, хоча б один операнд має бути дробовим: 5.0 / 2.","<strong>Оператор %.</strong> Повертає остачу. i % 2 == 0 перевіряє парність, i % 5 == 0 — кратність п'яти. Для String зміст порівнюють через equals(), а не через ==."],
 ["<strong>Як працює if.</strong> Вираз у дужках повинен дати true або false. Якщо true — Java заходить у блок. else виконується, якщо попередня умова false.","<strong>Логічні оператори.</strong> && вимагає виконання обох умов; || — хоча б однієї; ! перевертає boolean. Це дозволяє описувати реальні правила, наприклад age >= 18 && verified.","<strong>else if.</strong> Умови перевіряються зверху вниз і виконується перша відповідна гілка. Тому порядок перевірок може змінити результат.","<strong>Типові помилки.</strong> = замість ==, зайва ; після if(...), String через ==, надмірна вкладеність. Дві вкладені перевірки часто можна об'єднати через &&."],
 ["<strong>for крок за кроком.</strong> У for (int i=1; i<=10; i++) старт виконується один раз. Перед кожною ітерацією перевіряється умова. Після тіла виконується i++. Коли умова стає false, цикл завершується.","<strong>Напрямок лічильника.</strong> i++, i--, i += 2, i -= 5 змінюють крок. Якщо почати з 1, перевіряти i <= 10 і робити i--, i віддаляється від 10 і цикл стає нескінченним.","<strong>Цикл + умова.</strong> for перебирає числа, а if відбирає потрібні. i % 2 == 0 && i % 3 == 0 означає одночасну кратність 2 і 3; це також i % 6 == 0.","<strong>Накопичувач.</strong> int sum = 0 створюється перед циклом. sum += i додає поточне число. Якщо потрібен лише фінальний результат, println(sum) став після циклу.","<strong>while, break, continue.</strong> while корисний, коли кількість повторів невідома. break завершує цикл, continue пропускає решту поточної ітерації.","<strong>Типові помилки.</strong> i =+ 3 замість i += 3, i * i замість зміни лічильника, ; одразу після for, неправильне місце println та умова, яка ніколи не стане false."],
 ["<strong>Метод — окрема дія.</strong> Він прибирає дублювання та розділяє програму на зрозумілі частини. Назви на кшталт calculateTotal(), findUser(), deposit() пояснюють призначення.","<strong>Сигнатура.</strong> У static int multiply(int a, int b) слово int перед назвою — тип результату, a і b — параметри. У multiply(5, 3) числа є аргументами конкретного виклику.","<strong>return і void.</strong> return повертає значення і завершує метод. void означає, що значення повертати не потрібно. Метод із типом int повинен повернути int на всіх необхідних шляхах.","<strong>Область видимості.</strong> Локальна змінна існує лише всередині свого блоку {}. Це ізолює дані. Типова помилка — намагатися використати локальну змінну за межами методу."],
 ["<strong>Масив.</strong> int[] numbers = new int[5] створює рівно п'ять комірок з індексами 0–4. Розмір після створення не змінюється. Індекс поза межами дає ArrayIndexOutOfBoundsException.","<strong>ArrayList.</strong> add додає, get читає, set замінює, remove видаляє, size повертає кількість, contains перевіряє наявність. Розмір списку змінюється динамічно.","<strong>Integer замість int.</strong> Generics працюють з об'єктними типами, тому ArrayList<Integer>, не ArrayList<int>. Java часто автоматично виконує boxing/unboxing між int та Integer.","<strong>Перебір.</strong> Звичайний for потрібен, коли важливий індекс. for-each простіший для читання кожного елемента. Типова помилка: i <= list.size() замість i < list.size()."],
 ["<strong>Клас і об'єкт.</strong> Клас — опис структури й поведінки, об'єкт — конкретний екземпляр. User може описувати name/email, а user1 і user2 матимуть власні значення.","<strong>Стан і поведінка.</strong> Поля зберігають стан, методи описують дії. account.deposit(100) краще виражає правило, ніж випадкова зміна balance з іншого класу.","<strong>Посилання.</strong> Змінна об'єктного типу зазвичай містить посилання. Два посилання можуть вказувати на один об'єкт, тому зміна через одне буде видима через інше.","<strong>Чотири принципи.</strong> Інкапсуляція контролює доступ, наслідування розширює типи, поліморфізм дозволяє працювати через спільний контракт, абстракція приховує зайві деталі."],
 ["<strong>Конструктор створює валідний стартовий стан.</strong> Якщо User обов'язково потребує name, краще вимагати його в new User(name), а не залишати null.","<strong>Синтаксис.</strong> Конструктор має назву класу і не має навіть void. this.name = name означає: полю поточного об'єкта присвоїти параметр name.","<strong>Перевантаження.</strong> Можна мати User(String name) та User(String name, String email). Java вибере конструктор за аргументами.","<strong>Конструктор за замовчуванням.</strong> Він створюється лише якщо ти не написав жодного власного. Після додавання параметризованого конструктора new User() вже не з'являється автоматично."],
 ["<strong>Інкапсуляція — не просто private.</strong> Її мета — не дозволити зовнішньому коду переводити об'єкт у неправильний стан. Клас сам контролює дозволені операції.","<strong>Getter і setter.</strong> Getter читає значення. Setter може перевірити нове значення. Але для бізнес-дій deposit(amount) і withdraw(amount) часто кращі за setBalance().", "<strong>Модифікатори.</strong> public — широкий доступ, private — лише клас, protected пов'язаний із package/наслідуванням, без модифікатора — package-private.","<strong>Інваріант.</strong> Після кожної публічної операції об'єкт повинен залишатися валідним. Наприклад, якщо негативний баланс заборонений, жоден публічний метод не має дозволяти його створити."],
 ["<strong>Spring Boot не замінює Java.</strong> Він автоматизує конфігурацію backend: web server, dependency injection, persistence, security та інші типові частини.","<strong>IoC/DI.</strong> Spring створює керовані об'єкти — beans — і передає залежності через конструктори. Замість new UserService(...) у багатьох місцях залежностями керує контейнер.","<strong>Шари.</strong> Controller — HTTP, Service — бізнес-логіка, Repository — БД, DTO — контракт API, Entity — persistence-модель. Такий поділ спрощує тестування та розвиток.","<strong>@SpringBootApplication.</strong> Вмикає конфігурацію, component scanning та auto-configuration. SpringApplication.run запускає ApplicationContext і вбудований сервер.","<strong>Production.</strong> Секрети не комітять у Git. URL БД, JWT secret та інші значення передають environment variables. Неправильна конфігурація важливого bean може зупинити startup."],
 ["<strong>HTTP.</strong> Запит складається з method, URL, headers і, за потреби, body. Відповідь має status code, headers та body. JSON — типовий формат REST API.","<strong>Mappings.</strong> GET читає, POST створює, PUT/PATCH оновлює, DELETE видаляє. @PathVariable читає /users/{id}, @RequestParam — ?page=0, @RequestBody — JSON body.","<strong>DTO.</strong> Не віддавай Entity напряму без потреби. CreateUserRequest містить дозволений input, UserResponse — безпечний output. Паролі та внутрішні поля не повинні випадково потрапляти у JSON.","<strong>HTTP statuses.</strong> 200 — OK, 201 — Created, 400 — invalid request, 401 — немає валідної автентифікації, 403 — немає права, 404 — не знайдено, 500 — помилка сервера.","<strong>Потік запиту.</strong> Browser → Controller → Service → Repository → PostgreSQL → назад → JSON. Controller має бути тонким, а бізнес-правила — у Service."],
 ["<strong>PostgreSQL та JPA — різні речі.</strong> PostgreSQL зберігає дані. JPA описує ORM-контракт у Java, а Hibernate часто реалізує його та генерує SQL.","<strong>Entity.</strong> @Entity позначає persistent-клас, @Id — primary key, @GeneratedValue — генерацію id. @Column може задавати unique, nullable і length.","<strong>JpaRepository.</strong> JpaRepository<User, Long> дає save, findById, findAll, deleteById. findById повертає Optional, бо запис може не існувати.","<strong>Запити та зв'язки.</strong> findByEmail може генеруватися з назви методу. @OneToMany/@ManyToOne та інші анотації описують relations; неправильне завантаження може спричинити N+1 проблему.","<strong>Транзакції та production.</strong> @Transactional об'єднує зміни в одну операцію. Для production схему краще вести міграціями Flyway/Liquibase, а не покладатися на ddl-auto=create."],
 ["<strong>Архітектура фінального CRUD.</strong> Request DTO → Controller → Service → Repository → PostgreSQL. Назад: Entity → Service/mapper → Response DTO → JSON. Кожен шар має свою відповідальність.","<strong>Валідація.</strong> @Valid, @NotBlank, @Email, @Size перевіряють форму даних, але бізнес-правила на кшталт унікального email також повинні перевірятися на service/DB рівні.","<strong>CRUD.</strong> POST /users — створення; GET /users — список із пагінацією; GET /users/{id} — один; PATCH/PUT — зміна; DELETE — видалення. Для помилок повертай коректні status codes.","<strong>Security.</strong> Паролі хешуються, JWT перевіряється backend, authorization вирішує, хто має право змінювати ресурс. Не довіряй тому, що кнопка прихована у frontend — endpoint також має бути захищений.","<strong>Тести.</strong> Перевір happy path і помилки: duplicate email, invalid input, 404, unauthorized/forbidden. Service unit tests та controller/integration tests ловлять різні класи багів.","<strong>Deploy.</strong> Frontend може жити на Netlify, Spring Boot — на Java/Docker host, PostgreSQL — managed database. Потрібні HTTPS, environment secrets, migrations, backups, logs і health monitoring.","<strong>Junior checklist.</strong> Після проєкту ти маєш своїми словами пояснити шлях запиту від fetch до SQL і назад, різницю Controller/Service/Repository, DTO, validation, transaction, authentication та authorization."]
];
modules.forEach((m,i)=>{m.content=[...m.content,...(deepDive[i]||[])]});


const javaVideo = "https://www.youtube.com/watch?v=xTtL8E4LzTQ";
const springVideo = "https://www.youtube.com/watch?v=Cw0J6jYJtzw";
const hackerRank = "https://www.hackerrank.com/domains/java";
const leetCode = "https://leetcode.com/problemset/";
const moduleMeta = [
  {docs:"https://dev.java/learn/",video:`${javaVideo}&t=0s`,practice:[hackerRank,leetCode]},
  {docs:"https://dev.java/learn/language-basics/",video:`${javaVideo}&t=658s`,practice:[hackerRank,leetCode]},
  {docs:"https://dev.java/learn/language-basics/",video:`${javaVideo}&t=4140s`,practice:[hackerRank,leetCode]},
  {docs:"https://dev.java/learn/language-basics/",video:`${javaVideo}&t=13413s`,practice:[hackerRank,leetCode]},
  {docs:"https://dev.java/learn/classes-objects/",video:`${javaVideo}&t=14667s`,practice:[hackerRank,leetCode]},
  {docs:"https://dev.java/learn/arrays/",video:`${javaVideo}&t=18206s`,practice:[hackerRank,leetCode]},
  {docs:"https://dev.java/learn/oop/",video:`${javaVideo}&t=24107s`,practice:[hackerRank,leetCode]},
  {docs:"https://dev.java/learn/classes-objects/",video:`${javaVideo}&t=24698s`,practice:[hackerRank,leetCode]},
  {docs:"https://dev.java/learn/classes-objects/",video:`${javaVideo}&t=29975s`,practice:[hackerRank,leetCode]},
  {docs:"https://spring.io/guides/gs/spring-boot",video:`${springVideo}&t=200s`,practice:["https://start.spring.io/",hackerRank]},
  {docs:"https://spring.io/guides/gs/rest-service",video:`${springVideo}&t=586s`,practice:["https://start.spring.io/",hackerRank]},
  {docs:"https://spring.io/guides/gs/accessing-data-jpa",video:`${springVideo}&t=2699s`,practice:["https://start.spring.io/",hackerRank]},
  {docs:"https://spring.io/guides/tutorials/rest/",video:`${springVideo}&t=935s`,practice:["https://start.spring.io/",leetCode]}
];
modules.forEach((m,i)=>Object.assign(m,moduleMeta[i]));
const tasks = modules.map((m,i)=>({title:m.title,text:m.task,module:i,group:m.group}));

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const parse = (key,fallback) => { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; } };
const state = {
  completedModules:parse("gwc_modules",[]), completedTasks:parse("gwc_tasks",[]), lastModule:Number(localStorage.getItem("gwc_lastModule")||0),
  notes:parse("gwc_notes",{}), timeSpent:parse("gwc_timeSpent",{}), difficulty:parse("gwc_difficulty",{}), activityDays:parse("gwc_activityDays",[]),
  quizPassed:parse("gwc_quizPassed",{}), editorCode:parse("gwc_editorCode",{}), localComments:parse("gwc_localComments",[]), localReviews:parse("gwc_localReviews",[]),
  displayName:localStorage.getItem("gwc_displayName")||""
};
let courseFilter="all",taskFilter="all",lessonOpenedAt=null,notesTimer=null,syncTimer=null;
const API_BASE = location.protocol === "file:" ? "http://localhost:8080/api" : "/api";

function save(){
  localStorage.setItem("gwc_modules",JSON.stringify(state.completedModules)); localStorage.setItem("gwc_tasks",JSON.stringify(state.completedTasks));
  localStorage.setItem("gwc_lastModule",state.lastModule); localStorage.setItem("gwc_notes",JSON.stringify(state.notes)); localStorage.setItem("gwc_timeSpent",JSON.stringify(state.timeSpent));
  localStorage.setItem("gwc_difficulty",JSON.stringify(state.difficulty)); localStorage.setItem("gwc_activityDays",JSON.stringify(state.activityDays)); localStorage.setItem("gwc_quizPassed",JSON.stringify(state.quizPassed));
  localStorage.setItem("gwc_editorCode",JSON.stringify(state.editorCode)); localStorage.setItem("gwc_localComments",JSON.stringify(state.localComments)); localStorage.setItem("gwc_localReviews",JSON.stringify(state.localReviews));
  localStorage.setItem("gwc_displayName",state.displayName); scheduleAutoSync();
}
function localDay(d=new Date()){return d.toISOString().slice(0,10)}
function logActivity(){const d=localDay(); if(!state.activityDays.includes(d)){state.activityDays.push(d);state.activityDays.sort();}}
function startLessonTimer(){lessonOpenedAt=Date.now()}
function flushLessonTime(){if(lessonOpenedAt===null)return; const seconds=Math.max(0,Math.round((Date.now()-lessonOpenedAt)/1000)); if(seconds){const k=String(state.lastModule); state.timeSpent[k]=Number(state.timeSpent[k]||0)+seconds; logActivity(); save();} lessonOpenedAt=null;}
function formatTime(sec){sec=Number(sec||0); if(sec<60)return `${sec} с`; const m=Math.floor(sec/60); if(m<60)return `${m} хв`; return `${Math.floor(m/60)} год ${m%60} хв`;}
function calculateStreak(){const days=new Set(state.activityDays);let d=new Date();let streak=0;for(let i=0;i<365;i++){const key=localDay(d);if(days.has(key)){streak++;d.setDate(d.getDate()-1)}else if(i===0){d.setDate(d.getDate()-1)}else break;}return streak}
function consistencyLast7(){const days=new Set(state.activityDays);let count=0;const d=new Date();for(let i=0;i<7;i++){if(days.has(localDay(d)))count++;d.setDate(d.getDate()-1)}return count}
function xpTotal(){return state.completedModules.length*100+state.completedTasks.length*50+Object.values(state.quizPassed).filter(Boolean).length*30}
function levelInfo(){const xp=xpTotal(),size=300,level=Math.floor(xp/size)+1,into=xp%size;return {xp,level,into,size,percent:Math.round(into/size*100)}}
function badges(){
  const javaDone=[0,1,2,3,4,5].every(i=>state.completedModules.includes(i)); const oopDone=[6,7,8].every(i=>state.completedModules.includes(i));
  return [
    ["🌱","Перший крок","1 урок",state.completedModules.length>=1],["🔥","Ритм","3 дні streak",calculateStreak()>=3],["☕","Java Core","6 уроків",javaDone],
    ["🧱","OOP","ООП завершено",oopDone],["🍃","Spring","Почав Spring Boot",state.completedModules.some(i=>i>=9)],["🚀","Фінал","Перший проєкт",state.completedModules.includes(12)]
  ];
}

$("#leafButton").addEventListener("click",()=>launchApp(false));

function groupMatches(group,filter){return filter==="all"||group===filter}
function renderModules(){const list=$("#moduleList");list.innerHTML="";modules.forEach((m,i)=>{if(!groupMatches(m.group,courseFilter))return;const done=state.completedModules.includes(i);const b=document.createElement("button");b.className="module"+(i===state.lastModule?" active":"")+(done?" done":"");b.innerHTML=`<span class="num">${done?"✓":i+1}</span><span class="module-copy"><strong>${m.title}</strong><small>${m.group} · ${m.subtitle}</small></span><span class="arrow">→</span>`;b.onclick=()=>openLesson(i);list.appendChild(b)})}
function renderQuickTasks(){const box=$("#quickTaskList");box.innerHTML="";tasks.slice(0,5).forEach((t,i)=>{const l=document.createElement("label");const done=state.completedTasks.includes(i);l.className="quick-task"+(done?" done":"");l.innerHTML=`<input type="checkbox" ${done?"checked":""}><span><b>${modules[i].title}</b><small>${t.text}</small></span>`;l.querySelector("input").onchange=()=>toggleTask(i);box.appendChild(l)})}
function renderTasks(){const grid=$("#allTasks");grid.innerHTML="";tasks.forEach((t,i)=>{if(!groupMatches(t.group,taskFilter))return;const done=state.completedTasks.includes(i);const c=document.createElement("article");c.className="task-card"+(done?" done":"");c.innerHTML=`<div class="task-index">${t.group.toUpperCase()} · УРОК ${String(i+1).padStart(2,"0")}</div><h3>${t.title}</h3><p>${t.text}</p><div class="task-card-actions"><button class="task-check">${done?"✓ Виконано":"Позначити виконаним"}</button><button class="open-lesson-btn">Відкрити урок →</button></div>`;c.querySelector(".task-check").onclick=()=>toggleTask(i);c.querySelector(".open-lesson-btn").onclick=()=>{showTab("course");openLesson(i)};grid.appendChild(c)})}
function toggleTask(i){state.completedTasks=state.completedTasks.includes(i)?state.completedTasks.filter(x=>x!==i):[...state.completedTasks,i].sort((a,b)=>a-b);logActivity();save();renderAll();if($("#lessonOverlay").classList.contains("open")&&state.lastModule===i)syncLessonTaskButton()}
function syncLessonTaskButton(){const done=state.completedTasks.includes(state.lastModule);const b=$("#lessonTaskToggle");b.textContent=done?"✓ Виконано":"Позначити виконаним";b.classList.toggle("done",done)}

function renderResources(m){const items=m.practice.map(url=>{const isHR=url.includes("hackerrank"),isLC=url.includes("leetcode");return `<a class="resource-card" href="${url}" target="_blank" rel="noopener"><span>ПРАКТИКА</span><b>${isHR?"HackerRank":isLC?"LeetCode":"Spring Initializr"}</b><small>Відкрити платформу →</small></a>`}).join("");$("#lessonResources").innerHTML=`<a class="resource-card" href="${m.docs}" target="_blank" rel="noopener"><span>ДОКУМЕНТАЦІЯ</span><b>Офіційні матеріали</b><small>Відкрити документацію →</small></a><a class="resource-card" href="${m.video}" target="_blank" rel="noopener"><span>ВІДЕО</span><b>${m.group==="Spring Boot"?"Amigoscode":"Bro Code"}</b><small>Перейти до потрібної теми →</small></a>${items}`}
function renderLessonQuiz(){const m=modules[state.lastModule],form=$("#lessonQuiz");form.innerHTML=m.quiz.map((q,qi)=>`<div class="quiz-question"><b>${qi+1}. ${q.q}</b>${q.options.map((o,oi)=>`<label class="quiz-option"><input type="radio" name="q${qi}" value="${oi}"><span>${o}</span></label>`).join("")}</div>`).join("");const passed=!!state.quizPassed[String(state.lastModule)];$("#quizStatus").textContent=passed?"✓ Пройдено":"Потрібно пройти";$("#quizStatus").classList.toggle("passed",passed);$("#quizResult").textContent=passed?"Тест уже складено. Можна завершити урок.":"";updateCompleteButton()}
function updateCompleteButton(){const i=state.lastModule,passed=!!state.quizPassed[String(i)],done=state.completedModules.includes(i),b=$("#completeLesson");b.disabled=!passed&&!done;b.textContent=done?"✓ Урок пройдений":passed?"Завершити урок (+100 XP)":"Спочатку пройди тест"}
$("#checkQuizBtn").addEventListener("click",()=>{const m=modules[state.lastModule];let score=0;m.quiz.forEach((q,qi)=>{const v=$(`#lessonQuiz input[name="q${qi}"]:checked`);if(v&&Number(v.value)===q.answer)score++});const ok=score===m.quiz.length;$("#quizResult").className="quiz-result "+(ok?"good":"bad");$("#quizResult").textContent=ok?`Правильно ${score}/${m.quiz.length}. Тест пройдено — +30 XP.`:`Правильно ${score}/${m.quiz.length}. Переглянь пояснення і спробуй ще раз.`;if(ok&&!state.quizPassed[String(state.lastModule)]){state.quizPassed[String(state.lastModule)]=true;logActivity();save();renderAll()}renderLessonQuiz()});

function starterCodeFor(i){const m=modules[i];if(i>=9)return `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Spring topic: ${m.title}");\n        // Spring annotations require a real Spring Boot project.\n    }\n}`;if(m.code.includes("public class Main"))return m.code;return `public class Main {\n    public static void main(String[] args) {\n${m.code.split("\n").map(x=>"        "+x).join("\n")}\n    }\n}`}
$("#javaEditor").addEventListener("load",()=>setTimeout(()=>populateEditor(state.editorCode[String(state.lastModule)]||starterCodeFor(state.lastModule)),350));
$("#loadStarterCode").addEventListener("click",()=>{const code=starterCodeFor(state.lastModule);state.editorCode[String(state.lastModule)]=code;save();populateEditor(code)});
window.addEventListener("message",e=>{if(!e.data||!e.data.language)return;const files=e.data.files||e.data.code?.files;if(files&&files[0]?.content){state.editorCode[String(state.lastModule)]=files[0].content;clearTimeout(notesTimer);notesTimer=setTimeout(save,500)}});

function renderDifficultyButtons(){const cur=Number(state.difficulty[String(state.lastModule)]||0);$$("#difficultyButtons button").forEach(b=>b.classList.toggle("active",Number(b.dataset.difficulty)===cur))}
function openLesson(i){flushLessonTime();state.lastModule=i;logActivity();save();const m=modules[i];$("#lessonNumber").textContent=String(i+1).padStart(2,"0");$("#lessonCategory").textContent=`${m.group.toUpperCase()} · УРОК ${i+1}`;$("#lessonTitle").textContent=m.title;$("#lessonIntro").textContent=m.intro;$("#lessonContent").innerHTML=m.content.map(p=>`<p>${p}</p>`).join("");$("#lessonPoints").innerHTML=m.points.map(p=>`<li>${p}</li>`).join("");$("#lessonCode").textContent=m.code;$("#lessonTask").textContent=m.task;$("#lessonNotes").value=state.notes[String(i)]||"";$("#notesStatus").textContent="Збережено";renderResources(m);syncLessonTaskButton();renderDifficultyButtons();renderLessonQuiz();$("#lessonOverlay").classList.add("open");$("#lessonOverlay").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";startLessonTimer();renderModules();setTimeout(()=>populateEditor(state.editorCode[String(i)]||starterCodeFor(i)),650);loadLessonComments()}
function closeLesson(){flushLessonTime();$("#lessonOverlay").classList.remove("open");$("#lessonOverlay").setAttribute("aria-hidden","true");document.body.style.overflow="";renderAll()}
$("#closeLesson").onclick=closeLesson;$("#lessonOverlay").onclick=e=>{if(e.target.id==="lessonOverlay")closeLesson()};document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("#lessonOverlay").classList.contains("open"))closeLesson()});
$("#completeLesson").onclick=()=>{const i=state.lastModule;if(!state.quizPassed[String(i)]&&!state.completedModules.includes(i))return;if(!state.completedModules.includes(i)){state.completedModules.push(i);state.completedModules.sort((a,b)=>a-b);logActivity();save()}updateCompleteButton();renderAll()};
$("#lessonTaskToggle").onclick=()=>toggleTask(state.lastModule);$("#lessonNotes").oninput=e=>{state.notes[String(state.lastModule)]=e.target.value;$("#notesStatus").textContent="Зберігаю…";clearTimeout(notesTimer);notesTimer=setTimeout(()=>{save();logActivity();$("#notesStatus").textContent="Збережено"},350)};
$$("#difficultyButtons button").forEach(b=>b.onclick=()=>{state.difficulty[String(state.lastModule)]=Number(b.dataset.difficulty);logActivity();save();renderDifficultyButtons();updateProgress()});
$("#nextLesson").onclick=()=>openLesson(Math.min(state.lastModule+1,modules.length-1));$("#continueBtn").onclick=()=>openLesson(state.lastModule);

function updateProgress(){const done=state.completedModules.length,percent=Math.round(done/modules.length*100),li=levelInfo();$("#progressCount").textContent=`${done} з ${modules.length}`;$("#progressPercent").textContent=`${percent}%`;$("#progressRing").style.setProperty("--p",percent);$("#taskMiniCount").textContent=`${Math.min(state.completedTasks.filter(i=>i<5).length,5)} з 5`;$("#statModules").textContent=`${done}/${modules.length}`;$("#statTasks").textContent=`${state.completedTasks.length}/${tasks.length}`;$("#statOverall").textContent=`${Math.round((done+state.completedTasks.length)/(modules.length+tasks.length)*100)}%`;const total=Object.values(state.timeSpent).reduce((a,b)=>a+Number(b||0),0);$("#statTime").textContent=formatTime(total);$("#statStreak").textContent=`${calculateStreak()} днів`;$("#statConsistency").textContent=`${consistencyLast7()}/7`;$("#miniLevel").textContent=li.level;$("#miniXpBar").style.width=`${li.percent}%`;$("#miniXpText").textContent=`${li.xp} XP`;$("#levelLabel").textContent=`LEVEL ${li.level}`;$("#xpTotal").textContent=`${li.xp} XP`;$("#xpNext").textContent=`До наступного рівня: ${li.size-li.into} XP`;$("#xpBar").style.width=`${li.percent}%`;$("#badgeGrid").innerHTML=badges().map(([icon,title,desc,unlocked])=>`<div class="badge ${unlocked?"unlocked":""}"><i>${icon}</i><b>${title}</b><small>${desc}</small></div>`).join("");if(percent===0){$("#progressTitle").textContent="Починаємо";$("#progressText").textContent="Обери перший модуль і рухайся по одному кроку."}else if(percent<50){$("#progressTitle").textContent="Гарний початок!";$("#progressText").textContent="Тести, практика й XP вже фіксують твій прогрес."}else if(percent<100){$("#progressTitle").textContent="Більше половини";$("#progressText").textContent="Ти вже близько до першого Spring-проєкту."}else{$("#progressTitle").textContent="Курс завершено";$("#progressText").textContent="Тепер розширюй фінальний проєкт власними фічами."}renderTimeChart();renderHardLessons();renderProgressModules();renderPrintReport()}
function renderTimeChart(){const c=$("#timeChart");c.innerHTML="";const vals=modules.map((_,i)=>Number(state.timeSpent[String(i)]||0)),max=Math.max(...vals,1);modules.forEach((m,i)=>{const row=document.createElement("div");row.className="time-row";row.innerHTML=`<span>${String(i+1).padStart(2,"0")}</span><div><b>${m.title}</b><i><em style="width:${Math.max(2,vals[i]/max*100)}%"></em></i></div><small>${formatTime(vals[i])}</small>`;c.appendChild(row)})}
function renderHardLessons(){const box=$("#hardLessons");const ranked=modules.map((m,i)=>({i,title:m.title,d:Number(state.difficulty[String(i)]||0),t:Number(state.timeSpent[String(i)]||0)})).filter(x=>x.d||x.t).sort((a,b)=>(b.d*100000+b.t)-(a.d*100000+a.t)).slice(0,3);box.innerHTML=ranked.length?ranked.map((x,j)=>`<button class="hard-row" data-module="${x.i}"><span>${j+1}</span><div><b>${x.title}</b><small>${["Не оцінено","Легко","Нормально","Складно"][x.d]} · ${formatTime(x.t)}</small></div><i>→</i></button>`).join(""):`<p class="empty-state">Поки немає даних.</p>`;box.querySelectorAll(".hard-row").forEach(b=>b.onclick=()=>openLesson(Number(b.dataset.module)))}
function renderProgressModules(){const box=$("#progressModules");box.innerHTML="";modules.forEach((m,i)=>{const done=state.completedModules.includes(i),r=document.createElement("div");r.className="progress-row"+(done?" done":"");r.innerHTML=`<span class="dot">${done?"✓":i+1}</span><b>${m.title}<small>${m.group} · ${formatTime(state.timeSpent[String(i)]||0)} · тест ${state.quizPassed[String(i)]?"✓":"—"}</small></b><span>${done?"Завершено":i===state.lastModule?"Поточний":"Не пройдено"}</span>`;r.onclick=()=>{showTab("course");openLesson(i)};box.appendChild(r)})}
function renderAll(){renderModules();renderQuickTasks();renderTasks();updateProgress();renderCommunitySelectors();renderCommunityLocal();}

function showTab(name){$$(".tab").forEach(t=>t.classList.toggle("active",t.dataset.tab===name));$$(".view").forEach(v=>v.classList.remove("active"));const target=$(`#${name}View`);if(target){target.classList.add("active");if(name==="game")target.animate([{opacity:0,transform:"translateY(18px)"},{opacity:1,transform:"translateY(0)"}],{duration:420,easing:"ease-out"})}if(name==="community"){loadCommunityComments();loadReviews(true)}window.scrollTo({top:0,behavior:"smooth"})}
$$(".tab").forEach(t=>t.onclick=()=>showTab(t.dataset.tab));$$("#courseFilters .filter-chip").forEach(b=>b.onclick=()=>{courseFilter=b.dataset.filter;$$("#courseFilters .filter-chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderModules()});$$("#taskFilters .filter-chip").forEach(b=>b.onclick=()=>{taskFilter=b.dataset.filter;$$("#taskFilters .filter-chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderTasks()});

function clearNode(node){while(node.firstChild)node.removeChild(node.firstChild)}
function textEl(tag,className,text){
  const el=document.createElement(tag);
  if(className)el.className=className;
  el.textContent=String(text??"");
  return el;
}
function renderCommentList(target,comments){
  const box=$(target);clearNode(box);
  if(!comments.length){box.appendChild(textEl("p","empty-state","Поки немає повідомлень."));return}
  comments.forEach(c=>{
    const article=textEl("article","comment-card","");
    const header=document.createElement("header");
    header.appendChild(textEl("b","",c.displayName||"Student"));
    header.appendChild(textEl("time","",new Date(c.createdAt||Date.now()).toLocaleString("uk-UA")));
    article.appendChild(header);
    article.appendChild(textEl("p","",c.text));
    box.appendChild(article);
  });
}
function localCommentsFor(moduleIndex){return state.localComments.filter(c=>Number(c.moduleIndex)===Number(moduleIndex))}
async function fetchComments(moduleIndex){
  if(!isAuthenticated())return localCommentsFor(moduleIndex);
  try{const d=await api(`/community/comments?module=${moduleIndex}`);setSyncStatus("online",true);return d}
  catch{return localCommentsFor(moduleIndex)}
}
async function postComment(moduleIndex,text){
  if(!text.trim())return;
  const payload={moduleIndex,text:text.trim()};
  if(isAuthenticated()){
    try{await api("/community/comments",{method:"POST",body:JSON.stringify(payload)});setSyncStatus("online",true);return}
    catch(e){if(e.status===429){setSyncStatus("rate limited");return}}
  }
  state.localComments.unshift({...payload,displayName:authorName(),id:"local-"+Date.now(),createdAt:new Date().toISOString()});save();
}
async function loadLessonComments(){const comments=await fetchComments(state.lastModule);renderCommentList("#lessonComments",comments)}
$("#lessonCommentBtn").onclick=async()=>{const e=$("#lessonCommentInput");await postComment(state.lastModule,e.value);e.value="";await loadLessonComments();if(Number($("#communityModuleSelect").value)===state.lastModule)loadCommunityComments()};
function renderCommunitySelectors(){for(const id of ["#communityModuleSelect","#reviewModuleSelect"]){const sel=$(id);if(!sel)return;const current=sel.value;clearNode(sel);modules.forEach((m,i)=>{const o=document.createElement("option");o.value=String(i);o.textContent=`${i+1}. ${m.title}`;sel.appendChild(o)});if(current)sel.value=current;else sel.value=String(state.lastModule)}}
async function loadCommunityComments(){const i=Number($("#communityModuleSelect").value||0);renderCommentList("#communityComments",await fetchComments(i))}
$("#communityModuleSelect").onchange=loadCommunityComments;$("#postCommentBtn").onclick=async()=>{const e=$("#communityCommentInput");await postComment(Number($("#communityModuleSelect").value),e.value);e.value="";loadCommunityComments()};

let reviewPage=0;
let reviewHasMore=false;
let reviewItems=[];
function localReviewFeedback(reviewId){const r=state.localReviews.find(x=>String(x.id)===String(reviewId));return r?.feedback||[]}
async function fetchReviews(page=0){
  if(!isAuthenticated()){
    const size=10,start=page*size,content=state.localReviews.slice(start,start+size);
    return {content,page,size,totalElements:state.localReviews.length,totalPages:Math.ceil(state.localReviews.length/size)};
  }
  return await api(`/community/reviews?page=${page}&size=10`);
}
async function postReview(){
  const title=$("#reviewTitleInput").value.trim(),code=$("#reviewCodeInput").value.trim(),moduleIndex=Number($("#reviewModuleSelect").value);
  if(!title||!code)return;
  const p={moduleIndex,title,code};
  if(isAuthenticated()){
    try{await api("/community/reviews",{method:"POST",body:JSON.stringify(p)})}
    catch(e){if(e.status===429){setSyncStatus("rate limited");return}else{return}}
  }else{
    state.localReviews.unshift({...p,displayName:authorName(),id:"local-"+Date.now(),createdAt:new Date().toISOString(),feedback:[]});save();
  }
  $("#reviewTitleInput").value="";$("#reviewCodeInput").value="";loadReviews(true);
}
async function postFeedback(reviewId,text){
  if(!text.trim())return;
  const p={text:text.trim()};
  if(String(reviewId).startsWith("local-")){
    const r=state.localReviews.find(x=>String(x.id)===String(reviewId));
    if(r){r.feedback=r.feedback||[];r.feedback.push({...p,displayName:authorName(),createdAt:new Date().toISOString()});save()}
  }else{
    try{await api(`/community/reviews/${reviewId}/feedback`,{method:"POST",body:JSON.stringify(p)})}
    catch{return}
  }
  loadReviews(true);
}
function reviewCard(r){
  const card=textEl("article","review-card","");
  card.dataset.review=String(r.id);
  const header=document.createElement("header");
  const title=textEl("h4","",`${r.title} · ${modules[Number(r.moduleIndex)]?.title||"Java"}`);
  const author=textEl("small","",r.displayName||"Student");
  header.append(title,author);
  card.appendChild(header);
  card.appendChild(textEl("pre","",r.code));

  const feedbackBox=textEl("div","feedback-list","");
  (r.feedback||[]).forEach(f=>{
    const row=textEl("div","feedback","");
    const who=textEl("b","",`${f.displayName||"Student"}: `);
    row.appendChild(who);
    row.appendChild(document.createTextNode(String(f.text??"")));
    feedbackBox.appendChild(row);
  });
  card.appendChild(feedbackBox);

  const compose=textEl("div","feedback-compose","");
  const input=document.createElement("input");input.placeholder="Залишити відгук по коду";
  const button=textEl("button","","Надіслати");
  button.onclick=()=>postFeedback(r.id,input.value);
  compose.append(input,button);
  card.appendChild(compose);
  return card;
}
function renderReviewFeed(){
  const box=$("#reviewFeed");clearNode(box);
  if(!reviewItems.length){box.appendChild(textEl("p","empty-state","Ще немає коду на review."));}
  else reviewItems.forEach(r=>box.appendChild(reviewCard(r)));
  const more=$("#loadMoreReviewsBtn");
  if(more)more.classList.toggle("hidden",!reviewHasMore);
}
async function loadReviews(reset=true){
  try{
    if(reset){reviewPage=0;reviewItems=[]}
    const pageData=await fetchReviews(reviewPage);
    const content=Array.isArray(pageData)?pageData:(pageData.content||[]);
    reviewItems=reset?content:[...reviewItems,...content];
    const totalPages=Number(pageData.totalPages||1);
    reviewHasMore=reviewPage+1<totalPages;
    renderReviewFeed();
  }catch{
    if(reset){reviewItems=state.localReviews.slice(0,10);reviewPage=0;reviewHasMore=state.localReviews.length>10;renderReviewFeed()}
  }
}
$("#loadMoreReviewsBtn").onclick=async()=>{reviewPage++;await loadReviews(false)};
$("#postReviewBtn").onclick=postReview;
function renderCommunityLocal(){if($("#communityComments"))renderCommentList("#communityComments",localCommentsFor(Number($("#communityModuleSelect").value||0)))}

function exportPayload(){return {app:"Grow With Code — Java Spring",exportedAt:new Date().toISOString(),xp:xpTotal(),level:levelInfo().level,completedModules:state.completedModules.map(i=>({index:i+1,title:modules[i].title})),completedTasks:state.completedTasks.map(i=>({index:i+1,lesson:modules[i].title,task:modules[i].task})),quizPassed:state.quizPassed,notes:modules.map((m,i)=>({lesson:i+1,title:m.title,note:state.notes[String(i)]||""})).filter(x=>x.note),timeSpentSeconds:modules.map((m,i)=>({lesson:i+1,title:m.title,seconds:Number(state.timeSpent[String(i)]||0)})),difficulty:state.difficulty,activityDays:state.activityDays,streak:calculateStreak(),consistencyLast7Days:consistencyLast7()}}
$("#exportJsonBtn").onclick=()=>{const blob=new Blob([JSON.stringify(exportPayload(),null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=`java-spring-progress-${localDay()}.json`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url)};
function renderPrintReport(){const total=Object.values(state.timeSpent).reduce((a,b)=>a+Number(b||0),0);$("#printReport").innerHTML=`<h1>Grow With Code — прогрес Java Spring</h1><p>Дата: ${new Date().toLocaleDateString("uk-UA")}</p><div class="print-stats"><b>${state.completedModules.length}/${modules.length} модулів</b><b>${state.completedTasks.length}/${tasks.length} завдань</b><b>${formatTime(total)}</b><b>${xpTotal()} XP</b></div><h2>Навчальний шлях</h2>${modules.map((m,i)=>`<div class="print-row"><span>${i+1}. ${m.title}</span><span>${state.completedModules.includes(i)?"Завершено":"Не завершено"} · тест ${state.quizPassed[String(i)]?"✓":"—"}</span></div>`).join("")}`}
$("#exportPdfBtn").onclick=()=>{renderPrintReport();document.body.classList.add("printing");window.print();setTimeout(()=>document.body.classList.remove("printing"),500)};window.addEventListener("afterprint",()=>document.body.classList.remove("printing"));
function escapeHtml(s){return String(s??"").replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[c]))}
$("#resetBtn").onclick=()=>{$("#resetModal").classList.add("open");$("#resetModal").setAttribute("aria-hidden","false")};function closeResetModal(){$("#resetModal").classList.remove("open");$("#resetModal").setAttribute("aria-hidden","true")}$("#cancelReset").onclick=closeResetModal;$("#resetModal").onclick=e=>{if(e.target.id==="resetModal")closeResetModal()};$("#confirmReset").onclick=()=>{Object.assign(state,{completedModules:[],completedTasks:[],lastModule:0,notes:{},timeSpent:{},difficulty:{},activityDays:[],quizPassed:{},editorCode:{},localComments:[],localReviews:[]});save();closeResetModal();renderAll()};
document.addEventListener("visibilitychange",()=>{if(document.hidden)flushLessonTime();else if($("#lessonOverlay").classList.contains("open"))startLessonTimer()});window.addEventListener("beforeunload",flushLessonTime);
renderAll();


/* =========================
   v4: JWT auth + cloud account sync + native Docker code runner
   ========================= */
state.token = sessionStorage.getItem("gwc_token") || "";
state.authUser = (() => {
  try { return JSON.parse(sessionStorage.getItem("gwc_user") || "null"); }
  catch { return null; }
})();
state.offlineDemo = localStorage.getItem("gwc_offline_demo") === "1";
let authMode = "login";

function persistAuth(){
  if(state.token) sessionStorage.setItem("gwc_token", state.token); else sessionStorage.removeItem("gwc_token");
  if(state.authUser) sessionStorage.setItem("gwc_user", JSON.stringify(state.authUser)); else sessionStorage.removeItem("gwc_user");
  localStorage.removeItem("gwc_token");
  localStorage.removeItem("gwc_user");
  localStorage.setItem("gwc_offline_demo", state.offlineDemo ? "1" : "0");
}
function isAuthenticated(){ return !!state.token && !!state.authUser; }
function authorName(){ return state.authUser?.displayName || state.displayName || "Student"; }
function updateAccountUi(){
  const name=$("#accountName"),button=$("#accountButton"),desc=$("#syncDescription");
  if(isAuthenticated()){
    name.textContent=state.authUser.displayName;
    button.textContent="Вийти";
    if(desc)desc.textContent=`${state.authUser.email} · прогрес автоматично зберігається у PostgreSQL.`;
  }else{
    name.textContent=state.offlineDemo?"LOCAL MODE":"GUEST";
    button.textContent="Увійти";
    if(desc)desc.textContent="Увійди в акаунт — прогрес буде автоматично синхронізуватися з PostgreSQL через захищений JWT API.";
  }
}
function showAuth(mode="login"){
  authMode=mode;
  const register=authMode==="register";
  $("#authTitle").textContent=register?"Створити акаунт":"Увійти";
  $("#authSubtitle").textContent=register?"Один акаунт — той самий прогрес на різних пристроях.":"Прогрес синхронізується між пристроями через твій акаунт.";
  $("#authDisplayName").classList.toggle("hidden",!register);
  $("#authSubmit").textContent=register?"Зареєструватися":"Увійти";
  $("#authSwitch").textContent=register?"Вже є акаунт? Увійти":"Немає акаунта? Зареєструватися";
  $("#authPassword").setAttribute("autocomplete",register?"new-password":"current-password");
  $("#authStatus").textContent="";
  $("#authModal").classList.add("open");
  $("#authModal").setAttribute("aria-hidden","false");
}
function hideAuth(){ $("#authModal").classList.remove("open"); $("#authModal").setAttribute("aria-hidden","true"); }
function launchApp(skip=false){
  const intro=$("#intro"),app=$("#app");
  const finish=()=>{intro.classList.add("exit");app.classList.remove("is-hidden");updateAccountUi();if(!isAuthenticated()&&!state.offlineDemo)setTimeout(()=>showAuth("login"),180)};
  if(skip){finish();return;}
  $("#leafButton").classList.add("fly");setTimeout(finish,650);
}

async function api(path,options={}){
  const headers={"Content-Type":"application/json",...(options.headers||{})};
  if(state.token) headers.Authorization=`Bearer ${state.token}`;
  const r=await fetch(API_BASE+path,{...options,headers});
  const raw=await r.text();
  let data=null;try{data=raw?JSON.parse(raw):null}catch{data=raw}
  if(!r.ok){
    if(r.status===401 && !path.startsWith("/auth/")){state.token="";state.authUser=null;persistAuth();updateAccountUi();}
    const message=(data&&data.message)||`HTTP ${r.status}`;
    const err=new Error(message);err.status=r.status;throw err;
  }
  return data;
}
async function submitAuth(){
  const email=$("#authEmail").value.trim(),password=$("#authPassword").value,displayName=$("#authDisplayName").value.trim();
  const status=$("#authStatus");status.className="auth-status";status.textContent="З'єднання…";
  if(!email||!password||(authMode==="register"&&!displayName)){status.textContent="Заповни всі поля.";return;}
  try{
    const payload=authMode==="register"?{email,password,displayName}:{email,password};
    const result=await api(`/auth/${authMode}`,{method:"POST",body:JSON.stringify(payload)});
    state.token=result.token;state.authUser=result.user;state.displayName=result.user.displayName;state.offlineDemo=false;persistAuth();localStorage.setItem("gwc_displayName",state.displayName);
    status.className="auth-status ok";status.textContent="Готово ✓";hideAuth();updateAccountUi();
    const loaded=await cloudLoad(true);
    if(!loaded)await cloudSave(true);
  }catch(e){
    status.textContent=e.status===409?"Цей email уже зареєстрований.":
      e.status===401?"Невірний email або пароль.":
      e.status===429?"Забагато спроб. Спробуй через хвилину.":
      e.status===400?"Перевір email і пароль (мінімум 10 символів).":
      "Backend недоступний або дані некоректні.";
  }
}
$("#authSubmit").onclick=submitAuth;
$("#authSwitch").onclick=()=>showAuth(authMode==="login"?"register":"login");
$("#offlineDemoBtn").onclick=()=>{state.offlineDemo=true;persistAuth();hideAuth();updateAccountUi();setSyncStatus("local");};
$("#accountButton").onclick=async()=>{
  if(isAuthenticated()){
    try{await api("/auth/logout",{method:"POST"})}catch{}
    state.token="";state.authUser=null;state.offlineDemo=false;persistAuth();updateAccountUi();setSyncStatus("offline");showAuth("login");
  }else showAuth("login");
};

function cloudPayload(){return {completedModules:state.completedModules,completedTasks:state.completedTasks,lastModule:state.lastModule,notes:state.notes,timeSpent:state.timeSpent,difficulty:state.difficulty,activityDays:state.activityDays,quizPassed:state.quizPassed,editorCode:state.editorCode}}
function applyCloudPayload(p){if(!p)return;for(const k of ["completedModules","completedTasks","lastModule","notes","timeSpent","difficulty","activityDays","quizPassed","editorCode"])if(p[k]!==undefined)state[k]=p[k];saveLocalOnly();renderAll()}
function saveLocalOnly(){
  localStorage.setItem("gwc_modules",JSON.stringify(state.completedModules));localStorage.setItem("gwc_tasks",JSON.stringify(state.completedTasks));localStorage.setItem("gwc_lastModule",state.lastModule);
  localStorage.setItem("gwc_notes",JSON.stringify(state.notes));localStorage.setItem("gwc_timeSpent",JSON.stringify(state.timeSpent));localStorage.setItem("gwc_difficulty",JSON.stringify(state.difficulty));
  localStorage.setItem("gwc_activityDays",JSON.stringify(state.activityDays));localStorage.setItem("gwc_quizPassed",JSON.stringify(state.quizPassed));localStorage.setItem("gwc_editorCode",JSON.stringify(state.editorCode));
  localStorage.setItem("gwc_localComments",JSON.stringify(state.localComments));localStorage.setItem("gwc_localReviews",JSON.stringify(state.localReviews));localStorage.setItem("gwc_displayName",state.displayName);
}
function setSyncStatus(text,ok=false){const e=$("#syncStatus");if(e){e.textContent=text;e.className=ok?"sync-ok":"sync-error"}if($("#discussionMode"))$("#discussionMode").textContent=ok?"cloud":"local";if($("#lessonDiscussionMode"))$("#lessonDiscussionMode").textContent=ok?"cloud":"local"}
async function cloudSave(silent=false){
  if(!isAuthenticated()){if(!silent)setSyncStatus("login required");return false}
  try{await api("/progress",{method:"PUT",body:JSON.stringify({payload:cloudPayload()})});setSyncStatus("synced",true);return true}catch{if(!silent)setSyncStatus("backend offline");return false}
}
async function cloudLoad(silent=false){
  if(!isAuthenticated()){if(!silent)setSyncStatus("login required");return false}
  try{const d=await api("/progress");if(d?.payload)applyCloudPayload(d.payload);setSyncStatus("synced",true);return !!d?.payload}catch{if(!silent)setSyncStatus("backend offline");return false}
}
function scheduleAutoSync(){clearTimeout(syncTimer);if(!isAuthenticated())return;syncTimer=setTimeout(()=>cloudSave(true),1200)}

function populateEditor(code){const editor=$("#javaEditor");if(editor)editor.value=code||""}
$("#javaEditor").addEventListener("input",e=>{state.editorCode[String(state.lastModule)]=e.target.value;clearTimeout(notesTimer);notesTimer=setTimeout(save,400)});
$("#runCodeBtn").onclick=async()=>{
  const source=$("#javaEditor").value,status=$("#codeRunStatus"),out=$("#codeOutput");
  state.editorCode[String(state.lastModule)]=source;save();out.className="code-output";status.textContent="Запуск sandbox…";out.textContent="";
  if(!isAuthenticated()){out.classList.add("bad");out.textContent="Увійди в акаунт, щоб запускати код на backend.";status.textContent="Потрібна авторизація";return}
  try{const r=await api("/code/run",{method:"POST",body:JSON.stringify({source})});out.textContent=r.output||"(без виводу)";out.classList.add(r.ok?"ok":"bad");status.textContent=r.timedOut?"Перевищено ліміт часу":`${r.ok?"Успішно":"Помилка"} · ${r.durationMs} ms`;}
  catch(e){out.classList.add("bad");out.textContent=e.status===503?"Code Runner вимкнений. У docker-compose увімкни CODE_RUNNER_ENABLED=true та доступ до Docker daemon.":"Не вдалося запустити код: "+e.message;status.textContent="Runner offline";}
};

// Replace the previous v3 OneCompiler behavior with the native textarea.
const previousOpenLesson=openLesson;
openLesson=function(i){previousOpenLesson(i);populateEditor(state.editorCode[String(i)]||starterCodeFor(i));$("#codeOutput").textContent="Результат з'явиться тут.";$("#codeOutput").className="code-output";$("#codeRunStatus").textContent="Готово до запуску";};

updateAccountUi();
if(isAuthenticated())setTimeout(()=>cloudLoad(true),250);


// Java: Місто роботів. Це маленький parser/interpreter навчальної підмножини, не JVM.
const robotMissions=[
{title:"Перші кроки",topic:"Команди",text:"Дійди до бази. Робот дивиться праворуч.",start:[0,2,"E"],base:[3,2],walls:[],resources:[],goal:"base",starter:"robot.move();\nrobot.move();\n// допиши ще одну команду",theory:"<p><code>robot.move()</code> — метод ігрового об’єкта <b>robot</b>, а не вбудована команда Java. Один виклик = один крок.</p>",hints:["Порахуй клітинки до бази.","Кожен move() дає один крок.","Додай третій robot.move();"]},
{title:"Поворот до бази",topic:"Команди",text:"Пройди маршрут і дістанься бази.",start:[0,4,"E"],base:[2,2],walls:[],resources:[],goal:"base",starter:"robot.move();\nrobot.move();\n// тепер треба повернути",theory:"<p><code>turnLeft()</code> та <code>turnRight()</code> змінюють напрямок на 90°. Після повороту move() рухає в новому напрямку.</p>",hints:["Спочатку вправо, потім вгору.","Після двох move() зроби turnLeft().","Потім ще два move()."]},
{title:"Перша деталь",topic:"Команди",text:"Збери деталь і повернись на базу.",start:[0,2,"E"],base:[0,2],walls:[],resources:[[2,2]],goal:"allResourcesBase",starter:"robot.move();\nrobot.move();\nrobot.collect();\n// повернися",theory:"<p><code>collect()</code> працює лише на клітинці з ⚙️. Два повороти праворуч розвертають робота назад.</p>",hints:["Після collect робот дивиться праворуч.","Зроби два turnRight().","Потім два move()."]},
{title:"Ряд деталей",topic:"for",text:"Збери 3 деталі в рядку через for.",start:[0,1,"E"],base:[0,1],walls:[],resources:[[1,1],[2,1],[3,1]],goal:"allResources",starter:"for (int i = 0; i < 3; i++) {\n    robot.move();\n    robot.collect();\n}",theory:"<p><code>for</code> повторює блок. Старт: i=0, умова: i&lt;3, після повтору: i++.</p>",hints:["Повтори move + collect тричі.","Обидві команди мають бути в { }.","Каркас уже показує рішення — запусти покроково."]},
{title:"Довга дорога",topic:"for",text:"Дійди до бази за 4 клітинки через for.",start:[0,4,"E"],base:[4,4],walls:[],resources:[],goal:"base",starter:"for (int i = 0; i < 4; i++) {\n    // команда\n}",theory:"<p>Цикл прибирає дублювання: замість чотирьох однакових рядків — один рядок у for.</p>",hints:["Яку дію повторювати?","Потрібен robot.move().","Встав move всередину циклу."]},
{title:"Маршрут квадратом",topic:"for",text:"Збери 3 деталі по квадрату і повернись на базу.",start:[1,1,"E"],base:[1,1],walls:[],resources:[[3,1],[3,3],[1,3]],goal:"allResourcesBase",starter:"for (int side = 0; side < 3; side++) {\n    robot.move();\n    robot.move();\n    robot.collect();\n    robot.turnRight();\n}\n// остання сторона",theory:"<p>У тілі for може бути багато команд. Один повтор тут проходить цілу сторону маршруту.</p>",hints:["Після циклу лишається остання сторона.","Поверни праворуч і зроби два кроки.","Додай turnRight(); move(); move();"]},
{title:"Перешкода",topic:"if / else",text:"Попереду стіна. Перевір шлях і обійди її.",start:[0,2,"E"],base:[4,2],walls:[[1,2]],resources:[],goal:"base",starter:"if (robot.isPathClear()) {\n    robot.move();\n} else {\n    // обхід\n}",theory:"<p><code>isPathClear()</code> повертає boolean. Якщо true — виконується if, інакше else.</p>",hints:["Обійди стіну зверху.","У else спочатку turnLeft().","Побудуй обхід і повернись у ряд бази."]},
{title:"Збирати чи йти",topic:"for + if",text:"Пройди ряд і збирай деталь тільки якщо вона є.",start:[0,0,"E"],base:[4,0],walls:[],resources:[[1,0],[3,0]],goal:"allResourcesBase",starter:"for (int i = 0; i < 4; i++) {\n    robot.move();\n    if (robot.isOnResource()) {\n        robot.collect();\n    }\n}",theory:"<p>if може бути всередині for. Після кожного кроку перевіряється поточна клітинка.</p>",hints:["Каркас показує правильну ідею.","Перевірка має бути після move().","Запусти й дивись кроки."]},
{title:"Безпечний рух",topic:"for + if",text:"Якщо шлях вільний — йди, інакше поверни ліворуч. Дійди до бази.",start:[0,4,"E"],base:[1,2],walls:[[2,4]],resources:[],goal:"base",starter:"for (int i = 0; i < 4; i++) {\n    if (robot.isPathClear()) {\n        robot.move();\n    } else {\n        robot.turnLeft();\n    }\n}",theory:"<p>for відповідає за повторення, if/else — за вибір. Так з’являється простий алгоритм поведінки.</p>",hints:["Виконай код покроково.","Коли стіна — робот поверне вгору.","Чотирьох повторів достатньо."]},
{title:"Ремонтна місія",topic:"for + if",text:"Збери 3 деталі та дістанься бази.",start:[0,4,"E"],base:[4,2],walls:[],resources:[[1,4],[3,4],[4,3]],goal:"allResourcesBase",starter:"for (int i = 0; i < 4; i++) {\n    robot.move();\n    if (robot.isOnResource()) {\n        robot.collect();\n    }\n}\nrobot.turnLeft();\nfor (int i = 0; i < 2; i++) {\n    robot.move();\n    if (robot.isOnResource()) {\n        robot.collect();\n    }\n}",theory:"<p>Фінал поєднує методи robot, for та if. Перевіряється результат місії, а не точний текст рішення.</p>",hints:["Спочатку пройди нижній ряд.","Потім поверни вгору.","Каркас майже готовий — досліди його покроково."]}
];
let rg={mission:0,x:0,y:0,dir:"E",resources:[],collected:0,running:false,stopped:false,actions:0,hint:0,queue:[],pc:0};
const rdirs=["N","E","S","W"],rdelta={N:[0,-1],E:[1,0],S:[0,1],W:[-1,0]};
function rm(){return robotMissions[rg.mission]} function rlog(t,c=""){const e=$("#robotConsole");e.textContent=t;e.className="robot-console "+c}
function rlines(){const e=$("#robotCode");$("#robotLineNumbers").textContent=e.value.split("\n").map((_,i)=>i+1).join("\n")}
function rclear(){const d=rdelta[rg.dir],nx=rg.x+d[0],ny=rg.y+d[1],m=rm();return nx>=0&&nx<5&&ny>=0&&ny<5&&!m.walls.some(w=>w[0]===nx&&w[1]===ny)}
function ron(){return rg.resources.some(r=>r[0]===rg.x&&r[1]===rg.y)}
function rrender(){const m=rm(),g=$("#robotGrid");g.innerHTML="";for(let y=0;y<5;y++)for(let x=0;x<5;x++){const c=document.createElement("div");c.className="robot-cell";let q="";if(m.walls.some(w=>w[0]===x&&w[1]===y))q="🧱";if(rg.resources.some(r=>r[0]===x&&r[1]===y))q="⚙️";if(m.base[0]===x&&m.base[1]===y)q="🏠";if(rg.x===x&&rg.y===y){c.classList.add("robot-here");q=`<span class="robot-avatar dir-${rg.dir}">🤖</span>`}c.innerHTML=q;g.appendChild(c)}$("#robotStatus").textContent=rg.running?"виконується":`x:${rg.x} y:${rg.y} ${rg.dir}`;$("#robotVariables").innerHTML=`<span>collected = ${rg.collected}</span><span>actions = ${rg.actions}</span><span>direction = ${rg.dir}</span>`}
function rreset(keep=true){const m=rm();rg.x=m.start[0];rg.y=m.start[1];rg.dir=m.start[2];rg.resources=m.resources.map(x=>[...x]);rg.collected=0;rg.running=false;rg.stopped=false;rg.actions=0;rg.queue=[];rg.pc=0;rg.hint=0;if(!keep)$("#robotCode").value=m.starter;rrender();rlog("Готово. Напиши код і натисни «Запустити».");rlines()}
function rload(i){rg.mission=Math.max(0,Math.min(i,robotMissions.length-1));const m=rm();$("#gameMissionTitle").textContent=`Місія ${rg.mission+1}. ${m.title}`;$("#gameMissionText").textContent=m.text;$("#gameTopic").textContent=m.topic;$("#gameTheory").innerHTML=m.theory;$("#gameProgressText").textContent=`${rg.mission+1} / ${robotMissions.length}`;$("#gameProgressBar").style.width=`${(rg.mission+1)/robotMissions.length*100}%`;$("#gameHintBox").classList.add("hidden");$("#robotCode").value=m.starter;rreset(true)}
function ract(a){if(++rg.actions>120)throw Error("Ліміт 120 дій. Можливий нескінченний/занадто довгий цикл.");if(a==="move"){if(!rclear())throw Error("robot.move(): попереду перешкода або край поля.");const d=rdelta[rg.dir];rg.x+=d[0];rg.y+=d[1]}else if(a==="left")rg.dir=rdirs[(rdirs.indexOf(rg.dir)+3)%4];else if(a==="right")rg.dir=rdirs[(rdirs.indexOf(rg.dir)+1)%4];else if(a==="collect"){const i=rg.resources.findIndex(r=>r[0]===rg.x&&r[1]===rg.y);if(i<0)throw Error("robot.collect(): тут немає деталі.");rg.resources.splice(i,1);rg.collected++}rrender()}
function rtokens(src){const o=[];let i=0;while(i<src.length){if(/\s/.test(src[i])){i++;continue}if(src.slice(i,i+2)==="//"){while(i<src.length&&src[i]!="\n")i++;continue}if(src.slice(i,i+2)==="++"){o.push("++");i+=2;continue}if("{}();.<>=+-".includes(src[i])){o.push(src[i++]);continue}const m=src.slice(i).match(/^[A-Za-z_][A-Za-z0-9_]*/)||src.slice(i).match(/^\d+/);if(m){o.push(m[0]);i+=m[0].length;continue}throw Error("Невідомий символ: "+src[i])}return o}
function rparse(src){const t=rtokens(src);let p=0,pk=()=>t[p],tk=x=>{if(x&&t[p]!==x)throw Error(`Очікувалось '${x}', отримано '${t[p]??"кінець"}'`);return t[p++]};function cond(){tk("robot");tk(".");const n=tk();tk("(");tk(")");if(n==="isPathClear")return()=>rclear();if(n==="isOnResource")return()=>ron();throw Error("Доступні умови isPathClear() та isOnResource()")}function block(){const a=[];tk("{");while(pk()&&pk()!=="}")a.push(stmt());tk("}");return a}function stmt(){if(pk()==="robot"){tk("robot");tk(".");const n=tk();tk("(");tk(")");tk(";");const m={move:"move",turnLeft:"left",turnRight:"right",collect:"collect"};if(!m[n])throw Error("Метод robot."+n+"() не підтримується");return{type:"act",a:m[n]}}if(pk()==="for"){tk("for");tk("(");tk("int");const v=tk();tk("=");const s=+tk();tk(";");tk(v);tk("<");const e=+tk();tk(";");tk(v);tk("++");tk(")");return{type:"for",count:Math.max(0,e-s),body:block()}}if(pk()==="if"){tk("if");tk("(");const c=cond();tk(")");const yes=block();let no=[];if(pk()==="else"){tk("else");no=block()}return{type:"if",cond:c,yes,no}}throw Error("Не розумію конструкцію біля '"+pk()+"'")}const a=[];while(pk())a.push(stmt());return a}
function rcompile(ast,out=[]){for(const s of ast){if(s.type==="act")out.push(s);else if(s.type==="for"){if(s.count>30)throw Error("Цикл обмежено 30 повтореннями.");for(let i=0;i<s.count;i++)rcompile(s.body,out)}else if(s.type==="if")out.push({type:"branch",cond:s.cond,yes:s.yes,no:s.no})}return out}
function rgoal(){const m=rm(),base=rg.x===m.base[0]&&rg.y===m.base[1],all=!rg.resources.length;return m.goal==="base"?base:m.goal==="allResources"?all:all&&base}
async function rone(){if(rg.pc>=rg.queue.length)return false;const s=rg.queue[rg.pc++];if(s.type==="branch"){rg.queue.splice(rg.pc,0,...rcompile(s.cond()?s.yes:s.no,[]));return rone()}ract(s.a);rlog(`Крок ${rg.actions}: ${s.a}\nПозиція (${rg.x}, ${rg.y}), напрямок ${rg.dir}`);return true}
async function rrun(){if(rg.running)return;try{rreset(true);rg.queue=rcompile(rparse($("#robotCode").value),[]);rg.running=true;rg.stopped=false;rrender();const start=Date.now();while(rg.pc<rg.queue.length&&!rg.stopped){if(Date.now()-start>5000)throw Error("Виконання зупинено після 5 секунд.");await rone();await new Promise(r=>setTimeout(r,240))}rg.running=false;rrender();if(rg.stopped)return rlog("Виконання зупинено.");if(rgoal()){rlog("✅ Місію виконано!","good");const a=JSON.parse(localStorage.getItem("robotCityPassed")||"[]");if(!a.includes(rg.mission)){a.push(rg.mission);localStorage.setItem("robotCityPassed",JSON.stringify(a))}if(rg.mission<robotMissions.length-1)setTimeout(()=>rload(rg.mission+1),800)}else rlog("Код завершився, але мета ще не досягнута.","bad")}catch(e){rg.running=false;rrender();rlog("❌ "+e.message,"bad")}}
document.addEventListener("DOMContentLoaded",()=>{if(!$("#robotGrid"))return;rload(0);$("#robotCode").oninput=rlines;$("#robotRun").onclick=rrun;$("#robotStop").onclick=()=>{rg.stopped=true;rg.running=false;rrender()};$("#robotReset").onclick=()=>rreset(true);$("#robotStep").onclick=async()=>{try{if(!rg.queue.length||rg.pc>=rg.queue.length){rreset(true);rg.queue=rcompile(rparse($("#robotCode").value),[])}await rone();if(rg.pc>=rg.queue.length)rlog(rgoal()?"✅ Мета досягнута!":"Код завершено. Мета ще не досягнута.",rgoal()?"good":"bad")}catch(e){rlog("❌ "+e.message,"bad")}};$("#robotHint").onclick=()=>{const m=rm(),b=$("#gameHintBox");b.classList.remove("hidden");b.textContent=`Підказка ${Math.min(rg.hint+1,3)}/3: ${m.hints[Math.min(rg.hint,2)]}`;rg.hint=Math.min(2,rg.hint+1)}})


// ===== v4: extra Robot City missions, leaderboard, achievements, practice, adaptive help =====
robotMissions.push(
{title:"Подвійний цикл",topic:"nested for",text:"Збери 4 деталі у квадраті 2×2. Познайомся з вкладеним for.",start:[0,0,"E"],base:[0,0],walls:[],resources:[[1,0],[2,0],[2,1],[1,1]],goal:"allResources",starter:"for (int row = 0; row < 2; row++) {\n    for (int step = 0; step < 2; step++) {\n        robot.move();\n        if (robot.isOnResource()) { robot.collect(); }\n    }\n    robot.turnRight();\n}",theory:"<p><b>Nested for</b> — цикл усередині циклу. Зовнішній цикл керує великими повтореннями, внутрішній — кроками всередині кожного повторення.</p>",hints:["Вкладений цикл повторюється повністю для кожної ітерації зовнішнього.","Слідкуй за напрямком після кожного рядка.","Можна змінити каркас і додати звичайні команди після циклів."]},
{title:"Розумний патруль",topic:"if / else",text:"Пройди коридор: якщо шлях закритий — поверни, якщо є ресурс — збери.",start:[0,4,"E"],base:[4,2],walls:[[2,4]],resources:[[1,4],[1,3],[3,2]],goal:"allResourcesBase",starter:"for (int i = 0; i < 8; i++) {\n    if (robot.isOnResource()) { robot.collect(); }\n    if (robot.isPathClear()) {\n        robot.move();\n    } else {\n        robot.turnLeft();\n    }\n}",theory:"<p>Кілька <code>if</code> можуть вирішувати різні задачі: один перевіряє ресурс, другий — безпечність руху. Це основа поведінкової логіки.</p>",hints:["Перевіряй ресурс до руху.","На стіні потрібна зміна напрямку.","Якщо маршрут не сходиться — зміни кількість повторів або додай поворот."]},
{title:"Сканер кварталу",topic:"nested for",text:"Пройди два ряди міста й збери всі деталі.",start:[0,0,"E"],base:[0,1],walls:[],resources:[[1,0],[3,0],[2,1],[4,1]],goal:"allResourcesBase",starter:"for (int row = 0; row < 2; row++) {\n    for (int col = 0; col < 4; col++) {\n        robot.move();\n        if (robot.isOnResource()) { robot.collect(); }\n    }\n    // перехід на наступний ряд\n}",theory:"<p>Вкладені цикли зручно уявляти як таблицю: зовнішній — рядки, внутрішній — колонки.</p>",hints:["Після першого рядка треба перейти на y=1.","Другий ряд зручніше проходити у зворотному напрямку.","Між рядками використай два повороти та один move."]},
{title:"Метод: два кроки",topic:"Методи",text:"Створи метод moveTwo() і використай його, щоб дійти до бази.",start:[0,3,"E"],base:[4,3],walls:[],resources:[],goal:"base",starter:"void moveTwo() {\n    robot.move();\n    robot.move();\n}\n\nmoveTwo();\nmoveTwo();",theory:"<p><b>Метод</b> об’єднує кілька дій під одним ім’ям. У справжній Java метод зазвичай оголошується всередині класу. У цій навчальній місії дозволений спрощений запис.</p>",hints:["moveTwo виконує два move.","Виклик методу можна повторювати.","Два виклики = 4 клітинки."]},
{title:"Метод: забрати деталь",topic:"Методи",text:"Створи метод stepAndCollect() та збери ряд деталей.",start:[0,2,"E"],base:[4,2],walls:[],resources:[[1,2],[2,2],[3,2],[4,2]],goal:"allResourcesBase",starter:"void stepAndCollect() {\n    robot.move();\n    if (robot.isOnResource()) { robot.collect(); }\n}\n\nfor (int i = 0; i < 4; i++) {\n    stepAndCollect();\n}",theory:"<p>Метод може містити умови. Це дозволяє приховати деталі алгоритму та повторно використовувати логіку.</p>",hints:["Метод робить один крок і перевірку.","for викликає його чотири рази.","Мета — всі ресурси та база."]},
{title:"Метод обходу",topic:"Методи + if",text:"Напиши safeStep(): йди вперед, а якщо шлях закритий — поверни ліворуч.",start:[0,4,"E"],base:[1,1],walls:[[2,4],[1,2]],resources:[],goal:"base",starter:"void safeStep() {\n    if (robot.isPathClear()) {\n        robot.move();\n    } else {\n        robot.turnLeft();\n    }\n}\n\nfor (int i = 0; i < 7; i++) {\n    safeStep();\n}",theory:"<p>Метод може бути маленькою «здатністю» робота. Так код стає читабельнішим: основний алгоритм говорить <i>що</i> робити, а метод описує <i>як</i>.</p>",hints:["safeStep сам вирішує: рух чи поворот.","Виконай покроково та подивись маршрут.","За потреби зміни кількість повторів."]},
{title:"Сітка 3×3",topic:"nested for",text:"Збери ресурси зі змійкоподібного маршруту 3×3.",start:[0,0,"E"],base:[0,2],walls:[],resources:[[1,0],[2,0],[2,1],[1,1],[0,1],[1,2],[2,2]],goal:"allResources",starter:"for (int row = 0; row < 3; row++) {\n    for (int step = 0; step < 2; step++) {\n        robot.move();\n        if (robot.isOnResource()) { robot.collect(); }\n    }\n    // поворот для «змійки»\n}",theory:"<p>Складність nested for не в синтаксисі, а в тому, щоб правильно уявляти стан після кожного внутрішнього циклу.</p>",hints:["Ряд 1 вправо, ряд 2 вліво, ряд 3 вправо.","Між рядами треба перейти на клітинку нижче.","Для різних рядків напрямок повороту відрізняється — можна дописати команди поза циклом."]},
{title:"Ремонтний алгоритм",topic:"Методи + nested for",text:"Поєднай метод збору та вкладені повторення.",start:[0,0,"E"],base:[4,2],walls:[],resources:[[1,0],[2,0],[3,0],[4,0],[4,1],[4,2]],goal:"allResourcesBase",starter:"void collectIfNeeded() {\n    if (robot.isOnResource()) { robot.collect(); }\n}\n\nfor (int i = 0; i < 4; i++) {\n    robot.move();\n    collectIfNeeded();\n}\nrobot.turnRight();\nfor (int i = 0; i < 2; i++) {\n    robot.move();\n    collectIfNeeded();\n}",theory:"<p>Коли одна перевірка повторюється в різних частинах програми, її варто винести в метод. Це перший крок до декомпозиції.</p>",hints:["collectIfNeeded не рухає робота.","Перший цикл іде вправо.","Після turnRight другий цикл іде вниз."]},
{title:"Оптимізатор",topic:"Алгоритми",text:"Дійди до бази та збери ресурси якомога меншою кількістю дій.",start:[0,4,"E"],base:[4,0],walls:[[2,4],[2,3]],resources:[[1,4],[1,2],[3,0]],goal:"allResourcesBase",starter:"// Побудуй свій алгоритм.\n// Спробуй отримати бейдж «Мінімаліст».\n",theory:"<p>Тепер важливий не лише правильний результат, а й <b>ефективність</b>. Порівнюй кількість дій у лідерборді.</p>",hints:["Спочатку знайди найкоротший маршрут очима.","Не роби зайвих поворотів.","Використовуй for там, де рух повторюється."]},
{title:"Енергомережа",topic:"Фінал рівня 5",text:"Фінальна місія: зберіть усі енергомодулі та поверніться до центральної бази.",start:[0,4,"N"],base:[2,2],walls:[[1,3],[3,3],[1,1],[3,1]],resources:[[0,2],[2,0],[4,2],[2,4]],goal:"allResourcesBase",starter:"// Фінал. Використовуй відомі команди,\n// for, if/else та власні методи.\n",theory:"<p>Ця місія перевіряє декомпозицію: розбий велику задачу на маленькі маршрути або методи. Гра оцінює мету, час і кількість дій.</p>",hints:["Центральна база — (2,2), ресурси з чотирьох боків.","Розбий маршрут на повторювані частини.","Створи метод для типового фрагмента маршруту."]}
);

// Extend parser with simple zero-argument user methods and nested structures.
const _oldRparse=rparse;
rparse=function(src){
  const defs={};
  // Extract simple void name() { ... } definitions with balanced braces, no regex execution pretending to be Java.
  let cleaned="",i=0;
  while(i<src.length){
    const m=src.slice(i).match(/^void\s+([A-Za-z_][A-Za-z0-9_]*)\s*\(\s*\)\s*\{/);
    if(!m){cleaned+=src[i++];continue}
    const name=m[1]; let start=i+m[0].length, depth=1, j=start;
    for(;j<src.length&&depth;j++){if(src[j]==="{")depth++;else if(src[j]==="}")depth--}
    if(depth) throw Error("Метод "+name+": не закрита фігурна дужка.");
    defs[name]=src.slice(start,j-1); i=j;
  }
  // Expand method calls before parser. This is explicitly a constrained teaching subset.
  let expanded=cleaned;
  for(let round=0;round<12;round++){
    let changed=false;
    for(const [name,body] of Object.entries(defs)){
      const call=new RegExp("\\\\b"+name+"\\\\s*\\\\(\\\\s*\\\\)\\\\s*;","g");
      if(call.test(expanded)){expanded=expanded.replace(call,body);changed=true}
    }
    if(!changed)break;
  }
  if(/\b[A-Za-z_][A-Za-z0-9_]*\s*\(\s*\)\s*;/.test(expanded.replace(/robot\.[A-Za-z_][A-Za-z0-9_]*\s*\(\s*\)\s*;/g,"")))
    throw Error("Невідомий метод або рекурсія. Навчальна версія підтримує прості void-методи без параметрів.");
  return _oldRparse(expanded);
};

const robotBadgeDefs=[
["first","🌱 Перший запуск","Пройди першу місію"],
["minimal","🧩 Мінімаліст","Пройди місію менш ніж за 10 дій"],
["fast","⚡ Швидкий","Пройди місію менш ніж за 30 секунд"],
["five","🏙️ Будівельник","Пройди 5 місій"],
["ten","🤖 Інженер","Пройди 10 місій"],
["all","👑 Архітектор міста","Пройди всі 20 місій"]
];
let missionStartedAt=0;
function robotResults(){return JSON.parse(localStorage.getItem("robotCityResults")||"[]")}
function saveRobotResult(){
 const time=Math.max(1,Math.round((Date.now()-missionStartedAt)/1000)),rows=robotResults();
 rows.push({mission:rg.mission+1,time,actions:rg.actions,at:Date.now(),name:(state?.displayName||"Ти")});
 rows.sort((a,b)=>a.actions-b.actions||a.time-b.time);
 localStorage.setItem("robotCityResults",JSON.stringify(rows.slice(0,50)));
 renderRobotMeta(); trackMissionSuccess(rg.mission+1,time,rg.actions);
}
function unlockedRobotBadges(){
 const passed=JSON.parse(localStorage.getItem("robotCityPassed")||"[]"),r=robotResults(),u=new Set();
 if(passed.length)u.add("first");if(r.some(x=>x.actions<10))u.add("minimal");if(r.some(x=>x.time<30))u.add("fast");
 if(passed.length>=5)u.add("five");if(passed.length>=10)u.add("ten");if(passed.length>=robotMissions.length)u.add("all");return u
}
function renderRobotMeta(){
 const u=unlockedRobotBadges(),b=$("#robotBadges");if(!b)return;
 b.innerHTML=robotBadgeDefs.map(x=>`<div class="robot-badge ${u.has(x[0])?"unlocked":""}">${x[1]}<br><small>${x[2]}</small></div>`).join("");
 $("#badgeCount").textContent=`${u.size} / ${robotBadgeDefs.length} бейджів`;
 const rows=robotResults();$("#robotLeaderboard").innerHTML=rows.length?rows.map((x,i)=>`<div class="leader-row me"><span>#${i+1}</span><strong>Місія ${x.mission}</strong><span>${x.actions} дій</span><span>${x.time}с</span></div>`).join(""):'<div class="muted">Ще немає результатів. Пройди місію.</div>';
}
function robotAttempts(){return JSON.parse(localStorage.getItem("robotCityAttempts")||"{}")}
function markAttempt(success=false){const a=robotAttempts(),k=String(rg.mission+1);a[k]=a[k]||{tries:0,success:0};a[k].tries++;if(success)a[k].success++;localStorage.setItem("robotCityAttempts",JSON.stringify(a))}
function trackMissionSuccess(){markAttempt(true)}
function adaptiveRecommendation(){
 const a=robotAttempts(),bad=Object.entries(a).filter(([_,v])=>v.tries>=3&&(1-v.success/v.tries)>.30).sort((x,y)=>(y[1].tries-y[1].success)-(x[1].tries-x[1].success))[0];
 if(!bad)return "";
 const n=+bad[0],m=robotMissions[n-1];return `<div class="adaptive-box"><b>Персональна рекомендація:</b> у тебе було кілька складних спроб на місії ${n} (${m.topic}). Повтори теорію теми <b>${m.topic}</b> і спробуй місію покроково. Система рахує це лише локально у браузері.</div>`
}
const _oldRload=rload;rload=function(i){_oldRload(i);missionStartedAt=Date.now();renderRobotMeta();const nav=document.createElement("div");nav.className="mission-nav";const passed=JSON.parse(localStorage.getItem("robotCityPassed")||"[]");nav.innerHTML=robotMissions.map((_,n)=>`<button class="mission-pill ${passed.includes(n)?"done":""}" data-mi="${n}">${n+1}</button>`).join("");$("#gameTheory").appendChild(nav);nav.querySelectorAll("button").forEach(x=>x.onclick=()=>rload(+x.dataset.mi));$("#gameTheory").insertAdjacentHTML("beforeend",adaptiveRecommendation())}
const _oldRrun=rrun;rrun=async function(){markAttempt(false);const before=JSON.parse(localStorage.getItem("robotCityPassed")||"[]").length;await _oldRrun();setTimeout(()=>{const after=JSON.parse(localStorage.getItem("robotCityPassed")||"[]").length;if(after>before)saveRobotResult()},50)};

// Practice projects
const practiceData=[
{title:"TO-DO API",level:"Junior",tags:["Spring Boot","REST","PostgreSQL"],desc:"Створи backend для списку задач з CRUD, статусами та дедлайнами.",check:["Task entity + DTO","GET/POST/PUT/DELETE","Validation","PostgreSQL","Exception handler"],starter:"@RestController\n@RequestMapping(\"/api/tasks\")\nclass TaskController {\n    // TODO: GET / POST / PUT / DELETE\n}",docs:"Spring Web, Validation, Spring Data JPA"},
{title:"Expense Tracker",level:"Junior",tags:["Java","JPA","SQL"],desc:"API обліку витрат: категорії, суми, дати та місячна статистика.",check:["Expense entity","Category enum","Repository queries","Monthly summary","Tests"],starter:"@Entity\nclass Expense {\n  @Id @GeneratedValue\n  Long id;\n  // amount, category, date\n}",docs:"JPA repositories, JPQL"},
{title:"Auth Service",level:"Junior+",tags:["Security","JWT","PostgreSQL"],desc:"Окремий сервіс реєстрації та входу з ролями USER/ADMIN.",check:["BCrypt","JWT","SecurityFilterChain","Roles","Refresh/logout design"],starter:"@Configuration\nclass SecurityConfig {\n  // TODO SecurityFilterChain\n}",docs:"Spring Security reference"},
{title:"Mini Shop API",level:"Portfolio",tags:["Spring Boot","Transactions","Docker"],desc:"Каталог товарів, кошик та створення замовлення з перевіркою залишків.",check:["Product/Order entities","Cart logic","@Transactional","PostgreSQL","Docker Compose"],starter:"@Service\nclass OrderService {\n  @Transactional\n  public Order checkout(...) { }\n}",docs:"Transactions, Docker, PostgreSQL"}
];
function renderPractice(){const e=$("#practiceProjects");if(!e)return;e.innerHTML=practiceData.map((p,i)=>`<article class="project-card"><div class="eyebrow">${p.level}</div><h3>${p.title}</h3><div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join("")}</div><p>${p.desc}</p><ul>${p.check.map(x=>`<li>☐ ${x}</li>`).join("")}</ul><div class="project-starter">${escapeHtml(p.starter)}</div><p><b>Документація:</b> ${p.docs}</p></article>`).join("")}

// Cheat sheet
const cheats=[
["Змінні","int age = 17;\ndouble price = 99.90;\nboolean active = true;\nString name = \"Java\";"],
["if / else","if (age >= 18) {\n    System.out.println(\"OK\");\n} else {\n    System.out.println(\"No\");\n}"],
["for","for (int i = 0; i < 10; i++) {\n    System.out.println(i);\n}"],
["while","while (condition) {\n    // code\n}"],
["Метод","public int sum(int a, int b) {\n    return a + b;\n}"],
["ArrayList","ArrayList<String> names = new ArrayList<>();\nnames.add(\"Max\");\nnames.get(0);\nnames.remove(0);\nnames.size();"],
["Клас","class User {\n  private String name;\n  public User(String name) {\n    this.name = name;\n  }\n}"],
["REST Controller","@RestController\n@RequestMapping(\"/users\")\nclass UserController {\n @GetMapping\n List<User> all() { ... }\n}"],
["POST + JSON","@PostMapping\nUser create(@Valid @RequestBody UserDto dto) {\n  ...\n}"],
["JPA","@Entity\nclass User {\n @Id @GeneratedValue\n Long id;\n}"],
["Repository","interface UserRepository\n extends JpaRepository<User, Long> {\n Optional<User> findByEmail(String email);\n}"],
["Validation","@Email\n@NotBlank\nprivate String email;\n\n@Size(min = 8)\nprivate String password;"],
["Security","http.authorizeHttpRequests(a -> a\n .requestMatchers(\"/api/auth/**\").permitAll()\n .anyRequest().authenticated());"],
["PostgreSQL","spring.datasource.url=${DATABASE_URL}\nspring.jpa.hibernate.ddl-auto=validate"],
["Docker","docker compose up -d\n\ndocker compose logs -f"],
["HTTP","GET    читання\nPOST   створення\nPUT    повна зміна\nPATCH  часткова зміна\nDELETE видалення"]
];
function renderCheats(){const e=$("#cheatContent");if(!e)return;e.innerHTML=cheats.map(c=>`<article class="cheat-card"><h3>${c[0]}</h3><pre>${escapeHtml(c[1])}</pre></article>`).join("")}
document.addEventListener("DOMContentLoaded",()=>{renderPractice();renderCheats();renderRobotMeta();$("#printCheat")?.addEventListener("click",()=>window.print())});


// v5: progression, achievements, portfolio, story/master/editor, help, profile, offline.
const courseChapters=[["Java Core",[1,2,3]],["OOP",[4,5,6]],["Collections",[7,8]],["Streams",[9,10]],["Spring Boot",[11,12,13]]];
function completedIds(){try{return Object.keys(state.completed||{}).filter(k=>state.completed[k]).map(Number)}catch{return JSON.parse(localStorage.getItem("completedLessons")||"[]")}}
function renderChapters(){let prev=true,d=completedIds(),e=$("#chapterProgress");if(!e)return;e.innerHTML=courseChapters.map((c,i)=>{let p=Math.round(c[1].filter(x=>d.includes(x)).length/c[1].length*100),locked=i>0&&!prev;prev=p>=70;return `<div class="chapter-card ${locked?"locked":""}"><h4>${i+1}. ${c[0]}</h4><div class="chapter-bar"><i style="width:${p}%"></i></div><small>${p}% · ${locked?"🔒 потрібно 70% попередньої":p>=70?"✓ відкрито":"потрібно 70%"}</small></div>`}).join("")}
const tips=["У for перевіряй старт → умову → зміну лічильника.","DTO відділяє API від JPA entity.","equals() порівнює зміст об’єктів.","Короткий метод легше тестувати.","Спочатку правильність, потім оптимізація."];
function dailyTip(){let k=new Date().toISOString().slice(0,10),o=JSON.parse(localStorage.getItem("tip")||"{}"),i=o.d===k?o.i:Math.floor(Date.now()/86400000)%tips.length;localStorage.setItem("tip",JSON.stringify({d:k,i}));$("#dailyTip")&&($("#dailyTip").innerHTML="<b>Порада дня:</b> "+tips[i])}
const ach=[["first","Перший код","Написав Hello World"],["bug","Bug Hunter","Знайшов і виправив помилку"],["streak","30 день стрику","30 днів поспіль"],["master","Java Master","100+ завдань"],["spring","Spring стартер","Перший REST endpoint"]];
function achData(){return JSON.parse(localStorage.getItem("gwAchievements")||"{}")} function unlockAch(id){let a=achData();if(!a[id]){a[id]=new Date().toISOString();localStorage.setItem("gwAchievements",JSON.stringify(a))}renderAch()}
function renderAch(){let a=achData(),e=$("#achievementTimeline");if(e)e.innerHTML=ach.map(x=>`<div class="achievement-item"><h3 class="${a[x[0]]?"":"achievement-secret"}">${a[x[0]]?x[1]:"Секретний бейдж"}</h3><p>${x[2]}</p><small>${a[x[0]]?new Date(a[x[0]]).toLocaleString("uk-UA"):"Ще не відкрито"}</small></div>`).join("")}
function days(){let a=JSON.parse(localStorage.getItem("learningDays")||"[]"),d=new Date().toISOString().slice(0,10);if(!a.includes(d)){a.push(d);localStorage.setItem("learningDays",JSON.stringify(a))}return a} function streak(){let s=new Set(days()),n=0,d=new Date();while(s.has(d.toISOString().slice(0,10))){n++;d.setDate(d.getDate()-1)}return n}
const projects=[["Калькулятор","main(), операції",["Create Calculator","Операції + - * /","Ділення на 0"]],["TODO-список","ArrayList, цикли",["ArrayList","Меню","Add/Delete"]],["User Manager","класи, конструктори",["User class","Constructor","ArrayList<User>"]],["Бібліотека","наслідування",["Book","EBook","AudioBook"]],["Магазин","інкапсуляція",["Product","Cart","Order"]],["Чат","Thread",["Threads","Queue","Synchronization"]],["Bank System","Exceptions",["Account","Exception","Transfer"]],["REST API User CRUD","Spring Boot",["Entity","Repository","Controller","Postman"]],["Автентифікація","JWT",["BCrypt","Access JWT","Refresh","Logout"]],["Full-stack","Frontend + Spring + DB",["HTML/JS","Backend","DB","Deploy"]]];
function pp(){return JSON.parse(localStorage.getItem("projectProgress")||"{}")} function renderPortfolio(){let p=pp(),e=$("#portfolioProjects");if(!e)return;e.innerHTML=projects.map((x,i)=>{let a=p[i]||[],pc=Math.round(a.length/x[2].length*100);return `<div class="portfolio-card"><div class="eyebrow">PROJECT ${i+1}</div><h3>${x[0]}</h3><p>${x[1]}</p><div class="portfolio-progress"><i style="width:${pc}%"></i></div><small>${pc}% · +200 XP</small><div class="portfolio-checks">${x[2].map((q,j)=>`<label><input type="checkbox" data-p="${i}" data-c="${j}" ${a.includes(j)?"checked":""}> ${j+1}. ${q}</label>`).join("")}</div><button class="secondary-btn" data-starter="${i}">Starter</button><p><b>JUnit:</b> додай тести для ключової логіки.</p><p><b>Demo:</b> 30s placeholder до підключення відео.</p></div>`}).join("");e.querySelectorAll("[data-p]").forEach(q=>q.onchange=()=>{let p=pp(),i=q.dataset.p,j=+q.dataset.c,a=p[i]||[];if(q.checked&&!a.includes(j))a.push(j);if(!q.checked)a=a.filter(v=>v!==j);p[i]=a;localStorage.setItem("projectProgress",JSON.stringify(p));renderPortfolio();renderProfile()});e.querySelectorAll("[data-starter]").forEach(b=>b.onclick=()=>downloadText(projects[+b.dataset.starter][0]+".java","// Starter template\\npublic class Main {\\n    public static void main(String[] args) {\\n        // TODO\\n    }\\n}"));let n=projects.filter((x,i)=>(p[i]||[]).length===x[2].length).length;$("#portfolioSummary").textContent=`Ти завершив ${n} з 10 проєктів. Наступний: ${projects[Math.min(n,9)][0]}.`}
function prof(){return JSON.parse(localStorage.getItem("gwProfile")||'{"nick":"Coder","bio":"","github":""}')} function renderProfile(){let p=prof();if(!$("#profileNick"))return;$("#profileNick").value=p.nick;$("#profileBio").value=p.bio;$("#profileGithub").value=p.github;$("#profileAvatar").textContent=(p.nick||"GW").slice(0,2).toUpperCase();$("#profileStats").innerHTML=`<span>Модулі ${completedIds().length}/13</span><span>Бейджі ${Object.keys(achData()).length}</span><span>Проєкти ${Object.keys(pp()).length}/10</span><span>Стрик ${streak()}</span>`}
function ranks(){return JSON.parse(localStorage.getItem("playerRanks")||"[]")} function renderRanks(){let e=$("#playerLeaderboard");if(e)e.innerHTML=ranks().map((r,i)=>`<div class="leader-row"><span>#${i+1}</span><strong>${escapeHtml(r.nick)}</strong><span>${r.xp} XP</span><span>Lv.${r.level}</span></div>`).join("")}
function downloadText(n,t,type="text/plain"){let a=document.createElement("a"),u=URL.createObjectURL(new Blob([t],{type}));a.href=u;a.download=n;a.click();URL.revokeObjectURL(u)}
function exports(k){let d={profile:prof(),lessons:completedIds(),projects:pp(),achievements:achData(),robot:robotResults(),days:days()};if(k==="json")downloadText("progress.json",JSON.stringify(d,null,2),"application/json");if(k==="csv")downloadText("progress.csv","type,id,status\\n"+d.lessons.map(x=>`lesson,${x},done`).join("\\n"),"text/csv");if(k==="html")downloadText("progress.html",`<h1>Grow With Code</h1><p>${d.lessons.length}/13 lessons</p><pre>${escapeHtml(JSON.stringify(d,null,2))}</pre>`,"text/html")}
let gameMode="normal",pathTrace=[];const stories=["Стара база надсилає сигнал. Дійди до неї.","Сектор знеструмлений — знайди маршрут з поворотом.","Знайди енергію та повернись.","Автоматизуй збір деталей циклом.","Енергоміст вимагає повторення.","Обійди район по квадрату.","Лабіринт заблокований — приймай рішення if/else.","Збирай тільки реальні ресурси.","Автопілот реагує на перешкоди.","Віднови перший район.","Сітка міста потребує nested for.","Розумний патруль перевіряє стан.","Проскануй квартал.","Створи перший власний метод.","Метод розповсюджує ресурси.","safeStep обходить лабіринт.","Сітка 3×3.","Методи + цикли ремонтують сектор.","Оптимізуй маршрут.","Фінал: віднови енергомережу."];
const oldLoad5=rload;rload=function(i){oldLoad5(i);pathTrace=[[rg.x,rg.y]];drawPath();$("#missionStory")&&($("#missionStory").innerHTML="<b>Сюжет:</b> "+(stories[rg.mission]||"Віднови сектор."));let b=robotResults().filter(x=>x.mission===rg.mission+1).sort((a,b)=>a.actions-b.actions||a.time-b.time)[0];$("#gameRecord")&&($("#gameRecord").textContent=b?`Рекорд ${b.actions} дій · ${b.time}с`:"Рекорд —")}
const oldAct5=ract;ract=function(a){oldAct5(a);if(a==="move"){pathTrace.push([rg.x,rg.y]);drawPath()}};function drawPath(){let s=$("#robotPathSvg");if(s)s.innerHTML=`<polyline points="${pathTrace.map(x=>x[0]*100+50+","+(x[1]*100+50)).join(" ")}"></polyline>`}
const oldRun5=rrun;rrun=async function(){let st=Date.now();if(gameMode==="master"&&($("#robotCode").value.match(/robot\./g)||[]).length>10)return rlog("Master: максимум 10 robot-команд.","bad");await oldRun5();if(gameMode==="master"&&rgoal()){if(Date.now()-st>3000)return rlog("Master: перевищено 3 секунди.","bad");try{state.xp=(state.xp||0)+50;saveState()}catch{}rlog("🏆 MASTER +50 XP","good")}}
function ums(){return JSON.parse(localStorage.getItem("userMissions")||"[]")} function renderUM(){let e=$("#userMissionList");if(e)e.innerHTML=ums().sort((a,b)=>(b.likes||0)-(a.likes||0)).slice(0,10).map((m,i)=>`<div class="leader-row"><span>#${i+1}</span><strong>${escapeHtml(m.title)}</strong><span>❤ ${m.likes||0}</span></div>`).join("")}
function offlineBot(q){q=q.toLowerCase();if(q.includes("oop")||q.includes("ооп"))return "OOP: class — креслення, object — конкретний екземпляр. Далі вчи constructor, encapsulation, inheritance, polymorphism.";if(q.includes("for")||q.includes("цикл"))return "for має старт, умову та зміну лічильника. Визнач, яку одну дію треба повторювати. Готовий код я не даю.";if(q.includes("spring"))return "Spring: HTTP → Controller → Service → Repository → DB. Скажи, на якому кроці незрозуміло.";if(q.includes("помил")||q.includes("error"))return "Дивись перший змістовний рядок помилки, файл і номер рядка. Перевір дужки, типи та назви.";return "Розбий задачу на вхідні дані, умову, повторення та результат. Я дам напрямок без готового рішення."}
function botAsk(){let i=$("#helpInput"),q=i.value.trim();if(!q)return;let k="bot-"+rg.mission,n=+(sessionStorage.getItem(k)||0);if(n>=5)return alert("Максимум 5 запитів на місію.");sessionStorage.setItem(k,n+1);$("#helpLimit").textContent=`${4-n}/5`;$("#helpMessages").insertAdjacentHTML("beforeend",`<div class="user-msg">${escapeHtml(q)}</div><div class="bot-msg">${escapeHtml(offlineBot(q))}<br><small>${navigator.onLine?"Локальний FAQ; cloud AI потребує backend.":"Offline FAQ"}</small></div>`);i.value=""}
function analytics5(){let a=robotAttempts(),hard=Object.entries(a).filter(x=>x[1].tries>=3&&x[1].success/x[1].tries<.7).map(x=>robotMissions[+x[0]-1]?.topic).filter(Boolean);$("#learningAnalytics")&&($("#learningAnalytics").innerHTML=`<b>Адаптація:</b> ${hard.length?"Складно з "+hard.join(", ")+". Спробуй легшу попередню місію або покроковий режим.":"Збираю статистику складних тем."}`)}
function settings(){return JSON.parse(localStorage.getItem("gwSettings")||'{"scheme":"green","font":"normal","tab":"4","sound":false}')} function applySet(){let s=settings();document.body.classList.remove("theme-purple","theme-ocean","theme-forest","theme-light","font-small","font-large");if(s.scheme!=="green")document.body.classList.add("theme-"+s.scheme);if(s.font!=="normal")document.body.classList.add("font-"+s.font);if($("#colorScheme")){$("#colorScheme").value=s.scheme;$("#fontSizeSetting").value=s.font;$("#tabSizeSetting").value=s.tab;$("#soundSetting").checked=s.sound}}
document.addEventListener("DOMContentLoaded",()=>{renderChapters();dailyTip();renderAch();renderPortfolio();renderProfile();renderRanks();renderUM();analytics5();applySet();if(streak()>=30)unlockAch("streak");$$(".mode-btn").forEach(b=>b.onclick=()=>{$$(".mode-btn").forEach(x=>x.classList.remove("active"));b.classList.add("active");gameMode=b.dataset.mode;$("#missionEditor").classList.toggle("hidden",gameMode!=="editor")});$("#saveUserMission")?.addEventListener("click",()=>{try{let m=JSON.parse($("#missionJson").value),a=ums();a.push({...m,likes:0});localStorage.setItem("userMissions",JSON.stringify(a));renderUM()}catch(e){alert(e.message)}});$("#loadUserMission")?.addEventListener("click",()=>alert("Місію збережено. Повне тестування custom JSON буде підключено до валідатора в наступній backend-версії."));$("#swapGamePanels")?.addEventListener("click",()=>$(".robot-game-layout").classList.toggle("swap"));$$(".mobile-codebar [data-insert]").forEach(b=>b.onclick=()=>{let e=$("#robotCode"),p=e.selectionStart;e.value=e.value.slice(0,p)+b.dataset.insert+e.value.slice(e.selectionEnd);rlines()});$("#helpBotToggle")?.addEventListener("click",()=>$("#helpBot").classList.toggle("hidden"));$("#closeHelpBot")?.addEventListener("click",()=>$("#helpBot").classList.add("hidden"));$("#sendHelp")?.addEventListener("click",botAsk);$$(".help-quick button").forEach(b=>b.onclick=()=>{$("#helpInput").value={error:"Поясни помилку "+($("#robotConsole")?.textContent||""),loop:"Як побудувати цикл for?",review:"Перевір мій код у 3 пунктах "+($("#robotCode")?.value||""),oop:"Що таке OOP?"}[b.dataset.q];botAsk()});$("#saveProfile")?.addEventListener("click",()=>{localStorage.setItem("gwProfile",JSON.stringify({nick:$("#profileNick").value||"Coder",bio:$("#profileBio").value,github:$("#profileGithub").value}));renderProfile()});$("#submitRank")?.addEventListener("click",()=>{let a=ranks(),xp=Number(state?.xp||0);a.push({nick:$("#rankNick").value||prof().nick,xp,level:Math.floor(xp/100)+1});a.sort((x,y)=>y.xp-x.xp);localStorage.setItem("playerRanks",JSON.stringify(a.slice(0,50)));renderRanks()});["colorScheme","fontSizeSetting","tabSizeSetting","soundSetting"].forEach(id=>$("#"+id)?.addEventListener("change",()=>{localStorage.setItem("gwSettings",JSON.stringify({scheme:$("#colorScheme").value,font:$("#fontSizeSetting").value,tab:$("#tabSizeSetting").value,sound:$("#soundSetting").checked}));applySet()}));$("#exportProgressJson")?.addEventListener("click",()=>exports("json"));$("#exportProgressCsv")?.addEventListener("click",()=>exports("csv"));$("#exportProgressHtml")?.addEventListener("click",()=>exports("html"));$("#exportGithubReadme")?.addEventListener("click",()=>downloadText("README.md",`# ${prof().nick}\\n\\n![Grow With Code](https://img.shields.io/badge/Grow_With_Code-Java-green)\\n\\nCompleted: ${completedIds().length}/13 lessons`));$("#certificateBtn")?.addEventListener("click",()=>{if(completedIds().length/13<.8)return alert("Потрібно 80% курсу.");let w=window.open("");w.document.write(`<h1>Grow With Code Certificate</h1><h2>${escapeHtml(prof().nick)}</h2><p>${new Date().toLocaleDateString("uk-UA")}</p><p>ID GWC-${Date.now().toString(36).toUpperCase()}</p><h3>Grow with Code Team</h3><script>print()<\/script>`)})});
