import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white">
      <header className="sticky top-0 z-30 bg-[#0B0B0F]/80 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-semibold tracking-wide">強運</div>
            <div className="text-xs text-white/60">Fortuna</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#methods" className="hover:text-white">買取方法</a>
            <a href="#categories" className="hover:text-white">取扱品目</a>
            <a href="#strength" className="hover:text-white">選ばれる理由</a>
            <a href="#flow" className="hover:text-white">流れ</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="text-[#C9A227] hover:text-[#e1bf3a]">お問い合わせ</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#0B0B0F] to-[#0B0B0F]" />
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#0E4E9B]/20 blur-3xl" />
        <div className="absolute top-10 right-0 h-72 w-72 rounded-full bg-[#C9A227]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-24">
          <p className="text-sm tracking-widest text-white/60">REFRAMING VALUE</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
            なんでも高価買取 × 次の価値へ
          </h1>
          <p className="mt-5 max-w-2xl text-white/70">
            査定・手数料0円／即日現金化。限界まで『高く、早く、安心』の買取体験を。
            個人事業主スタート、質屋機能も順次対応予定。
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="tel:0120000000" className="inline-flex items-center justify-center rounded-md bg-[#C9A227] px-5 py-3 font-medium text-black hover:brightness-110">
              電話で相談
            </a>
            <a href="https://line.me/" target="_blank" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 font-medium hover:bg-white/10">
              LINE査定
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 font-medium hover:bg-white/10">
              無料査定フォーム
            </a>
          </div>

          <div className="mt-10 text-xs text-white/50">
            許可情報：古物商・質屋許可は現在申請準備中（仮表記）。取得後に正式番号を掲載します。
          </div>
        </div>
      </section>

      <section id="methods" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">選べる買取方法</h2>
        <p className="mt-2 text-white/70 text-sm">手数料0円。ご都合に合わせてお選びください。</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { title: '店頭買取', desc: 'その場で現金化。最短・安心の対面査定。' },
            { title: '宅配買取', desc: '全国対応。無料キット／送料・返送無料。' },
            { title: '出張買取', desc: 'ご自宅へ伺います。大量・大型品にも対応。' },
          ].map((c) => (
            <div key={c.title} className="rounded-lg border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="text-lg font-medium">{c.title}</div>
              <div className="mt-2 text-sm text-white/70">{c.desc}</div>
              <a href="#contact" className="mt-4 inline-block text-[#C9A227] hover:text-[#e1bf3a] text-sm">今すぐ相談</a>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">取扱品目</h2>
        <p className="mt-2 text-white/70 text-sm">貴金属・宝石・時計・ブランド・カメラ・骨董・家電・お酒・切手・衣料など幅広く対応。</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {['金・貴金属', 'ダイヤ・宝石', '時計', 'ブランド品', 'カメラ', '骨董・美術', '家電', 'お酒', '切手・テレカ', '衣料・靴', '楽器', 'その他'].map((i) => (
            <div key={i} className="rounded-md border border-white/10 px-4 py-3 text-sm text-white/80 hover:bg-white/5">
              {i}
            </div>
          ))}
        </div>
      </section>

      <section id="strength" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">選ばれる理由</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { t: '限界査定', d: '市場データ×専門鑑定で高価買取を実現' },
            { t: '手数料0円', d: '査定・キャンセル・宅配送料すべて無料' },
            { t: '迅速対応', d: '最短即日。スピード感を重視' },
            { t: '秘密厳守', d: 'プライバシーに配慮した運用' },
            { t: '全国対応', d: '宅配査定で全国どこでも' },
            { t: '丁寧接客', d: 'はじめての方にもわかりやすく' },
          ].map((s) => (
            <div key={s.t} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <div className="text-lg font-medium text-[#C9A227]">{s.t}</div>
              <div className="mt-2 text-sm text-white/70">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="flow" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">買取の流れ</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-medium">店頭買取</div>
            <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-white/80">
              <li>来店予約・ご来店</li>
              <li>専門スタッフが査定</li>
              <li>金額提示・即日現金化</li>
            </ol>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5">
            <div className="text-lg font-medium">宅配買取</div>
            <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-white/80">
              <li>お申込み（無料キット送付）</li>
              <li>梱包・発送（着払い）</li>
              <li>査定→ご承認→お振込み</li>
            </ol>
          </div>
        </div>
        <p className="mt-4 text-xs text-white/60">ご用意いただくもの：本人確認書類（運転免許証 など）／未成年の方はお申し込み不可</p>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-6 space-y-4">
          {[
            { q: '査定は本当に無料ですか？', a: 'はい。査定・キャンセル・宅配送料など手数料は一切いただきません。' },
            { q: '付属品がなくても大丈夫ですか？', a: '可能です。付属品があれば査定額が上がる場合があります。' },
            { q: '傷や汚れがある場合は？', a: '状態に応じて査定します。まずはお気軽にご相談ください。' },
            { q: 'どこまで対応していますか？', a: '全国対応（宅配買取）。店頭・出張はエリア内で対応します。' },
          ].map((f) => (
            <div key={f.q} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <div className="font-medium">{f.q}</div>
              <div className="mt-2 text-sm text-white/70">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-2xl font-semibold">お問い合わせ・無料査定</h2>
        <p className="mt-2 text-white/70 text-sm">
          現在、Googleフォームを準備中です。後日このセクションにフォームを埋め込みます。
          それまでの間は、電話またはLINEからご連絡ください。
        </p>
        <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="text-sm text-white/60">フォーム準備中（プレースホルダー）</div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="tel:0120000000" className="inline-flex items-center justify-center rounded-md bg-[#C9A227] px-5 py-3 font-medium text-black hover:brightness-110">
              電話する
            </a>
            <a href="https://line.me/" target="_blank" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 font-medium hover:bg-white/10">
              LINEで相談
            </a>
            <button disabled className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 font-medium text-white/50 cursor-not-allowed">
              フォーム準備中
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/60">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div>
              <div className="font-medium text-white">強運（Fortuna）</div>
              <div className="text-xs mt-1">許可情報：古物商・質屋許可は取得後に正式番号を掲載します（現在は仮表記）</div>
            </div>
            <div className="text-xs">
              © {new Date().getFullYear()} Fortuna. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-4 inset-x-0 px-4">
        <div className="mx-auto max-w-3xl rounded-full bg-white/10 backdrop-blur border border-white/20 shadow-lg">
          <div className="flex items-stretch divide-x divide-white/10">
            <a href="tel:0120000000" className="flex-1 text-center py-3 font-medium hover:bg-white/10">電話</a>
            <a href="https://line.me/" target="_blank" className="flex-1 text-center py-3 font-medium hover:bg-white/10">LINE査定</a>
            <a href="#contact" className="flex-1 text-center py-3 font-medium text-[#C9A227] hover:bg-white/10">無料査定フォーム</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
