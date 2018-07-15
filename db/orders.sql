INSERT INTO orders(item_id)
SELECT item_id
FROM items 
WHERE item_id = 
$1;