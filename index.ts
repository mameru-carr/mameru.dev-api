import chalk from "chalk";

const environment = Bun.env.ENVIRONMENT;
let accessControlAllowOrigins = "*";
if (environment === "production") {
    accessControlAllowOrigins = "https://mameru.vercel.app"
}

const CORS_HEADERS = {
        'Access-Control-Allow-Origin': accessControlAllowOrigins,
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
        'Access-Control-Allow-Headers': 'Content-Type',
};

// TODO
// 1. CORS
// 2. HTTP File

const server = Bun.serve({
    port: 3000,
    async fetch(request) {

        // Handle CORS preflight requests
        if (request.method === 'OPTIONS') {
            const res = new Response('Departed', CORS_HEADERS);
            return res;
        }

        const path = new URL(request.url).pathname;
        const base_url = 'https://api.wakatime.com/api/v1';
        const apiKey = Bun.env.WAKATIME_API_KEY;
        const encodedKey = btoa(apiKey);

        switch(path) {
            case "/wakatime":
            const username = "@mameru-carr";
            const endpoint = `users/current/stats`;
            const url = `${base_url}/${endpoint}`;
            const response = await fetch(url, {
                method: "GET",
                headers : {
                    Authorization: `Basic ${encodedKey}`,
                    ...CORS_HEADERS
                },
            });
            const stats: StatsResponse = await response.json();
            return Response.json(stats);
        }
    },
});

console.log(chalk.green(`listening on PORT: ${server.url}`));
