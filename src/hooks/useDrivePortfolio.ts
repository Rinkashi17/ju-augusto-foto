import { useState, useEffect } from 'react';

interface DriveFile {
    id: string;
}

export const useDrivePortfolio = (categoryName: string) => {
    const [images, setImages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    // Substitua pela sua API KEY real
    const API_KEY = import.meta.env.VITE_GOOGLE_DRIVE_API_KEY;
    console.log("Chave carregada no hook:", API_KEY);

    // Mapeamento exato das suas pastas do Drive
    const folderMap: Record<string, string | string[]> = {
        "gestantes": import.meta.env.VITE_FOLDER_GESTANTES,
        "aniversario": [import.meta.env.VITE_FOLDER_ANIVERSARIO, import.meta.env.VITE_FOLDER_ANIVERSARIO1],
        "casal": import.meta.env.VITE_FOLDER_CASAL,
        "pessoal": [import.meta.env.VITE_FOLDER_PESSOAL, import.meta.env.VITE_FOLDER_PESSOAL1],
        "masculino": import.meta.env.VITE_FOLDER_MASCULINO
    };

    useEffect(() => {
        const fetchPhotos = async () => {
            setLoading(true);
            const folderData = folderMap[categoryName?.toLowerCase()];

            if (!folderData) {
                setLoading(false);
                return;
            }

            // 1. Transformamos tudo em Array, mesmo que seja apenas uma string (ID único)
            const folderIds = Array.isArray(folderData) ? folderData : [folderData];

            try {
                // 2. Criamos uma promessa de 'fetch' para cada ID de pasta
                const fetchPromises = folderIds.map(async (id) => {
                const q = `'${id}' in parents and mimeType contains 'image/' and trashed = false`;
                const params = new URLSearchParams({
                    q,
                    fields: 'files(id)',
                    key: API_KEY
                });
                
                const response = await fetch(`https://www.googleapis.com/drive/v3/files?${params.toString()}`);
                return response.json();
                });

                // 3. Executamos todas as buscas ao mesmo tempo
                const results = await Promise.all(fetchPromises);

                // 4. Combinamos todos os arquivos de todas as pastas em um único array
                const allFiles = results.flatMap(data => data.files || []);

                if (allFiles.length > 0) {
                const urls = allFiles.map((file: DriveFile) => 
                    `https://lh3.googleusercontent.com/d/${file.id}`
                );
                setImages(urls);
                }
            } catch (error) {
                console.error("Erro ao buscar fotos de múltiplas pastas:", error);
            } finally {
                setLoading(false);
            }
            };

        if (categoryName) {
        fetchPhotos();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryName]);

    return { images, loading };
};