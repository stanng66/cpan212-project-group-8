
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from '../notebook.module.css';

export default function CreateNotebookPage() {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = async (event) => {
        event.preventDefault();

        setError('');
        setLoading(true);

        try {
            const response = await fetch('/api/notebook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    location,
                    content,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    typeof data.error === 'string'
                        ? data.error
                        : data.error?.message || 'Failed to create notebook entry.'
                );
            }

            router.push('/notebook');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.notebookPage}>


            <form onSubmit={submit}>

                <div className={styles.titleLocationContainer}>

                    <div>
                        <h2 className={styles.title}>Title</h2>

                        <input
                            placeholder="Enter Title"
                            id="title"
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            required
                        />

                        <div className={styles.titleLocation}>
                            <h2 className={styles.title}>Location</h2>

                            <div className={styles.locationOptions}>
                                <label>
                                    <input
                                        type="radio"
                                        name="location"
                                        value="Gallery 107"
                                        checked={location === 'Gallery 107'}
                                        onChange={(event) => setLocation(event.target.value)}
                                        required
                                    />
                                    Gallery 107
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="location"
                                        value="Gallery 143"
                                        checked={location === 'Gallery 143'}
                                        onChange={(event) => setLocation(event.target.value)}
                                    />
                                    Gallery 143
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="location"
                                        value="Gallery 206"
                                        checked={location === 'Gallery 206'}
                                        onChange={(event) => setLocation(event.target.value)}
                                    />
                                    Gallery 206
                                </label>

                                <label>
                                    <input
                                        type="radio"
                                        name="location"
                                        value="Gallery 272"
                                        checked={location === 'Gallery 272'}
                                        onChange={(event) => setLocation(event.target.value)}
                                    />
                                    Gallery 272
                                </label>
                            </div>
                            

                        </div>
                    </div>

                    <div className={styles.textSpace}>
                        <h1 className={styles.entryTitle}>Detective Notebook</h1>

                        <textarea rows="30" cols="120"
                            id="content"
                            value={content}
                            onChange={(event) => setContent(event.target.value)}
                            placeholder="Write your investigation notes here..."
                            required
                        />
                    </div>

                </div>

            {error && <p>{error}</p>}

            <button className={styles.submitButton} type="submit" disabled={loading}>
                {loading ? 'Saving To Notebook...' : '+ Add Note to Notebook '}
            </button>
            </form>

        </div>
    );
}
