const supabase = require('../../../models/supabaseClient');

const createServiceLibrary = async (title, author, isbn, genre, available) => {
    const { data, error } = await supabase
        .from('servicelibrary')
        .insert([
            {
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
