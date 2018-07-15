-- SELECT
-- "public".cart.cart_id,
-- "public".items."name",
-- "public".items.price,
-- "public".items.img_url,
-- "public".items.category,
-- "public".items.description,
-- "public".cart.quantity
-- FROM
-- "public".cart
-- INNER JOIN "public".items ON "public".cart.item_id = "public".items.item_id
select cart_id, items.name, items.description, items.img_url, items.price,items.quantity from cart 
join items  
on items.item_id = cart.item_id
where user_id = $1;