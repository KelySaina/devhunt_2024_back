const supabase = require('../../../models/supabaseClient');

const createServiceTax = async (user_id,fullName, nif, email, amount, paymentMethod, taxType, fiscalPeriod, taxReference, documentUrls) => {
    const { data, error } = await supabase
        .from('servicetax')
        .insert([{
            user_id,
            full_name: fullName,
            nif,
            email,
            amount,
            payment_method: paymentMethod,
            tax_type: taxType,
            fiscal_period: fiscalPeriod,
            tax_reference: taxReference,
            document_urls: documentUrls
        }]);
    
    if (error) throw error;
    return data;
};

module.exports = { createServiceTax};
