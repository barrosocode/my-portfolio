const BASE_URL = "http://localhost:8000/api";

interface ContactInterface {
    name: string;
    email: string;
    phone: string;
    msg: string;
}

export async function storeContact(params: ContactInterface) {
    try {
        const response = await fetch(`${BASE_URL}/contacts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });
        const data = await response.json();

        console.log(params);

        return data;
    } catch (error) {
        console.log(error);
        return false;
    }
}
