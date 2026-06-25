import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ms: {
    translation: {
      "app": {
        "title": "Azam Auto Body Work & Service",
        "description": "Menyediakan kemudahan pembaharuan roadtax dan insurans dengan lebih mudah, cepat dan selesa untuk pelanggan."
      },
      "hero": {
        "sub": "INSURANS & ROADTAX",
        "title": "Pakar Insurans & Roadtax Anda",
        "note": "Tiada bayaran pendahuluan diperlukan"
      },
      "trust": {
        "fast": "Pembaharuan Pantas",
        "free": "Sebutharga Percuma",
        "notify": "Notifikasi Peringatan"
      },
      "nav": {
        "home": "Utama",
        "benefits": "Faedah",
        "steps": "Cara",
        "providers": "Syarikat",
        "installments": "Ansuran",
        "partners": "Rakan Kongsi",
        "quote": "Dapatkan Sebut Harga",
        "question": "Sebarang Pertanyaan?",
        "contactUs": "Hubungi Kami"
      },
      "partners": {
        "title": "Kerjasama Dengan Penyedia Insurans Terkemuka"
      },
      "benefits": {
        "title": "Faedah Utama",
        "b1_title": "Pantas & Selesa",
        "b1_desc": "Pembaharuan roadtax & insurans lebih pantas tanpa perlu beratur panjang.",
        "b2_title": "Sebutharga Percuma",
        "b2_desc": "Sebutharga insurans diberi secara percuma, membolehkan pelanggan membuat pilihan terbaik.",
        "b3_title": "Transaksi Fleksibel",
        "b3_desc": "Transaksi fleksibel sama ada secara tunai atau online.",
        "b4_title": "Notifikasi Peringatan",
        "b4_desc": "Pelanggan mendapat notifikasi maklumat tamat tempoh insurans."
      },
      "steps": {
        "title": "Cara Pembaharuan",
        "s1_title": "Hantar Maklumat Kenderaan",
        "s1_desc": "Berikan nombor pendaftaran atau salinan geran.",
        "s2_title": "Terima Sebutharga",
        "s2_desc": "Kami akan menyediakan sebut harga dengan pantas.",
        "s3_title": "Pilih Kaedah Bayaran",
        "s3_desc": "Tunai, online banking atau ansuran.",
        "s4_title": "Pembaharuan Selesai",
        "s4_desc": "Roadtax dan insurans anda diperbaharui dengan mudah."
      },
      "providers": {
        "title": "Pilihan Insurans & Takaful Yang Luas",
        "desc": "Kami membantu pelanggan dalam proses pembaharuan insurans dan roadtax melalui pelbagai pilihan syarikat insurans dan takaful yang tersedia di Malaysia."
      },
      "cta": {
        "title": "Dapatkan Sebutharga Percuma Hari Ini",
        "desc": "Hanya ambil masa kurang daripada 5 minit untuk mendapatkan sebut harga pembaharuan roadtax dan insurans anda.",
        "btn1": "WhatsApp Sekarang",
        "btn2": "Dapatkan Sebutharga"
      },
      "installments": {
        "title": "Bayaran Ansuran Mudah",
        "desc": "Pilihan bayaran secara ansuran untuk memudahkan urusan kewangan anda."
      },
      "footer": {
        "subtitle": "Pakar Insurans & Roadtax Pilihan Anda",
        "contactUs": "Hubungi Kami",
        "findUs": "Cari Kami",
        "opHours": "WAKTU OPERASI",
        "days1": "Sab – Kha:",
        "days2": "Jum:",
        "closed": "Tutup",
        "rights": "Hak Cipta Terpelihara."
      }
    }
  },
  en: {
    translation: {
      "app": {
        "title": "Azam Auto Body Work & Service",
        "description": "Providing easier, faster, and more comfortable roadtax and insurance renewal facilities for our customers."
      },
      "hero": {
        "sub": "INSURANCE & ROADTAX",
        "title": "Your Insurance & Roadtax Specialist",
        "note": "No upfront payment required"
      },
      "trust": {
        "fast": "Fast Renewal",
        "free": "Free Quotation",
        "notify": "Expiry Notifications"
      },
      "nav": {
        "home": "Home",
        "benefits": "Benefits",
        "steps": "Steps",
        "providers": "Providers",
        "installments": "Installments",
        "partners": "Partners",
        "quote": "Get a Quote",
        "question": "Any Questions?",
        "contactUs": "Contact Us"
      },
      "partners": {
        "title": "Partnering with Leading Insurance Providers"
      },
      "benefits": {
        "title": "Key Benefits",
        "b1_title": "Fast & Comfortable",
        "b1_desc": "Faster roadtax & insurance renewal without the long queues.",
        "b2_title": "Free Quotation",
        "b2_desc": "Free insurance quotations to help you make the best choice.",
        "b3_title": "Flexible Transactions",
        "b3_desc": "Flexible transaction options, both cash and online.",
        "b4_title": "Expiry Notifications",
        "b4_desc": "Receive automated notifications before your insurance expires."
      },
      "steps": {
        "title": "How to Renew",
        "s1_title": "Submit Vehicle Details",
        "s1_desc": "Provide your registration number or a copy of the grant.",
        "s2_title": "Receive Quotation",
        "s2_desc": "We will provide a quotation quickly.",
        "s3_title": "Choose Payment Method",
        "s3_desc": "Cash, online banking, or installments.",
        "s4_title": "Renewal Complete",
        "s4_desc": "Your roadtax and insurance are easily renewed."
      },
      "providers": {
        "title": "Wide Range of Insurance & Takaful Options",
        "desc": "We assist customers in the insurance and roadtax renewal process through a wide selection of insurance and takaful companies available in Malaysia."
      },
      "cta": {
        "title": "Get a Free Quote Today",
        "desc": "It takes less than 5 minutes to get a roadtax and insurance renewal quote.",
        "btn1": "WhatsApp Now",
        "btn2": "Get a Quote"
      },
      "installments": {
        "title": "Easy Installment Payments",
        "desc": "Installment payment options available to ease your financial arrangements."
      },
      "footer": {
        "subtitle": "Your Preferred Insurance & Roadtax Specialist",
        "contactUs": "Contact Us",
        "findUs": "Find Us",
        "opHours": "OPERATING HOURS",
        "days1": "Sat – Thu:",
        "days2": "Fri:",
        "closed": "Closed",
        "rights": "All rights reserved."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ms", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
