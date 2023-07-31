import { supabase } from "./supabaseClient"

async function signInWithEmail() {
    const {data, error} = await supabase.auth.signInWithEmail({
        email: 'ex@gmail.com',
        password: 'ex-pass',
    })
}