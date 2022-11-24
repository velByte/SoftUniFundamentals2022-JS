function solve(input) {

    let pattern = /%(?<customer>[A-Z][a-z]+)%[^%|$|.]*<(?<product>\w+)\>[^%|$|.]*\|(?<count>[0-9]+)\|[^%|$|.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;

    let index = 0;
    let total = 0;

    while (input[index] != "end of shift") {
        let temp = input[index].match(pattern);

        if (temp) {
            let customer = temp.groups.customer;
            let product = temp.groups.product;
            let count = temp.groups.count;
            let price = temp.groups.price;

            if (customer && product && count && price) {

                count = Number(count);
                price = Number(price);
                let totalPrice = count * price;
                total += totalPrice;
                console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
            }


        }
        index++;
    }
    console.log(`Total income: ${total.toFixed(2)}`);

}