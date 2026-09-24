// 各詳細ページの見出し・本文・画像の説明・動画をここで編集できます。
export const projectPageLabels = { backToHome: "← ホームに戻る" };

export const oneTapClearSoundData = {
  "title": "One Tap Clear Sound 詳細",
  "overviewSection": "概要",
  "overview": "音楽ファイルをAIでタグ分けして、対応する音質処理をするアプリケーションです。",
  "presentation": "サイバーエージェント主催Re; Build in 愛知で発表(画像)\nMicrosoft主催ImagineCapへ投稿しました。(デモ動画)",
  "challengesSection": "苦労したところ",
  "challenges": "本アプリは初心者SNS投稿者を対象としており、ワンタップで高音質にするというコンセプトで制作しました。 その際、なるべくシンプルなUI/UXをフロントエンド担当と相談しながら設計する連携力、 初めて触る技術であるTensorflowの機械学習モデル構築とPydubの音声処理の情報を調べながら実装する点で苦労しました。",
  "roleSection": "担当",
  "role": "2人チーム開発のリーダー兼バックエンドを務め、CNNモデルの構築やPydubライブラリを用いた音質処理のバックエンドを担当しました",
  "demoSection": "デモ動画",
  "imageAlt": "会場",
  "videoUrl": "https://www.youtube.com/embed/YBpncVFS4x0?si=v4HzVghc6Hv8PAM4",
  "videoTitle": "YouTube video player"
};

export const shareEXData = {
  "title": "ShareEX 詳細",
  "overviewSection": "概要",
  "overview": "学習プロセスを記録し、技術者同士で経験を共有するためのポートフォリオWebアプリです。",
  "challengesSection": "苦労した点",
  "challenges": "SpringBootから主キーを指定してデータを取得する処理を実装する際、データベースとの接続やSQLクエリの構築に苦労しました。特に、複数テーブル間の関連付けを正しく処理し、主キーを適切に指定してデータを取得する方法を学ぶ必要がありました。",
  "imageAlt": "サイト"
};

export const skinnaviaData = {
  "title": "スキンナビア詳細",
  "overviewSection": "概要",
  "overview": "肌状態や予算などの情報を入力すると健康商品を勧めるアプリ",
  "challengesSection": "苦労した点",
  "challenges": "ビルドファイルの欠損でエディタが使えなくなるトラブルが起きた際、新しくビルドファイルを作成して、キャッシュを削除することで解決しました。 また、リーダーとしてメンバーに頼んでいた業務の進捗が間に合わなさそうな際に業務を巻き取り、開発して間に合わせたりなど完成を第一に考えて貢献しました。",
  "roleSection": "担当",
  "role": "4人チームのリーダー兼テストコードエンジニアを務め、設計と進捗管理、単体テスト、結合テスト、Linux上での負荷テスト(100人に1000回アクセスさせて落ちないか)などを担当しました",
  "imageAlt": "サイト",
  "videoUrl": "https://www.youtube.com/embed/61xIfB3TlWs",
  "videoTitle": "【チームVertex】GDGoCハッカソン"
};

export const youtubeData = {
  "title": "YouTube Webサイト 詳細",
  "overviewSection": "概要",
  "overview": "自身のYoutube公式サイトです。他の活動者との差別化を図るため、制作しました。お問い合わせ機能も追加していたのですが、RDSを用いたAWSサーバの費用が月4000円と高くと 実際にアクセスされることが少ないことから、現在は非公開にしています。",
  "challengesSection": "苦労した点",
  "challenges": "初めてのwebアプリ開発とクラウド公開でしたので、大学で学んだ知識だけでは足りなく、AIに質問しながら開発することに苦労しました。この経験が現在のクラウド, フロントエンド, バックエンド, DBの基礎に繋がっております。",
  "highlightsSection": "アピールポイント",
  "highlights": "実際に必要なサービスを考え制作した経験とクラウドを運用した経験を活かして、今後の開発に役立てています。",
  "imageAlt": "サイト",
  "videoUrl": "https://www.youtube.com/embed/0uqEBGMHC08?si=q0GLAnptWr-gvbEV",
  "videoTitle": "YouTube video player"
};
