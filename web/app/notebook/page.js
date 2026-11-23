'use client';
import {useState, useEffect, Suspense} from 'react';
import Link from 'next/link';

import styles from './notebook.module.css';
import {useRouter, usePathname, useSearchParams } from 'next/navigation';

function NotebookContent() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const queryString = searchParams.toString();

    const [entries, setEntries] = useState([]);
    // pagnation search next and filter
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10,
        totalItems: 0,
        totalPages: 1
    });
    const [searchInput, setSearchInput] = useState(searchParams.get('search') || '');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const location = searchParams.get('location') || 'all';
    const requestedSort = searchParams.get('sortBy') || 'createdAt';
    const sortBy = ['createdAt', 'updatedAt', 'title'].includes(requestedSort)
        ? requestedSort
        : 'createdAt';
    const order = searchParams.get('order') === 'asc' ? 'asc' : 'desc';
    const requestedLimit = searchParams.get('limit') || '10';
    const limit = ['5', '10', '20', '50'].includes(requestedLimit)
        ? requestedLimit
        : '10';
    const requestedPage = Number(searchParams.get('page') || 1);
    const page = Number.isInteger(requestedPage) && requestedPage > 0
        ? requestedPage
        : 1;
    const selectedSort = `${sortBy}-${order}`;

    const updateQuery = (changes) => {
        const params = new URLSearchParams(queryString);

        Object.entries(changes).forEach(([key, value]) => {
            if (value === null || value === undefined || value === '') {
                params.delete(key);
            } else {
                params.set(key, String(value));
            }
        });

        const nextQuery = params.toString();
        router.replace(nextQuery ? `${pathname}?${nextQuery}` : pathname, {
            scroll: false
        });
    };

    useEffect(() => {
        setSearchInput(searchParams.get('search') || '');
    }, [queryString, searchParams]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchEntries = async () => {
            setLoading(true);
            setError('');

            try {
                const endpoint = queryString
                    ? `/api/notebook?${queryString}`
                    : '/api/notebook';
                const response = await fetch(endpoint, {
                    signal: controller.signal
                });
                const result = await response.json();

                if (!response.ok) {
                    throw new Error(
                        result.error?.message || 'Failed to load notebook entries.'
                    );
                }

                setEntries(result.data || []);
                setPagination(result.pagination || {
                    page: 1,
                    limit: 10,
                    totalItems: (result.data || []).length,
                    totalPages: 1
                });
            } catch (fetchError) {
                if (fetchError.name !== 'AbortError') {
                    setError(fetchError.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchEntries();

        return () => controller.abort();
    }, [queryString]);

    const submitSearch = (event) => {
        event.preventDefault();
        updateQuery({
            search: searchInput.trim(),
            page: 1
        });
    };

    const changeSort = (value) => {
        const [nextSortBy, nextOrder] = value.split('-');
        updateQuery({
            sortBy: nextSortBy,
            order: nextOrder,
            page: 1
        });
    };

    const clearFilters = () => {
        setSearchInput('');
        router.replace(pathname, { scroll: false });
    };

    const deleteEntry = async (id) => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete this notebook entry?'
        );

        if (!confirmDelete) {
            return;
        }

        try {
            const response = await fetch(`/api/notebook/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(
                    result.error?.message || 'Failed to delete notebook entry.'
                );
            }

            const remainingItems = Math.max(0, pagination.totalItems - 1);
            const remainingPages = Math.max(
                1,
                Math.ceil(remainingItems / pagination.limit)
            );

            if (entries.length === 1 && page > remainingPages) {
                updateQuery({ page: remainingPages });
            } else {
                setEntries((previousEntries) =>
                    previousEntries.filter((entry) => entry.id !== id)
                );
                setPagination((previousPagination) => ({
                    ...previousPagination,
                    totalItems: remainingItems,
                    totalPages: remainingPages
                }));
            }
        } catch (deleteError) {
            setError(deleteError.message);
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
        {/* pagnation controls not styled yet */}
            <section className={styles.notebookControls} aria-label="Notebook filters">
                <form className={styles.searchForm} onSubmit={submitSearch}>
                    <label htmlFor="notebook-search">Search entries</label>
                    <div className={styles.searchInputGroup}>
                        <input
                            id="notebook-search"
                            type="search"

                            value={searchInput}
                            onChange={(event) => setSearchInput(event.target.value)}
                            placeholder="Search titles and notes..."
                        />
                        <button type="submit" className={styles.controlButton}>
                            Search
                        </button>
                    </div>
                </form>

                <div className={styles.filterField}>
                    <label htmlFor="notebook-location">Filter by location</label>
                    <select
                        id="notebook-location"
                        value={location}
                        onChange={(event) => updateQuery({
                            location: event.target.value === 'all' ? null : event.target.value,
                            page: 1
                        })}
                    >
                        <option value="all">All locations</option>
                        <option value="Gallery 102">Gallery 102</option>
                        <option value="Gallery 107">Gallery 107</option>
                        <option value="Gallery 143">Gallery 143</option>
                        <option value="Gallery 206">Gallery 206</option>
                        <option value="Gallery 272">Gallery 272</option>
                    </select>
                </div>

                <div className={styles.filterField}>
                    <label htmlFor="notebook-sort">Sort entries</label>
                    <select
                        id="notebook-sort"
                        value={selectedSort}
                        onChange={(event) => changeSort(event.target.value)}
                    >
                        <option value="createdAt-desc">Newest first</option>
                        <option value="createdAt-asc">Oldest first</option>
                        <option value="updatedAt-desc">Recently updated</option>
                        <option value="title-asc">Title (A–Z)</option>
                        <option value="title-desc">Title (Z–A)</option>
                    </select>
                </div>

                <div className={styles.filterField}>
                    <label htmlFor="notebook-limit">Entries per page</label>
                    <select
                        id="notebook-limit"
                        value={limit}
                        onChange={(event) => updateQuery({

                            limit: event.target.value,
                            page: 1
                        })}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>

                <button
                    type="button"
                    className={styles.clearButton}

                    onClick={clearFilters}
                >
                    Clear filters
                </button>
            </section>

            {!loading && !error && (
    <div className={styles.pagination}>
        <button

            type="button"
            disabled={page <= 1}

            onClick={() => updateQuery({ page: page - 1 })}


        >
            Previous
        </button>

        <span>
            Page {pagination.page} of {pagination.totalPages}
        </span>

        <button
            type="button"
            disabled={page >= pagination.totalPages}

            onClick={() => updateQuery({ page: page + 1 })}
        >
            Next
        </button>
    </div>
)}
                {loading ? (
                    <p className={styles.loading}>Loading notebook entries...</p>
                ) : error ? (
                    <p className={styles.error}>{error}</p>
                ) : entries.length === 0 ? (
                    <p className={styles.emptyState}>No notebook entries found.</p>
                ) : (

                <section className={styles.notebookEntries}>
                    {entries.map((entry) => (
                        <div key={entry.id} className={styles.notebookEntry}>
                            <div className={styles.titleLocationContainer}>
                                <h2>{entry.title}</h2>
                                <p className={styles.location}>Location: {entry.location}</p>
                            </div>
                            <p>{entry.content}</p>
                            <div className={styles.editDeleteContainer}>
                                <button className={styles.deleteButton} onClick={() => deleteEntry(entry.id)}>
                                    Delete
                                </button>
                                <Link className={styles.editButton} href={`/notebook/${entry.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
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
export default function NotebookPage() {
    return (
        <Suspense fallback={<p>Loading notebook...</p>}>
            <NotebookContent />
        </Suspense>
    );
}