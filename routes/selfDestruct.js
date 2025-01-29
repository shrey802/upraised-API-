
import express from 'express';
import supabase from '../config/supabase.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();


router.post('/:id/self-destruct', async (req, res) => {
  const confirmationCode = uuidv4();  

  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('gadgets')
      .update({ status: 'Destroyed' })
      .eq('id', id)
      .single();

    if (error) throw error;
    res.json({ message: 'Self-destruct initiated', confirmationCode });
  } catch (error) {
    res.status(500).json({ message: 'Error triggering self-destruct', error: error.message });
  }
});

export default router;
