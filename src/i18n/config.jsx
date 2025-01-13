import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      '办学理念': 'Educational Philosophy',
      '优势': 'Strength',
      '环境': 'Environment',
      '执照和资质': 'License & Qualifications',
      '联系我们': 'Contact Us'
    }
  },
  zh: {
    translation: {
      '办学理念': '办学理念',
      '优势': '优势',
      '环境': '环境',
      '执照和资质': '执照和资质',
      '联系我们': '联系我们'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh',
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 