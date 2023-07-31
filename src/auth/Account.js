import { supabase } from "./supabaseClient";

const user = supabase.auth.user();

let {data, error, status} = await supabase.select(`username, website, avatar_url`).eq('id', user.id).single()
