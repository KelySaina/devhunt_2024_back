const supabase = require('../../../models/supabaseClient');
const { createServiceCin } = require('../models/servicecinModel');

const addServiceCin = async (req, res) => {
    const { userId, firstName, lastName, dateOfBirth, placeOfBirth, particularSign, cinNumber, housing, borough, occupation, fatherName, motherName, madeIn } = req.body;
    const { image } = req.files;

    try {
        let imageUrl = null;
        if (image) {
            const imageName = `${Date.now()}_${image.name}`;
            const { data: fileData, error: uploadError } = await supabase.storage
                .from('stockage')
                .upload(imageName, image.data, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (uploadError) {
                throw new Error('Failed to upload image');
            }

            imageUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/stockage/${fileData.path}`;
        }

        const serviceCin = await createServiceCin(userId, firstName, lastName, dateOfBirth, placeOfBirth, particularSign, cinNumber, housing, borough, occupation, fatherName, motherName, madeIn, imageUrl);
        res.status(201).json({ message: 'Service CIN created successfully', serviceCin });
    } catch (error) {
        console.error('Error creating Service CIN', error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addServiceCin };
