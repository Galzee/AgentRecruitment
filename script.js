const questions = [
    {
        text: "Saat menghadapi tekanan tinggi, apa yang paling kamu andalkan?",
        options: [
          { text: "Insting cepat", scores: { Operative: 2 } },
          { text: "Analisis rasional", scores: { Analyst: 2 } },
          { text: "Manipulasi situasi sosial", scores: { Infiltrator: 2 } },
          { text: "Membuat strategi jangka panjang", scores: { Strategist: 2 } },
          { text: "Menyesuaikan diri secara fleksibel", scores: { Chameleon: 2 } }
        ]
      },
      {
        text: "Jika ada kebocoran informasi dalam organisasi, langkah pertamamu?",
        options: [
          { text: "Telusuri data dengan cepat dan diam-diam", scores: { Analyst: 2 } },
          { text: "Tindakan langsung untuk menutup celah", scores: { Operative: 2 } },
          { text: "Gunakan orang dalam untuk mendapatkan informasi", scores: { Infiltrator: 2 } },
          { text: "Buat rencana penyesatan agar musuh keliru", scores: { Strategist: 2 } },
          { text: "Ganti identitas dan masuk ke jalur alternatif", scores: { Chameleon: 2 } }
        ]
      },
      {
        text: "Kekuatan utama yang kamu andalkan dalam misi?",
        options: [
          { text: "Kekuatan fisik", scores: { Operative: 2 } },
          { text: "Kemampuan mengurai informasi kompleks", scores: { Analyst: 2 } },
          { text: "Karisma dan kepandaian bicara", scores: { Infiltrator: 2 } },
          { text: "Kecerdikan menyusun rencana", scores: { Strategist: 2 } },
          { text: "Kemampuan berubah dan berbaur", scores: { Chameleon: 2 } }
        ]
      },
      {
        text: "Apa yang membuatmu paling efektif dalam tim?",
        options: [
          { text: "Kecepatan eksekusi", scores: { Operative: 2 } },
          { text: "Memberi data dan intel akurat", scores: { Analyst: 2 } },
          { text: "Membangun kepercayaan dengan pihak luar", scores: { Infiltrator: 2 } },
          { text: "Menyusun strategi jangka panjang", scores: { Strategist: 2 } },
          { text: "Mengisi peran yang kurang dalam tim", scores: { Chameleon: 2 } }
        ]
      },
      {
        text: "Bagaimana cara terbaik mendapatkan informasi dari target?",
        options: [
          { text: "Menyusup diam-diam ke sistemnya", scores: { Operative: 2 } },
          { text: "Analisis rekam jejak digital", scores: { Analyst: 2 } },
          { text: "Bangun hubungan personal dengan target", scores: { Infiltrator: 2 } },
          { text: "Pancing dengan informasi palsu", scores: { Strategist: 2 } },
          { text: "Beradaptasi dengan lingkungan target", scores: { Chameleon: 2 } }
        ]
      },
      {
        text: "Dalam sebuah misi, kamu menemukan data rahasia yang bertentangan dengan instruksi organisasi. Apa yang kamu lakukan?",
        options: [
          { text: "Laporkan secara terbuka ke atasan", scores: { Strategist: 2, Operative: 1 } },
          { text: "Simpan dulu, kumpulkan bukti tambahan", scores: { Analyst: 2, Infiltrator: 1 } },
          { text: "Abaikan, jalankan instruksi", scores: { Operative: 2 } },
          { text: "Gunakan data tersebut untuk mengubah rencana", scores: { Strategist: 1, Chameleon: 1 } }
        ]
      },
      {
        text: "Jika kamu menyamar dan mendapat informasi bahwa target adalah orang yang kamu kenal dekat, apa langkahmu?",
        options: [
          { text: "Batalkan misi dan beri tahu organisasi", scores: { Strategist: 2 } },
          { text: "Tetap lanjutkan dengan profesional", scores: { Operative: 2 } },
          { text: "Ubah strategi agar tidak membahayakan target", scores: { Infiltrator: 2 } },
          { text: "Ubah identitas dan dekati target dengan cara baru", scores: { Chameleon: 2 } }
        ]
      },
      {
        text: "Bagaimana kamu memproses 3 sumber informasi berbeda yang saling bertentangan?",
        options: [
          { text: "Analisis secara statistik dan logika", scores: { Analyst: 3 } },
          { text: "Gunakan intuisi dan pengalaman lapangan", scores: { Operative: 2 } },
          { text: "Tunggu sinyal lebih kuat sebelum bertindak", scores: { Strategist: 2 } },
          { text: "Sesuaikan respon berdasarkan reaksi pihak lain", scores: { Chameleon: 2 } }
        ]
      },
      {
        text: "Dalam situasi genting, kamu harus memilih antara menyelamatkan nyawa warga sipil atau menyelesaikan misi penting.",
        options: [
          { text: "Selamatkan warga sipil", scores: { Strategist: 2 } },
          { text: "Selesaikan misi", scores: { Operative: 2 } },
          { text: "Coba lakukan keduanya, walau berisiko", scores: { Operative: 1, Strategist: 1 } },
          { text: "Ubah pendekatan secara cepat", scores: { Chameleon: 2 } }
        ]
      },
      {
        text: "Jika rekan tim mulai bertindak aneh dan mencurigakan, apa yang kamu lakukan terlebih dahulu?",
        options: [
          { text: "Konfrontasi langsung", scores: { Operative: 2 } },
          { text: "Laporkan ke pemimpin tim", scores: { Strategist: 2 } },
          { text: "Amati dan kumpulkan bukti", scores: { Analyst: 2 } },
          { text: "Bangun situasi untuk menguji kesetiaannya", scores: { Infiltrator: 2 } }
        ]
      },
      //sss
      {
        text: "Kamu sedang dalam pengintaian ketika sistem komunikasimu rusak. Apa respons awalmu?",
        options: [
          { text: "Tetap lanjut dengan SOP", scores: { Infiltrator: 2, Strategist: 1 } },
          { text: "Segera cari titik komunikasi terdekat", scores: { Operative: 2, Infiltrator: 1 } },
          { text: "Kirim kode isyarat lewat metode alternatif", scores: { Infiltrator: 2, Chameleon: 1 } },
          { text: "Batalkan dan kembali ke markas", scores: { Strategist: 2, Operative: 1 } }
        ]
      },
      {
        text: "Apa yang paling kamu andalkan saat membuat keputusan cepat?",
        options: [
          { text: "Data dan logika", scores: { Analyst: 3, Strategist: 1 } },
          { text: "Pengalaman dan naluri", scores: { Operative: 2, Infiltrator: 1 } },
          { text: "Psikologi lawan", scores: { Infiltrator: 3, Strategist: 1 } },
          { text: "Kontrol emosi dan observasi situasi", scores: { Strategist: 2, Analyst: 1 } }
        ]
      },
      {
        text: "Bagaimana kamu membuat musuh membocorkan informasi tanpa menyentuhnya?",
        options: [
          { text: "Buat narasi palsu agar dia percaya kamu sekutu", scores: { Infiltrator: 3, Strategist: 1 } },
          { text: "Gunakan tekanan psikologis perlahan", scores: { Strategist: 2, Infiltrator: 1 } },
          { text: "Manfaatkan kelemahannya secara sosial", scores: { Infiltrator: 2, Chameleon: 1 } },
          { text: "Tawarkan kesepakatan palsu yang menguntungkan", scores: { Infiltrator: 2, Operative: 1 } }
        ]
      },
      {
        text: "Apa sikapmu saat atasan meminta tindakan yang tidak sesuai dengan prinsipmu?",
        options: [
          { text: "Taat dan jalankan", scores: { Chameleon: 2, Operative: 1 } },
          { text: "Tunda dan cari alasan logis", scores: { Analyst: 2, Strategist: 1 } },
          { text: "Uji niat atasan lebih dalam", scores: { Infiltrator: 2, Strategist: 1 } },
          { text: "Ajukan alternatif cerdas secara halus", scores: { Strategist: 2, Operative: 1 } }
        ]
      },
      {
        text: "Jika kamu hanya punya 5 detik untuk mengidentifikasi ancaman di ruangan asing, apa yang kamu perhatikan duluan?",
        options: [
          { text: "Posisi pintu dan jendela", scores: { Infiltrator: 2, Operative: 1 } },
          { text: "Gerakan dan ekspresi orang", scores: { Infiltrator: 2, Strategist: 1 } },
          { text: "Barang-barang tak pada tempatnya", scores: { Analyst: 2, Infiltrator: 1 } },
          { text: "Sumber suara dan getaran", scores: { Chameleon: 2, Strategist: 1 } }
        ]
      },
      {
        text: "Di dunia digital, kamu menemukan jejak peretas. Apa langkah pertamamu?",
        options: [
          { text: "Tutup akses, blokir jalur", scores: { Operative: 2, Strategist: 1 } },
          { text: "Lacak jejak balik (traceback)", scores: { Analyst: 2, Strategist: 1 } },
          { text: "Biarkan terbuka untuk jebakan", scores: { Strategist: 2, Infiltrator: 1 } },
          { text: "Ambil datanya sebelum ditutup", scores: { Infiltrator: 2, Operative: 1 } }
        ]
      },
      {
        text: "Saat dalam situasi penyamaran, kamu dipanggil dengan nama yang salah. Responmu?",
        options: [
          { text: "Koreksi dengan alasan natural", scores: { Operative: 2, Infiltrator: 1 } },
          { text: "Gunakan itu untuk mengalihkan topik", scores: { Infiltrator: 2, Strategist: 1 } },
          { text: "Segera evaluasi keamanan identitas", scores: { Strategist: 2, Chameleon: 1 } },
          { text: "Tetap tenang dan lanjutkan seolah normal", scores: { Infiltrator: 2, Operative: 1 } }
        ]
      },
      {
        text: "Kamu harus menipu lawan dalam negosiasi. Apa teknik utama yang kamu gunakan?",
        options: [
          { text: "Berikan informasi yang nyaris benar", scores: { Infiltrator: 3, Strategist: 1 } },
          { text: "Gunakan jeda diam dan tekanan sosial", scores: { Strategist: 2, Infiltrator: 1 } },
          { text: "Manfaatkan kelemahan emosionalnya", scores: { Infiltrator: 2, Operative: 1 } },
          { text: "Gunakan fakta yang membuat mereka percaya", scores: { Analyst: 2, Infiltrator: 1 } }
        ]
      },
      {
        text: "Apa yang menurutmu paling penting untuk agent yang sukses?",
        options: [
          { text: "Kemampuan observasi", scores: { Analyst: 2, Strategist: 1 } },
          { text: "Adaptasi cepat", scores: { Operative: 2, Infiltrator: 1 } },
          { text: "Manipulasi psikologis", scores: { Infiltrator: 2, Strategist: 1 } },
          { text: "Etika dan keteguhan", scores: { Strategist: 2, Operative: 1 } }
        ]
      },
      {
        text: "Jika kamu dibekukan dari organisasi karena fitnah, bagaimana kamu bertindak?",
        options: [
          { text: "Pergi dan diamkan", scores: { Strategist: 1, Infiltrator: 2 } },
          { text: "Kumpulkan bukti lalu bersihkan nama", scores: { Analyst: 2, Strategist: 1 } },
          { text: "Buat operasi rahasia sendiri untuk membuktikan diri", scores: { Infiltrator: 2, Operative: 1 } },
          { text: "Cari tahu siapa dalangnya diam-diam", scores: { Strategist: 1, Infiltrator: 2 } }
        ]
      }

    ];

  ;
  
  const agentTypes = {
    Operative: {
      name: "Operative",
      description: "Ahli dalam eksekusi lapangan. Cepat, tangguh, dan tanpa ragu dalam mengambil keputusan."
    },
    Analyst: {
      name: "Analyst",
      description: "Pengurai data dan fakta. Menyusun informasi menjadi keunggulan strategi."
    },
    Infiltrator: {
      name: "Infiltrator",
      description: "Penguasa permainan sosial. Menyusup, membaur, dan mengubah persepsi musuh."
    },
    Strategist: {
      name: "Strategist",
      description: "Perencana utama. Melihat beberapa langkah ke depan dan mengendalikan situasi dari balik layar."
    },
    Chameleon: {
      name: "Chameleon",
      description: "Adaptif dan tidak dapat ditebak. Mampu berpindah peran dan menyusup ke situasi paling berbahaya sekalipun."
    }
  };
  
  const phoneNumber = "6281264414431"; // Ganti dengan nomormu

