/* Supabase 연결 정보 — 본 서버용
   1) supabase.com 새 프로젝트 → Project Settings → API Keys 에서 anon(public) 키 복사
   2) 아래 두 줄의 '여기에…' 부분만 바꿔 주세요.
   anon public 키는 브라우저 공개용이라 넣어도 괜찮아요. service_role / secret 키는 절대 넣지 마세요. */
window.FH_CONFIG = {
  SUPABASE_URL: 'https://여기에-프로젝트ID.supabase.co',
  SUPABASE_ANON_KEY: '여기에-anon-public-키'
};
