export default function formatMoneyWithDot(str: any) {
    str = `${str}`;
    const temp = str
        .split('')
        .reverse()
        .reduce((prev: any, next: any, index: any) => {
            return (index % 3 ? next : next + '.') + prev;
        });

    return temp + 'đ';
}
