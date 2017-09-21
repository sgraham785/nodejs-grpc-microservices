import path from 'path'
import swaggerJSDoc from 'swagger-jsdoc'

const swaggerDefinition = {
  info: {
    title: 'WorkplaceX API', // Title (required)
    version: '0.0.1', // Version (required)
    description: 'An API client gateway for WorkplaceX' // Description (optional)
  }
  // host: host, // Host (optional)
  // basePath: '/', // Base path (optional)
}

// Options for the swagger docs
let options = {
  // Import swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  apis: [
    path.resolve(__dirname, '../resources/**/swagger.js')
  ]
}

// Initialize & export swagger-jsdoc -> returns validated swagger spec in json format
export const swaggerSpec = swaggerJSDoc(options)
