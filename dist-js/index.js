import { invoke } from '@tauri-apps/api/core';

/**
 * Speichert einen geheimen Wert sicher im Android Keystore (biometrisch geschützt).
 * @param value - Der zu speichernde geheime Wert.
 * @param options - Optional: Key-Alias und Texte für den Biometrie-Prompt.
 */
async function store(value, options = {}) {
    const { keyAlias = "default", promptTitle = "Authenticate", promptSubtitle = "", promptNegativeButtonText = "Cancel", } = options;
    return await invoke("plugin:keystore|store", {
        payload: {
            keyAlias,
            value,
            promptTitle,
            promptSubtitle,
            promptNegativeButtonText,
        },
    });
}
/**
 * Ruft einen gespeicherten Wert ab.
 * @param keyAlias - Der Key-Alias, unter dem der Wert gespeichert wurde (Standard: "default")
 */
async function retrieve(keyAlias = "default") {
    return await invoke("plugin:keystore|retrieve", {
        payload: {
            keyAlias,
        },
    }).then((r) => (r.value ? r.value : null));
}
/**
 * Entfernt einen gespeicherten Wert.
 * @param keyAlias - Der Key-Alias, unter dem der Wert gespeichert wurde (Standard: "default")
 */
async function remove(keyAlias = "default") {
    return await invoke("plugin:keystore|remove", {
        payload: {
            keyAlias,
        },
    });
}

export { remove, retrieve, store };
