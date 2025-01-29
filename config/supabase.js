
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://netgpawpslljddgsqihx.supabase.co'
const supabaseKey = " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ldGdwYXdwc2xsamRkZ3NxaWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNjAyNTUsImV4cCI6MjA1MzczNjI1NX0.8E39nyrkwIAowIS04Fq8qR3pXKHDBkQjMv5wk-nugSo"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;