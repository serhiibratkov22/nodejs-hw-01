import { PATH_DB } from '../constants/contacts.js';
import { writeFile } from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await writeFile(PATH_DB, data, 'utf-8');
  } catch (error) {
    console.error(error);
  }
};
