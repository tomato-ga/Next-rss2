import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabase = createClient('https://pepowotbzqhrerumbjfz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlcG93b3RienFocmVydW1iamZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA3NzkwMjksImV4cCI6MjAwNjM1NTAyOX0.9ztZctA8sRbeqQQKRoDPaXbMn8XfDJx44EgXZ8I5evk')



const SupaAuth = () => (
    <Auth supabaseClient={supabase} appearance={{theme: ThemeSupa}}/>
)

export default SupaAuth;