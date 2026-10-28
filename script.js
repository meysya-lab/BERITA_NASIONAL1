const ARTICLE_LINKS = [
  '.lead-story a', '.news-card a', '.story-row a', '.tech-side-story a',
  '.popular-list a', '.economy-highlights a', '.economy-lead .story-open',
  '.tech-feature .story-open'
].join(', ');

const ARTICLES = new Map([
  ['https://www.antaranews.com/berita/5781562/menhan-dukung-kerja-sama-pertahanan-indonesia-dan-mesir', {
    category: 'POLITIK · DIPLOMASI', date: '12 Okt 2026, 12:26 WIB',
    summary: 'Sjafrie Sjamsoeddin mendukung kerja sama pertahanan Indonesia-Mesir yang mencakup industri pertahanan, pendidikan, latihan bersama, dan pertukaran keahlian.',
    details: [
      'Presiden Prabowo dan Presiden Mesir Abdel Fattah el-Sisi membahas penguatan kemitraan pertahanan dalam pertemuan bilateral di Jakarta.',
      'ANTARA juga melaporkan kerja sama di bidang perdagangan, investasi, kelautan, perikanan, dan pendidikan.'
    ]
  }],
  ['https://www.antaranews.com/berita/5781529/sugiono-resmi-serahkan-jabatan-menlu-ke-arrmanatha-nasir', {
    category: 'POLITIK · DIPLOMASI', date: '12 Okt 2026, 11:53 WIB',
    summary: 'Serah terima jabatan Menteri Luar Negeri dilakukan Sugiono kepada Arrmanatha Nasir di Gedung Pancasila Kementerian Luar Negeri.',
    details: [
      'Upacara mencakup penandatanganan berita acara dan penyerahan memori jabatan.',
      'Arrmanatha dilantik sebagai Menlu pada 1 Oktober 2026; Sugiono dilantik sebagai Menko PMK.'
    ]
  }],
  ['https://www.antaranews.com/berita/5781546/investasi-kota-tangerang-semester-i-rp117-triliun-serap-29887-naker', {
    category: 'EKONOMI · INVESTASI', date: '12 Okt 2026, 12:13 WIB',
    summary: 'Realisasi investasi Kota Tangerang pada Januari-Juni 2026 mencapai Rp11,7 triliun dan menyerap 29.887 tenaga kerja, menurut data DPMPTSP setempat.',
    details: [
      'Nilai tersebut terdiri dari Rp8,385 triliun PMDN dan Rp3,349 triliun PMA. Capaian itu sekitar 77 persen dari target RPJMD Rp15,15 triliun.',
      'Investasi tersebar pada 18.136 proyek. Sektor perumahan, kawasan industri, dan perkantoran menjadi penyumbang terbesar.'
    ]
  }],
  ['https://www.antaranews.com/berita/5781604/ojk-transformasi-bisnis-bank-hadirkan-tantangan-dalam-pengawasan', {
    category: 'EKONOMI · KEUANGAN', date: '12 Okt 2026, 12:57 WIB',
    summary: 'OJK menyebut teknologi, aset kripto, dan kecerdasan buatan membuka peluang sekaligus tantangan baru bagi pengawasan perbankan.',
    details: [
      'Risiko yang disorot meliputi stabilitas keuangan, perlindungan konsumen, penipuan, pencucian uang, dan keterhubungan bank dengan platform aset digital.',
      'OJK mendorong pengawasan berbasis risiko dan prinsip, netral terhadap teknologi, serta kerja sama lintas yurisdiksi.'
    ]
  }],
  ['https://www.antaranews.com/berita/5781330/rekomendasi-8-ponsel-terbaik-untuk-gaming-harga-3-jutaan', {
    category: 'TEKNOLOGI · GADGET', date: '12 Okt 2026, 06:24 WIB',
    summary: 'ANTARA membandingkan ponsel di kisaran Rp3 jutaan untuk bermain gim berdasarkan chipset, layar, baterai, dan sistem pendingin.',
    details: [
      'Artikel menyebut Infinix GT 30 5G, iQOO Z10 5G, dan POCO X7 5G sebagai beberapa pilihan.',
      'Harga dapat berubah mengikuti promo dan kanal penjualan; pembaca dapat membandingkan fitur sesuai kebutuhan.'
    ]
  }],
  ['https://www.antaranews.com/berita/5781632/pramono-sebut-sekolah-di-dki-dibangun-bertingkat-akibat-lahan-terbatas', {
    category: 'POLITIK · JAKARTA', date: '12 Okt 2026, 13:17 WIB',
    summary: 'Pramono Anung menyebut keterbatasan lahan mendorong sekolah hasil renovasi di Jakarta dibangun terintegrasi dan bertingkat.',
    details: [
      'SDN 05 Pekayon dan SMPN 91 Pasar Rebo menjadi contoh sekolah yang terintegrasi setelah renovasi.',
      'Bangunan bertingkat dilengkapi fasilitas olahraga dan lift untuk membantu akses siswa, termasuk penyandang disabilitas.'
    ]
  }],
  ['https://www.antaranews.com/berita/5781633/fadli-zon-dorong-pencak-silat-masuk-olimpiade-lewat-diplomasi-budaya', {
    category: 'POLITIK · KEBUDAYAAN', date: '12 Okt 2026, 13:19 WIB',
    summary: 'Fadli Zon mendorong diplomasi budaya dan dukungan internasional bagi aspirasi pencak silat menjadi cabang olahraga Olimpiade.',
    details: [
      'Dorongan itu disampaikan saat pembukaan festival pencak silat internasional di Amersfoort, Belanda.',
      'Fadli menyebut pencak silat memadukan bela diri, seni, musik tradisional, dan nilai spiritual.'
    ]
  }],
  ['https://www.antaranews.com/berita/5781397/harga-emas-antam-naik-tipis-rp2000-ke-angka-rp2594-juta-gr-senin-ini', {
    category: 'EKONOMI · KOMODITAS', date: '12 Okt 2026, 08:58 WIB',
    summary: 'Harga emas Antam naik Rp2.000 menjadi Rp2.594.000 per gram; harga buyback mencapai Rp2.408.000 per gram.',
    details: [
      'Harga dipantau dari laman Logam Mulia pada pukul 08.50 WIB. ANTARA mengingatkan harga dapat berubah sewaktu-waktu.',
      'Laporan juga menjelaskan ketentuan pajak untuk transaksi buyback dan pembelian emas.'
    ]
  }],
  ['https://www.antaranews.com/berita/5781538/ekonom-rantai-nilai-kendaraan-listrik-di-ri-tunjukkan-integrasi', {
    category: 'EKONOMI · INDUSTRI', date: '12 Okt 2026, 11:58 WIB',
    summary: 'Ekonom CORE Indonesia menilai rantai nilai kendaraan listrik mulai terintegrasi dari kegiatan hulu hingga pengolahan mineral.',
    details: [
      'ANTARA menyoroti perubahan struktur ekonomi Morowali dan Morowali Utara; menurut narasumber, lebih dari 75 persen ekonomi daerah tersebut ditopang sektor industri.',
      'Laporan membahas keterkaitan industri dengan tenaga kerja lokal, usaha daerah, tata kelola berkelanjutan, dan dampak bagi masyarakat.'
    ]
  }],
  ['https://www.antaranews.com/berita/5781305/byd-ungkap-desain-robot-humanoid-ciptaan-mereka', {
    category: 'TEKNOLOGI · ROBOTIKA', date: '12 Okt 2026, 05:37 WIB',
    summary: 'Dokumen paten BYD untuk desain robot humanoid berbasis AI dipublikasikan otoritas kekayaan intelektual China pada 9 Oktober 2026.',
    details: [
      'Dokumen menggambarkan robot berbentuk manusia dengan sendi pada badan, lengan, dan kaki. Potensi penggunaan mencakup layanan, pendidikan, dan industri.',
      'ANTARA mencatat BYD belum mengonfirmasi apakah desain paten tersebut akan dipakai pada model produksi akhir.'
    ]
  }]
]);

