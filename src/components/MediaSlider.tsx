'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image, { StaticImageData } from 'next/image';
import styles from './MediaSlider.module.css';

type MediaItem = string | StaticImageData;

interface MediaSliderProps {
    media?: MediaItem[];
    aspectRatio?: string;
}

function MediaContent({ item, label, contain }: { item: MediaItem; label: string; contain?: boolean }) {
    return typeof item === 'string' ? (
        <img src={item} alt={label} style={{ objectFit: contain ? 'contain' : 'cover' }} />
    ) : (
        <Image
            src={item}
            alt={label}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            style={{ objectFit: contain ? 'contain' : 'cover' }}
        />
    );
}

export default function MediaSlider({ media = [], aspectRatio = '16 / 9' }: MediaSliderProps) {
    const [index, setIndex] = useState(0);
    const [lightbox, setLightbox] = useState(false);

    if (!media.length) return null;

    const prev = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setIndex((i) => (i === 0 ? media.length - 1 : i - 1));
    };

    const next = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setIndex((i) => (i === media.length - 1 ? 0 : i + 1));
    };

    return (
        <>
            <div className={styles.slider} style={{ aspectRatio }} onClick={() => setLightbox(true)}>
                <div className={styles.media}>
                    <MediaContent item={media[index]} label={`Slide ${index + 1}`} />
                </div>

                {media.length > 1 && (
                    <>
                        <button className={`${styles.nav} ${styles.left}`} onClick={prev} aria-label="Previous slide">‹</button>
                        <button className={`${styles.nav} ${styles.right}`} onClick={next} aria-label="Next slide">›</button>
                        <div className={styles.counter}>{index + 1} / {media.length}</div>
                    </>
                )}
            </div>

            {lightbox && (
                <Lightbox
                    media={media}
                    index={index}
                    onIndexChange={setIndex}
                    onClose={() => setLightbox(false)}
                />
            )}
        </>
    );
}

function Lightbox({ media, index, onIndexChange, onClose }: {
    media: MediaItem[];
    index: number;
    onIndexChange: (i: number) => void;
    onClose: () => void;
}) {
    const prev = useCallback(
        () => onIndexChange(index === 0 ? media.length - 1 : index - 1),
        [index, media.length, onIndexChange]
    );
    const next = useCallback(
        () => onIndexChange(index === media.length - 1 ? 0 : index + 1),
        [index, media.length, onIndexChange]
    );

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') prev();
            if (e.key === 'ArrowRight') next();
        };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose, prev, next]);

    return createPortal(
        <div className={styles.lightboxBackdrop} onClick={onClose}>
            <button className={styles.lightboxClose} onClick={onClose} aria-label="Close">✕</button>

            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.lightboxMedia}>
                    <MediaContent item={media[index]} label={`Slide ${index + 1}`} contain />
                </div>

                {media.length > 1 && (
                    <>
                        <button className={`${styles.nav} ${styles.left}`} onClick={prev} aria-label="Previous slide">‹</button>
                        <button className={`${styles.nav} ${styles.right}`} onClick={next} aria-label="Next slide">›</button>
                        <div className={styles.counter}>{index + 1} / {media.length}</div>
                    </>
                )}
            </div>
        </div>,
        document.body
    );
}
