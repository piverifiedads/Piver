export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // هذا الجزء هو المسؤول عن إظهار كود التحقق
    if (url.pathname === "/validation-key.txt") {
      const validationKey = "59a15951f520073db579a1427aa421e738f893ca33f984db3b3b67dd26d68886ccc3c6f7c93da2c24a08fc412b135ed379a2d5770b7d206fc97786be651dd532"; 
      return new Response(validationKey, {
        headers: { 
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "*" 
        },
      });
    }

    // محتوى الصفحة الرئيسية للموقع
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>سوق إعلانات باي الموثق</title>
        <style>
            body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #673ab7; color: white; margin: 0; text-align: center; }
            .card { padding: 2rem; border-radius: 20px; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>سوق إعلانات باي الموثق</h1>
            <p>مرحباً بكم في تطبيقنا الجديد ضمن نظام Pi</p>
        </div>
    </body>
    </html>
    `;

    return new Response(htmlContent, {
      headers: { "Content-Type": "text/html; charset=UTF-8" },
    });
  },
};
