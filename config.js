// =============================================================
// Supabase 接続設定
//   下の2つを、自分のプロジェクトの値に置き換えてください。
//   ・SUPABASE_URL      :https://afhjhccgvfapwyrkaogf.supabase.co/rest/v1/
//   ・SUPABASE_ANON_KEY :eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmaGpoY2NndmZhcHd5cmthb2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3NDU0NzgsImV4cCI6MjA5OTMyMTQ3OH0.4oJGX0bPtA4XV6xyKTQYoHxf8VbnTbUzemn7xH52joU
//
//   ※ anon key は「公開されて良いキー」です。データはすべて
//     Row Level Security(RLS)で守られているため、静的サイトに
//     そのまま置いて問題ありません。
// =============================================================
window.APP_CONFIG = {
  SUPABASE_URL: "https://YOUR-PROJECT-ref.supabase.co",
  SUPABASE_ANON_KEY: "YOUR-ANON-PUBLIC-KEY"
};
