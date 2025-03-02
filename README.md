# Tractor Block Heater controller

## Next.js app that can change current state of block heater as well as ability to create scheduled times to change state.

Using next 15, tailwind, drizzle orm, and sqlite, with cron for the scheduled jobs

To run:

`npm ci`  
`cp .env.example .env.local`  
`touch database.sqlite`  
`npx drizzle-kit migrate`  
`npm run build`  
`npm start`

![image](https://github.com/user-attachments/assets/1c1bedc0-9c52-4b04-a064-371978ccd43b)

