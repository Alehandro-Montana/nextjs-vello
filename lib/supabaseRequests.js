import { supabaseClient } from "./supabaseClient";

export const getTodos = async({userId,token}) => {
    const supabase = await supabaseClient(token);
    const {data: todos} = await supabase
        .from("todos")
        .select("*")
        .eq("user_id",userId);
    return todos;
};