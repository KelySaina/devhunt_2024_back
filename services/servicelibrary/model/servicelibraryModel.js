const supabase = require('../../../models/supabaseClient');

const createServiceLibrary = async (user_id, title, author, isbn, genre, available) => {
    const { data, error } = await supabase
        .from('servicelibrary')
        .insert([
            {
                user_id,
                title,
                author,
                isbn,
                genre,
                available
            }
        ]);

    if (error) throw error;
    return data;
};

module.exports = { createServiceLibrary };
