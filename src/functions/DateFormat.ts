export const getDate = (today: Date): string => {
    const day =
      today.getDate() + 1 < 10 ? `0${today.getDate()}` : today.getDate();
    const month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    const year = today.getFullYear();
    const hour =
      today.getHours() < 10 ? `0${today.getHours()}` : today.getHours();
    const minute =
      today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes();
    const second =
      today.getSeconds() < 10 ? `0${today.getSeconds()}` : today.getSeconds();

    return `${day}.${month}.${year} ${hour}:${minute}:${second}`;
  };