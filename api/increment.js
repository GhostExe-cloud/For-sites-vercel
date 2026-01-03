import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

export default async function handler(req, res) {
  // 1. Get the user's IP address from Vercel headers
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  // 2. Try to insert the IP into the database
  const { error } = await supabase
    .from('download_stats')
    .insert([{ ip_address: ip }])

  if (error && error.code === '23505') {
    // This error code means the IP already exists (unique constraint)
    return res.status(200).json({ message: 'Already counted' });
  }

  return res.status(200).json({ message: 'Counted!' });
}
