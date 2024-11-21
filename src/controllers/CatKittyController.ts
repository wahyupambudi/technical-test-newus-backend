import { Request, Response } from 'express';

// Definisikan tipe data untuk rules
type Rule = { angka: number; output: string; };

// Simpan rules dalam array
const rules: Rule[] = [];

// Fungsi untuk menambahkan aturan baru
const addRule = (angka: number, output: string) => {
    rules.push({ angka, output });
};

// Fungsi untuk menghasilkan urutan berdasarkan aturan
const generateResult = (n: number): (string | number)[] => {
    const result: (string | number)[] = [];

    for (let i = 1; i <= n; i++) {
        let resultFound = false;

        // Periksa apakah ada aturan khusus untuk angka tersebut
        const customRule = rules.find(rule => rule.angka === i);
        if (customRule) {
            result.push(customRule.output);
            resultFound = true;
        }

        // Jika tidak ada aturan khusus, periksa aturan pembagian
        if (!resultFound) {
            if (i % 3 === 0 && i % 5 === 0) {
                result.push("catKitty");
            } else if (i % 3 === 0) {
                result.push("cat");
            } else if (i % 5 === 0) {
                result.push("kitty");
            } else {
                result.push(i);
            }
        }
    }

    return result;
};

// Fungsi untuk menambah aturan baru lewat request
const addRules = (req: Request, res: Response) => {
    const { angka, output } = req.query;

    if (!angka || !output || isNaN(Number(angka))) {
        res.status(400).json({ error: "Parameter angka dan output harus valid" });
        return;
    }

    addRule(Number(angka), output as string);
    res.json({ message: `Rule added: ${angka} -> ${output}` });
    return;
};

// Fungsi untuk mendapatkan hasil berdasarkan parameter n
const catKitty = (req: Request, res: Response) => {
    const { n } = req.params;

    if (!n || isNaN(Number(n))) {
        res.status(400).json({ error: "Parameter n harus berupa angka" });
        return;
    }

    const result = generateResult(Number(n));
    res.json({ result });
    return;
};

export default { addRules, catKitty };
