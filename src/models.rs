use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct StoreRequest {
    pub value: String,
    pub key_alias: Option<String>, // optional, Standard: "default"
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RetrieveRequest {
    pub key_alias: String, // wir nutzen nur key_alias
}

#[derive(Debug, Clone, Default, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RetrieveResponse {
    pub value: Option<String>,
}

#[derive(Debug, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RemoveRequest {
    pub key_alias: String, // wir nutzen nur key_alias
}
