export const submitComment = async (obj) => {
    const result = await fetch("/api/comments", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return result.json();
}