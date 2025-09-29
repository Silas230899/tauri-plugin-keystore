interface StoreOptions {
    keyAlias?: string;
    promptTitle?: string;
    promptSubtitle?: string;
    promptNegativeButtonText?: string;
}
/**
 * Speichert einen geheimen Wert sicher im Android Keystore (biometrisch geschützt).
 * @param value - Der zu speichernde geheime Wert.
 * @param options - Optional: Key-Alias und Texte für den Biometrie-Prompt.
 */
export declare function store(value: string, options?: StoreOptions): Promise<void>;
/**
 * Ruft einen gespeicherten Wert ab.
 * @param keyAlias - Der Key-Alias, unter dem der Wert gespeichert wurde (Standard: "default")
 */
export declare function retrieve(keyAlias?: string): Promise<string | null>;
/**
 * Entfernt einen gespeicherten Wert.
 * @param keyAlias - Der Key-Alias, unter dem der Wert gespeichert wurde (Standard: "default")
 */
export declare function remove(keyAlias?: string): Promise<void>;
export {};
