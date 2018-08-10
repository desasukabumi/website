module.exports = {
  base: "/",
  head: [["link", { rel: "icon", href: "/img/logo.png" }]],
  locales: {
    "/": {
      lang: "id",
      title: "Suka Bumi",
      description: "Desa berkembang di Kota Bangun"
    }
  },
  themeConfig: {
    lastUpdated: "Terakhir diperbarui",
    nav: [
      { text: "Beranda", link: "/" },
      {
        text: "Tentang",
        items: [
          { text: "Infrastruktur", link: "/infrastruktur" },
          { text: "Lembaga", link: "/lembaga" },
          { text: "Profil", link: "/profil" },
          { text: "Statistik", link: "/statistik" }
        ]
      },
      { text: "KKN", link: "/kkn" },
      { text: "Blog", link: "/blog/" }
    ]
  }
};
