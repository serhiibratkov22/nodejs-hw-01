import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`Видаляємо ${contacts.length} контактів...`);

    await writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
    console.log('Всі контакти видалено.');
  } catch (error) {
    console.error(error);
  }
};
removeAllContacts();
