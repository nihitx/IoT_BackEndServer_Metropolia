# IoT BackEndServer

This API has been created so that the students participating in IoT at Metropolia can use it to read and write data received from the sensors.
All `POST` request data needs to be formatted to JSON.


## Prerequisites

You need to create a function that posts http requests(POST || GET) to store and to retrieve information. Below are some examples

```
//Linux
wget --post-data "username=Masnad" http://example.com

//C++

include <iostream>
#include <cpr.h>

int main(int argc, char** argv) {
    auto response = cpr::Get(cpr::Url{"http://httpbin.org/get"});
    std::cout << response.text << std::endl;
}

 //PHP
$opts = array(
  'http' => array(
    'method'  => 'POST',
    'header'  => 'Content-type: application/x-www-form-urlencoded'
  )
);
$context  = stream_context_create($opts);
$result = file_get_contents('https://example.com', false, $context);


```

## Getting started with registering and viewing groups.

First we register the group in our IOT API. The group has to send a POST request with a application/json body.
To register we need **group_id**, **project_name** and **authors**, which are **REQUIRED** fields. **Password** is not required.
Here is the url in which the **POST** request should be made.
[https://iot-backend-metropolia.herokuapp.com/api/user](https://iot-backend-metropolia.herokuapp.com/api/user)

Below is a example on how we registered via [POSTMAN](https://www.getpostman.com/) which is a GUI for testing API's.

```
//POST https://iot-backend-metropolia.herokuapp.com/api/user
{
"group_id" : "9",
"project_name" : "Back End API",
"password" : "secret",
"authors" : [
			{ "name" : "Masnad"},
			{"name" : "Morad"}
			]
}

```

The return for this post request will be

```
Group registered successfully
```

If there is a error, please check the error message. The error message will tell you what is wrong. Please do not add the same group twice
since we track the other information with you **GROUP_ID**.
If you want to see the other groups registered, please do a GET request by writing:
[https://iot-backend-metropolia.herokuapp.com/api/user](https://iot-backend-metropolia.herokuapp.com/api/user)


## Getting started with sending data and viewing.

The user has to send a **POST** request to our IOT API with the application/json body.
The POST request needs **name** , **description**, **sensorStatus** as required fields.
The other two fields are **readings** and **properties**. This last two fields can accept any information. All information on this fields has to be
JSON objects.
Here is the url in which the **POST** request should be made.
[https://iot-backend-metropolia.herokuapp.com/api/data/{group_id}](https://iot-backend-metropolia.herokuapp.com/api/data/{group_id})

We added our data by
```
//POST https://iot-backend-metropolia.herokuapp.com/api/data/9
// notice that the group_id is 9 and we add it after data/
```
Below we give a example on what kind of information you can send to the API.

```
{
	"name" : "sensor 1",
	"description" : "Sensor 1 description",
	"sensorStatus" : "0",
	"properties" : {
		"property_key_1" : "property_value_1",
		"property_key_2" : "property_value_2",
		"property_key_3" : "property_value_3"
	},
	"readings" : [
			{
				"value" : "35",
				"created_at" : "2017-01-22"
			},
			{
				"value" : "201",
				"created_at" : "2017-01-22"
			},
			{
				"value" : "666",
				"created_at" : "2017-01-22"
			}
		]
}

// properties and readings are randomly generated in this example so you can submit any type of information.
// They just have to be converted to JSON data.

```
The return for this post request will be

```
Data Saved
```

To see all your data just send a GET request to the same url with your **group_id**.
[https://iot-backend-metropolia.herokuapp.com/api/data/{group_id}](https://iot-backend-metropolia.herokuapp.com/api/data/{group_id})



### Coding

The API is built with node.js running express framework. Mongoose is used as a object modeling tool in this API.
The database is mongo DB.

```
// Simple code to show the homepage

router.get('/', function(req, res, next) {
  res.render('index', { title: 'IOT BACKEND METROPOLIA' });
});

```

## Deployment

This API is deployed on HEROKU.

## Built With

* [NodeJS](https://nodejs.org/en/) SERVER
* [EXPRESSJS](https://expressjs.com/) - FRAMEWORK
* [MONGODB](https://www.mongodb.com/) - DATABASE


## License

This project is licensed under the MIT License

