export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // التحقق إذا كان الطلب لملف التحقق
    if (url.pathname === "/validation-key.txt") {
      return new Response("59a15951f520073db579a1427aa421e738f893ca33f984db3b3b67dd26d68886ccc3c6f7c93da2c24a08fc412b135ed379a2d5770b7d206fc97786be651dd532", {
        headers: {
          "content-type": "text/plain;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // السماح لبقية الملفات (مثل index.html) بالظهور بشكل طبيعي
    return env.ASSETS.fetch(request);
  },
};
