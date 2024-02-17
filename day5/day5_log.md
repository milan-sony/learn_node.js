## Day 5/15

📅 17/02/2024 | Things I have learned/ done.

### MongoDB basics

```sql
db
```

- db : is used to show the database name.

```sql
show dbs
```

- show dbs : is used to show all the databases.

```sql
use databasename
```

- use : is used to create a database.

```sql
db.createCollection('tablename')
```

- db.createCollection() : is used to create a table inside the database.

- In MongoDB, instead of tables these are called collections.

```sql
show collections
```

- show collections : is used to show all the tables/collections in the database.

```sql
db.user.insert({name: "milan sony", place: "changanacherry"})
```

- Insert data into the collection #here user is the collection/table name.

```sql
db.user.find()
```

- Used to display all the values in the collection.

```sql
db.user.find().pretty()
```

- Used to display all the values in the collection in a neat/pretty manner.

```sql
db.dropDatabase()
```

- Used to delete a database

- Further reference links
    
    [MongoDB - Database, Collection, and Document - GeeksforGeeks](https://www.geeksforgeeks.org/mongodb-database-collection-and-document/?ref=lbp)
    
    [MongoDB Tutorial](https://www.tutorialspoint.com/mongodb/index.htm)