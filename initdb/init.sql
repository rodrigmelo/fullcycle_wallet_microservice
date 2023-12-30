CREATE TABLE clients (
    id VARCHAR(255),
    name VARCHAR(255),
    email VARCHAR(255),
    created_at DATE
);

CREATE TABLE accounts (
    id VARCHAR(255),
    client_id VARCHAR(255),
    balance INT,
    created_at DATE
);

CREATE TABLE transactions (
    id VARCHAR(255),
    account_id_from VARCHAR(255),
    account_id_to VARCHAR(255),
    amount INT,
    created_at DATE
);

INSERT INTO clients (id, name, email, created_at)
VALUES
    ('1', 'John Doe', 'john@example.com', NOW()),
    ('2', 'Jane Smith', 'jane@example.com', NOW());

INSERT INTO accounts (id, client_id, balance, created_at)
VALUES
    ('1', '1', 1000, NOW()),
    ('2', '2', 0, NOW());