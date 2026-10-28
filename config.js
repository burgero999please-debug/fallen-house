/* Supabase 연결 정보: 본 서버
   테스트 서버와 같은 Supabase 프로젝트를 쓰지만 TABLE·ROOM 이 달라서 데이터와 실시간 채널은 따로예요.
   anon public 키는 브라우저 공개용이라 넣어도 괜찮아요. service_role 키는 절대 넣지 마세요. */
window.FH_CONFIG = {
  SUPABASE_URL: 'https://aycaydixfrwdxnnnbkzh.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5Y2F5ZGl4ZnJ3ZHhubm5ia3poIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxNTM5OTMsImV4cCI6MjEwODcyOTk5M30.DHggtM-AARU5_YVHG15m_C-llwZu-3elGFydECUb8ME',
  TABLE: 'fh_docs_main',
  ROOM: 'fhm-room-',
  LABEL: '본 서버'
};
