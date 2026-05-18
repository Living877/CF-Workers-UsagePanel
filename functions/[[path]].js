// EdgeOne Pages Edge Function entry point
// Adapts the original Cloudflare Workers _worker.js to EdgeOne Pages format
import worker from '../_worker.js';

export async function onRequest(context) {
    return worker.fetch(context.request, context.env, context);
}
