import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

/**
 * Custom hook for submitting data to Firestore collections
 * @param {string} collectionName - The Firestore collection name
 * @returns {Object} - { addDocument, loading, error, success }
 */
export const useFirestore = (collectionName) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const addDocument = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Add the document to Firestore with a server timestamp
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: serverTimestamp(),
      });

      console.log('Document written with ID: ', docRef.id);
      setSuccess(true);
      setLoading(false);
      return { success: true, id: docRef.id };
    } catch (err) {
      console.error('Error adding document: ', err);
      setError(err.message);
      setLoading(false);
      return { success: false, error: err.message };
    }
  };

  // Reset success/error states
  const reset = () => {
    setSuccess(false);
    setError(null);
  };

  return { addDocument, loading, error, success, reset };
};
