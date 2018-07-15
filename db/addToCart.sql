INSERT INTO cart(item_id)
SELECT item_id
FROM items 
WHERE item_id = $1