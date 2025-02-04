This relational database, facebook.db, will consist of 4 tables: users, posts, friends, and likes. 

The structure of the users table will be as follows: 
|column     |      type     |     initial                    |
|:---------|:-------------|:---------------------------------|    
|id          |     number   |         NOT NULL (primary key)|
|email       |     string    |        NOT NULL         |
|first_name    |    string    |        NOT NULL|
|last_name    |     string    |        NOT NULL|
|password     |    string     |       NOT NULL|
|bio          |    string      |      Welcome to my page!  |                
|bday         |    date       |       NULL|
|location     |    string     |       NULL|
|college      |    string     |       NULL|
|work          |   string      |      NULL|
|date_joined    |   date        |      CURRENT_DATE|

\
The structure of the posts table will be as follows:
|column     |      type     |     initial                       |
|:---------|:-------------|:---------------------------------|
|id         |      number   |       NOT NULL (primary key)      |
|user_id     |      number   |       (foreign key: id from users)|
|text       |      string   |       NOT NULL                    |
|date_posted |      date     |       CURRENT_DATE                |
|likes      |      number   |       0                           |

\
The structure of the friends table will be as follows:
|column     |      type     |     initial                       |
|:---------|:-------------|:---------------------------------|               
|requester     |   number     |   (foreign key: id from users)|
|requested     |   number     |   (foreign key: id from users)|
|date_requested  |  date       |   CURRENT_DATE|
|status         |  enum     |   ['REQUESTED', 'DECLINED', 'ACCEPTED']|

\
The structure of the likes table will be as follows:
|column     |      type     |     initial                       |
|:---------|:-------------|:---------------------------------|               
|post_id     |      number    |    (foreign key: id from posts)|
|user_id     |      number    |    (foreign key: id from users)|
|date_liked    |    date      |    CURRENT_DATE|
