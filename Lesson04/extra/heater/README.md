# Heater Activity / Example

## Activity

Create a heater endpoint that requires an integer value for mode. Valid values accepted for mode are `0` for normal and `1` for energy saving. If mode value is incorrect return HTTP code 422 with an error message. The endpoint should also have a required value of temperature which accepts an integer.

The end-point should be protected so be sure to require a JWT for use as was done in exercise 6. 

## Solution

1. Create a new route file at `routes/devices/heater.js	`, it should use express-validator to check that temperature and mode is numeric, it should also check that mode is minimum 0 and maximum 1. If error checking passes it should return a success message using the values provided:

    ```
    const express = require('express');
    const { check, validationResult } = require('express-validator/check');
    const router = express.Router();
    
    // Function to run if user sends a PUT request
    router.put(['/', '/actions/fade'], [
        check('mode').isNumeric().isLength({ min: 0, max: 1 }),
        check('temperature').isNumeric()
      ],
      (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({ errors: errors.array() });
        }
        let temperature = req.body.temperature;
        let mode = req.body.mode;
    
        let message = `success: temperature set to ${temperature} mode is ${mode}`;
        res.json({"message": message});
    });
    
    // Export route so it is available to import
    module.exports = router;
    ```

2. Import `routes/devices/heater.js` in `server.js`:

    ```
    let heater = require('./routes/devices/heater');
    ```

3. Associate `heater` with route `/devices/heater`, making sure to pass the `isCheckedIn` middleware:

    ```
    app.use('/devices/heater', isCheckedIn, heater);
    ```

4. Start the project by running `npm start`.

5. In another window first get a valid JWT with curl:

    ```
    TOKEN=$(curl -sd "name=john" -X POST http://localhost:3000/check-in \
      | jq -r ".token")
    ```

6. Test the endpoint with correct values like so, it should return a success message:

    ```
    curl -sd "mode=0&temperature=25" -X PUT \
      -H "Authorization: Bearer ${TOKEN}" \
      http://localhost:3000/devices/heater \
      | jq
    ```

7. Finally test with some false value like so:


    ```
    curl -sd "mode=9&temperature=25" -X PUT \
      http://localhost:3000/devices/heater \
      | jq
    ```
