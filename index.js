// هذا الكود يضمن استجابة الموقع لطلبات نظام باي
window.onload = function() {
    console.log("تم تحميل موقع سوق إعلانات باي بنجاح");
    
    // التأكد من أن ملف التوثيق متاح للقراءة
    fetch('/validation-key.txt')
        .then(response => {
            if (response.ok) {
                console.log("ملف التوثيق جاهز ونظام باي يمكنه قراءته الآن");
            } else {
                console.error("تحذير: ملف التوثيق غير موجود في المسار الصحيح");
            }
        })
        .catch(err => console.error("خطأ في الوصول للمفتاح: ", err));
};
