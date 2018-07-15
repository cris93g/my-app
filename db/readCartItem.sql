SELECT *
FROM items
INNER JOIN cart
ON items.item_id = cart.item_id;