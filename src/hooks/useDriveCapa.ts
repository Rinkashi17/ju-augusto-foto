import { useState, useEffect } from 'react';

export const useDriveCapa = (folderId: string) => {
    const [capaUrl, setCapaUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;

    useEffect(() => {
    if (!folderId || folderId === "undefined") return;

    const fetchCapa = async () => {
        setLoading(true);
        try {
        const cleanId = folderId.trim();
        
        // MÁGICA AQUI: No 'q' buscamos pelo nome 'CAPA' dentro da pasta
        const q = `'${cleanId}'+in+parents+and+name+contains+'CAPA'+and+mimeType+contains+'image/'`;
        
        const response = await fetch(
            `https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id,name,webContentLink)&key=${API_KEY}`
        );

        const data = await response.json();

        if (data.files && data.files.length > 0) {
            // Pegamos a primeira foto que ele encontrar com o nome CAPA
        const file = data.files[0];
            setCapaUrl(file.id); // Guardamos o ID para gerar o link final
        }
        } catch (error) {
        console.error("Erro ao buscar capa:", error);
        } finally {
        setLoading(false);
        }
    };

    fetchCapa();
    }, [folderId, API_KEY]);

    // Retorna a URL formatada (mesma lógica que usamos antes)
    const urlFinal = capaUrl ? `https://lh3.googleusercontent.com/d/${capaUrl}=w1000` : null;

    return { capaUrl: urlFinal, loading };
};