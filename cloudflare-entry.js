import worker, { DOQueueHandler, DOShardedTagCache, BucketCachePurge } from "./.open-next/worker.js";

export { DOQueueHandler, DOShardedTagCache, BucketCachePurge };

export default {
  ...worker,

  // Self-heals stale ISR pages independent of deploys or webhooks: revalidates
  // every route on a timer so a missed/failed Sanity webhook (e.g. a secret
  // mismatch) or a deploy-time race with in-flight content edits can't leave
  // the site stale for longer than one tick of this schedule.
  async scheduled(_event, env, ctx) {
    const siteUrl = env.NEXT_PUBLIC_SITE_URL ?? "https://rdsvenues.com";
    const url = `${siteUrl}/api/revalidate?secret=${encodeURIComponent(env.SANITY_WEBHOOK_SECRET ?? "")}`;
    const request = new Request(url);
    ctx.waitUntil(worker.fetch(request, env, ctx));
  },
};
