CREATE TABLE `action_logs` (
	`id` integer PRIMARY KEY NOT NULL,
	`user` text NOT NULL,
	`action` text NOT NULL,
	`timestamp` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
