/**
 * @swagger
 * definitions:
 *   GetItems:
 *     properties:
 *       limit:
 *         type: integer
 *         format: int32
 *         example: 15
 *       page:
 *         type: integer
 *         format: int32
 *         example: 2
 *       sort:
 *         type: string
 *         example: name
 *     example:
 *       limit: 25
 *       page: 2
 *       sort: name
 */

/**
 * @swagger
 * /v0/items/:
 *   get:
 *     description: Get items for the grid view, fields=_id, name, price, images
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: limit
 *         description: Number of items returned (default=10)
 *         in: query
 *         required: false
 *         type: integer
 *         example: 15
 *         schema:
 *           $ref: '#/definitions/GetItems'
 *       - name: page
 *         description: Page number (default=0, page * limit)
 *         in: query
 *         required: false
 *         type: integer
 *         example: 1
 *         schema:
 *           $ref: '#/definitions/GetItems'
 *       - name: sort
 *         description: Sort items (default=name; options=name,-name,price,-price)
 *         in: query
 *         required: false
 *         type: string
 *         example: -name
 *         schema:
 *           $ref: '#/definitions/GetItems'
 *     responses:
 *       200:
 *         description: Successful return
 */

/**
 * @swagger
 * definitions:
 *   GetItemByItemId:
 *     properties:
 *       id:
 *         type: string
 */

/**
 * @swagger
 * /v0/items/{id}/:
 *   get:
 *     description: Get an item by id with all it's fields
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Item id.
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/GetItemByItemId'
 *     responses:
 *       200:
 *         description: Successful return
 */

 /**
 * @swagger
 * definitions:
 *   GetItemsSearch:
 *     properties:
 *       q:
 *         type: string
 *         example: tag1
 *       limit:
 *         type: integer
 *         format: int32
 *         example: 15
 *       page:
 *         type: integer
 *         format: int32
 *         example: 2
 *       sort:
 *         type: string
 *         example: name
 *     example:
 *       q: tag1
 *       limit: 25
 *       page: 2
 *       sort: name
 */

/**
 * @swagger
 * /v0/items/search/:
 *   get:
 *     description: Get full text search items for the grid view, fields=_id, name, price, images
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: q
 *         description: Comma delimited search strings. e.g. q=tag1,tag2. Search index has item names, vendors, & tags
 *         in: query
 *         required: false
 *         type: string
 *         schema:
 *           $ref: '#/definitions/GetItems'
 *       - name: limit
 *         description: Number of items returned (default=10)
 *         in: query
 *         required: false
 *         type: integer
 *         example: 15
 *         schema:
 *           $ref: '#/definitions/GetItems'
 *       - name: page
 *         description: Page number (default=0, page * limit)
 *         in: query
 *         required: false
 *         type: integer
 *         example: 1
 *         schema:
 *           $ref: '#/definitions/GetItems'
 *       - name: sort
 *         description: Sort items (default=name; options=name,-name,price,-price)
 *         in: query
 *         required: false
 *         type: string
 *         example: name,-price
 *         schema:
 *           $ref: '#/definitions/GetItems'
 *     responses:
 *       200:
 *         description: Successful return
 */
