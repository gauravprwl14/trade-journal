
import moment from "moment-timezone";

export default [
    {
        "invoiceNumber": 300500,
        "status": "open",
        "symbol": "FB",
        "entry_price": "1",
        "exit_price": "",
        "size": "1",
        "open_date": moment().subtract(1, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300500,
        "status": "open",
        "symbol": "NF",
        "entry_price": "1",
        "exit_price": "",
        "size": "1",
        "open_date": moment().subtract(1, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300500,
        "status": "open",
        "symbol": "NFLX",
        "entry_price": "1",
        "exit_price": "",
        "size": "1",
        "open_date": moment().subtract(1, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300500,
        "status": "loss",
        "symbol": "CEQX",
        "entry_price": "5.53",
        "exit_price": "4.53",
        "size": "1",
        "open_date": moment().subtract(2, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300500,
        "status": "Profit",
        "symbol": "HEPA",
        "entry_price": "2.53",
        "exit_price": "4.53",
        "size": "2",
        "open_date": moment().subtract(3, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY")
    },
    {
        "invoiceNumber": 300500,
        "status": "Profit",
        "symbol": "TYG",
        "entry_price": "1.53",
        "exit_price": "6.53",
        "size": "200",
        "open_date": moment().subtract(3, "days").format("DD MMM YYYY"),
        "dueDate": moment().subtract(1, "days").add(1, "month").format("DD MMM YYYY")
    }
]