window.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("questionsContainer");
    const form = document.getElementById("agentForm");

    // Menampilkan pertanyaan
    questions.forEach((q, idx) => {
        const div = document.createElement("div");
        div.classList.add("question");

        const title = document.createElement("h3");
        title.textContent = `${idx + 1}. ${q.text}`;
        div.appendChild(title);

        q.options.forEach((opt, i) => {
            const label = document.createElement("label");
            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `q${idx}`;
            radio.value = i;
            radio.required = true;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(" " + opt.text));
            div.appendChild(label);
            div.appendChild(document.createElement("br"));
        });

        container.appendChild(div);
    });

    

    form.addEventListener("submit", e => {
        e.preventDefault();
        const formData = new FormData(form);
        const scores = {
            Operative: 0,
            Analyst: 0,
            Infiltrator: 0,
            Strategist: 0,
            Chameleon: 0
        };
    
        questions.forEach((q, idx) => {
            const choiceIndex = parseInt(formData.get(`q${idx}`));
            const chosen = q.options[choiceIndex];
            for (let key in chosen.scores) {
                scores[key] += chosen.scores[key];
            }
        });
    
        const highest = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
        const result = {
            name: formData.get("name"),
            type: agentTypes[highest].name,
            description: agentTypes[highest].description
        };

        
    
        // Hitung total skor
        const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
        let agentRank, rankDescription;
    
        // Tentukan rank dan deskripsinya
        if (totalScore >= 30) {
            agentRank = 'S';
            rankDescription = 'Elite Agent: Kemampuan luar biasa di semua aspek.';
        } else if (totalScore >= 20) {
            agentRank = 'A';
            rankDescription = 'Agent Senior: Ahli dengan pengalaman mumpuni.';
        } else if (totalScore >= 10) {
            agentRank = 'B';
            rankDescription = 'Agent Menengah: Kompeten tetapi perlu pengembangan.';
        } else {
            agentRank = 'C';
            rankDescription = 'Agent Pemula: Masih dalam tahap pembelajaran.';
        }

        function normalizeKey(key) {
            return key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
          }
          
          const totalScores = {};
          
          questions.forEach((q, idx) => {
            const choiceIndex = parseInt(formData.get(`q${idx}`));
            const chosen = q.options[choiceIndex];
            for (const [key, value] of Object.entries(chosen.scores)) {
                const role = normalizeKey(key);
                totalScores[role] = (totalScores[role] || 0) + value;
            }
        });

    
        // Simpan ke localStorage
        localStorage.setItem('agentType', result.type);
        localStorage.setItem('agentRank', agentRank);
        localStorage.setItem('agentEvaluation', result.description);
        localStorage.setItem('totalScore', totalScore);
        localStorage.setItem('rankDescription', rankDescription);
        localStorage.setItem('scores', JSON.stringify(scores)); // Simpan skor per tipe
    
       

        // Alihkan ke hasil.html
        window.location.href = "hasil.html";
    });
});


