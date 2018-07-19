INSERT INTO orders
    (item_id)
SELECT item_id
FROM cart;

-- SELECT *
-- FROM items
--     INNER JOIN items
--     ON items.item_id = orders.item_id;