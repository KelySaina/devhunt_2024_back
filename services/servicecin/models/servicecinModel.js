const supabase = require('../../../models/supabaseClient');

const createServiceCin = async (userId, firstName, lastName, dateOfBirth, placeOfBirth, particularSign, cinNumber, housing, borough, occupation, fatherName, motherName, madeIn) => {
    const { data, error } = await supabase
        .from('servicecin')
        .insert({
            user_id: userId,
            first_name: firstName,
            last_name: lastName,
            date_of_birth: dateOfBirth,
            place_of_birth: placeOfBirth,
            particular_sign: particularSign,
            cin_number: cinNumber,
            housing: housing,
            borough: borough,
            occupation: occupation,
            father_name: fatherName,
            mother_name: motherName,
            made_in: madeIn,
            creation_date: new Date().toISOString(),
        }).select('*');
    
    if (error) throw error;
    return data;
};

module.exports = { createServiceCin };
