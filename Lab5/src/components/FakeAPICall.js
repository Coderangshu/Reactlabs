// Fake API function to simulate a network call
export const fakeApiCall = (orderData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(orderData);
        }, 1500); // Simulate a 1.5s delay
    });
};
