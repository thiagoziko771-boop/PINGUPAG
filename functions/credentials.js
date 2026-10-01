/**
 * Arquivo de credenciais
 * Lê as credenciais das variáveis de ambiente do Netlify
 * Nunca codifique credenciais aqui!
 */

module.exports = {
  PINGUPAG_API_KEY: process.env.PINGUPAG_API_KEY,
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  UTMIFY_TOKEN: process.env.UTMIFY_TOKEN || "lzASZob4ldSJJc3jT1LILy9alPxWJgpnPhCh"
};
