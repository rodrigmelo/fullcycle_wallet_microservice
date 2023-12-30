CREATE TABLE balances (
    id VARCHAR(255),
    account_id VARCHAR(255),
    balance INT,
    created_at DATE,
    updated_at DATE
);

INSERT INTO balances (id, account_id, balance, created_at, updated_at)
VALUES
    ('1', '1', 1000, NOW(), NOW()),
    ('2', '2', 0, NOW(), NOW());