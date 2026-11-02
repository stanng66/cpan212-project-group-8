'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';

import styles from './notebook.module.css';

export default function NotebookPage() {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const response = await fetch('/api/notebook');

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.error?.message || 'Failed to load notebook entries.'
                    );
                }

                setEntries(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEntries();
    }, []);

    if (loading) {
        return (
            <div>
                <h1>Detective's Notebook</h1>
                <p>Loading Detective Notes...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Detective's Notebook</h1>
                <p>Error: {error}</p>
            </div>
        );
    }

    // user clicks on delete button, instead of automatically deleting, confirmation is needed first
    const deleteEntry = async (id) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this notebook entry?'
        );

        if (!confirmDelete) {
            return;
        }
        try {
            const response = await fetch(`/api/notebook/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete notebook entry.');
            }

            setEntries((previousEntries) =>
                previousEntries.filter((entry) => entry.id !== id)
            );
        } catch (err) {
            setError(err.message);
        }
    };
    return (

        <div className={styles.notebookPage}>
            <div className={styles.notebookWelcomeContainer}>
            <div className={styles.notebookTitleContainer}>
            <h1 className={styles.title}>Detective's Notebook</h1>

            <p className={styles.description}>
                Keep track of your investigation notes and evidence in this notebook.
            </p>
        </div>
            <Link href="/notebook/create" className={styles.createButton}>
                + Create New Notebook Entry
            </Link>
        </div>
            {entries.length === 0 ? (
                <p>No notebook entries yet. Create your first entry!</p>
            ) : (
                <section className={styles.notebookEntries}>
                    {entries.map((entry) => (
                        <div key={entry.id} className={styles.notebookEntry}>
                            <div className={styles.titleLocationContainer}>
                                <h2>{entry.title}</h2>
                                <p className={styles.location}>Location: {entry.location}</p>
                            </div>
                            <p>{entry.content}</p>
                            <button className={styles.deleteButton} onClick={() => deleteEntry(entry.id)}>
                                Delete
                            </button>
                            {/* now every entry will show the full content  */}
                            {/* <div className={styles.viewEntry}>
                            <Link href={`/notebook/${entry.id}`}>
                                View Entry
                            </Link>
                            </div> */}
                        </div>
                    ))}
                </section>
            )}
            
        </div>
    );
}