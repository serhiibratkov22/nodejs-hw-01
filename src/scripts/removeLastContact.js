import { readContacts } from '../utils/readContacts.js';
import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Масив контактів порожній.');
      return;
    }

    const removedContact = contacts.pop();

    await writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log('Видалено останній контакт:', removedContact);
    console.log(`Залишилось контактів: ${contacts.length}`);
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
