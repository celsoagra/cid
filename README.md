# icd
application focused on consult information about ICD (International Classification of Diseases)

# Rest API
* https://icdapp.herokuapp.com/
```
Index of api. Contains list of information of service
```
* https://icdapp.herokuapp.com/category
```
Contains list of categories about ICD. Use query parameter, such as ?q=a02 or ?q=neoplasia to search some categories and theirs subcategories
```
* https://icdapp.herokuapp.com/chapter
```
Contains list of chapters about ICD. The query is the same as category service
```

# Install locally with Environment variables
Use nodeJS to implement some features. Try to use in npm start:
```
"scripts": {
  // ...
  "start": "DB_CONFIG_ENV=<config about mongoDB IP:PORT such as xxx.xxx.xxx.xxx:port > DB_PWD_ENV=<password of database> DB_USER_ENV=<username of database> PORT=<server port> node bin/www"
  // ...
},  
```
