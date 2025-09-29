import { invoke } from "@tauri-apps/api/core";

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
export async function store(
  value: string,
  options: StoreOptions = {}
): Promise<void> {
  const {
    keyAlias = "default",
    promptTitle = "Authenticate",
    promptSubtitle = "",
    promptNegativeButtonText = "Cancel",
  } = options;
  
  return await invoke<void>("plugin:keystore|store", {
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
export async function retrieve(keyAlias = "default"): Promise<string | null> {
  return await invoke<{ value?: string }>("plugin:keystore|retrieve", {
    payload: {
      keyAlias,
    },
  }).then((r) => (r.value ? r.value : null));
}

/**
 * Entfernt einen gespeicherten Wert.
 * @param keyAlias - Der Key-Alias, unter dem der Wert gespeichert wurde (Standard: "default")
 */
export async function remove(keyAlias = "default"): Promise<void> {
  return await invoke<void>("plugin:keystore|remove", {
    payload: {
      keyAlias,
    },
  });
}
