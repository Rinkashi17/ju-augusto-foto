import { useState, useEffect } from 'react';

interface DriveFile {
    id: string;
}

export const useDriveHero = (folderId: string) => {
    const [fotosHero, setFotosHero] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;

    useEffect(() => {
        const fetchHeroImages = async () => {
        try {
            // Busca todos os arquivos da pasta da Hero
            const q = `'${folderId}' in parents and mimeType contains 'image/' and trashed = false`;
            const params = new URLSearchParams({
            q,
            fields: 'files(id)',
            key: API_KEY
            });

            const response = await fetch(
            `https://www.googleapis.com/drive/v3/files?${params.toString()}`
            );
            const data = await response.json();

            if (data.files) {
            // Transforma os IDs no formato de imagem direta que funcionou (lh3)
            const urls = data.files.map((file: DriveFile) => 
                `https://lh3.googleusercontent.com/d/${file.id}`
            );
            setFotosHero(urls);
            }
        } catch (error) {
            console.error("Erro ao carregar fotos da Hero:", error);
        } finally {
            setLoading(false);
        }
        };

        if (folderId) fetchHeroImages();
    }, [folderId, API_KEY]);

    return { fotosHero, loading };
};