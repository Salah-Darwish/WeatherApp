import commonAr from "i18n-js/json/ar.json";

export default {
  ...commonAr.ar,
  errors: {
    error: "خطأ",
    saveSettings: "حدث خطأ أثناء حفظ الإعدادات.",
  },
  home: {
    title: "الرئيسية",
    notifications: {
      zero: "لا توجد لديك اشعارات.",
      one: "لديك اشعار واحد.",
      other: "لديك %{count} اشعارات.",
    },
  },
  settings: {
    title: "الاعدادات",
    useDeviceColorScheme: "استخدام نمط الالوان من اعدادات الجهاز",
    colorScheme: "نمط الالوان",
    dark: "داكن",
    light: "فاتح",
    units: "نظام الوحدات",
    metric: "متري",
    imperial: "إمبراطوري",
    language: "اللغة",
    english: "الانجليزية",
    arabic: "العربية",
    languageInfo: "يتطلب تغيير اللغة إعادة تحميل التطبيق.",
    reload: "إعادة تحميل التطبيق",
  },
};
