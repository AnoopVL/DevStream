"use server";

export const onFollow = async (id: string) => {
    try {
        console.log("I am same as API call", id)
    } catch (error) {
        throw new Error("Internal Error");
    }
}