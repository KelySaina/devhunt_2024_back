const supabase = require('../models/supabaseClient');

// Obtenir des données
exports.getData = async (req, res) => {
  const { data, error } = await supabase
    .from('supatest')
    .select('*');

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};

// Ajouter des données
exports.addData = async (req, res) => {
  const { data, error } = await supabase
    .from('supatest')
    .insert([req.body]);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};

// Mettre à jour des données
exports.updateData = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('supatest')
    .update(req.body)
    .eq('id', id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};

// Supprimer des données
exports.deleteData = async (req, res) => {
  const { id } = req.params;
  const { data, error } = await supabase
    .from('supatest')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.json(data);
};
