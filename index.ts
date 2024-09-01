import chalk from "chalk";

const environment = Bun.env.ENVIRONMENT;
let accessControlAllowOrigins = "*";
if (environment === "production") {
    accessControlAllowOrigins = "https://mameru.vercel.app"
}

const CORS_HEADERS = {
        'Access-Control-Allow-Origin': accessControlAllowOrigins,
        'Access-Control-Allow-Methods': 'GET, DELETE, HEAD, PATCH, PUT, OPTIONS, POST',
};

// TODO
// 1. [x] CORS
// 2. [ ] HTTP File
// 3. [ ] logs
// 4. [ ] Error Handling

const server = Bun.serve({
    async fetch(request) {

        // Handle CORS preflight requests
        if (request.method === 'OPTIONS') {
            const response = new Response('Departed', {
                headers: {
                    ...CORS_HEADERS
                }
            });
            return response;
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
                    },
                });
                const stats: StatsResponse = await response.json();
                return Response.json(stats, {
                    headers: {
                        ...CORS_HEADERS
                    }
                });
        }
    },
});

console.log(chalk.green(`listening on: ${server.url}`));
