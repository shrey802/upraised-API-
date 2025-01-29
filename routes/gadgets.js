
import express from 'express';
import supabase from '../config/supabase.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase.from('gadgets').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gadgets', error: error.message });
  }
});


router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const { data, error } = await supabase
      .from('gadgets')
      .insert([{ name, success_probability: Math.floor(Math.random() * 100) + 1 }])
      .single();

    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error adding gadget', error: error.message });
  }
});


router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;

  try {
    const { data, error } = await supabase
      .from('gadgets')
      .update({ name, status })
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error updating gadget', error: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('gadgets')
      .update({ status: 'Decommissioned', decommissioned_at: new Date() })
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json({ message: 'Gadget decommissioned' });
  } catch (error) {
    res.status(500).json({ message: 'Error decommissioning gadget', error: error.message });
  }
});

export default router;
