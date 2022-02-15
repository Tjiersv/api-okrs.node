import { Request, Response } from 'express';

export const getOkrController = async (req: Request, res: Response) => {
  try {
    res.status(200).send('ok');
  } catch (error) {
    res.status(500).send('error');
  }
};