# Adding an Event Middleware to Record Requests in a Database

In this exercise we’ll install a database and create a middleware function that saves each API request to a database as an event.

1. Install mongodb community and ensure it is running, using the latest instructions on the official website https://docs.mongodb.com/manual/administration/install-community/


2. Install `mongodb` node.js driver, which is a node package to work with mongodb, this program is different from the database itself. It should be installed with the save option:

    ```
    npm install -s mongodb
    ```

3. Import the mongodb library to `server.js`, and create a variable with our DB url:

    ```
    // Import MongoDb driver
    const MongoClient = require('mongodb').MongoClient;
    const dbUrl = "mongodb://localhost:27017/";
    ```

4. Write a database logger middleware function that creates an event info object and inserts it into an events collection:

    ```
    // Record all events and requests to the server in database here
    var dbLogger = function (req, res, next) {
      // Create an object to gather data we want to save
      let info = {};
      // Add route path of request to object
      info.path = req.path;
      // Add timestamp to info object
      info.timestamp = Date.now();
      // Add authorization header so we can see associated user
      info.token = req.headers.authorization;
      // Add the method and body of the request
      info.method = req.method;
      info.body = req.body;
      console.log(info);
      // Open a database connection
      MongoClient.connect(dbUrl, { useNewUrlParser: true }, function(err, db) {
        if (err) {
          console.log(err);
          return;
        }
        var dbo = db.db("mydb");
        // Insert our event info object into the events collection
        dbo.collection("events").insertOne(info, function(err, res) {
          if (err) console.log(err);
          db.close();
        });
      });
      // Middleware function done running, move to the next function
      next();
    }
    // These two lines from an earlier step need to be run before we use `dbLogger`
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    
    // Tell our app to user the database logger for all requests
    app.use(dbLogger);
    ```

5. Making sure mongodb is running on your machine, run the program:

    ```
    npm start
    ```

6. In another window run a `curl` command to any endpoint, we’ll use `check-in`:

    ```
    curl -sd "name=john" -X POST http://localhost:3000/check-in | jq -r ".token"
    ```

After running a `curl` command like above we should see our event info object logged to the console running our application.

7. Next we’ll confirm that our info object saved to the database by opening it from the command line and viewing the collections. Open a terminal and run the following:

    ```
    mongo mongodb://localhost:27017/
    ```

This should open up the mongodb command line shell.

8. With the mongodb shell open we can run `show dbs` to list all of our local databases. The list should include the name “mydb” used in the line from our logging function:

    ```
    show dbs
    ```

9. Assuming you see “mydb” we can open the database with:


    ```
    use mydb
    ```

10. Now that we’re using “mydb” we can look at the collections it contains. The list should include the name “events” used in our logging function:

    ```
    show collections
    ```

11. If the above command shows the “events” collection we can make a query to view all the entries:

    ```
    db.events.find()
    ```

The response should include a JSON object for each request that was made after our `dbLogger` was enabled.

