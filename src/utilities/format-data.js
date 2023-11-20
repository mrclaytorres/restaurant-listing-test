export const formatData = (data) => {
  const formattedData = data.reduce((result, item) => {
    const stateEntry = result.find(entry => entry.state === item.state);

    if (stateEntry) {
        stateEntry.restaurants.push(item.restaurant_name);
    } else {
        result.push({ state: item.state, restaurants: [item.restaurant_name] });
    }

    return result;
  }, []);

  return formattedData;
}