# README

Shine is the example Rails application built using the book: Rails, Angular,
Postgress, and Bootstrap Second Edition.

App uses:

* Ruby version 2.4.2
* Rails 5.1.4
* Yarn 1.0.2
* Webpack 3.6
* Postgress 9.6
* Angular 4.4.2
* Test suite: Rpec, Phantomjs, Karma, Jasmine, Poltergeist

* Deployment instructions:
Make sure you have Postgress DB, Yarn, Ruby, and the Rails installed.

Setting up app:

Terminal commands:
1. bundle install
2. yarn install
3. rails db:create
4. rails db:migrate
5. rails db:seed (will take a while)
6. foreman start

Go to localhost:5000 and click sign up. User name has to end in '@example.com'
and password must be 10 characters long. Once logged in you must type in 'localhost:5000/customers' to see the customer search in action.

testing commands:

rails spec
rake karma (Phantomjs needs to be installed)
