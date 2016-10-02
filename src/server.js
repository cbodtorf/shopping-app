/***********************
* Basic node server w/ Hapi
***********************/
'use strict'

const Hapi = require('hapi')
const Inert = require('inert')

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 3000
})

// this registers inert + routes with hapi
server.register([Inert], (err) => {
    if (err) { throw err }
  })


/**
*  INERT
* --- *
* Static serving of files. Web requests are all GET requests, and the
* path is basically saying "anything" here. Retrieve the specified files
* from the public/ directory (where your gulpfile should be outputting
* to) and return them.
*/
server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: './public/',
      redirectToSlash: true,
      index: true
    }
  }
})

server.start((err) => {
  if (err) { throw err }

  console.log('Server running at:', server.info.uri)
})
