This relational database, facebook.db, will consist of 4 tables: users, posts, friends, and likes. 

The structure of the users table will be as follows: 
|column     |      type     |     initial                    |
|:---------|:-------------|:---------------------------------|    
|id          |     number   |         NOT NULL (primary key)|
|firstName    |    string    |        NOT NULL|
|lastName    |     string    |        NOT NULL|
|password     |    string     |       NOT NULL|
|bio          |    string      |      Welcome to my page!  |                
|bday         |    date       |       NULL|
|location     |    string     |       NULL|
|college      |    string     |       NULL|
|work          |   string      |      NULL|
|dateJoined    |   date        |      CURRENT_DATE|

\
The structure of the posts table will be as follows:
|column     |      type     |     initial                       |
|:---------|:-------------|:---------------------------------|
|id         |      number   |       NOT NULL (primary key)      |
|userId     |      number   |       (foreign key: id from users)|
|text       |      string   |       NOT NULL                    |
|datePosted |      date     |       CURRENT_DATE                |
|likes      |      number   |       0                           |

\
The structure of the friends table will be as follows:
|column     |      type     |     initial                       |
|:---------|:-------------|:---------------------------------|               
|requestor     |   number     |   (foreign key: id from users)|
|requested     |   number     |   (foreign key: id from users)|
|dateRequested  |  date       |   CURRENT_DATE|
|status         |  enum     |   ['REQUESTED', 'DECLINED', 'ACCEPTED']|
|dateAccepted |    date       |   NULL|

\
The structure of the likes table will be as follows:
|column     |      type     |     initial                       |
|:---------|:-------------|:---------------------------------|               
|postId     |      number    |    (foreign key: id from posts)|
|userId     |      number    |    (foreign key: id from users)|
|dateLiked    |    date      |    CURRENT_DATE|
