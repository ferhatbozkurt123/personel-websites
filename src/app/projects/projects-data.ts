export type Category = 'Hepsi' | 'Web' | 'Mobil' | 'AI' | 'Network Programming' | 'Oyun';

export interface Project {
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  technologies: string[];
  images: string[];
  projectUrl: string;
  category: { tr: string; en: string };
  features?: { tr: string; en: string }[];
}

export const projects: Project[] = [
  {
    title: {
      tr: "Stok ve Satış Takip Sistemi",
      en: "Stock and Sales Management System"
    },
    description: {
      tr: "Angular ve .NET Core teknolojileri kullanılarak geliştirilmiş kapsamlı bir stok ve satış yönetim sistemi. Stok takibi, satış yönetimi, müşteri ilişkileri (CRM), tedarikçi yönetimi ve detaylı raporlama özellikleri ile modern işletmelerin tüm ihtiyaçlarını karşılar.",
      en: "A comprehensive stock and sales management system developed using Angular and .NET Core technologies. It meets all the needs of modern businesses with features such as stock tracking, sales management, customer relations (CRM), supplier management, and detailed reporting."
    },
    technologies: [
      "Angular",
      ".NET",
      "Azure SQL Server",
      "Azure SQL"
    ],
    images: [
      "/projects/stock-automation/1.png",
      "/projects/stock-automation/2.png",
      "/projects/stock-automation/3.png",
      "/projects/stock-automation/4.png",
      "/projects/stock-automation/5.png",
      "/projects/stock-automation/6.png",
      "/projects/stock-automation/7.png",
      "/projects/stock-automation/8.png",
      "/projects/stock-automation/9.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "Web",
      en: "Web"
    },
    features: [
      {
        tr: "Ürün ve kategori yönetimi",
        en: "Product and category management"
      },
      {
        tr: "Gerçek zamanlı stok takibi",
        en: "Real-time stock tracking"
      },
      {
        tr: "Barkod sistemi entegrasyonu",
        en: "Barcode system integration"
      },
      {
        tr: "Satış ve ödeme işlemleri",
        en: "Sales and payment transactions"
      },
      {
        tr: "Müşteri ve tedarikçi yönetimi",
        en: "Customer and supplier management"
      },
      {
        tr: "Cari hesap takibi",
        en: "Current account tracking"
      },
      {
        tr: "Kapsamlı raporlama sistemi",
        en: "Comprehensive reporting system"
      },
      {
        tr: "Rol tabanlı yetkilendirme",
        en: "Role-based authorization"
      },
      {
        tr: "Otomatik yedekleme sistemi",
        en: "Automatic backup system"
      },
      {
        tr: "Mobil uyumlu tasarım",
        en: "Mobile-friendly design"
      }
    ]
  },
  {
    title: {
      tr: "Reinforcement Learning ile Enerji Yönetimi",
      en: "Energy Management with Reinforcement Learning"
    },
    description: {
      tr: "Bu proje, akıllı ev sistemlerinde enerji tüketimini optimize etmek için Derin Pekiştirmeli Öğrenme (Deep Reinforcement Learning) kullanmaktadır. DDPG (Deep Deterministic Policy Gradient) algoritması kullanılarak, ev aletlerinin enerji tüketimini optimize ederken kullanıcı konforunu da göz önünde bulunduran bir sistem geliştirilmiştir.",
      en: "This project uses Deep Reinforcement Learning to optimize energy consumption in smart home systems. Using the DDPG (Deep Deterministic Policy Gradient) algorithm, a system is developed that optimizes the energy consumption of home appliances while considering user comfort."
    },
    technologies: [
      "Python",
      "Flask",
      "Chart.js"
    ],
    images: [
      "/projects/energy-rl/1.png",
      "/projects/energy-rl/2.png",
      "/projects/energy-rl/3.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "AI",
      en: "AI"
    },
    features: [
      {
        tr: "DDPG tabanlı akıllı enerji yönetimi",
        en: "DDPG-based smart energy management"
      },
      {
        tr: "Gerçek zamanlı cihaz kontrolü ve optimizasyonu",
        en: "Real-time device control and optimization"
      },
      {
        tr: "Web tabanlı dashboard ile görselleştirme",
        en: "Visualization with web-based dashboard"
      },
      {
        tr: "Enerji tüketimi, maliyet ve konfor analizi",
        en: "Analysis of energy consumption, cost, and comfort"
      },
      {
        tr: "Cihaz çalışma saatlerinin optimizasyonu",
        en: "Optimization of device operating hours"
      }
    ]
  },
  {
    title: {
      tr: "Trinity Game",
      en: "Trinity Game"
    },
    description: {
      tr: "Unity ile geliştirilmiş, dinamik oyun mekanikleri, güç takviyesi sistemleri ve düşman yapay zekası içeren çok oyunculu bir aksiyon oyunu. Çoklu oyuncu desteği, gelişmiş savaş mekanikleri, özelleştirilebilir karakterler ve zengin ses efektleri ile tam kapsamlı bir oyun deneyimi sunar.",
      en: "A multiplayer action game developed with Unity, featuring dynamic game mechanics, power-up systems, and enemy AI. It offers a complete gaming experience with multiplayer support, advanced combat mechanics, customizable characters, and rich sound effects."
    },
    technologies: [
      "Unity",
      "C#"
    ],
    images: [
      "/projects/trinity-game/1.png",
      "/projects/trinity-game/2.png",
      "/projects/trinity-game/3.png",
      "/projects/trinity-game/4.png",
      "/projects/trinity-game/5.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "Oyun",
      en: "Game"
    },
    features: [
      {
        tr: "Çok oyunculu ağ tabanlı oyun deneyimi",
        en: "Multiplayer network-based game experience"
      },
      {
        tr: "Dinamik savaş sistemi (bomba ve ışık mekanikleri)",
        en: "Dynamic combat system (bomb and light mechanics)"
      },
      {
        tr: "Gelişmiş düşman yapay zeka sistemi",
        en: "Advanced enemy AI system"
      },
      {
        tr: "Özelleştirilebilir karakterler",
        en: "Customizable characters"
      },
      {
        tr: "Güç takviyesi sistemi",
        en: "Power-up system"
      },
      {
        tr: "Entegre ses efektleri ve müzikler",
        en: "Integrated sound effects and music"
      },
      {
        tr: "Oyun içi duraklatma özelliği",
        en: "In-game pause feature"
      },
      {
        tr: "Sade ve kullanışlı arayüz",
        en: "Simple and user-friendly interface"
      }
    ]
  },
  {
    title: {
      tr: "SmartHome - Akıllı Ev Yönetim Uygulaması",
      en: "SmartHome - Smart Home Management App"
    },
    description: {
      tr: "Modern ve kullanıcı dostu bir arayüze sahip, kapsamlı bir akıllı ev yönetim uygulaması. SwiftUI ile geliştirilmiş bu uygulama, evinizin tüm akıllı cihazlarını tek bir noktadan kontrol etmenizi sağlar. Hava durumu takibi, enerji tüketim grafikleri, güvenlik sistemi yönetimi ve oda bazlı kontroller gibi kapsamlı özellikler sunar.",
      en: "A comprehensive smart home management app with a modern and user-friendly interface. Developed with SwiftUI, this app allows you to control all your smart devices from a single point. It offers features such as weather tracking, energy consumption graphs, security system management, and room-based controls."
    },
    technologies: [
      "iOS",
      "Swift",
      "Core Data"
    ],
    images: [
      "/projects/smart-home/1.png",
      "/projects/smart-home/2.png",
      "/projects/smart-home/3.png",
      "/projects/smart-home/4.png",
      "/projects/smart-home/5.png",
      "/projects/smart-home/6.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "Mobil",
      en: "Mobile"
    },
    features: [
      { tr: "Ana kontrol paneli ve hızlı erişim butonları", en: "Main control panel and quick access buttons" },
      { tr: "Güvenlik sistemi ve kamera yönetimi", en: "Security system and camera management" },
      { tr: "Oda bazlı aydınlatma ve termostat kontrolü", en: "Room-based lighting and thermostat control" },
      { tr: "Enerji tüketim takibi ve raporlama", en: "Energy consumption tracking and reporting" },
      { tr: "Bildirim yönetimi ve özelleştirilebilir arayüz", en: "Notification management and customizable interface" },
      { tr: "Karanlık mod desteği", en: "Dark mode support" },
      { tr: "Animasyonlu arayüz elemanları", en: "Animated UI elements" },
      { tr: "Modern SwiftUI mimarisi ve MVVM tasarım deseni", en: "Modern SwiftUI architecture and MVVM design pattern" }
    ]
  },
  {
    title: {
      tr: "FTP İstemci Programı",
      en: "FTP Client Program"
    },
    description: {
      tr: "Python programlama dili kullanılarak geliştirilmiş kullanıcı dostu bir FTP istemci programı. Renkli terminal arayüzü üzerinden temel FTP işlemlerini kolayca gerçekleştirebilmenizi sağlar. Dosya transferi, dizin yönetimi ve detaylı hata raporlama özellikleri ile güvenilir bir FTP istemcisi.",
      en: "A user-friendly FTP client program developed using Python. It allows you to easily perform basic FTP operations through a colorful terminal interface. With features such as file transfer, directory management, and detailed error reporting, it is a reliable FTP client."
    },
    technologies: [
      "Python",
      "Networking",
      "Terminal UI"
    ],
    images: [
      "/projects/ftp-client/1.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "Network Programming",
      en: "Network Programming"
    },
    features: [
      { tr: "FTP sunucusuna bağlanma ve giriş yapma", en: "Connect and login to FTP server" },
      { tr: "Yerel ve uzak dizin içeriğini listeleme", en: "List local and remote directory contents" },
      { tr: "Dosya yükleme ve indirme", en: "Upload and download files" },
      { tr: "Dizin oluşturma ve silme", en: "Create and delete directories" },
      { tr: "Dosya adı değiştirme", en: "Rename files" },
      { tr: "Renkli ve kullanıcı dostu terminal arayüzü", en: "Colorful and user-friendly terminal interface" },
      { tr: "Detaylı hata mesajları ve durum bildirimleri", en: "Detailed error messages and status notifications" },
      { tr: "Güvenli bağlantı yönetimi", en: "Secure connection management" },
      { tr: "Kolay kurulum ve kullanım", en: "Easy setup and usage" }
    ]
  },
  {
    title: {
      tr: "Taşınmaz Varlık Yönetim Sistemi",
      en: "Property Management System"
    },
    description: {
      tr: "Taşınmaz (gayrimenkul) varlıkların etkin yönetimi için geliştirilmiş web tabanlı bir uygulama. .NET 7 Web API ve Angular 15+ kullanılarak geliştirilen sistem, taşınmazların detaylı yönetimi, harita üzerinde konumlandırma, rol tabanlı yetkilendirme ve değer karşılaştırma özellikleri sunar. Katmanlı mimari ve modern web teknolojileri kullanılarak oluşturulmuştur.",
      en: "A web-based application developed for effective management of real estate assets. Built with .NET 7 Web API and Angular 15+, the system offers detailed management, map-based positioning, role-based authorization, and value comparison features. It is built using layered architecture and modern web technologies."
    },
    technologies: [
      ".NET",
      "Angular",
      "SQL Server"
    ],
    images: [
      "/projects/property-management/1.png",
      "/projects/property-management/2.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "Web",
      en: "Web"
    },
    features: [
      { tr: "Taşınmaz varlık yönetimi (CRUD işlemleri)", en: "Property management (CRUD operations)" },
      { tr: "Detaylı taşınmaz bilgi görüntüleme", en: "Detailed property information display" },
      { tr: "Rol tabanlı kullanıcı yetkilendirme", en: "Role-based user authorization" },
      { tr: "Harita üzerinden konum bazlı görüntüleme", en: "Map-based location display" },
      { tr: "Belge ve medya ekleme desteği", en: "Document and media attachment support" },
      { tr: "Harita bazlı değer karşılaştırması", en: "Map-based value comparison" },
      { tr: "Katmanlı mimari yapı", en: "Layered architecture" },
      { tr: "Güvenli API entegrasyonu", en: "Secure API integration" }
    ]
  },
  {
    title: {
      tr: "React E-Ticaret Demo",
      en: "React E-Commerce Demo"
    },
    description: {
      tr: "Next.js 13+ ve TypeScript ile geliştirilmiş modern ve ölçeklenebilir bir e-ticaret platformu. Responsive tasarım, gelişmiş ürün yönetimi, kullanıcı hesap yönetimi, alışveriş sepeti, favori ürünler, gelişmiş arama, admin paneli, kampanya yönetimi, toplu sipariş ve ürün karşılaştırma gibi kapsamlı özelliklere sahip.",
      en: "A modern and scalable e-commerce platform developed with Next.js 13+ and TypeScript. It features responsive design, advanced product management, user account management, shopping cart, favorites, advanced search, admin panel, campaign management, bulk orders, and product comparison."
    },
    technologies: [
      "React",
      "TypeScript",
      "Node.js"
    ],
    images: [
      "/projects/ecommerce-demo/1.png",
      "/projects/ecommerce-demo/2.png",
      "/projects/ecommerce-demo/3.png",
      "/projects/ecommerce-demo/4.png",
      "/projects/ecommerce-demo/5.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "Web",
      en: "Web"
    },
    features: [
      { tr: "Responsive tasarım", en: "Responsive design" },
      { tr: "Gelişmiş ürün yönetimi", en: "Advanced product management" },
      { tr: "Kullanıcı hesap yönetimi", en: "User account management" },
      { tr: "Alışveriş sepeti ve favori ürünler", en: "Shopping cart and favorites" },
      { tr: "Gelişmiş arama fonksiyonu", en: "Advanced search function" },
      { tr: "Admin paneli", en: "Admin panel" },
      { tr: "Kampanya yönetimi", en: "Campaign management" },
      { tr: "Toplu sipariş", en: "Bulk order" },
      { tr: "Ürün karşılaştırma", en: "Product comparison" },
      { tr: "Rol tabanlı yetkilendirme", en: "Role-based authorization" }
    ]
  },
  {
    title: {
      tr: "Karbon Ayak İzi Takip Uygulaması",
      en: "Carbon Footprint Tracking App"
    },
    description: {
      tr: "Bu mobil uygulama, kullanıcıların karbon ayak izlerini takip etmelerini, analiz etmelerini ve daha sürdürülebilir yaşam alışkanlıkları geliştirmelerini amaçlar. Kullanıcı dostu arayüzü ile ulaşım, enerji ve gıda gibi temel kategorilerdeki karbon salınımını izleme imkânı sunar.",
      en: "This mobile app aims to help users track and analyze their carbon footprint and develop more sustainable lifestyle habits. With its user-friendly interface, it allows tracking carbon emissions in key categories such as transportation, energy, and food."
    },
    technologies: [
      "iOS",
      "Swift",
      "Firebase"
    ],
    images: [
      "/projects/carbon-footprint/1.png",
      "/projects/carbon-footprint/2.png",
      "/projects/carbon-footprint/3.png",
      "/projects/carbon-footprint/4.png",
      "/projects/carbon-footprint/5.png",
      "/projects/carbon-footprint/6.png",
      "/projects/carbon-footprint/7.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "Mobil",
      en: "Mobile"
    },
    features: [
      { tr: "Toplam Karbon Ayak İzi Hesaplama", en: "Total Carbon Footprint Calculation" },
      { tr: "Kategori Bazlı Dağılım", en: "Category-based distribution" },
      { tr: "Firebase Entegrasyonu", en: "Firebase Integration" },
      { tr: "Veri Girişi & Analiz", en: "Data Entry & Analysis" },
      { tr: "Sade ve Anlaşılır UI", en: "Simple and Clear UI" }
    ]
  },
  {
    title: {
      tr: "Ehliyet Sınavı Hazırlık Uygulaması",
      en: "Driving License Exam Preparation App"
    },
    description: {
      tr: "iOS platformu için geliştirilmiş kapsamlı bir ehliyet sınavı hazırlık uygulaması. 2019'dan 2025'e kadar olan sınav sorularını içeren, yıllara göre kategorize edilmiş içeriğiyle kullanıcıların sınavlara hazırlanmasını kolaylaştırır. SwiftUI ile geliştirilmiş modern ve kullanıcı dostu arayüzü sayesinde kolay navigasyon ve etkili çalışma imkanı sunar.",
      en: "A comprehensive driving license exam preparation app developed for the iOS platform. It includes exam questions from 2019 to 2025, categorized by year, making it easier for users to prepare for exams. With its modern and user-friendly interface developed with SwiftUI, it offers easy navigation and effective study opportunities."
    },
    technologies: [
      "iOS",
      "Swift",
      "Core Data"
    ],
    images: [
      "/projects/driving-exam/1.png",
      "/projects/driving-exam/2.png",
      "/projects/driving-exam/3.png",
      "/projects/driving-exam/4.png",
      "/projects/driving-exam/5.png",
      "/projects/driving-exam/6.png",
      "/projects/driving-exam/7.png",
      "/projects/driving-exam/8.png",
      "/projects/driving-exam/9.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "Mobil",
      en: "Mobile"
    },
    features: [
      { tr: "2019-2025 arası sınav soruları", en: "Exam questions from 2019-2025" },
      { tr: "Yıllara göre kategorize edilmiş içerik", en: "Content categorized by years" },
      { tr: "Modern ve kullanıcı dostu arayüz", en: "Modern and user-friendly interface" },
      { tr: "Kolay navigasyon", en: "Easy navigation" },
      { tr: "Güncel sınav yılı vurgusu", en: "Current exam year emphasis" },
      { tr: "Aylık sınav detayları", en: "Monthly exam details" },
      { tr: "Yıl bazlı görünüm seçenekleri", en: "Year-based view options" },
      { tr: "Detaylı sınav özeti", en: "Detailed exam summary" }
    ]
  },
  {
    title: {
      tr: "POMEM Sınav Hazırlık Uygulaması",
      en: "POMEM Exam Preparation App"
    },
    description: {
      tr: "iOS platformu için geliştirilmiş kapsamlı bir POMEM sınavı hazırlık uygulaması. Modern ve kullanıcı dostu arayüzü, kategorilere ayrılmış soru bankası, detaylı istatistikler ve kişisel çalışma performansı analizi özellikleriyle adayların sınava hazırlanma sürecini kolaylaştırır.",
      en: "A comprehensive POMEM exam preparation app developed for the iOS platform. With its modern and user-friendly interface, categorized question bank, detailed statistics, and personal study performance analysis features, it makes the exam preparation process easier for candidates."
    },
    technologies: [
      "iOS",
      "Swift",
      "Core Data"
    ],
    images: [
      "/projects/pomem-app/1.png",
      "/projects/pomem-app/2.png",
      "/projects/pomem-app/3.png",
      "/projects/pomem-app/4.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "Mobil",
      en: "Mobile"
    },
    features: [
      { tr: "Modern ve kullanıcı dostu arayüz", en: "Modern and user-friendly interface" },
      { tr: "Kategorilere ayrılmış soru bankası", en: "Categorized question bank" },
      { tr: "Açık uçlu soru-cevap formatı", en: "Open-ended question-answer format" },
      { tr: "Detaylı istatistikler ve ilerleme takibi", en: "Detailed statistics and progress tracking" },
      { tr: "Kişisel çalışma performansı analizi", en: "Personal study performance analysis" },
      { tr: "Göz yormayan tasarım", en: "Eye-friendly design" }
    ]
  },
  {
    title: {
      tr: "ExamTracker - Deneme Sınavı Takip Uygulaması",
      en: "ExamTracker - Mock Exam Tracking App"
    },
    description: {
      tr: "React Native ile geliştirilmiş, öğrencilerin sınavlarını ve çalışma programlarını takip etmelerine yardımcı olan kapsamlı bir mobil uygulama. Sınav takibi, çalışma programı oluşturma, sonuç analizi ve hatırlatıcı özellikleri ile öğrencilerin akademik başarısını artırmayı hedefler.",
      en: "A comprehensive mobile app developed with React Native to help students track their exams and study schedules. It aims to increase students' academic success with features such as exam tracking, study schedule creation, result analysis, and reminders."
    },
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js"
    ],
    images: [
      "/projects/exam-tracker/1.png",
      "/projects/exam-tracker/2.png",
      "/projects/exam-tracker/3.png",
      "/projects/exam-tracker/4.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "Mobil",
      en: "Mobile"
    },
    features: [
      { tr: "Sınav takibi ve planlaması", en: "Exam tracking and planning" },
      { tr: "Çalışma programı oluşturma", en: "Creating a study schedule" },
      { tr: "Sınav sonuçlarını kaydetme ve analiz etme", en: "Recording and analyzing exam results" },
      { tr: "Hatırlatıcılar ve bildirimler", en: "Reminders and notifications" },
      { tr: "Kullanıcı dostu arayüz", en: "User-friendly interface" }
    ]
  },
  {
    title: {
      tr: "Para Birimi Takipçisi",
      en: "Currency Tracker"
    },
    description: {
      tr: "Modern ve kullanıcı dostu bir döviz kuru takip uygulaması. SwiftUI ile geliştirilmiş, MVVM mimarisi kullanan uygulama, canlı döviz kurları, altın fiyatları, detaylı grafik analizleri ve bildirim özellikleri sunar. Koyu/açık tema desteği, widget entegrasyonu ve yerel veri önbelleği gibi modern özelliklere sahiptir.",
      en: "A modern and user-friendly currency tracking app. Developed with SwiftUI and using the MVVM architecture, the app offers live exchange rates, gold prices, detailed chart analysis, and notification features. It also includes modern features such as dark/light theme support, widget integration, and local data caching."
    },
    technologies: [
      "iOS",
      "Swift",
      "Core Data"
    ],
    images: [
      "/projects/currency-tracker/1.png",
      "/projects/currency-tracker/2.png",
      "/projects/currency-tracker/3.png",
      "/projects/currency-tracker/4.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123",
    category: {
      tr: "Mobil",
      en: "Mobile"
    },
    features: [
      { tr: "Canlı döviz kurları ve altın fiyatları", en: "Live exchange rates and gold prices" },
      { tr: "Detaylı grafik analizleri ve trend takibi", en: "Detailed chart analysis and trend tracking" },
      { tr: "Anlık döviz çevirici", en: "Instant currency converter" },
      { tr: "Favori para birimleri yönetimi", en: "Favorite currency management" },
      { tr: "Kur değişim bildirimleri", en: "Exchange rate change notifications" },
      { tr: "Koyu/Açık tema desteği", en: "Dark/Light theme support" },
      { tr: "Widget entegrasyonu", en: "Widget integration" },
      { tr: "Yerel veri önbelleği", en: "Local data caching" }
    ]
  }
]; 