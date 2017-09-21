/**
 * @swagger
 * definitions:
 *   CreateWishlist:
 *     properties:
 *       name:
 *         type: string
 *         example: My Wishlist
 *       users_id:
 *         type: string
 *       items_id:
 *         type: array
 *         items:
 *           type: string
 *     example:
 *       name: My Wishlist
 *       users_id: 59c2cc74e8d5553e73934db6
 *       items_id: [59c2cc74e8d5553e73934db7, 59c2cc74e8d5553e73934db8]
 */

/**
 * @swagger
 * /v0/wishlists/:
 *   post:
 *     description: Create a wishlist
 *     tags: [Wishlists]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: data
 *         description: Wishlist data payload
 *         in: body
 *         required: true
 *         type: string
 *         example: My Wishlist
 *         schema:
 *           $ref: '#/definitions/CreateWishlist'
 *     responses:
 *       200:
 *         description: Successful return
 */

/**
 * @swagger
 * definitions:
 *   ListWishlists:
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
 *       page: 0
 *       sort: name
 */

/**
 * @swagger
 * /v0/wishlists/:
 *   get:
 *     description: List of wishlists
 *     tags: [Wishlists]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: limit
 *         description: Number of wishlists returned (default=10)
 *         in: query
 *         required: false
 *         type: integer
 *         example: 15
 *         schema:
 *           $ref: '#/definitions/ListWishlists'
 *       - name: page
 *         description: Page number (default=0, page * limit)
 *         in: query
 *         required: false
 *         type: integer
 *         example: 0
 *         schema:
 *           $ref: '#/definitions/ListWishlists'
 *       - name: sort
 *         description: Sort wishlists (default=name; options=name,-name,price,-price)
 *         in: query
 *         required: false
 *         type: string
 *         example: name
 *         schema:
 *           $ref: '#/definitions/ListWishlists'
 *     responses:
 *       200:
 *         description: Successful return
 */

/**
 * @swagger
 * definitions:
 *   GetWishlistById:
 *     properties:
 *       id:
 *         type: string
 */

/**
 * @swagger
 * /v0/wishlists/{id}/:
 *   get:
 *     description: Get an Wishlist by id with all it's fields
 *     tags: [Wishlists]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Wishlist Id.
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/GetWishlistById'
 *     responses:
 *       200:
 *         description: Successful return
 */

 /**
 * @swagger
 * definitions:
 *   GetWishlistByUsersId:
 *     properties:
 *       users_id:
 *         type: string
 */

/**
 * @swagger
 * /v0/wishlists/user/{users_id}/:
 *   get:
 *     description: Get an Wishlist by id with all it's fields
 *     tags: [Wishlists]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: users_id
 *         description: Wishlist users_id.
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/GetWishlistByUsersId'
 *     responses:
 *       200:
 *         description: Successful return
 */

  /**
 * @swagger
 * definitions:
 *   updateWishlistNameById:
 *     properties:
 *       name:
 *         type: string
 *         example: My Updated Wishlist
 */

/**
 * @swagger
 * /v0/wishlists/{id}/:
 *   put:
 *     description: Update a Wishlist name by Id
 *     tags: [Wishlists]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Wishlist id.
 *         in: path
 *         required: true
 *         type: string
 *       - name: name
 *         description: Wishlist name.
 *         in: body
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/updateWishlistNameById'
 *     responses:
 *       200:
 *         description: Successful return
 */

 /**
 * @swagger
 * definitions:
 *   AddItemToWishlist:
 *     properties:
 *       id:
 *         type: string
 *       items_id:
 *         type: string
 */

/**
 * @swagger
 * /v0/wishlists/{id}/add/{items_id}:
 *   put:
 *     description: Add an item to a Wishlist
 *     tags: [Wishlists]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Wishlist id.
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/AddItemToWishlist'
 *       - name: items_id
 *         description: Item id.
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/AddItemToWishlist'
 *     responses:
 *       200:
 *         description: Successful return
 */

 /**
 * @swagger
 * definitions:
 *   RemoveItemToWishlist:
 *     properties:
 *       id:
 *         type: string
 *       items_id:
 *         type: string
 */

/**
 * @swagger
 * /v0/wishlists/{id}/remove/{items_id}:
 *   put:
 *     description: Remove an item from a Wishlist
 *     tags: [Wishlists]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Wishlist id.
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/RemoveItemToWishlist'
 *       - name: items_id
 *         description: Item id.
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/RemoveItemToWishlist'
 *     responses:
 *       200:
 *         description: Successful return
 */

  /**
 * @swagger
 * definitions:
 *   DeleteWishlistById:
 *     properties:
 *       id:
 *         type: string
 */

/**
 * @swagger
 * /v0/wishlists/{id}/:
 *   delete:
 *     description: Delete a Wishlist by id
 *     tags: [Wishlists]
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Wishlist id.
 *         in: path
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/DeleteWishlistById'
 *     responses:
 *       200:
 *         description: Successful return
 */
