export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // هذا الجزء هو المسؤول عن تشغيل الخطوة رقم 8
    if (url.pathname === "/validation-key.txt") {
      return new Response("59a15951f520073db579a1427aa421e738f893ca33f984db3b3b67dd26d68886ccc3c6f7c93da2c24a08fc412b135ed379a2d5770b7d206fc97786be651dd532", {
        headers: { "content-type": "text/plain; charset=utf-8" },
      });
    }

    // لتشغيل الصفحة الرئيسية لموقعك (index.html)
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return new Response("Welcome to Pi Verified Ads Market", {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  }
};
