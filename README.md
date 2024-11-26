# slo-rally

Project is based on express.js and react native for IOS and ANDROID devices application. With
different features for mobile application for rally Slovenia, time, live results, result of previous
year, etc.

# Local Setup

npm init -y
npm install express
npm install --save-dev typescript @types/node @types/express ts-node
npm install express-async-handler // For handling aysnc calls
npm install fast-xml-parser // For parsing xml
npm install node-fetch // For requests
npm install @types/cors --save-dev

Here’s what these packages do:

express: The Express.js framework.
typescript: TypeScript compiler.
@types/node: Type definitions for Node.js.
@types/express: Type definitions for Express.js.
ts-node: A TypeScript execution engine for Node.js, useful for running TypeScript files directly
during development.

# Configure Typescript

npx tsc --init

```
{
  "compilerOptions": {
    "target": "ES6",                         // The ECMAScript target version
    "module": "CommonJS",                    // Module system (Node.js uses CommonJS)
    "esModuleInterop": true,                  // Enable compatibility for common ES module features
    "skipLibCheck": true,                    // Skip type checking for declaration files
    "strict": true,                          // Enable all strict type-checking options
    "forceConsistentCasingInFileNames": true, // Ensure consistent casing in imports
    "outDir": "./dist",                      // The directory for compiled JS files
    "rootDir": "./src",                      // The directory where TypeScript source files are located
    "resolveJsonModule": true,               // Allow importing JSON files
    "moduleResolution": "node",              // Resolve modules like Node.js
    "baseUrl": ".",                          // Set the base directory for non-relative imports
    "paths": {
      "*": ["node_modules/*"]                // Resolve modules from the node_modules folder
    }
  },
  "include": ["src/**/*.ts"],                 // Include all TypeScript files in the src folder
  "exclude": ["node_modules"]                 // Exclude node_modules
}

```

# Architecture example

```
my-express-ts-app/
├── src/                         # Source files (TypeScript files)
│   ├── controllers/             # Controller files for request handling
│   │   ├── userController.ts    # Handles user-related requests
│   │   └── authController.ts    # Handles authentication requests
│   ├── routes/                  # Define routes for each resource
│   │   ├── userRoutes.ts        # Routes for user endpoints (e.g., /users)
│   │   └── authRoutes.ts        # Routes for authentication endpoints (e.g., /auth)
│   ├── models/                  # Mongoose models or database schemas
│   │   ├── userModel.ts         # User schema definition for MongoDB
│   │   └── postModel.ts         # Post schema definition (if using MongoDB)
│   ├── services/                # Business logic layer (functions interacting with models)
│   │   ├── userService.ts       # Business logic for user-related actions
│   │   └── authService.ts       # Business logic for auth operations
│   ├── middleware/              # Custom middleware (authentication, error handling)
│   │   ├── authMiddleware.ts    # Middleware for checking user authentication (JWT)
│   │   └── errorMiddleware.ts   # Global error handler middleware
│   ├── utils/                   # Utility functions (helpers, formatters, etc.)
│   │   ├── logger.ts            # Logging utility (could use Winston or other)
│   │   └── responseHelper.ts    # Helper functions to format API responses
│   ├── config/                  # Configuration files (e.g., database, env variables)
│   │   └── config.ts            # Application configuration (e.g., DB connection, API keys)
│   ├── app.ts                   # Main app setup (Express initialization)
│   └── server.ts                # Server entry point (app.listen)
├── dist/                        # Compiled JavaScript files (output of TypeScript compilation)
├── node_modules/                # Project dependencies
├── package.json                 # Project metadata and dependencies
├── tsconfig.json                # TypeScript compiler options
├── .env                         # Environment variables (e.g., DB_URI, JWT_SECRET)
├── .gitignore                   # To exclude files/folders from git (node_modules, dist, etc.)
└── README.md                    # Project documentation
```

```
/my-express-app
├── /controllers
│   └── competitionController.ts   # Handles the logic for the /competition endpoint
├── /routes
│   └── competitionRoutes.ts      # Defines the /competition route
├── /utils
│   └── xmlParser.ts              # Utility function to parse XML
├── /node_modules
├── package.json
├── tsconfig.json
└── server.ts                     # The entry point for the application
```