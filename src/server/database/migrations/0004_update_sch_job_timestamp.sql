ALTER TABLE `scheduled_jobs` ADD `time` text DEFAULT '00:00' NOT NULL;--> statement-breakpoint
ALTER TABLE `scheduled_jobs` DROP COLUMN `timestamp`;