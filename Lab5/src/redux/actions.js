import { fakeApiCall } from "../components/FakeAPICall";

export const CREATE_ORDER = 'CREATE_ORDER';


// Redux Thunk action creator
export const createOrder = (orderData) => async (dispatch, getState) => {
    // Get current order count from Redux store
    const { orders = [] } = getState();
    const orderCount = orders.length + 1;

    // Append the order count to the order data
    const fullOrderData = { ...orderData, orderCount };

    try {
        const response = await fakeApiCall(fullOrderData);
        dispatch({
            type: CREATE_ORDER,
            payload: response,
        });
    } catch (error) {
        console.error("Error creating order:", error);
    }
};
