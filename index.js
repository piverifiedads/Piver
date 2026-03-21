export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // الرابط المطلوب للتحقق من ملكية النطاق (الخطوة 8)
    if (url.pathname === "/validation-key.txt") {
      // المفتاح الكامل كما أرسلتيه
      const fullKey = "59a15951f520073db579a1427aa421e738f893ca33f984db3b3b67dd26d68886ccc3c6f7c93da2c24a08fc412b135ed379a2d5770b7d206fc97786be651dd532";
      
      return new Response(fullKey, {
        headers: { 
          "Content-Type": "text/plain; charset=utf-8",
          "Access-Control-Allow-Origin": "*" // يسمح لتطبيق Pi بقراءة المفتاح
        },
      });
    }

    // لتشغيل بقية ملفات موقعك (مثل index.html) الموجودة في GitHub
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      // إذا فشل في إيجاد ملفات، يعرض هذه الرسالة بدلاً من 404
      return new Response("Pi Verified Ads Market - الموقع يعمل بنجاح", {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
  }
};
