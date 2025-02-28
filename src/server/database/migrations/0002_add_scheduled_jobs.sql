CREATE TABLE `scheduled_jobs` (
	`id` integer PRIMARY KEY NOT NULL,
	`user` text NOT NULL,
	`action` text NOT NULL,
	`timestamp` integer NOT NULL
);
