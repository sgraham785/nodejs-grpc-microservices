/**
 * @swagger
 * definitions:
 *   ListUsers:
 *     properties:
 *       limit:
 *         type: integer
 *         format: int32
 *         example: 15
 *       page:
 *         type: integer
 *         format: int32
 *         example: 0
 *       sort:
 *         type: string
 *         example: last_name
 *     example:
 *       limit: 25
 *       page: 0
 *       sort: last_name
 */

/**
 * @swagger
 * /v0/users/:
 *   get:
 *     description: List of users
 *     tags: [Users]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: limit
 *         description: Number of users returned (default=10)
 *         in: query
 *         required: false
 *         type: integer
 *         example: 15
 *         schema:
 *           $ref: '#/definitions/ListUsers'
 *       - name: page
 *         description: Page number (default=0, page * limit)
 *         in: query
 *         required: false
 *         type: integer
 *         example: 0
 *         schema:
 *           $ref: '#/definitions/ListUsers'
 *       - name: sort
 *         description: Sort users (default=name; options=first_name,last_name)
 *         in: query
 *         required: false
 *         type: string
 *         example: last_name
 *         schema:
 *           $ref: '#/definitions/ListUsers'
 *     responses:
 *       200:
 *         description: Successful return
 */

/**
 * @swagger
 * definitions:
 *   GetUserById:
 *     properties:
 *       id:
 *         type: string
 */

/**
 * @swagger
 * /v0/users/{id}/:
 *   get:
 *     description: Get an User by id with all it's fields
 *     tags: [Users]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: User id.
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/GetUserById'
 *     responses:
 *       200:
 *         description: Successful return
 */