document.addEventListener('DOMContentLoaded', initializeSite);

function initializeSite() {
  updateFooterYear();
  setupArticleReader();
}

function updateFooterYear() {
  document.querySelectorAll('.current-year').forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

function setupArticleReader() {
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest(ARTICLE_LINKS);
    if (!(link instanceof HTMLAnchorElement)) return;

    const article = ARTICLES.get(link.href);
    if (!article) return;

    event.preventDefault();
    showArticle(link, article);
  });
}

function showArticle(link, article) {
  const dialog = getArticleDialog();
  const story = link.closest('.lead-story, .news-card, .story-row, .tech-side-story, .popular-list li, .economy-highlights, .economy-lead, .tech-feature');
  const image = story?.querySelector('img');
  const dialogImage = dialog.querySelector('.story-dialog-image');
  const title = story.classList.contains('economy-highlights')
    ? link.textContent.replace(/^[^A-Za-z0-9]+/, '').trim()
    : story.querySelector('h1, h2, h3, b')?.textContent.trim();

  dialogImage.hidden = !image;
  if (image) {
    dialogImage.src = image.currentSrc || image.src;
    dialogImage.alt = image.alt;
  }

  dialog.querySelector('.story-dialog-category').textContent = article.category;
  dialog.querySelector('#story-dialog-title').textContent = title;
  dialog.querySelector('.story-dialog-meta').textContent = `ANTARA News · ${article.date}`;
  dialog.querySelector('.story-dialog-summary').textContent = article.summary;
  dialog.querySelector('.story-dialog-source').href = link.href;
  dialog.querySelector('.story-dialog-body').replaceChildren(...article.details.map(makeParagraph));
  dialog.showModal();
}

function makeParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function getArticleDialog() {
  let dialog = document.querySelector('.story-dialog');
  if (dialog) return dialog;

  dialog = document.createElement('dialog');
  dialog.className = 'story-dialog';
  dialog.setAttribute('aria-labelledby', 'story-dialog-title');
  dialog.innerHTML = `
    <img class="story-dialog-image" alt="">
    <div class="story-dialog-content">
      <div class="story-dialog-top">
        <p class="story-dialog-category"></p>
        <button class="story-dialog-close" type="button" aria-label="Tutup berita">×</button>
      </div>
      <h2 id="story-dialog-title"></h2>
      <p class="story-dialog-meta"></p>
      <p class="story-dialog-summary"></p>
      <div class="story-dialog-body"></div>
      <a class="story-dialog-source" target="_blank" rel="noopener noreferrer">Baca artikel lengkap di ANTARA ↗</a>
      <p class="story-dialog-note">Ringkasan ditulis ulang dari ANTARA. Gunakan tautan di atas untuk membaca laporan lengkap.</p>
    </div>`;
  document.body.append(dialog);

  dialog.querySelector('.story-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  return dialog;
}