import { createFakeContact } from '../utils/createFakeContact.js';
import { readFile, writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async (number) => {
  try {
    const existingContacts = await readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(existingContacts);

    const newContacts = Array.from({ length: number }, () =>
      createFakeContact(),
    );

    const updatedContacts = [...contacts, ...newContacts];

    await writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');
  } catch (error) {
    console.error(error);
  }
};

addOneContact(1);
