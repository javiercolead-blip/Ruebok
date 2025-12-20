import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ysdzwynhnpjyoefwjyfg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlzZHp3eW5obnBqeW9lZndqeWZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyMTMwODgsImV4cCI6MjA4MTc4OTA4OH0.2K5oM9WSdeIbVHqwH_ybULZetY4UIx3XQcvudAK3T78'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
