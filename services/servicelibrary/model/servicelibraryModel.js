const supabase = require('../../../models/supabaseClient');

const createServiceLibrary = async (user_id, title, author, isbn, genre) => {
    const { data, error } = await supabase
        .from('servicelibrary')
        .insert([
            {
                user_id,
                title,
                author,
                isbn,
                genre,
            }
        ]).select('*');

    if (error) throw error;
    return data;
};

module.exports = { createServiceLibrary };
