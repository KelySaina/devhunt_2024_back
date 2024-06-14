const supabase = require('../../../models/supabaseClient');
const { createServiceTax } = require('../model/servicetaxModel');

const addServiceTax = async (req, res) => {
    const { user_id, fullName, nif, email, amount, paymentMethod, taxType, fiscalPeriod, taxReference } = req.body;
    const documentUrls = [];

    if (req.files && req.files.documents) {
        let documents = req.files.documents;
        if (!Array.isArray(documents)) {
            documents = [documents];
        }

        for (const document of documents) {
            const documentName = `${Date.now()}_${document.name}`;
            const { data: fileData, error: uploadError } = await supabase.storage
                .from('documents')
                .upload(`tax_documents/${documentName}`, document.data, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (uploadError) {
                res.status(500).json({ error: uploadError.message });
                return;
            }

            documentUrls.push(fileData.Key);
        }
    }

    try {
        const payment = await createServiceTax(user_id, fullName, nif, email, amount, paymentMethod, taxType, fiscalPeriod, taxReference, documentUrls);
        res.status(201).json({ message: 'Tax payment created successfully', payment });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addServiceTax };
