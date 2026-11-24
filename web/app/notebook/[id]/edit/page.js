'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import styles from '../../editNote.module.css';

export default function EditNotebookPage() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [content, setContent] = useState('');

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');



    useEffect(() => {
        const fetchEntry = async () => {
            try {
                const response = await fetch(`/api/notebook/${id}`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(
                        data.error?.message || 'Failed to load notebook entry.'
                    );
                }

                setTitle(data.title);
                setLocation(data.location);
                setContent(data.content);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEntry();
    }, [id]);

    const submit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await fetch(`/api/notebook/${id}`, {
                method: 'PUT',
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
                        : data.error?.message || 'Failed to update notebook entry.'
                );
            }

            router.push('/notebook');

        
        } catch (err) {
            setError(err.message);
        }
    };

    
    if (loading) {
        return <p>Loading notebook entry...</p>;
    }

    if (error && !title && !content) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className={styles.notebookPage}>
            <div className={styles.leftPage}>

            <form onSubmit={submit}>

                <div className={styles.titleLocationContainer}>

                    <div>

                        <textarea
                        className={styles.editTitle}
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

                </div>

                {error && <p>{error}</p>}
                        <div className={styles.museumLogo}></div>

            </form>

            </div>


            <div className={styles.pageLine}></div>
            <div className={styles.rightPage}>


                    <div className={styles.textSpace}> 
                        <h1 className={styles.entryTitle}>Notebook</h1>

                        <textarea  rows="13" cols="60"
                            id="content"
                            value={content}
                            onChange={(event) => setContent(event.target.value)}
                            required
                        />
                <button className={styles.submitButton} type="submit">
                    Save Changes
                </button>
                    </div>
                
            </div>
        </div>

        
    );
}
