export type Category = 'Hepsi' | 'Web' | 'Mobil' | 'AI' | 'Network Programming' | 'Oyun';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  projectUrl: string;
  category: Category;
  features?: string[];
}

export const projects: Project[] = [
  {
    title: "Stok ve Satış Takip Sistemi",
    description: "Angular ve .NET Core teknolojileri kullanılarak geliştirilmiş kapsamlı bir stok ve satış yönetim sistemi. Stok takibi, satış yönetimi, müşteri ilişkileri (CRM), tedarikçi yönetimi ve detaylı raporlama özellikleri ile modern işletmelerin tüm ihtiyaçlarını karşılar.",
    technologies: [
      "Angular",
      ".NET",
      "SQL Server"
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
    projectUrl: "https://github.com/ferhatbozkurt123/stock-automation",
    category: "Web",
    features: [
      "Ürün ve kategori yönetimi",
      "Gerçek zamanlı stok takibi",
      "Barkod sistemi entegrasyonu",
      "Satış ve ödeme işlemleri",
      "Müşteri ve tedarikçi yönetimi",
      "Cari hesap takibi",
      "Kapsamlı raporlama sistemi",
      "Rol tabanlı yetkilendirme",
      "Otomatik yedekleme sistemi",
      "Mobil uyumlu tasarım"
    ]
  },
  {
    title: "Reinforcement Learning ile Enerji Yönetimi",
    description: "Bu proje, akıllı ev sistemlerinde enerji tüketimini optimize etmek için Derin Pekiştirmeli Öğrenme (Deep Reinforcement Learning) kullanmaktadır. DDPG (Deep Deterministic Policy Gradient) algoritması kullanılarak, ev aletlerinin enerji tüketimini optimize ederken kullanıcı konforunu da göz önünde bulunduran bir sistem geliştirilmiştir.",
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
    projectUrl: "https://github.com/ferhatbozkurt123/smart_home_energy_rl",
    category: "AI",
    features: [
      "DDPG tabanlı akıllı enerji yönetimi",
      "Gerçek zamanlı cihaz kontrolü ve optimizasyonu",
      "Web tabanlı dashboard ile görselleştirme",
      "Enerji tüketimi, maliyet ve konfor analizi",
      "Cihaz çalışma saatlerinin optimizasyonu"
    ]
  },
  {
    title: "Trinity Game",
    description: "Unity ile geliştirilmiş, dinamik oyun mekanikleri, güç takviyesi sistemleri ve düşman yapay zekası içeren çok oyunculu bir aksiyon oyunu. Çoklu oyuncu desteği, gelişmiş savaş mekanikleri, özelleştirilebilir karakterler ve zengin ses efektleri ile tam kapsamlı bir oyun deneyimi sunar.",
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
    projectUrl: "https://github.com/ferhatbozkurt123/trinity-game",
    category: "Oyun",
    features: [
      "Çok oyunculu ağ tabanlı oyun deneyimi",
      "Dinamik savaş sistemi (bomba ve ışık mekanikleri)",
      "Gelişmiş düşman yapay zeka sistemi",
      "Özelleştirilebilir karakterler",
      "Güç takviyesi sistemi",
      "Entegre ses efektleri ve müzikler",
      "Oyun içi duraklatma özelliği",
      "Sade ve kullanışlı arayüz"
    ]
  },
  {
    title: "SmartHome - Akıllı Ev Yönetim Uygulaması",
    description: "Modern ve kullanıcı dostu bir arayüze sahip, kapsamlı bir akıllı ev yönetim uygulaması. SwiftUI ile geliştirilmiş bu uygulama, evinizin tüm akıllı cihazlarını tek bir noktadan kontrol etmenizi sağlar. Hava durumu takibi, enerji tüketim grafikleri, güvenlik sistemi yönetimi ve oda bazlı kontroller gibi kapsamlı özellikler sunar.",
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
    projectUrl: "https://github.com/ferhatbozkurt123/smart-home",
    category: "Mobil",
    features: [
      "Ana kontrol paneli ve hızlı erişim butonları",
      "Güvenlik sistemi ve kamera yönetimi",
      "Oda bazlı aydınlatma ve termostat kontrolü",
      "Enerji tüketim takibi ve raporlama",
      "Bildirim yönetimi ve özelleştirilebilir arayüz",
      "Karanlık mod desteği",
      "Animasyonlu arayüz elemanları",
      "Modern SwiftUI mimarisi ve MVVM tasarım deseni"
    ]
  },
  {
    title: "FTP İstemci Programı",
    description: "Python programlama dili kullanılarak geliştirilmiş kullanıcı dostu bir FTP istemci programı. Renkli terminal arayüzü üzerinden temel FTP işlemlerini kolayca gerçekleştirebilmenizi sağlar. Dosya transferi, dizin yönetimi ve detaylı hata raporlama özellikleri ile güvenilir bir FTP istemcisi.",
    technologies: [
      "Python",
      "Networking",
      "Terminal UI"
    ],
    images: [
      "/projects/ftp-client/1.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123/ftp-client",
    category: "Network Programming",
    features: [
      "FTP sunucusuna bağlanma ve giriş yapma",
      "Yerel ve uzak dizin içeriğini listeleme",
      "Dosya yükleme ve indirme",
      "Dizin oluşturma ve silme",
      "Dosya adı değiştirme",
      "Renkli ve kullanıcı dostu terminal arayüzü",
      "Detaylı hata mesajları ve durum bildirimleri",
      "Güvenli bağlantı yönetimi",
      "Kolay kurulum ve kullanım"
    ]
  },
  {
    title: "Taşınmaz Varlık Yönetim Sistemi",
    description: "Taşınmaz (gayrimenkul) varlıkların etkin yönetimi için geliştirilmiş web tabanlı bir uygulama. .NET 7 Web API ve Angular 15+ kullanılarak geliştirilen sistem, taşınmazların detaylı yönetimi, harita üzerinde konumlandırma, rol tabanlı yetkilendirme ve değer karşılaştırma özellikleri sunar. Katmanlı mimari ve modern web teknolojileri kullanılarak oluşturulmuştur.",
    technologies: [
      ".NET",
      "Angular",
      "SQL Server"
    ],
    images: [
      "/projects/property-management/1.png",
      "/projects/property-management/2.png"
    ],
    projectUrl: "https://github.com/ferhatbozkurt123/property-management",
    category: "Web",
    features: [
      "Taşınmaz varlık yönetimi (CRUD işlemleri)",
      "Detaylı taşınmaz bilgi görüntüleme",
      "Rol tabanlı kullanıcı yetkilendirme",
      "Harita üzerinden konum bazlı görüntüleme",
      "Belge ve medya ekleme desteği",
      "Harita bazlı değer karşılaştırması",
      "Katmanlı mimari yapı",
      "Güvenli API entegrasyonu"
    ]
  },
  {
    title: "React E-Ticaret Demo",
    description: "Next.js 13+ ve TypeScript ile geliştirilmiş modern ve ölçeklenebilir bir e-ticaret platformu. Responsive tasarım, gelişmiş ürün yönetimi, kullanıcı hesap yönetimi, alışveriş sepeti, favori ürünler, gelişmiş arama, admin paneli, kampanya yönetimi, toplu sipariş ve ürün karşılaştırma gibi kapsamlı özelliklere sahip.",
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
    projectUrl: "https://github.com/ferhatbozkurt123/ecommerce-demo",
    category: "Web",
    features: [
      "Responsive tasarım",
      "Gelişmiş ürün yönetimi",
      "Kullanıcı hesap yönetimi",
      "Alışveriş sepeti ve favori ürünler",
      "Gelişmiş arama fonksiyonu",
      "Admin paneli",
      "Kampanya yönetimi",
      "Toplu sipariş",
      "Ürün karşılaştırma",
      "Rol tabanlı yetkilendirme"
    ]
  },
  {
    title: "Karbon Ayak İzi Takip Uygulaması",
    description: "Bu mobil uygulama, kullanıcıların karbon ayak izlerini takip etmelerini, analiz etmelerini ve daha sürdürülebilir yaşam alışkanlıkları geliştirmelerini amaçlar. Kullanıcı dostu arayüzü ile ulaşım, enerji ve gıda gibi temel kategorilerdeki karbon salınımını izleme imkânı sunar.",
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
    projectUrl: "https://github.com/kullaniciadi/karbon-ayak-izi",
    category: "Mobil",
    features: [
      "Toplam Karbon Ayak İzi Hesaplama",
      "Kategori Bazlı Dağılım",
      "Firebase Entegrasyonu",
      "Veri Girişi & Analiz",
      "Sade ve Anlaşılır UI"
    ]
  },
  {
    title: "Ehliyet Sınavı Hazırlık Uygulaması",
    description: "iOS platformu için geliştirilmiş kapsamlı bir ehliyet sınavı hazırlık uygulaması. 2019'dan 2025'e kadar olan sınav sorularını içeren, yıllara göre kategorize edilmiş içeriğiyle kullanıcıların sınavlara hazırlanmasını kolaylaştırır. SwiftUI ile geliştirilmiş modern ve kullanıcı dostu arayüzü sayesinde kolay navigasyon ve etkili çalışma imkanı sunar.",
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
    projectUrl: "https://github.com/ferhatbozkurt123/driving-exam",
    category: "Mobil",
    features: [
      "2019-2025 arası sınav soruları",
      "Yıllara göre kategorize edilmiş içerik",
      "Modern ve kullanıcı dostu arayüz",
      "Kolay navigasyon",
      "Güncel sınav yılı vurgusu",
      "Aylık sınav detayları",
      "Yıl bazlı görünüm seçenekleri",
      "Detaylı sınav özeti"
    ]
  },
  {
    title: "POMEM Sınav Hazırlık Uygulaması",
    description: "iOS platformu için geliştirilmiş kapsamlı bir POMEM sınavı hazırlık uygulaması. Modern ve kullanıcı dostu arayüzü, kategorilere ayrılmış soru bankası, detaylı istatistikler ve kişisel çalışma performansı analizi özellikleriyle adayların sınava hazırlanma sürecini kolaylaştırır.",
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
    projectUrl: "https://github.com/ferhatbozkurt123/pomem-app",
    category: "Mobil",
    features: [
      "Modern ve kullanıcı dostu arayüz",
      "Kategorilere ayrılmış soru bankası",
      "Açık uçlu soru-cevap formatı",
      "Detaylı istatistikler ve ilerleme takibi",
      "Kişisel çalışma performansı analizi",
      "Göz yormayan tasarım"
    ]
  },
  {
    title: "ExamTracker - Deneme Sınavı Takip Uygulaması",
    description: "React Native ile geliştirilmiş, öğrencilerin sınavlarını ve çalışma programlarını takip etmelerine yardımcı olan kapsamlı bir mobil uygulama. Sınav takibi, çalışma programı oluşturma, sonuç analizi ve hatırlatıcı özellikleri ile öğrencilerin akademik başarısını artırmayı hedefler.",
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
    projectUrl: "https://github.com/ferhatbozkurt123/exam-tracker",
    category: "Mobil",
    features: [
      "Sınav takibi ve planlaması",
      "Çalışma programı oluşturma",
      "Sınav sonuçlarını kaydetme ve analiz etme",
      "Hatırlatıcılar ve bildirimler",
      "Kullanıcı dostu arayüz"
    ]
  },
  {
    title: "Para Birimi Takipçisi",
    description: "Modern ve kullanıcı dostu bir döviz kuru takip uygulaması. SwiftUI ile geliştirilmiş, MVVM mimarisi kullanan uygulama, canlı döviz kurları, altın fiyatları, detaylı grafik analizleri ve bildirim özellikleri sunar. Koyu/açık tema desteği, widget entegrasyonu ve yerel veri önbelleği gibi modern özelliklere sahiptir.",
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
    projectUrl: "https://github.com/ferhatbozkurt123/currency-tracker",
    category: "Mobil",
    features: [
      "Canlı döviz kurları ve altın fiyatları",
      "Detaylı grafik analizleri ve trend takibi",
      "Anlık döviz çevirici",
      "Favori para birimleri yönetimi",
      "Kur değişim bildirimleri",
      "Koyu/Açık tema desteği",
      "Widget entegrasyonu",
      "Yerel veri önbelleği"
    ]
  }
]; 