PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_action_logs` (
	`id` integer PRIMARY KEY NOT NULL,
	`user` text NOT NULL,
	`action` text NOT NULL,
	`timestamp` integer DEFAULT (unixepoch()) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_action_logs`("id", "user", "action", "timestamp") SELECT "id", "user", "action", "timestamp" FROM `action_logs`;--> statement-breakpoint
DROP TABLE `action_logs`;--> statement-breakpoint
ALTER TABLE `__new_action_logs` RENAME TO `action_logs`;--> statement-breakpoint
PRAGMA foreign_keys=ON;