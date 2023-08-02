CREATE USER "teams_system_api"@"localhost" IDENTIFIED BY "mySecretPassword";

GRANT ALL PRIVILEGES ON teams_system.teams TO 'teams_system_api'@'localhost';

flush privileges;