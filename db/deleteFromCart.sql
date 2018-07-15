DELETE FROM cart 
WHERE id = $1;

SELECT *
FROM items
INNER JOIN cart
ON items.item_id = cart.item_id;