// src/hooks/useDrivePhotos.ts
import { useState, useEffect } from 'react';

interface GoogleDriveFile {
    id: string;
    name: string;
}

export const useDrivePhotos = (folderId: string) => {
    const [fotos, setFotos] = useState<{id: string, url: string}[]>([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;

    useEffect(() => {
    if (!folderId) return;

    const fetchPhotos = async () => {
        setLoading(true);
        try {
        const cleanFolderId = folderId.trim();
        const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${cleanFolderId}'+in+parents+and+mimeType+contains+'image/'&fields=files(id,name)&key=${API_KEY}`
        );

        if (!response.ok) {
        throw new Error(`Erro Google: ${response.status}`);
        }

        const data = await response.json();
        
        const formatadas = data.files?.map((f: GoogleDriveFile) => ({
            id: f.id,
            url: `https://drive.google.com/thumbnail?id=${f.id}&sz=w1200` // Link otimizado
        })) || [];

        setFotos(formatadas);
        } catch (err) {
        console.error("Erro ao buscar fotos:", err);
        } finally {
        setLoading(false);
        }
    };

    fetchPhotos();
    }, [folderId, API_KEY]);

    return { fotos, loading };
};