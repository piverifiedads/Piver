export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. مسار التحقق الخاص بـ Pi Network (الخطوة 8)
    if (url.pathname === "/validation-key.txt") {
      // استبدلي النص أدناه بالكود الطويل الذي حصلتِ عليه من تطبيق Pi
      const validationKey = "59a15951f520073db579a1427aa421e738f893ca33f984db3b3b67dd26d68886ccc3c6f7c93da2c24a08fc412b135ed379a2d5770b7d206fc97786be651dd532"; 
      
      return new Response(validationKey, {
        headers: { "Content-Type": "text/plain" },
      });
    }

    // 2. الصفحة الرئيسية للموقع (تظهر عند فتح الرابط المباشر)
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <title>Pi Verified Ads Market</title>
        <style>
            body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #673ab7; color: white; margin: 0; }
            .container { text-align: center; padding: 20px; border-radius: 15px; background: rgba(0,0,0,0.2); }
            h1 { font-size: 2rem; }
            p { font-size: 1.2rem; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>سوق إعلانات باي الموثق</h1>
            <p>مشروعك قيد التطوير والربط بنجاح..</p>
        </div>
    </body>
    </html>
    `;

    return new Response(htmlContent, {
      headers: { "Content-Type": "text/html; charset=UTF-8" },
    });
  },
};
