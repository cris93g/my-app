SELECT *
FROM orders
    INNER JOIN items
    ON orders.item_id = items.item_id;