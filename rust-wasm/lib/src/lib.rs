use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct Test {
    data: String
}

#[wasm_bindgen]
impl Test {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        let test = Self {
            data: String::from("Hello WASM!")
        };

        log(&format!("data: {}", test.data));

        test
    }

    #[wasm_bindgen]
    pub fn test(&self) -> JsValue {
        JsValue::from(&self.data)
    }
}
