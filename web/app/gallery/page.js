import Image from "next/image";
import styles from "./gallery.module.css";

export default function GalleryPage() {
    return (
        <section className={styles.galleryPage}>
            <h1 className={styles.pageTitle}>
                Galleries Map
            </h1>

            <p className={styles.pageDescription}>
                View the layout of the museum using this map and verify alibis from characters.
            </p>

            <div className={styles.galleryCard}>
                <div className={styles.galleryList}>
                    <h2>Galleries Map</h2>

                    <p>Gallery 107, Main Hall</p>
                    <p>Gallery 143, East Wing</p>
                    <p>Gallery 206, North Gallery</p>
                    <p>Gallery 272, West Wing</p>
                </div>

                <div className={styles.mapContainer}>
                    <Image
                        src="/assets/map/museum-gallery-map.png"
                        alt="Museum map"
                        width={1200}
                        height={900}
                    />
                </div>
            </div>
        </section>
    );
}